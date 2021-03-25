<template>
    <div>
        <div v-if="switch1">
            <div class="flex justify-center">

                <img alt=""  src="https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" class="w-40">
            </div>
            <div>
                <h2 class="loading">Loading</h2>
                <ProgressBar v-bind:bar-width="percent">

                </ProgressBar>
            </div>
        </div>
        <div v-else class="text-red-700 uppercase text-2xl">
            completed
            <div>
                <!-- component -->
                <!-- This is an example component -->
                <div class="m-auto px-4 py-8 max-w-xl">
                    <div class="bg-white shadow-2xl">
                        <div>
                            <img alt="" src="https://i.ytimg.com/vi/6AU4Pty497Q/maxresdefault.jpg">
                        </div>
                        <div class="px-4 py-2 mt-2 bg-white">
                            <h2 class="font-bold text-2xl text-gray-800">что мы наделали?</h2>
                            <p class="sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3">
                                ProgressBar сделали отдельным компонентом,а логику перенесли в компонент Loading.vue
                                <br>
                                После завершения загрузки отображаем карточку
                            </p>
                            <div class="user flex items-center -ml-3 mt-8 mb-4">
                                <div class="user-logo">
                                    <img class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow"
                                         src="https://avatars2.githubusercontent.com/u/70772109?s=460&u=12f433bedba01d36eccb52cccac36285e64d972b&v=4"
                                         alt="avatar">
                                </div>
                                <a href="https://github.com/Evromen" target="_blank"
                                   class="text-gray-500">@dutikov91</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProgressBar from "../components/elements/ProgressBar";

    export default {
        name: "Loading",
        components: {ProgressBar},
        data: () => ({
            percent: 0,
            switch1: true

        }),
        created() {
            // console.log('Значение a: ' + this.barWidth)
            this.toggleProgress()
        },
        methods: {
            toggleProgress: function () {
                let app = this;
                app.interval = setInterval(function () {
                    // app.percent >= 100 ? clearInterval(app.interval) : app.percent++;
                    if (app.percent >= 100) {
                        clearInterval(app.interval)
                        app.switch1 = false
                    } else {
                        app.percent++
                    }
                }, 60);

            }
        }
    }
</script>

<style>
    @keyframes dots {
        10% {
            content: ".";
        }
        40% {
            content: "..";
        }
        60% {
            content: "...";
        }
        80% {
            content: "....";
        }
        100% {
            content: "...";
        }
    }

    .loading:after {
        content: "";
        animation: dots 5s linear infinite;
    }
</style>

