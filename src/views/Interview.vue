<template>
    <div>
        <h1 class="font-black">ОПРОСНИК</h1>
        <hr/>
        <div class="flex justify-center">
            <div>

                <h2 class="mt-5 font-semibold">Название опроса</h2>
                <div v-for="(question, key) in save.questions" :key="key"
                     class="m-8 border-4 border-red-700 border-opacity-50 sm:w-full rounded-lg shadow-lg bg-gray-200 bg-gradient-to-r from-black-500 card">
                    <div class="flex justify-between border-b border-gray-100 px-5 py-4">
                        <h3 class="question">{{question.question}}</h3>
                    </div>

                    <div class="Flex flex-col px-10 py-5 text-gray-600">

                        <label v-for="(answer,index) in question.answers"
                               :key="index+'-'+key"
                               class="flex items-center mt-3"
                        >
                            <input type="checkbox" v-bind:value="answer">{{answer}}

                        </label>


                    </div>


                </div>
                // разобраться с кнопкой
                <div style="margin-right: -31px" class="flex justify-end ">
                    <button type="submit"
                            class="mt-3 mb-10  py-2 px-4 border border-transparent hover:border-green-500
                text-sm font-medium rounded-md text-white
                bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            v-on:click="check"
                    >
                        Отправить
                    </button>
                </div>


            </div>



        </div>


    </div>
</template>

<script>
    export default {
        name: "Interview",
        data: () => ({
            saveAnswer: [],
            save: {
                "id": 11,
                "title": "Подготовка машины к тех осмотру",
                "questions": [
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
            },
            answer: {
                id: 0,
                answers: {}
            }


        }),
        methods: {
            check() {
                //запишем id теста
                this.answer.id = this.save.id
                //соберем ответы и запишем их

                let cards = document.getElementsByClassName('card')
                //Работаем с первой карточкой
                /*let card = cards[0]
                let question = card.querySelector('.question').innerHTML
                let answers = card.querySelectorAll('input[type="checkbox"]:checked')
                let arrAnswers = []

                for (let i = 0; i < answers.length; i++) {

                    arrAnswers.push(answers[i].value)
                }
                this.answer.answers[question] = arrAnswers*/
                //закончили работать с первой карточкой


                //Работаем с 2рой карточкой
                for (let a = 0; a < cards.length; a++) {


                    let question = cards[a].querySelector('.question').innerHTML
                    let answers = cards[a].querySelectorAll('input[type="checkbox"]:checked')
                    let arrAnswers = []

                    for (let i = 0; i < answers.length; i++) {

                        arrAnswers.push(answers[i].value)
                    }
                    this.answer.answers[question] = arrAnswers
                }


                console.log(this.answer)
            }
        }
    }

</script>

<style scoped>

</style>