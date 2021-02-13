<template>
    <div>
        <h1>
            главная страница
        </h1>

        <div>

            <div v-if="usersData">

                <div v-for="user in usersData" :key="user.id"
                     class="card border w-96 hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
                    <img class="max-h-20 w-full opacity-80 absolute top-0" style="z-index:-1"
                         :src="getBackground()" alt=""/>
                    <div class="profile w-full flex m-3 ml-4 text-white">id:{{user.id}}
                        <img class="w-28 h-28 p-1 bg-white rounded-full"

                             :src="user.avatar"
                             alt=""/>
                        <div class="title mt-11 ml-3 font-bold flex flex-col">
                            <div class="name break-words">{{user.first_name}}</div>

                            <div class="add font-semibold text-sm italic dark text-gray-500">{{user.last_name}}</div>
                        </div>
                    </div>
                    <!-- кнопка -->
                    <div v-on:click="ShowContact(user.email)"
                         class="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3">
                        <div class="add border rounded-l-2xl rounded-r-sm border-gray-300 p-1 px-4 cursor-pointer hover:bg-gray-700 hover:text-white">
                            Contact
                        </div>

                    </div>
                </div>


                <!--<div v-for="item in usersData" v-bind:key="300+item.id">id:{{item.id}}<img class="transform skew-y-12"
                                                                                           v-bind:src="item.avatar"
                                                                                           alt="">name:{{item.first_name}}
                    <br>email:{{item.email}}
                </div>-->


            </div>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'
    let backgrounds = [
        'https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640',
        'https://miro.medium.com/max/768/1*S-eCEF0XS4J6TZW9NqJyIQ.jpeg',
        'https://unsplash.com/photos/w1_4YH5IhDg/download?force=true&w=640',
        'https://unsplash.com/photos/TMxUnMAAwFA/download?force=true&w=640'
    ];

    export default {
        name: 'Home',
        components: {
            //HelloWorld
        },
        data: () => {
            return {
                usersData: [],
            }
        },
        methods: {
            usersGetData() {
                const users = [];
                users[0] = prompt("Who are you?")
                users[1] = prompt("Where are you from?")
                console.log(users)
            },
            getUserProfiles() {
                this.axios.get("https://reqres.in/api/users").then(response => {
                    console.log(response.data.data)
                    this.usersData = response.data.data
                })

            },
            ShowContact(email) {
                alert(email)

            },
            getBackground(){
                //0.9692522716145541
                //4
                let rand = Math.floor(Math.random() * backgrounds.length)
                //console.log(backgrounds[rand])
               return backgrounds[rand]

            }
        },
        mounted() {
            //this.usersGetData()
        },
        created() {
            this.getUserProfiles()
        }
    }


</script>
