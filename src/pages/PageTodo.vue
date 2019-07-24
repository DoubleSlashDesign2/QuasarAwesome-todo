<template padding>
  <q-page padding>Todo page</q-page>
</template>

<script>
//import Task from "components/Task.vue";
export default {
  data() {
    return {
      tasks:[
        {
          id: 1,
          name: 'Got to Shop',
          completer: false
        },
                {
          id: 2,
          name: 'Get bananas',
          completer: false
        },
                {
          id: 3,
          name: 'Get Apples',
          completer: false
        }
      ]
  }
  // methods: {
  //   deleteTask(index) {
  //     this.tasks.splice(index, 1);
  //   }
  // },
  // components: {
  //   //task: Task
  //   task: require("components/Task.vue").default
  // }
};
</script>

<style>
</style>
