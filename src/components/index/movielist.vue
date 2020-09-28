<template>
  <ul class="movielist">
    <movie-list-item
    v-for="(item,index) in list"
    :key="index"
    :item="item"
    >
    
    </movie-list-item>
    <p v-if="list.length>=total">底线</p>
  </ul>
</template>
<script>
import movieListItem from './movieListItem'
export default {
  props: ['list', 'total'],
  data () {
    return {}
  },
  components: {
    movieListItem
  }
}
</script>
<style lang="less" scoped>

</style>
