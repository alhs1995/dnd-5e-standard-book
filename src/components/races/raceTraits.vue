<template>
  <div class="raceTraits">
    <b-card :title="content.chtName" :sub-title="content.name">
      <h6 :style="content.book|bookColor">{{content.book}}</h6>
      <b-card-text v-if="content.content">
        <span v-for="(cont,key) in content.content" :key=key>{{cont}}</span>
      </b-card-text>
      <b-card no-body v-if="content.subInfo">
        <h5>{{content.subInfo.title}}</h5>
        <b-card-text v-for="(co,key) in content.subInfo.content" :key=key>
          <b v-if="co.bold">{{co.bold}}.</b>
          <span v-if="co.content">
            <span v-for="(obj,key) in co.content" :key=key>{{obj}}</span>
          </span>
        </b-card-text>
      </b-card>
      <b-card-text class="text-left mb-1" v-for="(con,key) in traits" :key=key>
        <span v-if="key!='others'"><b>{{key|traitName}}：</b>{{con}}<br/></span>
        <span v-else>
          <span v-for="(obj,key) in con" :key=key>
            <b>{{obj.bold}}：</b>
            <span v-for="(sub,key) in obj.content" :key=key>{{sub}}</span>
            <br/>
          </span>
        </span>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// const axios = require('axios').default
export default {
  name: 'raceTraits',
  components: {
  },
  props: {
    content: Object
  },
  data () {
    return {
      traits: ''
    }
  },
  mounted () {
    this.traits = this.content.traits
  },
  computed: {
  },
  methods: {
  },
  filters: {
    bookColor (value) {
      switch (value) {
        case 'PHB':
          return 'color:blue'
      }
    },
    traitName: (value) => {
      var lsRtn = ''
      switch (value) {
        case 'abilityScores':
          lsRtn = '屬性值'
          break
        case 'speed':
          lsRtn = '速度'
          break
        case 'age':
          lsRtn = '年齡'
          break
        case 'alignment':
          lsRtn = '陣營'
          break
        case 'size':
          lsRtn = '體型'
          break
        case 'languages':
          lsRtn = '語言'
          break
        case 'skills':
          lsRtn = '技能'
          break
        case 'feat':
          lsRtn = '專長'
          break
      }
      return lsRtn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
