<template>
  <div class="flex bg-black">
      <TheAside />
      <div class="w-full bg-black py-3 pr-8 h-screen">
        <div id="style-2" class="bg-white h-full w-full rounded-3xl overflow-scroll">
          <router-view />
        </div>
      </div>
  </div>
</template> 

<script setup>
import TheAside from './components/TheAside.vue';


</script>

<style>
#style-2::-webkit-scrollbar
{
  display: none;
}
</style>


