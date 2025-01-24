<template>
  <figure class="space-gif">
    <img src="https://i.giphy.com/media/l3978y5HqiEtqupiM/giphy.webp" alt="Space Animation" />
    <p class="attribution">
      <a href="https://giphy.com/gifs/animation-space-l3978y5HqiEtqupiM">via GIPHY</a>
    </p>
  </figure>
</template>

<style scoped>
.space-gif {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  height: 200px;
  padding: 10px;
  overflow: hidden;
  margin: 0 auto;
}

img {
  width: 100%;
  object-fit: cover;
}

.attribution {
  display: none;
}
</style>