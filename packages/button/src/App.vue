<template>
  <div id="app">
    <MyButton @my-click.native="handler($event)"></MyButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyButton from "./Button.vue";

@Component({
  components: {
    MyButton,
  },
})
export default class App extends Vue {
  handler($event: any) {
    console.log($event);
  }
}
</script>

<style lang="scss">
#app {
}
</style>
