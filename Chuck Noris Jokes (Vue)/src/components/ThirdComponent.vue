<template>
  <div>
    <h5>Well come a Chuck Norris Jokes:</h5>
    Choise a category for the Joke:
    <select v-model="option">
      <option v-for="categorias in items" :key="categorias">{{categorias}}</option>
    </select>
  </div>
  <div>
    <button v-on:click="getTheJoke">Get the Joke</button>
    <div>
      <h5>{{jokes}}</h5>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"ThirdComponent",
  data () {
    return {
      option:null,
      items:null,
      jokes:null
    }
  },
  mounted() {
    this.getCategory()
  },
  methods: {
    getCategory () {
      axios.get('https://api.chucknorris.io/jokes/categories')
      .then(response=>{
        this.items=response.data
        console.log(this.items)
      })
      .catch(error=> console.error(error))
    },
    getTheJoke(){
      this.joke=this.option
      axios.get(`https://api.chucknorris.io/jokes/random?category=${this.joke}`)
      .then(response=>{
        this.jokes=response.data.value
        console.log(this.jokes)
      })
      .catch(error=> console.error(error))
    }
}
}
</script>