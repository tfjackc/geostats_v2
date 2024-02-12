<template>
  <div class="flex flex-col items-center justify-center">
    <div class="text-3xl font-semibold text-black">Month: <v-text-field v-model="month"></v-text-field></div>
    <div class="text-3xl font-semibold text-black">Day: <v-text-field v-model="day"></v-text-field></div>
    <div class="text-3xl font-semibold text-black">Hour: <v-text-field v-model="hour"></v-text-field></div>

    <button class="text-3xl font-semibold text-white outline outline-blue-950 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-950" @click="submitForm">GET DATA</button>
  </div>
  <div class="flex flex-col items-center justify-center">
    <div class="text-3xl font-semibold text-black">Returned Data:</div>
    <div class="text-sm text-black">{{dbreturn}}</div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from "~/store/data_store";
import { storeToRefs } from "pinia";
import type Movement from "~/prisma/types";
const { month, day, hour, dbreturn } = storeToRefs(useDataStore());

async function submitForm() {
  try {
    console.log("searching...");

    let formData = new FormData();

    formData.append('month', month.value);
    //@ts-ignore
    formData.append('day', day.value);
    //@ts-ignore
    formData.append('hour', hour.value);


    const response = await $fetch<Movement[]>('/api/movement', {
      method: 'POST',
      body: formData,
    });
    console.log("response: ", response);
    dbreturn.value = response;
  } catch (error) {
    console.error("An error occurred:", error);
    // Handle the error appropriately
  }
}


</script>

<style scoped>

</style>