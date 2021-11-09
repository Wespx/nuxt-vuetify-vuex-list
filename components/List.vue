<template>
  <v-container>
    <v-row align="center">
      <v-col cols="9" v-if="tasks.length > 0">
        <v-list-item-group>
          <Listitem :task="task" v-for="task in tasks" :key="task.id" @remove="removeTask" />
        </v-list-item-group>
      </v-col>
      <v-col cols="9" v-else>
        <h3>Дел нет</h3>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import Listitem from './Listitem'
  export default {
    components: {Listitem},
    methods: {
      removeTask(task) {
        this.$store.dispatch('tasks/remove', task)
      }
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
  }
</script>
