<template>
  <div
    class="q-pa-xl row items-center q-gutter-md"
  >
    <q-card class="my-card">
      <table>
        <thead>
          <tr>
            <th
              style="
                border-bottom: 1px solid #dee2e6;
                border-top-right-radius: 50px;
              "
              v-for="titulo in title"
              :key="titulo"
              class="q-pa-md"
            >
              {{ titulo.title }}
            </th>
            <th class="q-pa-xl" style="border-bottom: 1px solid #dee2e6">
              status
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="name in records" :key="name" class="row_body">
            <td
              class="text_center q-pl-sm"
              style="border-bottom: 1px solid #dee2e6"
            >
              {{ name.name }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
              :style="changeColor(name)"
            >
              {{ name.calories }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
            >
              {{ name.fat }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
            >
              {{ name.carbs }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
            >
              <q-icon name="arrow_upward" v-if="name.protein < 4"></q-icon>
              {{ name.protein }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
              :style="changeColor(name)"
            >
              {{ name.sodium }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
            >
              {{ name.calcium }}
            </td>
            <td
              class="q-pa-md text_center"
              style="border-bottom: 1px solid #dee2e6"
            >
              {{ name.iron }}
            </td>
            <td class="text_center" style="border-bottom: 1px solid #dee2e6">
              <span :style="customStatus(name)" class="q-pa-sm">{{
                status
              }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      icone: null,
      status: null,
      title: [
        {
          title: "Dessert",
        },
        {
          title: "Calories",
        },
        {
          title: "Fat(g)",
        },
        {
          title: "Carbs(g)",
        },
        {
          title: "Protein(g)",
        },
        {
          title: "Sodium(mg)",
        },
        {
          title: "Calcium(%)",
        },
        {
          title: "Iron(%)",
        },
      ],
      records: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%",
        },
      ],
    };
  },
  methods: {
    changeColor(calories) {
      if (calories.calories >= 100 && calories.sodium >= 200) {
        return "color:red";
      }
    },
    customStatus(status) {
      if (status.calories >= 100 && status.calories >= 200) {
        this.icone = "arrow_upward";
        return "color:red; border: 1px solid red; border-radius:25px";
      } else {
        this.status = "upSatate";
        return "color:green; border: 1px solid green; border-radius:25px";
      }
    },
  },
};
</script>

<style>
table {
  font-family: "Manrope", sans-serif;
  width: "80%";
  height: "80%";
  border-collapse: collapse;
  background-color: white;
  border-radius: 25px;
}
.row_body:hover {
  background-color: #eaeaf1;
}
.text_center {
  text-align: center;
}
.my-card {
  border: 2px solid eaeaf1;
  border-radius: 25px;
}
</style>
