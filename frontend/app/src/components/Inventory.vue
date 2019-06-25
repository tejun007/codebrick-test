<template>
  <v-container grid-list-md text-xs-center>
    <v-layout column wrap>
      <v-flex d-flex>
        Inventory List
      </v-flex>

      <v-flex d-flex>
        <v-layout row>
          <v-flex align-self-center grow>table filter options</v-flex>
          <v-flex shrink>
            <v-btn> Update Filter</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex>
        <v-data-table
          :headers="table.headers"
          :items="table.items"
          :paginateion.sync="pagination"
          class="elevation-1"
          item-key="name"
          select-all
          v-model="selected"
        >
          <template v-slot:items="props">
            <td>
              <v-checkbox
                hide-details
                primary
                v-model="props.selected"
              ></v-checkbox>
            </td>
            <td class="text-xs-center">{{ props.item.no }}</td>
            <td class="text-xs-left">{{ props.item.vin_number }}</td>
            <td class="text-xs-left">{{ props.item.model }}</td>
            <td class="text-xs-left">{{ props.item.make }}</td>
            <td class="text-xs-left">{{ props.item.year }}</td>
            <td class="text-xs-left">{{ props.item.msrp }}</td>
            <td class="text-xs-left">{{ props.item.status }}</td>
            <td class="text-xs-center">{{ props.item.booked }}</td>
            <td class="text-xs-center">{{ props.item.listed }}</td>
          </template>
        </v-data-table>
      </v-flex>

      <v-flex d-flex>
        <v-layout row>
          <v-btn>+</v-btn>
          <v-btn>-</v-btn>
          <v-btn>Upload File</v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'inventory',

  data () {
    return {
      table: {
        pagination: {
          sortBy: ''
        },
        headers: [
          {text: 'No', align: 'left', sortable: true, value: 'no'},
          {text: 'Vin#', align: 'left', sortable: true, value: 'vin_number'},
          {text: 'Model', align: 'left', sortable: true, value: 'model'},
          {text: 'Make', align: 'left', sortable: true, value: 'make'},
          {text: 'Year', align: 'left', sortable: true, value: 'year'},
          {text: 'MSRP', align: 'left', sortable: true, value: 'msrp'},
          {text: 'Status', align: 'left', sortable: true, value: 'status'},
          {text: 'Booked', align: 'left', sortable: true, value: 'booked'},
          {text: 'Listed', align: 'left', sortable: true, value: 'listed'}
        ],
        items: [
          {
            no: 1,
            vin_number: 'MNBUMF050FW496402',
            model: '320i',
            make: 'BMW',
            year: 2014,
            msrp: 147000,
            status: 'ordered',
            booked: 'y',
            listed: 'n'
          },
          {
            no: 2,
            vin_number: 'MNBUMF050FW496402',
            model: 'Camry',
            make: 'Toyota',
            year: 2015,
            msrp: 120000,
            status: 'in stock',
            booked: 'y',
            listed: 'n'
          },
          {
            no: 3,
            vin_number: 'TFBAXXMAWAFS71274',
            model: 'Focus',
            make: 'Ford',
            year: 2016,
            msrp: 130000,
            status: 'ordered',
            booked: 'n',
            listed: 'y'
          },
          {
            no: 4,
            vin_number: 'G3SBUMF080FW470449',
            model: 'Civic',
            make: 'Honda',
            year: 2014,
            msrp: 140000,
            status: 'sold',
            booked: 'n',
            listed: 'n'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
