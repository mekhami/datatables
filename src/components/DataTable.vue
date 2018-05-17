<template>
  <table>
    <thead>
      <tr>
        <td v-for="col in cols" :key="`${col.fieldName}-head`">
          {{ col.label }}
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="`row-${index}`">
        <td v-for="col in cols" :key="`${col.fieldName}-body`">
          {{ row[col.fieldName] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    cols: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  },
  data () {
    return {}
  },
  methods: {

  }
}
</script>
