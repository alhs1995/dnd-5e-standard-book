<template>
  <div class="Background">
  </div>
</template>

<script>
const axios = require('axios').default
export default {
  name: 'Background',
  components: {
  },
  data () {
    return {
      classes: '',
      selected: '',
      mainClass: '',
      mainClassInfo: ''
    }
  },
  mounted () {
    const that = this
    axios
      .get('/data/Classes.json')
      .then((response) => {
        that.classes = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    selectClass (classes, className) {
      let importJsonName = '/data/class/'
      importJsonName += classes
      const that = this
      that.mainClass = className
      axios
        .get(importJsonName)
        .then((response) => {
          that.mainClassInfo = response.data
        })
    }
  },
  filters: {
    bookColor (value) {
      switch (value) {
        case 'PHB':
          return 'blue'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    line-height:normal;
  }
</style>
