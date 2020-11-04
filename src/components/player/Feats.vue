<template>
  <div class="Feats">
    <b-container fluid>
      <b-row>
        <b-col>
          <b-card no-body>
            <b-form-tags></b-form-tags>
            <b-table small hover striped sticky-header="87vh" borderless class="small mb-0" :fields="field" :items="featsList" @row-clicked="itemSelect">
              <template v-slot:cell(book)="{ value }">
              <span :class="value|bookColor">
                {{ value }}
              </span>
            </template>
            </b-table>
          </b-card>
        </b-col>
        <b-col>
          <br>
          <b-card v-if="selectedFeat"
            :title="selectedFeat.chtName"
            :sub-title="selectedFeat.name">
            <b-card-text v-if="selectedFeat.prerequisite">
              <small class="text-muted">先決條件：{{selectedFeat.prerequisite}}</small>
            </b-card-text>
            <hr>
            <b-card-text align=left>
              <span v-for="(cont,key) in selectedFeat.content" :key=key>
                <span v-if="typeof(cont) === 'string'">{{cont}}<br/></span>
                <ul v-if="typeof(cont) === 'object'">
                  <li v-for="(item,key) in cont" :key=key>{{item}}</li>
                </ul>
              </span>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const axios = require('axios').default
export default {
  name: 'Feats',
  components: {
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
      selectedFeat: ''
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
        that.getItemInfo(that.featsList[0].name)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    itemSelect (record, index) {
      const that = this
      that.getItemInfo(record.name)
    },
    getItemInfo (itemName) {
      const that = this
      let importJsonName = process.env.BASE_URL + 'data/feat/'
      importJsonName += 'feat-' + itemName + '.json'
      axios
        .get(importJsonName)
        .then((response) => {
          console.log(response)
          that.selectedFeat = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
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
    },
    profile (value) {
      switch (value) {
        case 'skills':
          return '技能熟練'
        case 'tools':
          return '工具熟練'
        case 'language':
          return '語言'
        case 'items':
          return '裝備'
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
