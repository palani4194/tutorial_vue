<template>
<div class="single">

  <h1>{{blog.title}}</h1>
<p>{{blog.body}}</p>

</div>
</template>

<script>

  export default{

   data(){
     return{
       id : this.$route.params.id,
       blog : {},
     }

   },

   created(){
     this.$http.get('https://vue-playlist-b00f3.firebaseio.com/posts/' + this.id +'.json').then(function(data)
           {
             return data.json()

           }).then(function(data) {

             this.blog= data
           });


   }
  }
</script>
