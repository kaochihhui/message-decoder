<template>
  <div class="decoder-input">
    <AlienMessage />
    <DecoderInput v-model="modelValue"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AlienMessage from './AlienMessage.vue';
import DecoderInput from './DecoderInput.vue';

const modelValue = defineModel();
</script>

<style scoped>
.decoder-input {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
