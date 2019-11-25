<template>
  <div class="ninjas">
    <ul>
      <li v-for="(ninja,index) in ninjas" :key="index" @click="ninja.show=!ninja.show">
          <h1>{{ninja.name}}</h1>
          <p v-show="ninja.show">{{ninja.speciality}}</p>
      </li>
    </ul>
    <!-- <button @click="deleteninja">delete</button> -->

  </div>
</template>

<script>
export default {
  name: 'Ninjas',
  props :{
    ninjas : {
      type: Array
    },
    hello : {
      type: String
    }
  },
  data() {
    return{

      'helloa' : "hi world"

    }},
    methods:{
      deleteninja(){
        this.ninjas.pop()
      }
    },
  }

</script>

<style scoped>

#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

</style>
