<template padding>
  <q-page class="q-pa-md">
    <q-list bordered separator>

      <q-item 
      v-bind:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        v-for="(task, key) in tasks"
        :key="key"
        @click="task.completed = !task.completed"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label v-bind:class="{ 'text-strikethrough' : task.completed }">{{task.name}}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">
            <div class="column" justify-center>
              <q-icon name="event" size="18px" class="q-mr-xs" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end" caption>{{task.dueDate}}</q-item-label>
              <q-item-label class="row justify-end" caption>{{task.dueTime}}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
//import Task from "components/Task.vue";
import { mapGetters } from 'vuex'

export default {
  computed:{
    ...mapGetters('tasks', ['tasks'])
    // tasks(){
    //   return this.$store.getters['tasks/tasks']
    // }
  }
  // data() {
  //   return {
  //     tasks: [
  //       {
  //         id: 1,
  //         name: "Got to Shop",
  //         completed: false,
  //         dueDate: "2019/05/12",
  //         dueTime: "18:30"
  //       },
  //       {
  //         id: 2,
  //         name: "Get bananas",
  //         completed: true,
  //         dueDate: "2019/05/13",
  //         dueTime: "14:00"
  //       },
  //       {
  //         id: 3,
  //         name: "Get Apples",
  //         completed: false,
  //         dueDate: "2019/05/13",
  //         dueTime: "16:05"
  //       }
  //     ]
    //};
    // methods: {
    //   deleteTask(index) {
    //     this.tasks.splice(index, 1);
    //   }
    // },
    // components: {
    //   //task: Task
    //   task: require("components/Task.vue").default
  //}
};
</script>

<style>
</style>
