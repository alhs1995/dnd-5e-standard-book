<template>
  <div class="ListNDetail">
    <b-container fluid>
      <b-row>
        <b-col v-if="itemList">
          <b-card no-body>
            <b-form-tags></b-form-tags>
            <b-table small hover striped sticky-header="87vh" borderless class="small mb-0" :fields="field" :items="itemList" @row-clicked="itemSelect">
              <template #cell(level)="data">
                {{data.item.level|schoolLevel}}
              </template>
              <template #cell(school)="data">
                <span :class="data.item.school|schoolColor">
                  {{schoolName(data.item.school)}}
                </span>
              </template>
              <template v-slot:cell(book)="{value}">
                <span :class="value|bookColor">
                  {{value}}
                </span>
              </template>
            </b-table>
          </b-card>
        </b-col>
        <b-col v-if="itemDetail">
          <br>
          <b-card v-if="selectedItemDetail"
            :title="selectedItemDetail.chtName"
            :sub-title="selectedItemDetail.name">
            <b-card-text v-if="selectedItemDetail.prerequisite">
              <small class="text-muted">先決條件：{{selectedItemDetail.prerequisite}}</small>
            </b-card-text>
            <b-card-text v-if="selectedItemDetail.mutedText">
              <small class="text-muted">{{selectedItemDetail.mutedText}}</small>
            </b-card-text>
            <b-card-text style="text-align: left;line-height: normal;" v-if="selectedItemDetail.upDetail">
              <small class="text-muted">{{schoolName(selectedItemDetail.upDetail.school)}}學派 - {{selectedItemDetail.upDetail.level|schoolLevel}}</small><br/>
              <small><b>法術射程：</b>{{selectedItemDetail.upDetail.range}}</small><br/>
              <small><b>施法時間：</b>{{selectedItemDetail.upDetail.time}}</small><br/>
              <small><b>施法構材：</b>{{selectedItemDetail.upDetail.components}}</small><br/>
              <small><b>持續時間：</b>{{selectedItemDetail.upDetail.duration}}</small>
            </b-card-text>
            <hr>
            <b-card-text style="text-align:left">
              <span v-for="(cont,key) in selectedItemDetail.content" :key=key>
                <span v-if="typeof(cont) === 'string'">{{cont}}<br/></span>
                <ul v-else-if="typeof(cont) === 'object' && Array.isArray(cont)">
                  <li v-for="(item,key) in cont" :key=key>{{item}}</li>
                </ul>
                <b-table v-else-if="typeof(cont) === 'object' && cont.field" small striped :fields="cont.field" :items="cont.items" ></b-table>
                <span v-else-if="typeof(cont) === 'object' && cont.bold"><b>{{cont.bold}}</b> {{cont.content}} <br/></span>
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
  name: 'ListNDetail',
  components: {
  },
  props: {
    field: Array,
    itemList: Array,
    itemDetail: Array
    // spellSchool: Array
  },
  data () {
    return {
      selectedItem: '',
      spellSchool: []
    }
  },
  mounted () {
  },
  methods: {
    itemSelect (record, index) {
      const that = this
      that.selectedItem = record.name
    },
    schoolName (value) {
      const that = this
      if (!that.spellSchool) return value
      if (that.spellSchool === undefined || that.spellSchool === null) return value
      if (!Array.isArray(that.spellSchool)) return value
      var findSchool = that.spellSchool.find(function (element) {
        return element.engAbbr === value
      })
      if (findSchool === undefined) return value
      return findSchool.chtName
    },
    _getSchoolList () {
      const that = this
      axios
        .get(process.env.BASE_URL + 'data/spell_schools.json')
        .then((response) => {
          // 先排序再塞
          that.spellSchool = response.data
          // that._getSpells()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  computed: {
    selectedItemDetail () {
      var that = this
      return that.itemDetail.find((item) => {
        return (that.selectedItem) ? item.itemName === that.selectedItem : ''
      })
    }
  },
  watch: {
    itemList () {
      const that = this
      that.selectedItem = that.itemList[0].name
      if (that.itemList[0].school) {
        that._getSchoolList()
      }
    }
  },
  filters: {
    bookColor (value) {
      switch (value) {
        case 'PHB':
          return 'text-PHB'
      }
    },
    schoolColor (value) {
      if (value === undefined || value === null) return ''
      return 'text-' + value.substr(0, value.length - 1)
    },
    schoolLevel (value) {
      if (value === undefined || value === null) return ''
      if (value === 'Cantrip') return '戲法'
      return value.substr(0, 1) + '環'
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
