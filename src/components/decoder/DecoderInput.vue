<template>
  <div class="decoder-wrapper">
    <label for="decoder" class="decoder-label">Decoder:</label>
    <input
      id="decoder"
      type="text"
      placeholder="Paste message to decode..."
      class="decoder-input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.decoder-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 300px;
  justify-content: center;
  align-items: center;
}

.decoder-label {
  color: var(--primary-color);
  font-weight: bold;
  text-align: left;
}

.decoder-input {
  height: 40px;
  width: 100%;
  padding: 0 15px;
  border: 2px solid var(--primary-color);
  border-radius: 20px;
  background: var(--input-background);
  color: var(--text-color);
  font-size: 16px;
}

.decoder-input::placeholder {
  color: var(--placeholder-color);
}

.decoder-input:focus {
  outline: none;
  box-shadow: 0 0 10px var(--primary-shadow);
}
</style>
