<template>
    <div>

        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                    <h3 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Регистрация
                    </h3>
                </div>
                <div class="mt-8 space-y-6">
                    <input type="hidden" name="remember" value="true">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label>
                                Введите имя
                                <input type="text" placeholder="IVAN" class="" v-model="name"/>

                            </label>
                        </div>





                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" v-model="mail"
                                   required
                                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Email address"
                                   v-on:input="v$.mail.$touch()">
                        </div>
                        <div style="color:red">
                            <p v-if="v$.mail.email.$invalid && v$.mail.$dirty">
                                Email введен не корректно
                            </p>
                            <p v-if="v$.mail.required.$invalid && v$.mail.$dirty">
                                Это поле не должно быть пустым
                            </p>

                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                   v-model="password"
                                   required
                                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                   placeholder="Password">
                        </div>
                        <div>
                            <label>
                                Потвердите пароль
                                <input type="text" placeholder="" class="" v-model="repeatPassword"/>

                            </label>
                        </div>











                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox"
                                   class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                Запомнить меня
                            </label>
                        </div>

                        <div class="text-sm">
                            <router-link to="/restorePass" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Забыли пароль?
                            </router-link>
                        </div>
                    </div>

                    <div>
                        <button
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                @click="sentForm"
                                :disabled="v$.$invalid"
                        >
          <span class="absolute left-0 inset-y-0 flex items-center pl-3" v-if="v$.$invalid">

            <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"/>
            </svg>
          </span>
                            Войти
                        </button>



                        <div>
<!--                                                        <p>mail:{{ mail }}</p>-->
<!--                                                        <p>password:{{ password }}</p>-->
<!--                                                        <p>name:{{ name }}</p>-->
<!--                                                        <p>repeatPassword:{{ repeatPassword }}</p>-->
<!--                                                        <pre> {{v$.mail}} </pre>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {email, required} from '@vuelidate/validators'
    import {useVuelidate} from '@vuelidate/core'
    import firebase from 'firebase/app'

    export default {
        name: "checkin",
        data: () => ({
            name:'',
            mail: "",
            password: "",
            repeatPassword:''
        }),

        setup: () => ({v$: useVuelidate()}),
        validations() {
            return {
                mail: {required, email}

            }
        },
        methods: {
            validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            },
            sentForm() {
               // console.log(this.mail,this.password)

                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.mail, this.password)
                    .then(data => {
                        data.user
                            .updateProfile({
                                displayName: this.mail
                            })
                            .then(() => {
                                this.$router.push({name: "Login"})
                            })
                    })
                .catch(err => {
                    console.log(err)
                })
                let mail = this.mail
                let isMail = this.validateEmail(this.mail)
                if (isMail) {
                    alert("подтверждено")
                    this.$store.commit('SET_EMAIL', mail);
                    this.$store.commit('SET_authorization', true)
                    this.$router.push({name: 'Loading'})

                } else {
                    alert("неправильный логин или пароль")
                 }

            }
        }
    }
</script>

<style scoped>

</style>