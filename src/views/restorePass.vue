<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div>
                <h6 class="mt-3 text-center text-3xl font-sans text-gray-900">
                    Введите адрес электронной почты
                </h6>
            </div>
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email-address" name="email" type="text" autocomplete="off" v-model="mail" required
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
                    <p v-if="v$.mail.$dirty && v$.mail.minLength.$invalid">
                        не меньше 8 символов
                    </p>


                </div>
                <div>
                    <button type="submit"
                            class="group relative mt-3 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            @click="sentForm"
                    >
                        восстановить логин и пароль
                    </button>
                    <div>
<!--                        <p>mail:{{ mail }}</p>-->
<!--                        <pre> {{v$.mail}} </pre>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {email, required, minLength} from '@vuelidate/validators'
    import {useVuelidate} from '@vuelidate/core'


    export default {
        name: "Restorepassword",

        data: () => {
            return {
                mail: "",
            }
        },
        setup: () => ({v$: useVuelidate()}),
        validations() {
            return {
                mail: {
                    required,
                    email,
                    minLength: minLength(8)
                }

            }
        },
        methods: {
            validateEmail(email) {
                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            sentForm() {
                let isMail = this.validateEmail(this.mail)
                if (isMail) {
                    alert("сообщение отправлено на почту,указанную при регистрации")
                } else {
                    alert("почта не найдена ")
                }
            }
        }
    }
</script>

<style scoped>

</style>