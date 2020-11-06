<template>
  <div class="Conditions">
    <listNDetail :field="field" :itemList="featsList" :itemDetail="featDetail"/>
  </div>
</template>

<script>
import listNDetail from '@/components/ListNDetail'
const axios = require('axios').default
export default {
  name: 'Conditions',
  components: {
    listNDetail
  },
  data () {
    return {
      featsList: [],
      field: [
        {
          key: 'type',
          label: '類型',
          sortable: true
        },
        {
          key: 'chtName',
          label: '名稱',
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
      .get(process.env.BASE_URL + 'data/Conditions.json')
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
      .get(process.env.BASE_URL + 'data/conditions/Conditions-Detail.json')
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
    bookColor (value) {
      switch (value) {
        case 'PHB':
          return 'text-blue'
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
  .text-blue {
    color: blue;
  }
</style>
