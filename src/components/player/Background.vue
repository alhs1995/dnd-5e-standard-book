<template>
  <div class="Background">
    <div align=left class="p-0 m-0">
      <b-button block squared v-b-toggle.sidebar-1 class="p-0">選擇角色背景</b-button>
    </div>
    <b-sidebar id="sidebar-1" title="背景" shadow>
      <div class="px-1 py-2">
        <b-table :fields="field" :items="backgroundList" small hover striped class="small" v-b-toggle.sidebar-1 tbody-tr-class='pointerCls'  @row-clicked="itemSelect">
          <template v-slot:cell(book)="{ value }">
            <span :class="value|bookColor">
              {{ value }}
            </span>
          </template>
        </b-table>
      </div>
    </b-sidebar>
    <b-container fluid class="mt-1">
      <b-row cols=1>
        <b-col>
          <b-card
            :title="selectedBackground.chtName"
            :sub-title="selectedBackground.name">
            <b-card-text align=left>
              <span v-for="(content,key) in selectedBackground.content" :key=key>{{content}}<br/></span>
            </b-card-text>
            <b-row cols=1 cols-md=2>
              <b-col>
                <b-card-text align="left" v-if="selectedBackground.proficiencies">
                  <span v-for="(con,key,index) in selectedBackground.proficiencies" :key=key>
                    <b>{{Object.keys(selectedBackground.proficiencies)[index]|profile}}：</b>{{con}}
                    <br v-if="selectedBackground.proficiencies.length != index" />
                  </span>
                </b-card-text>
                <b-card-text v-if="selectedBackground.specialty">
                  <h5>{{(selectedBackground.specialty.chtName)?selectedBackground.specialty.chtName:'特色'}}</h5>
                  <h6 class="text-muted">{{(selectedBackground.specialty.name)?selectedBackground.specialty.name:'Specialty'}}</h6>
                  <b-card-text align="left">
                    <span v-for="(content,key) in selectedBackground.specialty.content" :key=key>{{content}}</span>
                    <b-table small striped no-border class="small"
                      :fields="selectedBackground.specialty.field"
                      :items="selectedBackground.specialty.item">
                    </b-table>
                  </b-card-text>
                </b-card-text>
                <b-card-text v-if="selectedBackground.feature">
                  <h5>特性：{{selectedBackground.feature.chtName}}</h5>
                  <h6 class="text-muted">{{selectedBackground.feature.name}}</h6>
                  <b-card-text align="left">
                    <span v-for="(content,key) in selectedBackground.feature.content" :key=key>{{content}}<br/></span>
                  </b-card-text>
                </b-card-text>
              </b-col>
              <b-col v-if="selectedBackground.characteristics">
                <h5>建議特質</h5>
                <h6 class="text-muted">Suggested Characteristics</h6>
                <b-card-text align="left">
                  <span v-for="(content,key) in selectedBackground.characteristics.content" :key=key>{{content}}<br/></span>
                  <b-table small striped no-border class="small"
                    :fields="selectedBackground.characteristics.Trait.field"
                    :items="selectedBackground.characteristics.Trait.item">
                  </b-table>
                  <b-table small striped no-border class="small"
                    :fields="selectedBackground.characteristics.Ideal.field"
                    :items="selectedBackground.characteristics.Ideal.item">
                  </b-table>
                  <b-table small striped no-border class="small"
                    :fields="selectedBackground.characteristics.Bond.field"
                    :items="selectedBackground.characteristics.Bond.item">
                  </b-table>
                  <b-table small striped no-border class="small"
                    :fields="selectedBackground.characteristics.Flaw.field"
                    :items="selectedBackground.characteristics.Flaw.item">
                  </b-table>
                </b-card-text>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const axios = require('axios').default
export default {
  name: 'Background',
  components: {
  },
  data () {
    return {
      backgroundList: [],
      field: [
        {
          key: 'chtName',
          label: '名稱',
          sortable: true
        },
        {
          key: 'skills',
          label: '技能熟練',
          sortable: true
        },
        {
          key: 'book',
          label: '資源',
          sortable: true
        }
      ],
      selectedBackground: {}
    }
  },
  mounted () {
    const that = this
    axios
      .get(process.env.BASE_URL + 'data/Background.json')
      .then((response) => {
        that.backgroundList = response.data
        that.getItemInfo(response.data[0].name)
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
      let importJsonName = process.env.BASE_URL + 'data/background/'
      importJsonName += 'background-' + itemName + '.json'
      axios
        .get(importJsonName)
        .then((response) => {
          console.log(response)
          that.selectedBackground = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
  },
  filters: {
    bookColor (value) {
      switch (value) {
        case 'PHB':
          return 'text-PHB'
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
</style>
