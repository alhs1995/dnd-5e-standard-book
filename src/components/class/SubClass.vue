<template>
  <div class="subClass">
    <b-card fluid
      title-tag="h5"
      :title="content.title"
      :sub-title="content.subTitle">
      <b-card-text align="left">
        <span v-for="(cont,key) in content.content" :key=key>
          <span v-if="typeof (cont) === 'string'">{{cont}}</span>
          <span v-else-if="typeof (cont) === 'object' && typeof (cont[0]) === 'object'">
            <div v-for="(cont,key) in cont" :key=key class="mb-3">
              <h5 v-if="cont.title">{{cont.title}}</h5>
              <hr v-if="cont.title">
              <span v-for="(con,key) in cont.content" :key=key>
                <span>{{con}}<br/></span>
              </span>
            </div>
          </span>
        </span>
      </b-card-text>
      <b-form-checkbox
        v-for="(objSub,index,key) in content.subs"
        :key="key" v-model="subclassChecked[objSub.chkboxName]"
        name="mainSub"
        button
        button-variant="light"
        class="mr-1 ml-1 mb-1">
        {{objSub.chkboxLabel}}({{objSub.book}})
      </b-form-checkbox>
      <hr>
      <b-card-text
        v-for="(objSub,index,key) in selectedSub"
        :key="key">
        <b-card
          :title="objSub.subChtName"
          :sub-title="objSub.subName">
          <hr>
          <b-card-text align="left">
            <span v-for="(cont,key) in objSub.content" :key=key>
              <span v-if="typeof (cont) === 'string'">{{cont}}<br/></span>
                <b-table v-if="typeof (cont) === 'object'"
                  striped borderless outlined small head-variant="dark" no-border-collapse responsive
                  :items="cont.item" :fields="cont.fields" caption-top>
                  <template v-slot:table-caption>{{cont.caption}}</template>
                </b-table>
            </span>
          </b-card-text>
          <MutiContent :content="objSub.features"></MutiContent>
        </b-card>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// const axios = require('axios').default
import MutiContent from '@/components/class/MutiContent.vue'
export default {
  name: 'SubClass',
  components: {
    MutiContent
  },
  props: {
    content: Object
  },
  data () {
    return {
      subclassChecked: {}
    }
  },
  mounted () {
    const that = this
    that.content.subs.forEach(element => {
      that.subclassChecked[element.subName] = false
    })
  },
  computed: {
    selectedSub () {
      const that = this
      const returnObject = that.content.subs.filter(element => {
        return that.subclassChecked[element.chkboxName]
      })
      return returnObject
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
