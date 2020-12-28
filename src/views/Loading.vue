<template>
    <div>
        <div class="flex justify-center">

            <img src="https://media0.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif" class="w-40">
        </div>
        <div>
            <h2 class="loading">Loading</h2>
            <ProgressBar></ProgressBar>
        </div>

    </div>
</template>

<script>
    import ProgressBar from "../components/elements/ProgressBar";

    export default {
        name: "Loading",
        components: {ProgressBar}
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

