<template>
  <button 
    :type="type" 
    class="base-button"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  }
});
</script>

<style scoped>
.base-button {
  margin: 10px;
  background-color: var(--primary-color);
  color: white;
  transition: background-color 0.3s ease;
  border-radius: 20px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
}

.base-button:hover {
  background-color: var(--primary-hover);
}
</style>