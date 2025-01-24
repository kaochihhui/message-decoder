<template>
  <section class="space-message">
    <p>An alien visitor left us an encrypted message!</p>
    <SpaceAnimation />
    <p>Use the decoder below to translate their mysterious symbols into human language.</p>
  </section>
</template>

<script setup>
import SpaceAnimation from './SpaceAnimation.vue';
</script>

<style scoped>
.space-message {
  margin: 2rem 0;
}

p {
  font-weight: bold;
  color: var(--text-color);
}
</style>