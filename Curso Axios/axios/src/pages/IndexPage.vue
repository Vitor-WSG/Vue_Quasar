<template>
  <div style="display: flex; justify-content: space-around">
    <button @click="onGet">GET</button>
    <button @click="onPost">POST</button>
    <button @click="onPut">PUT</button>
    <button @click="onPatch">Patch</button>
    <button @click="onDelete">DELTE</button>
    <button @click="onPromisseAll">Multi Requests</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return;
    {

    }

  },
  methods: {
    // axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/" // Definindo a URL de BASE

    // axios.interceptors.request.use(function (config) {
    //   config.headers.common.Authorization = "Token de autorização";
    //   console.log(config)
    // })

    onGet() {
      // passando parametro para complementar a URL e nesse caso trazer somente 5 valores, armazendo em uma variavel
      //status 200
      const config = {
        params: {
          _limit: 5,
        },
      };
      axios
        .get("https://jsonplaceholder.typicode.com/posts", config)
        // .get("posts", config) // utilizando base URL
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.error(error.response));
    },

    onPost() {
      // passando parametro que sera inserido na requisição
      //status 201
      const data = {
        title: "Vue.Js",
        body: "Curso Vue Js",
        userId: 1,
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    },

    onPut() {
      // passando parametro que serão atualizados
      //status 200
      const data = {
        title: "React js",
        body: "Curso de React Js",
        userId: 1,
      };
      axios
        .put("https://jsonplaceholder.typicode.com/posts/1", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    },

    onPatch() {
      // passando parametro que serão atualizados, o patch é usado quando vai atualizar somente um dado específico
      //status 200
      const data = {
        body: "Curso Vue Js",
      };
      axios
        .patch("https://jsonplaceholder.typicode.com/posts", data)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    },

    onDelete() {
      // passando parametro que sera deletado, nesse caso passe o ID junto da URL
      //status 200
      axios
        .delete("https://jsonplaceholder.typicode.com/posts/2")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.error(error));
    },

    onPromisseAll() {
      const config = {
        params: {
          _limit: 5,
        },
      };
      // procedimento para fazer multiplas requisições
      Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/posts", config),
        axios.get("https://jsonplaceholder.typicode.com/users", config),
      ])
        .then((response) => {
          console.log(response[0].data); //para ver os dados da primeira requisição
          console.log(response[1].data); // para ver os dados da segunda requisição
        })
        .catch((error) => {
          console.error(error[0]);
          console.error(error[1]);
        });
    },
  },
};
</script>
