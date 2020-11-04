<template>
  <div class="Reference">
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Reference',
  components: {
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
        case '':
          lsRtn[2].text = ''
          break
      }
      that.items = lsRtn
    }
  }
}
</script>
