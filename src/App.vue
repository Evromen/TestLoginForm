<template>
    <div class="container">
        <div>
            <div className='header'>
                <div className="logo">PORTFOLIO</div>
                <div className="menu">
                    <router-link to="/login" v-if="this.$store.state.user.authorization" @click="this.$store.commit('SET_authorization',false)">Выйти</router-link>
                    <router-link to="/login" v-else> Войти </router-link>
                    <hr size="5">
                </div>
            </div>
            <div id="nav">
                <router-link to="/">Home</router-link>
                |
                <router-link to="/about">About</router-link>
                |
                <router-link to="/restorePass">Restore password</router-link>
                |
                <router-link :to="{name:'Interview'}">Interview</router-link>
                |
                <router-link :to="{name:'checkin'}">checkin</router-link>


            </div>
            <div v-if="this.$store.getters.getEmail" >
                <p>Email:{{this.$store.getters.getEmail}}</p>
            </div>
            <router-view/>

        </div>
    </div>
</template>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    @import url('https://fonts.googleapis.com/css2?family=Redressed&family=Roboto&display=swap');
    .container {
        background:none;
        min-height: 400px;
        width: 800px;
        margin: 50px auto;
        padding: 10px;
        border-radius: 1%;
        font-family: 'Roboto', sans-serif;
    }

    .header {
        display: flex;
        justify-content: space-between;

    }

    .content {
        font-family: 'Redressed', cursive;

    }

    .content img {
        width: 300px;
        border: 1px solid #ddd;
        border-radius: 2%;
        float: left;
        display: inline;
        margin: 0 10px 1px 0;
    }

    .header a {
        text-decoration: none;color: #111827;
    }
    .header hr {
        border-color: #42b983;
    }
    .header a:hover {
        color: #374151;
    }
</style>
