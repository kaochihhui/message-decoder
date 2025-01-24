<template>
  <div class="alien-chat">
    <div class="alien-bubble">
      <div class="alien-header">
        <span class="alien-icon">👽</span>
        <span class="alien-name">Alien from Kepler-186f</span>
      </div>
      <div class="message-content">
        <p class="alien-text">{{ message }}</p>
      </div>
      <p>
        Copy the above alien message to the decoder input to decode the message.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ALIEN_MESSAGE } from '../../constants/messages';

const message = ALIEN_MESSAGE;
</script>

<style scoped>
.alien-chat {
  margin: 0 auto;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

.alien-bubble {
  background: var(--input-background);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 15px var(--primary-shadow);
}

.alien-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  justify-content: center;
}

.alien-icon {
  font-size: 1.5rem;
}

.alien-name {
  color: var(--primary-color);
  font-weight: bold;
}

.message-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.alien-text {
  font-size: 1.5rem;
  color: var(--text-color);
  margin: 0;
  letter-spacing: 2px;
  background-color: var(--input-background);
  padding: 0rem 0.7rem;
  border-radius: 10px;
  font-weight: bold;
}
</style>
