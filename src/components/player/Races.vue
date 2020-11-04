<template>
  <div class="Races">
    <b-container fluid>
      <b-row cols-xl="8" cols-lg="6" cols-md="4" cols-sm="2" cols="2">
        <b-col v-for="(race,key) in races"  :key="key" class="mt-3">
          <b-card body-class="p-2" :title="race.racesCht" :sub-title="race.races" class='pointerCls' @click="selectRaces(race.sourceJson,race.races)">
            <b-card-text>來源：<font :color="race.book|bookColor">{{race.book}}</font></b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row cols="1" class="mt-3">
        <b-col>
          <RaceBase v-if="mainRacesInfo" :content="mainRacesInfo"></RaceBase>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RaceBase from '@/components/player/races/raceBase.vue'
const axios = require('axios').default
export default {
  name: 'Races',
  components: {
    RaceBase
  },
  data () {
    return {
      races: '',
      selected: '',
      mainRaces: '',
      mainRacesInfo: ''
    }
  },
  mounted () {
    const that = this
    axios
      .get(process.env.BASE_URL + 'data/Races.json')
      .then((response) => {
        that.races = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    selectRaces (races, raceName) {
      let importJsonName = process.env.BASE_URL + 'data/races/'
      importJsonName += races
      const that = this
      that.mainRaces = raceName
      axios
        .get(importJsonName)
        .then((response) => {
          that.mainRacesInfo = response.data
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
