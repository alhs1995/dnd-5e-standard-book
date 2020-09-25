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
        <ul v-else-if="typeof (context) === 'object' && typeof (context[0]) === 'string'">
          <li v-for="(listText,index,key) in context" :key=key>{{listText}}</li>
        </ul>
        <span v-else-if="typeof (context) === 'object' && typeof (context[0]) === 'object'">
          <div v-for="(cont,key) in context" :key=key class="mb-3">
            <h5 v-if="cont.title">{{cont.title}}</h5>
            <hr v-if="cont.title">
            <b v-if="cont.bold">{{cont.bold}}.</b>
            <span v-for="(con,key) in cont.content" :key=key>
              <span v-if="typeof (con) === 'string'">{{con}}<br/></span>
              <center v-if="typeof (con) === 'object'" class="mt-2">
                <b>法術豁免DC</b> = 8 + 你的熟練加值 + 你的{{con.charisma}}調整值<br/>
                <b>法術攻擊調整值</b> = 你的熟練加值 + 你的{{con.charisma}}調整值
              </center>
            </span>
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
