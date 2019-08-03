<template padding>
  <q-page class="q-pa-md">
    <q-list bordered separator>

			<task
				v-for="(task, key) in tasks"
		  	:key="key"
		  	:task="task"
		  	:id="key"></task>
     
    </q-list>
  </q-page>
</template>

<script>
//import Task from "components/Task.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    'task': require("components/Tasks/Task.vue").default
  }
  // methods: {
  //   deleteTask(index) {
  //     this.tasks.splice(index, 1);
  //   }
  // },
};
</script>

<style>
</style>
