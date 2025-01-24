<template>
  <div class="decoder-input">
    <AlienMessage />
    <DecoderInput
      :model-value="modelValue"
      @update:model-value="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import AlienMessage from './AlienMessage.vue';
import DecoderInput from './DecoderInput.vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

defineEmits(['update:modelValue']);
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
