<template>
    <div>
        <div class="flex justify-center">
            <img alt="Cat revoles" src="https://i.gifer.com/ZIu6.gif" class="w-80">
        </div>
        <div class="flex justify-center">
            <button type="submit"
                    class="group relative mt-3  flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Play
            </button>
            <div>

            </div>
        </div>
        <div>
            <ul>
                <!--                <li class="list-item" v-for="item in items" :key="item.id">{{item.name}}</li>-->
                <li class="list-item" v-for="item in items" :key="item">{{item}}</li>
            </ul>
            <!--Зажали блоками Observer -->
            <p> 123</p>
            <Observer @intersect="addItems"/>
            <p> 123</p>
        </div>
    </div>
</template>
<script>
    import Observer from "@/components/elements/Observer";

    export default {
        data: () => ({
            page: 1,
            items: [],
            size: 100,
        }),
        //инструменты на полке(addItems,intersected)
        methods: {
            addItems() {
                //this.items.push(3)

                let i = this.size * (this.page - 1)
                let end = this.size * this.page
                let arrayBuffer = []

                while (i < end) {
                    arrayBuffer.push(i)

                    i++
                }
                //this.items = this.items.concat(arrayBuffer)
                this.items = [...this.items, ...arrayBuffer]
                this.page++
            },
            async intersected() {
                const res = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${
                    this.page
                }&_limit=50`);

                this.page++;
                const items = await res.json();
                this.items = [...this.items, ...items];
            },
        },
        components: {
            Observer,
        },
    };
</script>
