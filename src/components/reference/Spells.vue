<template>
  <div class="Spells">
    <listNDetail :field="field" :itemList="featsList" :itemDetail="itemDetail"/>
  </div>
</template>

<script>
import listNDetail from '@/components/ListNDetail'
const axios = require('axios').default
export default {
  name: 'Spells',
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
          key: 'level',
          label: '環階',
          sortable: true
        },
        {
          key: 'time',
          label: '時間',
          sortable: true
        },
        {
          key: 'school',
          label: '學派',
          sortable: true
        },
        {
          key: 'concentration',
          label: '專注',
          sortable: true
        },
        {
          key: 'range',
          label: '射程',
          sortable: true
        },
        {
          key: 'book',
          label: '資源',
          sortable: true
        }
      ],
      selectedItem: '',
      itemDetail: []
    }
  },
  mounted () {
    const that = this
    that._getSpells()
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
    },
    _getSpells () {
      const that = this
      axios
        .get(process.env.BASE_URL + 'data/Spells.json')
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
        .get(process.env.BASE_URL + 'data/references/Spells-Detail.json')
        .then((response) => {
          // 先排序再塞
          that.itemDetail = response.data
        })
        .catch((error) => {
          console.log(error)
        })
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
