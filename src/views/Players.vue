<template>
  <div class="Player">
    <Class v-if="this.$route.params.type==='Class'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Class from '@/components/Classes.vue'

export default {
  name: 'Player',
  components: {
    Class
  }
}
</script>
