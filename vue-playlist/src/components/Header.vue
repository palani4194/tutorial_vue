<template>
  <div class="header">
    <h1>{{title}}</h1>
    <h1 @click="changetitle">{{titles}}</h1>
  

  </div>
</template>

<script>

import { bus} from "../main"
export default {
  name: 'Header',
  props:{
    titles:{
      type:String
    }
  },
  data() {
    return{
      'title' : "Vue Ninja",
    }
  },
  methods:{

    changetitle(){
      // this.$emit("changetitle","title is changed")
      this.titles = "title is changed"
      bus.$emit("titlechange","title is changed")

  }
}
}
</script>

<style scoped>

.header{
    background: lightgreen;
    padding: 10px;
}
h1{
    color: #222;
    text-align: center;
}

</style>
