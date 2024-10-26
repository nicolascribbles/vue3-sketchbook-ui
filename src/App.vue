<script setup lang="ts">

const addDarkModeClassToBody = () => {
  document.body.classList.toggle('dark')
}

</script>

<template>
  <router-view />
</template>