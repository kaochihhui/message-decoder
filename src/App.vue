<template>
  <div class="app">
    <AppHeader />
    <SpaceMessage />
    <DecoderForm />
  </div>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue';
import SpaceMessage from './components/space/SpaceMessage.vue';
import DecoderForm from './components/decoder/DecoderForm.vue';
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
}
</style>
