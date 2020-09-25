<template>
  <div class="ClassBasicInfo">
    <b-card fluid align="left">
      <b-card-text>
        <h6>生命值</h6>
        <b>生命骰：</b>{{basicInfo.hitPoint.hpDice}}<br>
        <b>一級生命值：</b>{{basicInfo.hitPoint.firstHp}}＋你的體質調整值<br>
        <b>其後生命值：</b>一級之後每{{classChtName}}等級 {{basicInfo.hitPoint.nextHp}}＋你的體質調整值<p/>
        <h6>熟練</h6>
        <b>護甲：</b>{{basicInfo.proficiencies.armor}}<br>
        <b>武器：</b>{{basicInfo.proficiencies.weapons}}<br>
        <b>工具：</b>{{basicInfo.proficiencies.tools}}<br>
        <b>豁免：</b>{{basicInfo.proficiencies.savingThrows}}<br>
        <b>技能：</b>從{{basicInfo.proficiencies.skills.skills}}中選擇{{basicInfo.proficiencies.skills.amount}}個。<p>
        <h6>起始裝備</h6>
        你起始攜帶下列物品，以及任何你背景所提供的東西。<br>
        <li v-for="(selectWeapon,key) in basicInfo.startingEquipment.select" :key=key>{{selectWeapon}}</li><br>
        或者，你可以選擇起始擁有 {{basicInfo.startingEquipment.buy}} 金幣以自行購買裝備。<p/>
        <h6>兼職</h6>
        獲得新職業前，你必須同時滿足現有職業和新職業的屬性值需求。<br>
        <b>最低屬性值：</b>{{basicInfo.multiClassing.abilityScoreMinimum}}<p/>
        當你不是以起始等級獲得新職業的等級，你只會獲得該職業一部分的起始熟練項目。<br>
        <span v-if="basicInfo.multiClassing.armor"><b>護甲：</b>{{basicInfo.multiClassing.armor}}<br></span>
        <span v-if="basicInfo.multiClassing.weapons"><b>武器：</b>{{basicInfo.multiClassing.weapons}}<br></span>
        <span v-if="basicInfo.multiClassing.tools"><b>工具：</b>{{basicInfo.multiClassing.tools}}<br></span>
        <span v-if="basicInfo.multiClassing.skills"><b>技能：</b>從{{basicInfo.multiClassing.skills.skills}}中選擇{{basicInfo.multiClassing.amount}}個。<br></span>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
// const axios = require('axios').default
export default {
  name: 'ClassBasicInfo',
  props: {
    basicInfo: Object,
    classChtName: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
