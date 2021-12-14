const App = {
  data() {
    return {
      title_Text: 'Hello Vue',
      counter: 0,
      place_Text: 'Text',
      inputValue: '',
      notes: [],
    }
  },
  methods: {
    changeInput(event) {
      this.inputValue = event.target.value
    },
    addNewNote() {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
  },
  computed: {},
  watch: {},
}

Vue.createApp(App).mount('.Vue_container')
