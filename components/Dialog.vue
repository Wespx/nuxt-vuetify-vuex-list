<template>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              v-bind="attrs"
              v-on="on"
            >Узнать количество дел</v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-text>
                <div class="text-h2 pa-12">Всего дел: {{ tasks.length }}</div>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
</template>

<script>
  export default {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
  }
</script>
