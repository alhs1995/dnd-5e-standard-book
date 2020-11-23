<template>
  <div class="ListNDetail">
    <b-container fluid>
      <b-row>
        <b-col v-if="itemList">
          <b-card no-body>
            <b-form-tags></b-form-tags>
            <b-table small hover striped sticky-header="87vh" borderless class="small mb-0" :fields="field" :items="itemList" @row-clicked="itemSelect">
              <template v-slot:cell(book)="{ value }">
              <span :class="value|bookColor">
                {{ value }}
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
            <hr>
            <b-card-text align=left>
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
// const axios = require('axios').default
export default {
  name: 'ListNDetail',
  components: {
  },
  props: {
    field: Array,
    itemList: Array,
    itemDetail: Array
  },
  data () {
    return {
      selectedItem: ''
    }
  },
  mounted () {
    // this.selectedItem = this.itemList[0].name
  },
  methods: {
    itemSelect (record, index) {
      const that = this
      that.selectedItem = record.name
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
      this.selectedItem = this.itemList[0].name
    }
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
