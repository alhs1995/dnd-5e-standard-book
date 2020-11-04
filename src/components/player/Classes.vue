<template>
  <div class="Class">
    <b-container fluid>
      <b-row cols-xl="8" cols-lg="6" cols-md="4" cols-sm="2" cols="2">
        <b-col v-for="(cls,key) in classes" :key="key" class="mt-3">
          <b-card body-class="p-2" :title="cls.classChtName" :sub-title="cls.className" class='pointerCls' @click="selectClass(cls.sourceJson,cls.className)">
            <b-card-text>來源：<font :color="cls.book|bookColor">{{cls.book}}</font></b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row cols="1" class="mt-3">
        <b-col>
          <b-card :title="mainClassInfo.classChtName" :sub-title="mainClassInfo.className" v-if="mainClassInfo">
            <b-row align-v="start" align-h="center" class="mb-3">
              <b-col cols="12" md="4">
                <ClassBasicInfo :basicInfo="mainClassInfo.basicInfo" :classChtName="mainClassInfo.classChtName"></ClassBasicInfo>
              </b-col>
              <b-col cols="12" md="8">
                <ClassIntro :content="mainClassInfo.information"></ClassIntro>
              </b-col>
            </b-row>
            <b-row align-h="center" class="mb-3">
              <b-col cols=12 lg="10">
                <b-card class="bg-secondary" title="快速創造你的角色" title-text-variant="light" text-variant="light">
                  <b-card-text>
                    <span v-for="(content,key) in mainClassInfo.quickBuild" :key=key>{{content}}<br/></span>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <ClassLevelTable :content="mainClassInfo.classLevelTable"></ClassLevelTable>
              </b-col>
            </b-row>
            <b-row align-v="start" align-h="center">
              <b-col cols="12" xl="6">
                <b-card>
                  <MutiContent :content="mainClassInfo.features"></MutiContent>
                </b-card>
              </b-col>
              <b-col cols="12" xl="6">
                <SubClass :content="mainClassInfo.subClass"></SubClass>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ClassBasicInfo from '@/components/player/class/ClassBasicInfo.vue'
import ClassIntro from '@/components/player/class/ClassIntro.vue'
import ClassLevelTable from '@/components/player/class/ClassLevelTable.vue'
import MutiContent from '@/components/player/class/MutiContent.vue'
import SubClass from '@/components/player/class/SubClass.vue'
const axios = require('axios').default
export default {
  name: 'Class',
  components: {
    ClassBasicInfo,
    ClassIntro,
    ClassLevelTable,
    MutiContent,
    SubClass
  },
  data () {
    return {
      classes: '',
      selected: '',
      mainClass: '',
      mainClassInfo: ''
    }
  },
  mounted () {
    const that = this
    axios
      .get(process.env.BASE_URL + 'data/Classes.json')
      .then((response) => {
        that.classes = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    selectClass (classes, className) {
      let importJsonName = process.env.BASE_URL + 'data/class/'
      importJsonName += classes
      const that = this
      that.mainClass = className
      axios
        .get(importJsonName)
        .then((response) => {
          that.mainClassInfo = response.data
        })
    }
  },
  filters: {
    bookColor (value) {
      switch (value) {
        case 'PHB':
          return 'blue'
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
