<template>
  <q-page class="container full-height">
    <!-- Componente importado -->
    <ConversationArea />

    <div class="columm" v-if="true">
      <TopBar :title="'Vitor Gomes'"/>
      <ChatArea/>
      <MessageBar/>
    </div>

    <!-- Componente importado -->
    <Empty v-else />
    
  </q-page>
</template>

<script>
import ChatArea from "src/components/ChatArea/Index"
import ConversationArea from "src/components/ConversationArea/Index";
import Empty from "src/components/Empty/Index";
import TopBar from "src/components/TopBar/Index";
import MessageBar from "src/components/MessageBar/Index";
export default {
  name: "RestrictArea",
  data() {
    return {};
  },
  components: {
    Empty,
    ConversationArea,
    TopBar,
    ChatArea,
    MessageBar
  },
};
</script>

<style scoped>
.container {
  display: flex;
  overflow: hidden; /*para não ter barra de rolagem*/
  min-width: 1200px; /*tamanho minimo de 1200px*/
}
</style>