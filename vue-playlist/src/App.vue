<template>
 <div id="app">
 <router-link></router-link>
 <router-view></router-view>
  </div>
</template>

<script>
import routerslink from "./components/routerLinks"

// import AddBlog from "./components/AddBlog"
// import GetBlog from "./components/GetBlog"

export default {
  components: {
      // 'add-blog': AddBlog,
      //  'get-blog': GetBlog
        'router-link': routerslink

  },
  props :{
    footer:{
      type : String
    }
  },

  data(){
    return{
    hello : "hello world",
    ninjas: [
              {name: 'Ryu', speciality: 'Vue Components', show: false},
              {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
              {name: 'Hitoshi', speciality: 'Click Events', show: false},
              {name: 'Tango', speciality: 'Conditionals', show: false},
              {name: 'Kami', speciality: 'Webpack', show: false},
              {name: 'Yoshi', speciality: 'Data Diggin', show: false}
          ],

  title : "hello",
  component : "FormOne"

    }
  },
  methods: {
        updatetitle(title){
          this.title= title
        }
  },
}
</script>

<style scoped>
h1{
  color:purple;
}

</style>
