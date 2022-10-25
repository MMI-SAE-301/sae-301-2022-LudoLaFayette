<script setup lang="ts">
import { ref } from 'vue'
import  TestMontre  from '@/components/TestMontre.vue'
import FormKitListColors from './FormKitListColors.vue'
import type { Montre } from '@/types';
import { materiaux } from '@/types'
import { useRouter } from "vue-router";
import { supabase } from "../supabase";

const router = useRouter();
const montre = ref<Montre>({});
const props = defineProps(["id"]);
if (props.id) {
    // On charge les données de la basket
    let { data, error } = await supabase
        .from("montre")
        .select("*")
        .eq("idMontre", props.id);
    if (error || !data)
        console.log("n'a pas pu charger le table montre :", error);
    else montre.value = data[0];
}

async function upsertMontre(dataForm, node) {
    const { data, error } = await supabase.from("montre").upsert(dataForm);
    if (error || !data) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({ name: "montre-edit-id", params: { id: data[0].id_chaussure } });
    }
}


async function deleteMontre() {
    console.log(montre.value.idMontre)
    const { data, error } = await supabase
        .from("montre")
        .delete()
        .match({ idMontre: montre.value.idMontre });
    if (error) {
        console.error(
            "Erreur à la suppression de ",
            montre.value,
            "erreur :",
            error
        );
    } else {
        router.push("/montre");
    }
}
</script>
<template>
    <div>
        <TestMontre v-bind="montre"/>
        <FormKit type="form" v-model="montre" @submit="upsertMontre">
            <FormKit name="libelle_montre" label="libellé" />
            <FormKitListColors name="ecran" label="ecran" />
            <FormKitListColors name="boitier" label="boitier" />
            <FormKitListColors name="bracelet" label="bracelet" />
            <FormKit label="materiaux" type="radio" :options="materiaux" :sections-schema="{
                inner: {$el:null},
                decorator: {$el:null}
            } " input-class="peer sr-only" options-class="flex gap-1"><template #label="context">
                    <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                        :style="{backgroundImage:`url('${context.option.value}')`}"></div>
                    <!--:style="{backgroundImage: `url(${context.option.value})` }"-->
                    <!-- style="background-image:url('/images/image\ 22.png')" -->
                    <span class="sr-only">{{context.option.label}}</span>
                </template>
            </FormKit>

            <FormKit name="commande_montre" type="checkbox" label="commander ? " wrapper-class="w-full flex text-xl" />
            <!-- <FormKit name="date_basket" type="date" label="date de commande" wrapper-class="w-full flex text-xl" /> -->

            <button @click="deleteMontre()">Supp</button>
        </FormKit>
    </div>
</template>