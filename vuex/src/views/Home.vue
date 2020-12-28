<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter" :style="{ color: $store.state.colorCode }">
      {{ $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }} <sup>2</sup> =
      {{ $store.getters.counterSquared }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <input type="color" placeholder="Enter color code" v-model="colorCode" />
    <br />
    <hr />
    {{ $store.state.colorCode }}
  </div>
</template>

<script>
// @ is an alias to /src
console.log(process.env);
export default {
  name: "Home",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        console.log(newValue);
        this.$store.commit("setColorCode", newValue);
      },
    },
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}
.counter {
  font-size: 2rem;
}
.buttons button {
  font-size: 2.5rem;
  width: 100px;
  margin: 0 10px;
  cursor: pointer;
}
</style>
