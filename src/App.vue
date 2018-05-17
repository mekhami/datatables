<template>
  <div id="app">
    <data-table :cols="cols" :rows="items"></data-table>
  </div>
</template>

<script>
import DataTable from './components/DataTable'

export default {
  name: 'App',
  components: {
    DataTable
  },
  data () {
    return {
      cols: [
        { fieldName: 'animalSpecies', label: 'Species' },
        { fieldName: 'color', label: 'Color' }
      ],
      items: [
        { animalSpecies: 'pig', color: 'brown' },
        { animalSpecies: 'cow', color: 'black' },
        { animalSpecies: 'dog', color: 'white' }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
