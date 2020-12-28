<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Disruptive buttons -- seeing changes in vuex</h2>
    <div>
      {{ $store.state.counter }}
    </div>
    <button @click="$store.dispatch('decreaseCounter')">
      Decrease Counter-
    </button>
    <button @click="$store.dispatch('increaseCounter')">
      Increase Counter-
    </button>
  </div>
</template>

<style>
button {
  cursor: pointer;
}
</style>
