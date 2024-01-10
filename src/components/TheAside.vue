<template>
    <aside :class="{ 'w-80': isOpen, 'w-36': !isOpen }" class="relative flex flex-col h-screen bg-black px-10 pb-8 transition-all">
        
        <button 
        class="absolute top-1/2 -right-5  bg-gray-800 rounded-full w-10 h-10 shadow-xl" 
        @click="isOpen = !isOpen">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
        </button>

        <div :class="{ 'flex flex-col items-center': !isOpen }" class="mt-20 flex flex-col">
            <img
            :class="{ 'w-20 h-20': isOpen, 'w-10 h-10 rounded-full': !isOpen }" 
            class="rounded-md object-cover transition-all" src="https://media.istockphoto.com/id/1386479313/pt/foto/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=Sl6LA2KgwmoI6sFAXOdJ809XUKLJP3AAbTplqQTpJy8=" alt="">
            <h1 
            :class="{ 'text-2xl': isOpen, 'text-sm hidden': !isOpen }"
            class="text-white font-semibold text-xl mt-2">Admin</h1>
            <p 
            :class="{ 'hidden': !isOpen }"
            class="text-gray-400 text-sm">Painel de Controle</p>
        </div>

        <ul class="text-gray-400 text-xl mt-24 flex flex-col space-y-6">
            <li 
            v-for="page in pages"
            :key="page.path"
            :class="{ 'flex justify-center items-center': !isOpen, 'text-white bg-gray-800 rounded-md p-4 font-semibold': $route.path === page.path || $route.path === page.path + '', 'p-4 bg-none': $route.path !== page.path }"
            class="transition-all"
            >
            <RouterLink :to="page.path">
                <div class="flex items-center space-x-4">
                    <div 
                   
                    class="w-6 h-6 rounded-full bg-white"
                    :class="{ 'bg-green-500': $route.path === page.path || $route.path === page.path + '' }"
                    ></div>
                    <p :class="{ 'hidden': !isOpen, 'block': isOpen }">{{ page.name }}</p>
                </div>
            </RouterLink>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import '@fortawesome/fontawesome-free/css/all.css';


const isOpen = ref(true);
const pages = ref([
    {
        name: 'Home',
        path: '/',
        icon: 'fa-solid fa-house'
    },
    {
        name: 'Sobre',
        path: '/about',
        icon: 'fa-solid fa-user-secret'
    },
    {
        name: 'Contato',
        path: '/contact',
        icon: 'fa-solid fa-envelope'
    }
]);

</script>