<template>
    <div>
        <div class="h-screen w-full flex justify-center bg-grey-darkest items-center">
            <div id="app" class="text-center w-3/4 sm:w-1/2 lg:w-1/3 xl:w-1/4 py-20 px-10 md:px-20 bg-white shadow-lg">
                <div class="mt-8 flex items-center">
                    <div class="bg-grey-light h-3 rounded-full mx-auto w-full"><span class="h-full vue-gradient block rounded-full" :style="{ width: barWidth + '%' }"></span></div>
                    <div class="pl-4 text-grey-dark">{{ barWidth + '%' }}</div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "ProgressBar",
        data: () => {
            return {
                barWidth: 0,
            }
        },
    created:function () {
           // console.log('Значение a: ' + this.barWidth)
        this.toggleProgress()
        },
        methods: {
            toggleProgress: function () {
                let app = this;
                app.interval = setInterval(function () {
                    app.barWidth >= 100 ? clearInterval(app.interval) : app.barWidth++;
                }, 100);

            }
        }
    }

</script>

<style scoped>
    .vue-gradient {
        background: linear-gradient(to right, #41B883, #35495E);
    }
</style>