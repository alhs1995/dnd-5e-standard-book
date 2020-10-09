<template>
  <div class="raceBase">
    <b-card :title="content.chtName" :sub-title="content.name">
      <b-row cols=1>
        <b-col>
          <b-card-text class="text-left" v-for="(con,index,key) in context" :key=key>
            <h5 v-if="con.title">{{con.title}}<hr/></h5>
            <b-card-text v-for="(cont,key) in con.content" :key=key class="mb-1">
              <span v-if="typeof(cont) === 'string'">{{cont}}</span>
              <span v-if="typeof(cont)==='object'"><b>{{cont.bold}}：</b>{{cont.content}}</span>
            </b-card-text>
            <b-card-text v-if="con.commonType">
              <b-button v-b-toggle.commonType>展開 / 收起</b-button>
              <b-collapse id="commonType">
                <b-card no-body v-for="(cont,key) in con.commonType" :key=key>
                  <b-card-header v-b-toggle="'commonType'+key">
                    {{cont.chtName}}人  {{cont.name}}
                  </b-card-header>
                  <b-card-text>
                    <b-collapse :id="'commonType'+key" class="pt-0">
                      <b-row>
                        <b-col cols=12 md=6>
                          <span v-for="(co,key) in cont.content" :key=key>{{co}}<br/></span>
                        </b-col>
                        <b-col cols=12 md=6 v-if="cont.commonNames">
                          男性：{{cont.commonNames.men}} <br/>
                          女性：{{cont.commonNames.women}} <br/>
                          姓氏：{{cont.commonNames.lastName}}
                        </b-col>
                      </b-row>
                    </b-collapse>
                  </b-card-text>
                </b-card>
              </b-collapse>
            </b-card-text>
            <b-card no-body v-if="con.subInfo">
              <h5>{{con.subInfo.title}}</h5>
              <b-card-text v-for="(co,key) in con.subInfo.content" :key=key>
                <b v-if="co.bold">{{co.bold}}.</b>
                <span v-if="co.content">
                  <span v-for="(obj,key) in co.content" :key=key>{{obj}}</span>
                </span>
              </b-card-text>
            </b-card>
          </b-card-text>
          <RaceUncommon v-if="content.uncommon"></RaceUncommon>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col cols="12">
          <b-card title="基本素質">
            <b-card-text class="text-left">
              <span v-for="(con,key) in traits" :key=key>
                <span v-if="key!='others'"><b>{{key|traitName}}：</b>{{con}}<br/></span>
                <span v-else>
                  <span v-for="(obj,key) in con" :key=key>
                    <b>{{obj.bold}}：</b>
                    <span v-for="(sub,key) in obj.content" :key=key>{{sub}}</span>
                    <b-table v-if="obj.table"
                      striped borderless outlined small head-variant="dark" no-border-collapse responsive
                      :items="obj.table.item" :fields="obj.table.fields" caption-top class="mt-0 mb-1 text-center">
                      <template v-slot:table-caption>{{obj.table.caption}}</template>
                    </b-table>
                    <br/>
                  </span>
                </span>
              </span>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row cols=1 cols-md="1" cols-lg="2" cols-xl="3" class="mt-3" v-if="content.subraces">
        <b-col v-for="(sub,key) in content.subraces" :key=key>
          <RaceTraits :content="sub"></RaceTraits>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import RaceTraits from '@/components/races/raceTraits.vue'
import RaceUncommon from '@/components/races/raceUncommon.vue'
// const axios = require('axios').default
export default {
  name: 'raceBase',
  components: {
    RaceTraits,
    RaceUncommon
  },
  props: {
    content: Object
  },
  data () {
    return {
      traits: '',
      context: ''
    }
  },
  mounted () {
    this.traits = this.content.traits
    this.context = this.content.content
  },
  computed: {
  },
  methods: {
  },
  filters: {
    traitName: (value) => {
      var lsRtn = ''
      switch (value) {
        case 'abilityScores':
          lsRtn = '屬性值'
          break
        case 'speed':
          lsRtn = '速度'
          break
        case 'age':
          lsRtn = '年齡'
          break
        case 'alignment':
          lsRtn = '陣營'
          break
        case 'size':
          lsRtn = '體型'
          break
        case 'languages':
          lsRtn = '語言'
          break
        case 'skills':
          lsRtn = '技能'
          break
        case 'feat':
          lsRtn = '專長'
          break
      }
      return lsRtn
    }
  },
  watch: {
    content () {
      this.traits = this.content.traits
      this.context = this.content.content
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
