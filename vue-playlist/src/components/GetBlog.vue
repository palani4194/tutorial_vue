<template>
<div id="show-blog" >
  <h1>All Blog Articles</h1>

  <input type="text" v-model="search" placeholder="search blogs" />

  <div v-for="(blog,index) in addFilters" :key="index" class="single-blog">
    <router-link v-bind:to="'/blog/'+blog.id">
    <h1 > . {{blog.title | toUppercase}}</h1>
    </router-link>
  <p v-rainbow>{{blog.body}}</p>
  <p v-rainbow>{{blog.autor}}</p>



</div>
</div>
</template>

<script>

export default {

  data(){
    return{
      'blogs':[],
      'search' :""
    }
  },
  computed: {
    addFilters(){
      return this.blogs.filter((blog)=>
          {
            return blog.title.match(this.search)})

    }
  },

    filters:{

      toUppercase(value){
        return value.toUpperCase();
      },


  },


directives: {
    'rainbow' :{
        bind(el){
            el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
    }
  },
  created(){
this.$http.get('https://vue-playlist-b00f3.firebaseio.com/posts.json').then(function(data)
      {
        return data.json()
}).then(function(data){
    var blogsArray = [];
    for (let key in data){
        data[key].id = key;
        blogsArray.push(data[key]);
    }
    this.blogs = blogsArray;
});
}
}



</script>


<style scoped>

#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}

</style>
