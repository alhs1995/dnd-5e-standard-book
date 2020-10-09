<template>
  <div class="Player">
    <Class v-if="this.$route.params.type==='Class'"/>
    <Races v-if="this.$route.params.type==='Races'"></Races>
  </div>
</template>

<script>
// @ is an alias to /src
import Class from '@/components/Classes.vue'
import Races from '@/components/Races.vue'
export default {
  name: 'Player',
  components: {
    Class,
    Races
  }
}
</script>
