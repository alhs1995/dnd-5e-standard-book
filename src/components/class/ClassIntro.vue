<template>
  <div class="ClassIntro">
    <b-card fluid align="left">
      <b-card-text v-for="(cont,index,key) in content" :key="key">
        <h5 v-if="cont.title">{{cont.title}}</h5>
        <span v-for="(context,key) in cont.content" :key="key">{{context}}<br/></span>
        <hr v-if="(index<content.length-1)">
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// const axios = require('axios').default
export default {
  name: 'ClassIntro',
  props: {
    content: Array
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
