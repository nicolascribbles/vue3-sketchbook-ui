<template>
    <button
      type="button"
      class="group absolute right-4 top-4 z-50 -m-2.5 p-2.5"
      @click="toggleDarkMode()"
    >
      <span className="sr-only">Switch to {{ isDarkMode ? 'Light' : 'Dark' }} theme</span>
      <SVGThemeToggle class="h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white" />
    </button>
</template>
<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import SVGThemeToggle from '../SVGs/SVGThemeToggle.vue';

const emit = defineEmits(['switch']);
const isDarkMode = ref(false);

const toggleDarkMode = () => {
    console.log("Toggle dark mode")
    isDarkMode.value = !isDarkMode.value;
    sessionStorage.setItem('darkMode', isDarkMode.value ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode.value);
    emit('switch', isDarkMode.value)
};



onMounted(async () => {
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedMode = sessionStorage.getItem('darkMode');

  if (storedMode) {
    isDarkMode.value = storedMode === 'dark';
  } else {
    isDarkMode.value = prefersDarkMode;
  }
  

  document.documentElement.classList.toggle('dark', isDarkMode.value);

});
</script>