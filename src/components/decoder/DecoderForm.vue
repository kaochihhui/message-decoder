<template>
  <div class="decoder-form">
    <MessageDecoder v-model="decodedMessage" />
    <DecodedResult :message="decodedMessage" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MessageDecoder from './MessageDecoder.vue';
import DecodedResult from './DecodedResult.vue';

const decodedMessage = ref('');
</script>

<style scoped>
.decoder-form {
  max-width: 400px;
  margin: 0 auto;
}
</style>
