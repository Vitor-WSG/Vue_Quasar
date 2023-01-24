<template>
  <div class="q-ma-xl">
    <h5>Propriedades computadas</h5>

    <span>Lista de tarefas:</span>
    <ul>
      <li v-for="list in listAll" :key="list.id">
        <input type="checkbox" v-model="list.completed" />
        {{ list.title }}
      </li>
    </ul>

    <br /><br />

    <span>Tarefas pendentes:</span>
    <ul>
      <li v-for="list in unCompleted" :key="list.id">
        {{ list.title }} , {{ list.completed }}
      </li>
    </ul>

    <br /><br />

    <span>Tarefas concluidas:</span>
    <ul>
      <li v-for="list in completed" :key="list.id">
        {{ list.title }} , {{ list.completed }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "PropComputadas",
  data() {
    return {
      lists: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false,
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false,
        },
        {
          userId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false,
        },
        {
          userId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true,
        },
        {
          userId: 1,
          id: 5,
          title:
            "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false,
        },
        {
          userId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false,
        },
      ],
    };
  },

  computed: {
    listAll() {
      return this.lists;
    },
    unCompleted() {
      //retorna somente os que esta com o campo list = false
      //!list.completed
      return this.lists.filter((list) => !list.completed);
    },
    completed() {
      return this.lists.filter((list) => list.completed);
    },
  },
};
</script>
