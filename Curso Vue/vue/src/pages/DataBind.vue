<template>
<div class="q-ma-xl">
  <h6>Conceitos de Data Bind e Two-way Data Bind</h6>
  <h6>One way data bind</h6>
  <p>Pode-se usar: <strong>v-bind:src ou :src</strong> envia dados somente em uma direção, do código para o HTML</p>
  <h6 :class="{'title': true}">Aplicando classe via v-bind 1</h6>
  <h6 :style="{'color':'green', 'font-size':'30px', backgroundColor:'grey'}">Aplicando classe via v-bind 2</h6>
  <h6 :class="{'title': true}">Aplicando classe via v-bind 3</h6>

  <h6 :class="classe2">Aplicando classe via v-bind 4</h6>

  <img v-bind:src="img" :alt="tituloImg"/>

</div>
</template>

<script>
export default {
  name: "Conceitos de Data Bind",
  data (){
    return {
      Img:"https://via.placeholder.com/150",
      tituloImg:"Imagem da galeria",
      classes: "title",
      classe2: "title2",
      color:"grey"
    }
  }
}
</script>

<style>
.title{
  font-size: 30px;
  color: blue;
}
.title2{
  font-size: 30px;
  color: red;
}
</style>
