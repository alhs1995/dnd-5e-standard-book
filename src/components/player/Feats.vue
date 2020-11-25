<template>
  <div class="Feats">
    <listNDetail :field="field" :itemList="featsList" :itemDetail="featDetail"/>
  </div>
</template>

<script>
import listNDetail from '@/components/ListNDetail'
const axios = require('axios').default
export default {
  name: 'Feats',
  components: {
    listNDetail
  },
  data () {
    return {
      featsList: [],
      field: [
        {
          key: 'chtName',
          label: '名稱',
          sortable: true
        },
        {
          key: 'ability',
          label: '屬性值',
          sortable: true
        },
        {
          key: 'prerequisite',
          label: '條件',
          sortable: true
        },
        {
          key: 'book',
          label: '資源',
          sortable: true
        }
      ],
      selectedFeat: '',
      featDetail: []
    }
  },
  mounted () {
    const that = this
    axios
      .get(process.env.BASE_URL + 'data/Feats.json')
      .then((response) => {
        // 先排序再塞
        that.featsList = Object.keys(response.data)
          .map(t => {
            that.$set(response.data[t], 'key', t)
            return response.data[t]
          })
          .sort(this.sortProperty('name'))
      })
      .catch((error) => {
        console.log(error)
      })
    axios
      .get(process.env.BASE_URL + 'data/feat/feat-Detail.json')
      .then((response) => {
        // 先排序再塞
        that.featDetail = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    sortProperty (prop) {
      return (a, b) => {
        if (a[prop] < b[prop]) {
          return -1
        }
        if (a[prop] > b[prop]) {
          return 1
        }
        return 0
      }
    }
  },
  computed: {
  },
  filters: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span{
    line-height:normal;
  }
</style>
