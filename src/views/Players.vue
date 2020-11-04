<template>
  <div class="Player">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Class v-if="this.$route.params.type==='Class'"/>
    <Races v-else-if="this.$route.params.type==='Races'"/>
    <Background v-else-if="this.$route.params.type==='Background'"/>
    <Feats v-else-if="this.$route.params.type==='Feats'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Class from '@/components/player/Classes.vue'
import Races from '@/components/player/Races.vue'
import Background from '@/components/player/Background.vue'
import Feats from '@/components/player/Feats.vue'
export default {
  name: 'Player',
  components: {
    Class,
    Races,
    Background,
    Feats
  },
  data () {
    return {
      items: [{}],
      pType: ''
    }
  },
  mounted () {
    this.pType = this.$route.params.type
    this.bread()
  },
  methods: {
    bread () {
      const that = this
      const lsRtn = [
        {
          text: '首頁',
          to: { name: 'Home' }
        },
        {
          text: '玩家',
          active: true
        },
        {
          text: '',
          active: true
        }
      ]
      switch (that.pType) {
        case 'Class':
          lsRtn[2].text = '職業'
          break
        case 'Races':
          lsRtn[2].text = '種族'
          break
        case 'Background':
          lsRtn[2].text = '背景'
          break
        case 'Feats':
          lsRtn[2].text = '專長'
          break
      }
      that.items = lsRtn
    }
  },
  watch: {
    $route (to, from) {
      this.pType = this.$route.params.type
      this.bread()
    }
  }
}
</script>
