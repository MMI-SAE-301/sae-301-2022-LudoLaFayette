<script setup lang="ts">
import { supabase } from "@/supabase";
import TestMontre from "./TestMontre.vue";
const props = defineProps<{
  max?: number;
}>();


const { data: montres, error } = await supabase
  .from("montre")
  .select("*")
  .limit(props.max ?? 100);
if (error) {
  console.log("n'a pas pu récupérer les montres", { error });
}
</script>
<template>
  <ul>
    <li v-for="montre in montres" :key="montre.id_montre">
      <router-link
        :to="{ name: 'montre-edit-id', params: { id: montre.id_montre } }"
      >
        <TestMontre class="w-64" v-bind="montre" />
      </router-link>
    </li>
  </ul>
</template>