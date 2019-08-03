<template>
      <q-item 
        v-bind:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        @click="task.completed = !task.completed"  clickable v-ripple>

        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label v-bind:class="{ 'text-strikethrough' : task.completed }">{{task.name}} {{id}}</q-item-label>
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
    
</template>

<script>
export default {
    props: ['task', 'id']
}
</script>

<style>

</style>

