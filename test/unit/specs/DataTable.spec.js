import { shallowMount } from '@vue/test-utils'
import DataTable from '@/components/DataTable.vue'

describe('DataTable', () => {
  const wrapper = shallowMount(DataTable, {
    propsData: {
      rows: [
        { animalSpecies: 'pig', color: 'brown', temperament: 'happy' },
        { animalSpecies: 'cow', color: 'black', temperament: 'sad' },
        { animalSpecies: 'dog', color: 'white', temperament: 'angry' }
      ],
      cols: [
        { fieldName: 'animalSpecies', label: 'Animal' },
        { fieldName: 'color', label: 'Color' }
      ]
    }
  })
  it('should render all the rows passed as the prop', () => {
    expect(wrapper.findAll('tbody tr').length).toBe(3)
  })
  it('should render a header row with one cell per col in the props', () => {
    expect(wrapper.findAll('thead tr').length).toBe(1)
    expect(wrapper.findAll('thead tr td').length).toBe(2)
  })
  it('should not render columns not specified in the cols prop', () => {
    expect(wrapper.findAll('tbody tr td').length).toBe(6)
  })
})
