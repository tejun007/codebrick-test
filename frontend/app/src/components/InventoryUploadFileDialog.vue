<template>
  <v-dialog
    max-width="290"
    v-model="visible"
  >
    <v-card>
      <v-card-title>
        <span class="headline">Upload File</span>
      </v-card-title>

      <v-card-text>
        <v-layout wrap>

          <v-flex d-flex md12 sm12 xs12>
            Selected File: {{ selectedFile.name }}
          </v-flex>

          <v-flex d-flex md12 sm12 xs12>
            <input type="file" @change="handleSelectedFile">
          </v-flex>

          <v-layout wrap>
            <v-flex md6 sm6 xs6>
              <v-btn @click="submit()">SAVE</v-btn>
            </v-flex>

            <v-flex md6 sm6 xs6>
              <v-btn @click="close()">CANCEL</v-btn>
            </v-flex>
          </v-layout>

        </v-layout>
      </v-card-text>
    </v-card>

  </v-dialog>

</template>

<script>
export default {
  name: 'InventoryUploadFileDialog',

  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data () {
    return {
      selectedFile: {
        name: '',
        data: null
      }
    }
  },

  watch: {
    visible (newVal) {
      if (newVal === false) { this.$emit('close-dialog') }
    }
  },

  methods: {
    handleSelectedFile (event, selecteFile) {
      console.log(event)
      console.log(selecteFile)
    },
    submit () {
      this.$emit('close-dialog')
    },
    close () {
      this.$emit('close-dialog')
    }
  }
}
</script>

<style scoped>

</style>
