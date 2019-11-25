<template>
  <div class="footer">

<p>{{footer_title}}{{titles}}</p>
  </div>
</template>

<script>
import { bus} from "../main"
export default {
  name: 'Footer',
  props:{
    titles:{
      type:String
    }
  },
  data() {
    return{
      'footer_title' : "@copyright by ninja",

    }
  },

  created() {

    bus.$on("titlechange",(data) =>{
      this.titles = data
    })

  },
}
</script>

<style scoped>

.footer{
  background-color: #222;
  padding: 5px;
}
p{
  color: lightgreen;
  text-align: center;
}

</style>
