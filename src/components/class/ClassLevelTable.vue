<template>
  <div class="classLevelTable">
    <b-table striped borderless outlined small head-variant="dark" no-border-collapse responsive :items="content.item" :fields="content.fields">
      <template v-slot:thead-top="data" v-if="content.magicCol">
        <b-tr>
          <b-th :colspan="content.magicCol"><span class="sr-only">Name and ID</span></b-th>
          <b-th :colspan="data.fields.length-content.magicCol">法術環位<hr class="bg-light"></b-th>
        </b-tr>
      </template>
    </b-table>
  </div>
</template>

<script>
// const axios = require('axios').default
export default {
  name: 'classLevelTable',
  props: {
    content: Object
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
