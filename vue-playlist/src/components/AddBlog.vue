<template>
<div id="blog" >
<div id="create_post" v-show="!submitted">
  <h1>Add Blogs</h1>

<label>Add Title</label>
<input type="text" v-model.lazy="blog.title" required/>
<label>Add Content</label>
<textarea type="text" v-model="blog.content" required></textarea>

<div id="checkboxes">
  <h1>Show Checkboxes</h1>
  <label>mario</label>
  <input type="checkbox" v-model="blog.categories" value="mario"/>
  <label>dora</label>
  <input type="checkbox" v-model="blog.categories" value="dora"/>
  <label>dolphin</label>
  <input type="checkbox" v-model="blog.categories" value="dolphin"/>
  <label>corno</label>
  <input type="checkbox" v-model="blog.categories" value="corno"/>

</div>


<div id="authors">
  <h1>Add Authors</h1>
<select v-model="blog.author">
  <option v-for="(author,index) in authors" :key="index">{{author}}</option>
</select>
</div>

<button @click="addpost">Add Post</button>

<p v-show="submitted"> Blog is added here !!!!!!!!!</p>

</div>

<div id="Preview">
  <h1>Show Preview</h1>
      <p>Title: {{blog.title}}</p>
      <p>Content: {{blog.content}}</p>
      <p>show checkoboes: </p>
      <ul>
          <li v-for="(category,index) in blog.categories" :key="index">{{category}}</li>
      </ul>

      <p>show author: {{blog.author}}</p>


</div>


</div>
</template>

<script>

export default {
  name: 'AddBlog',

  components: {

  },
  data(){
    return{
      'blog' :{
        'title' : "",
        'content' : "",
        'categories' : [],
        'author' :"ram"
      },
      'authors' : ["ram","adhi","mogan"],
      'submitted' : false,
      'data':""
    }
  },
  methods: {
    addpost(){

        var data = {
                title : this.blog.title,
                body  : this.blog.content,
                autor : this.blog.author,
                user_id : 1
                    }

      this.$http.post('https://vue-playlist-b00f3.firebaseio.com/posts.json', data).then(function(data)
    {
      this.data = data
      this.submitted = true
    })

    }

}
}
</script>


<style scoped>
#blog{
  /* text-align: center; */

}
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
 margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}

</style>
