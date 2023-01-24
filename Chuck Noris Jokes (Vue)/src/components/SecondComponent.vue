<template>
    <h3>Advices:</h3>
    <p>{{ info }}</p>
</template>

<script>
import axios from "axios";

export default {
    name: 'SecondComponent',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios.get('https://api.adviceslip.com/advice')
        .then(resposta => {
            var advice = resposta.data.slip.advice
            this.info = advice
            // console.log(advice)
        })
        .catch(error => console.log(error))
    },
}
</script>