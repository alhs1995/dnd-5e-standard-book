<template>
  <div class="Reference">
    <b-breadcrumb :items="items"></b-breadcrumb>
    <Conditions v-if="this.$route.params.type==='Conditions'"></Conditions>
  </div>
</template>

<script>
// @ is an alias to /src
import Conditions from '@/components/reference/Conditions.vue'
export default {
  name: 'Reference',
  components: {
    Conditions
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
      }
      that.items = lsRtn
    }
  }
}
</script>
