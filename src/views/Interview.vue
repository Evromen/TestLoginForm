<template>
    <div>
        <h1 class="font-black">
            ОПРОСНИК
        </h1>
        <hr/>
        <div class="flex justify-center">
            <div>

                <h2 class="mt-5 font-semibold">
                    Название опроса
                </h2>
                <div v-for="(question, key) in save.questions" :key="key" class="m-8 sm:w-full rounded-lg shadow-lg bg-gray-200 bg-gradient-to-r from-black-500">
                    <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                        <div>
                            <h3>{{question.question}}</h3>
                        </div>

                    </div>

                    <div class="Flex flex-col px-10 py-5 text-gray-600">

                        <p v-for="(answer,index) in question.answers" :key="index+'-'+key" class="flex items-center mt-3"><input type="checkbox"  >{{answer}}</p>


                    </div>


                </div>


            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Interview",
        data: () => ({
            saveAnswer:[],
            save:{
                "id": 11,
                "title": "Подготовка машины к тех осмотру",
                "questions":[
                    {
                        "question": "У вас есть машина?",
                        "answers": [
                            "Да есть",
                            "Нету",
                            "Смотря кто спрашивает"
                        ]
                    },
                    {
                        "question": "Есть лишние деньги?",
                        "answers": [
                            "Да я олигарх",
                            "Конечно, но как бы и нет",
                            "Нет",
                            "Денег нет, но вы держитесь"
                        ]
                    },
                    {
                        "question": "Дата последнего тех осмотра",
                        "answers": [
                            "я не помню",
                            "В прошлом году",
                            "год назад и более"
                        ]
                    }
                ]
            }



        }),
        methods:{
        //check(anwers){

       // }
        }
    }


</script>

<style scoped>

</style>