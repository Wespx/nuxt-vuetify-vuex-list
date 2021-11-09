<template>
    <v-container>
      <v-row>
        <v-col>
          <h2 class="text-left text-h3 py-3">Новое дело</h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-form @submit.prevent>
              <v-row align="center">
                <v-col cols="9">
                  <v-text-field v-model="task.body" label="Описание дела">
                  </v-text-field>
                </v-col>
                <v-col cols="3">
                  <v-btn depressed elevation="1" outlined raised @click="createTask">Добавить</v-btn>
                </v-col>
              </v-row>
              <!-- <input v-model="task.body" placeholder="Описание">
              <button @click="createTask">Создать</button> -->
          </v-form>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            task: {
                body: ''
            }
        }
    },
    methods: {
        createTask() {
            this.task.id = Date.now();
            this.$emit('create', this.task);
            this.task = {
                body: ''
            }
        }
    }
}
</script>
