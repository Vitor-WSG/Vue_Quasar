<template>
  <div class="q-ma-xl">
    <h6>Utilizando o two-way-data-binding</h6>
    <p>
      Utilizado para atualizar informações dos dois lados, do codigo para o HTML
      e do HTML para o codigo.
    </p>
    <p>Nesse caso se usa a diretiva v-model:</p>
    <input v-model="name" /><br />
    {{ name }}
    <br /><br />

    <label>Paises</label>
    <br />
    <select v-model="paises">
      <option value="">Escolha</option>
      <option value="Brasil">Brasil</option>
      <option value="Argentina">Argentina</option>
      <option value="Paraguai">Paraguai</option>
    </select>
    <p>Pais escolhido: {{ paises }}</p>
    <br /><br />

    <label> Marque as cores que deseja:</label>
    <br>
    <input type="checkbox" name="colors" v-model="colors" value="azul"/>Azul
    <input type="checkbox" name="colors" v-model="colors" value="amarelo"/>Amarelo
    <input type="checkbox" name="colors" v-model="colors" value="verde"/>Verde
    <input type="checkbox" name="colors" v-model="colors" value="preto"/>Preto
    <p>Cores escolhidas: {{colors}}</p>
  </div>
</template>

<script>
export default {
  name: "TwoWayDataBind",
  data() {
    return {
      name: "nome",
      paises: "",
      colors: [], //usando v-model com array
    };
  },
};
</script>
