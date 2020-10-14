<template>
  <div class="Player">
    <Class v-if="this.$route.params.type==='Class'"/>
    <Races v-else-if="this.$route.params.type==='Races'"/>
    <Background v-else-if="this.$route.params.type==='Background'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Class from '@/components/Classes.vue'
import Races from '@/components/Races.vue'
import Background from '@/components/Background.vue'
export default {
  name: 'Player',
  components: {
    Class,
    Races,
    Background
  }
}
</script>
