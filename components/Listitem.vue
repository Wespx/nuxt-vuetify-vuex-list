<template>
  <v-list-item>
    <v-list-item-content>
      <p>{{ task.body }}</p>
    </v-list-item-content>

    <v-list-item-action>
      <v-btn @click="$emit('remove', task)">
        Удалить
      </v-btn>
    </v-list-item-action>

  </v-list-item>
</template>

<script>
  export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    }
  }
</script>
