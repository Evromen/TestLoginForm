<template>
    <div>
        <h1>
            главная страница
        </h1>

        <div>
            <div v-if="usersData">
                <div v-for="item in usersData" v-bind:key="item.id">id:{{item.id}}<img class="transform skew-y-12" v-bind:src="item.avatar" alt="">name:{{item.first_name}}
                    <br>email:{{item.email}}
                </div>


            </div>

        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'

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
