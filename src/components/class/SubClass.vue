<template>
  <div class="subClass">
    <b-card fluid
      title-tag="h5"
      :title="content.title"
      :sub-title="content.subTitle">
      <b-card-text>
        <span v-for="(cont,key) in content.content" :key=key>{{cont}}</span>
      </b-card-text>
      <b-form-checkbox
        v-for="(objSub,index,key) in content.subs"
        :key="key" v-model="subclassChecked[objSub.chkboxName]"
        name="mainSub"
        button
        button-variant="light"
        class="mr-1 ml-1">
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
            <span v-for="(cont,key) in objSub.content" :key=key>{{cont}}<br></span>
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
