<template>
  <div class="Reference">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Conditions v-if="this.$route.params.type==='Conditions'"></Conditions>
    <Languages v-else-if="this.$route.params.type==='Languages'"></Languages>
    <Spells v-else-if="this.$route.params.type==='Spells'"></Spells>
  </div>
</template>

<script>
// @ is an alias to /src
import Conditions from '@/components/reference/Conditions.vue'
import Languages from '@/components/reference/Languages.vue'
import Spells from '@/components/reference/Spells.vue'
export default {
  name: 'Reference',
  components: {
    Conditions,
    Languages,
    Spells
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
          text: '參考資料',
          active: true
        },
        {
          text: '',
          active: true
        }
      ]
      switch (that.pType) {
        case 'Conditions':
          lsRtn[2].text = '狀態與疾病'
          break
        case 'Languages':
          lsRtn[2].text = '語言'
          break
        case 'Spells':
          lsRtn[2].text = '法術'
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
