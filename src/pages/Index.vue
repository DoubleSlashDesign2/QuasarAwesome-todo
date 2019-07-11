<template padding>
  <q-page padding>
    <h5 class="border-grey" v-if="message.length">{{message}}</h5>
    <h6 v-else>no message to show</h6>
    <!-- <hr> -->
    <p>
      <input v-model="message" @keyup="handleKeyUp" />&nbsp;
      <button @click="clearMessage">Clear</button>
    </p>

    <hr />
    <p>Upper Case Computed: {{messageUpperCase}}</p>
    <p>Upper Case Method: {{messageUpperCase1()}}</p>
    <p>Lower Case Filter: {{message | messageLowerCase}}</p>

    <!-- <input
      v-model="message"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      @mouseenter="alertMessage"
    />-->
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: "I Love Vue.Js"
    };
  },
  computed: {
    messageUpperCase() {
      return this.message.toUpperCase();
    }
  },
  methods: {
    clearMessage() {
      this.message = "";
    },
    handleKeyUp(event) {
      if (event.keyCode == 27) this.clearMessage();
      else console.log(event);
    },
    alertMessage() {
      alert(this.message);
    },
    messageUpperCase1() {
      return this.message.toUpperCase();
    }
  },
  filters: {
    messageLowerCase(value) {
      return value.toLowerCase();
    }
  }
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
  width: auto;
  padding: 10px;
}
</style>
