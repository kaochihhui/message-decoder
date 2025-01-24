<template>
  <div class="decoded-result">
    <p>Decoded message:</p>
    <p class="message" :class="{ failed: decodedMessage === 'ERROR' }">
      {{ renderedMsg }}
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { decodeAlienMessage } from '../../utils/decoder';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});

const decodedMessage = computed(() => decodeAlienMessage(props.message));

const renderedMsg = computed(() => {
  if (!props.message) return ""
  if (decodedMessage.value === 'ERROR') return 'Failed to decode the message!';

  return decodedMessage.value;
});
</script>

<style scoped>
.decoded-result {
  margin: 1rem 0;
  padding: 1rem;
  background: var(--input-background);
  border-radius: 10px;
}

.message {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: bold;
}

.failed {
  color: var(--primary-danger);
}
</style>
