<template>
<div>
    <TopBar  @togglerightDrawer="onRightDrawerOpen"

   />
</div>
  <!-- drawer left -->
  <q-drawer
    style="background-color: #f8f9fa"
    show-if-above
    v-model="leftDrawerOpen"
    side="left"
    bordered
  >
    <q-list class="select">
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="person" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Departamento pessoal"
            borderless
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="device_hub" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Gestão de acesso"
            borderless
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="phone" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Discador"
            borderless
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="trending_up" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Planejamento"
            borderless
          />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="description" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Mailing"
            borderless
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="settings" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Gestão de Camapanhas"
            borderless
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="loyalty" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Back-office"
            borderless
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="list" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Script e Checklist"
            borderless
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="download" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Download"
            borderless
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-icon color="primary" name="monitor" />
        </q-item-section>
        <q-item-section>
          <q-select
            v-model="model"
            :options="options"
            label="Monitoramento na operação"
            borderless
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>

  <!-- drawer right -->
  <q-drawer
    style="background-color: #f8f9fa"
    show-if-above
    v-model="rightDrawerOpen"
    side="right"
  >
    <q-card class="q-mr-md" style="background-color: white">
      <q-card-section>
        <q-item style="display: flex; justify-content: center">
          <q-item-section top avatar>
            <q-avatar size="50px" class="q-ma-md">
              <img src="http://i.pravatar.cc/40" />
            </q-avatar>
          </q-item-section>
        </q-item>
        <q-item
          style="display: flex; font-weight: bolder; justify-content: center"
        >
          <q-item-label>Vitor Gomes</q-item-label>
        </q-item>
        <a href="">
          <q-item>
            <q-icon class="q-mr-md" name="mail" color="blue" size="24px" />
            <q-item-section>
              <q-item-label>vitor.gomes@vgx.com.br</q-item-label>
            </q-item-section>
          </q-item>
        </a>
        <a href="">
          <q-item>
            <q-icon class="q-mr-md" name="person" color="blue" size="24px" />
            <q-item-section>
              <q-item-label>My Profile</q-item-label>
            </q-item-section>
          </q-item>
        </a>
        <a href="">
          <q-item>
            <q-icon class="q-mr-md" name="logout" color="blue" size="24px" />
            <q-item-section>
              <q-item-label>Sign Out</q-item-label>
            </q-item-section>
          </q-item>
        </a>
      </q-card-section>
    </q-card>
  </q-drawer>
    <topbar/>
</template>

<script>
import TopBar from './TopBar.vue';
export default {
  name: "drawer",
  components: {
    TopBar,
},
  data() {
    return {
      rightDrawerOpen:null,
      leftDrawerOpen:null
    };
  },
  methods: {
    onRightDrawerOpen() {
      this.rightDrawerOpen = !this.rightDrawerOpen;
      console.log(this.rightDrawerOpen);
    },
    onLeftDrawerOpen() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
      console.log(this.leftDrawerOpen);
    },
  },
};
</script>

<style scoped>
</style>
