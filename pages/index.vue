<template>
  <v-app>
    <v-app-bar app color="lightgrey">
      <v-app-bar-title>
        <h1 class="text-h4 font-weight-bold">Список дел</h1>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
      <Form @create="createTask" />
      <List :tasks="tasks" />
      <Dialog :tasks="tasks" />
    </v-main>
  </v-app>
</template>

<script>
  import Form from '../components/Form'
  import List from '../components/List'
  import Dialog from '../components/Dialog'
  import {mapGetters} from "vuex";
  export default {
    components: {
        Form, List, Dialog
    },
    methods: {
        createTask(task) {
          this.$store.dispatch('tasks/add', task)
        }
    },
    mounted() {
      this.$store.dispatch('tasks/init')
    },
    computed: {
      ...mapGetters({
        tasks: 'tasks/tasks'
      }),
    },
  }
</script>
