<template>
  <div class="MutiContent">
    <b-card fluid no-body
      class="border-0 mb-1"
      align="left"
      v-for="(item,index,key) in content"
      :key=key
      header-class="p-1">
      <template v-slot:header>
        <h5>{{item.chtName}}</h5>
        <span class="text-lite">{{item.name}}</span>
      </template>
      <b-card-text v-for="(context,index,key) in item.content" :key=key>
        <span v-if="typeof (context) === 'string'">{{context}}</span>
        <b-table v-if="typeof (context) === 'object' && context.caption"
          striped borderless outlined small head-variant="dark" no-border-collapse responsive
          :items="context.item" :fields="context.fields" caption-top class="mt-0 mb-1 text-center">
          <template v-slot:table-caption>{{context.caption}}</template>
          <template v-slot:thead-top="data" v-if="context.magicCol">
            <b-tr>
              <b-th :colspan="context.magicCol"><span class="sr-only">Name and ID</span></b-th>
              <b-th :colspan="data.fields.length-context.magicCol">法術環位<hr class="bg-light"></b-th>
            </b-tr>
          </template>
        </b-table>
        <ul v-else-if="typeof (context) === 'object' && typeof (context[0]) === 'string'">
          <li v-for="(listText,index,key) in context" :key=key>{{listText}}</li>
        </ul>
        <span v-else-if="typeof (context) === 'object' && typeof (context[0]) === 'object' && !context.caption">
          <div v-for="(cont,key) in context" :key=key class="mb-3">
            <h5 v-if="cont.title">{{cont.title}}</h5>
            <hr v-if="cont.title">
            <b v-if="cont.bold">{{cont.bold}}.</b>
            <span v-for="(con,key) in cont.content" :key=key>
              <span v-if="typeof (con) === 'string'">{{con}}<br/></span>
              <ul v-else-if="typeof (con) === 'object' && typeof (con[0]) === 'string'">
                <li v-for="(listText,index,key) in con" :key=key>{{listText}}</li>
              </ul>
              <center v-if="typeof (con) === 'object' && con.charisma" class="mt-2">
                <b>法術豁免DC</b> = 8 + 你的熟練加值 + 你的{{con.charisma}}調整值<br/>
                <b>法術攻擊調整值</b> = 你的熟練加值 + 你的{{con.charisma}}調整值
              </center>
            </span>
            <center v-if="cont.center" class="mt-2">
              <b>{{cont.center.bold}}</b>{{cont.center.content}}
            </center>
            <b-jumbotron v-if="cont.notice" class="pt-3 pb-3">
              <template v-slot:lead v-if="cont.notice.notice_title">{{cont.notice.notice_title}}</template>
              <span v-for="(item,key) in cont.notice.notice_content" :key=key>
                <span v-if="typeof(item)=='string'">{{item}}<br/></span>
                <span v-if="typeof(item)=='object'">
                  <b>{{item.bold}}.</b>
                  <span v-for="(con,key) in item.content" :key=key>{{con}}<br/></span>
                </span>
              </span>
            </b-jumbotron>
          </div>
        </span>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// const axios = require('axios').default
export default {
  name: 'MutiContent',
  props: {
    content: Array
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  hr{
    margin: 3px;
  }
</style>
