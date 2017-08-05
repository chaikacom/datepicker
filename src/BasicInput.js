export default {
  props: {
    placeholder: {
      type: String,
      default: 'Pick date'
    },
    inputClass: {
      type: [Object, Array],
      default: () => ({})
    },
    value: String
  }
}
