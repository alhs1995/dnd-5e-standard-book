<template>
  <div class="Player">
    <!-- <b-breadcrumb :items="bread"></b-breadcrumb> -->
    <Class v-if="this.$route.params.type==='Class'"/>
    <Races v-else-if="this.$route.params.type==='Races'"/>
    <Background v-else-if="this.$route.params.type==='Background'"/>
    <Feats v-else-if="this.$route.params.type==='Feats'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Class from '@/components/Classes.vue'
import Races from '@/components/Races.vue'
import Background from '@/components/Background.vue'
import Feats from '@/components/Feats.vue'
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
    // this.bread()
  },
  methods: {
    bread: () => {
      const that = this
      let lsItemName = ''
      console.log(this.pType)
      const thisType = that.pType
      switch (thisType) {
        case 'Class':
          lsItemName = '職業'
          break
        case 'Races':
          lsItemName = '種族'
          break
        case 'Background':
          lsItemName = '背景'
          break
        case 'Feats':
          lsItemName = '專長'
          break
      }
      const lsRtn = [
        {
          text: '首頁',
          href: '#'
        },
        {
          text: '玩家',
          href: '#'
        },
        {
          text: lsItemName,
          active: true
        }
      ]
      that.items = lsRtn
    }
  }
}
</script>
