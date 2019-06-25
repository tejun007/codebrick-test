<template>
  <v-dialog
    max-width="290"
    v-model="visible"
  >
    <v-card>
      <v-card-title>
        <span class="headline">Add Item</span>
      </v-card-title>

      <v-card-text>
        <v-layout row wrap>

          <v-flex md12 sm12 xs12>
            <v-text-field label="VIN#" required v-model="vin_number"></v-text-field>
          </v-flex>

          <v-flex md12 sm12 xs12>
            <v-text-field label="Model" required v-model="model"></v-text-field>
          </v-flex>

          <v-flex md12 sm12 xs12>
            <v-text-field label="Make" required v-model="make"></v-text-field>
          </v-flex>

          <v-flex md12 sm12 xs12>
            <v-text-field label="Year" required v-model="year"></v-text-field>
          </v-flex>

          <v-flex md12 sm12 xs12>
            <v-text-field label="MSRP" required v-model="msrp"></v-text-field>
          </v-flex>

          <v-layout wrap>
            <v-flex md6 sm6 xs6>
              <v-text-field label="Booked" required v-model="booked"></v-text-field>
            </v-flex>

            <v-flex md6 sm6 xs6>
              <v-text-field label="Listed" required v-model="listed"></v-text-field>
            </v-flex>
          </v-layout>

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
  name: 'InventoryAddItemDialog',

  props: {
    visible: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data () {
    return {
      vin_number: '',
      model: '',
      make: '',
      year: 2019,
      msrp: 0,
      booked: '',
      listed: ''
    }
  },

  watch: {
    visible (newVal) {
      if (newVal === false) { this.$emit('close-dialog') }
    }
  },

  methods: {
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
