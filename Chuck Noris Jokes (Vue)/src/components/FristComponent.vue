<template>
    <h3>Chuck Noris Joke:</h3>
    <p>{{ result }}</p>    
</template>

<script>
import axios from 'axios'

export default {
  name: 'FirstComponent',
  data () {
    return {
      result: null
    }
  },
  mounted () {
    axios.get ('https://api.chucknorris.io/jokes/random')
    .then ( resposta => {
      var joke = resposta.data.value
      this.result = joke
    })
    .catch ( error => console.log(error))
  }
}
</script>