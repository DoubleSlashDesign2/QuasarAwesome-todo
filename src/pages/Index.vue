<template padding>
  <q-page padding>
    <h5 class="border-grey" v-if="message.length">{{message}}</h5>
    <h6 v-else>no message to show</h6>
    <!-- <hr> -->
    <p>
      <input
        v-model="message"
        @keyup="handleKeyUp"
        v-focus
        v-bind:style="errorStyle"
        ref="messageImport"
      />&nbsp;
      <button @click="clearMessage">Clear</button>
      <div>{{message.length}}</div>
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
      v-focus
      v-bind:class="{ 'error' : message.length > 22}"
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
    },
    errorStyle() {
      if (this.message.length > 20)
      {
        return {
        'color' : 'red',
        'background': 'pink'
        }
      }
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
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  beforeCreate()  {
    console.log("beforeCreate")
  },
    created()  {
    console.log("created")
  },
    beforeMount()  {
    console.log("beforeMount")
  },
    mounted()  {
    console.log("mounted")

    // dont use when there is reactive data
    // you should use for fom validations and autofocus type things
    console.log(this.$refs)    
    this.$refs.messageImport.className='bg-green' 
  },
    beforeUpdate()  {
    console.log("beforeUpdate")
  },
    updated()  {
    console.log("updated")
  },
     beforeDestroy()  {
    console.log("beforeDestroy")
  },
    destroyed()  {
    console.log("destroyed")
  },
};
</script>

<style>
.border-grey {
  border: 1px solid grey;
  width: auto;
  padding: 10px;
}
input,
button {
  font-size: 15px;
}
.error {
  color: red;
  background: pink;
  font-size: 22px;
}
</style>
