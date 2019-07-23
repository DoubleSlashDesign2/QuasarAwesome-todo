<template padding>
  <q-page padding>
    <ul>
      <task v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index">{{task.name}}</task>
    </ul>
  </q-page>
</template>

<script>
//import Task from "components/Task.vue";
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          dueDate: "2019-05-12",
          dueTime: "18:30"
        },
        {
          id: 2,
          name: "Get Bananas",
          dueDate: "2019-05-13",
          dueTime: "10:30"
        },
        {
          id: 3,
          name: "Get Apples",
          dueDate: "2019-05-14",
          dueTime: "14:30"
        }
      ]
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  },
  components: {
    //task: Task
    task: require("components/Task.vue").default
  }
};
</script>

<style>
</style>
