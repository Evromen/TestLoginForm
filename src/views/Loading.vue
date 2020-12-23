<template>
  <div>
    <div class="flex justify-center">

      <img src="https://99px.ru/sstorage/86/2020/08/11808201147164854.gif" class="w-40">
    </div>
    <div>
      <h2 class="loading">Loading</h2>
    </div>

  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>
<style>
@keyframes dots {
  10%{
    content: ".";
  }
  40%{
    content: "..";
  }
  60%{
    content: "...";
  }
  80%{
    content: "....";
  }
  100%{
    content: "...";
  }
}
.loading:after {
  content: "";
  animation: dots 5s linear infinite;
}

</style>

