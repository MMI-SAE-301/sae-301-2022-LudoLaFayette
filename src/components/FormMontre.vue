<script setup lang="ts">
import { ref } from 'vue'
import TestMontre from '@/components/TestMontre.vue'
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
        router.push({ name: "montre", params: { id: data[0].id_montre } });
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
    <div class="grid grid-cols-3 justify-items-center pt-20">
        <div class="mt-[20px] w-[323px]">
            <img src="/images/line3A.svg" alt="ligne gauche exemples acceuil">
        </div>
        <h2 class="font-orkney italic text-[40px] text-center font-bold mb-8 ">Personnalisation</h2>
        <div class="mt-[20px] w-[323px]">
            <img src="/images/line3b.svg" alt="ligne droite exemples acceuil">
        </div>
    </div>




    <div class="grid grid-cols-2 grid-rows-2">
        <div>
            <TestMontre />
        </div>
        <div>

            <h2 class="font-orkney italic text-[40px] text-right font-bold mr-[300px] ">1. Choix des Couleurs :</h2>

            <FormKit type="form" v-model="montre" @submit="upsertMontre">
                <!-- <FormKit name="libelle_montre" label="libellé" /> -->
                <FormKitListColors name="ecran" label="ecran" />
                <FormKitListColors name="boitier" label="boitier" />
                <FormKitListColors name="bracelet" label="bracelet" />
                <FormKit label="materiaux (fonctionne pas)" type="radio" :options="materiaux" :sections-schema="{
                    inner: { $el: null },
                    decorator: { $el: null }
                }" input-class="peer sr-only" options-class="flex gap-1"><template #label="context">
                        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                            :style="{ backgroundImage: `url('${context.option.value}')` }"></div>
                        <!-- :style="{backgroundImage: `url(${context.option.value})` }"
                    style="background-image:url('/images/image\ 22.png')" -->
                        <span class="sr-only">{{ context.option.label }}</span>
                    </template>
                </FormKit>

                <FormKit name="commande_montre" type="checkbox" label="commander ? "
                    wrapper-class="w-full flex text-xl" />
                <!-- <FormKit name="date_basket" type="date" label="date de commande" wrapper-class="w-full flex text-xl" /> -->

                <button class="bg-bkg-dark-main" @click="deleteMontre()">Supp</button>
            </FormKit>
        </div>

        <div>
            <FormKit type="form" v-model="montre" @submit="upsertMontre">
                <!-- <FormKit name="libelle_montre" label="libellé" /> -->
                <FormKitListColors name="ecran" label="ecran" />
                <FormKitListColors name="boitier" label="boitier" />
                <FormKitListColors name="bracelet" label="bracelet" />
                <FormKit label="materiaux (fonctionne pas)" type="radio" :options="materiaux" :sections-schema="{
                    inner: { $el: null },
                    decorator: { $el: null }
                }" input-class="peer sr-only" options-class="flex gap-1"><template #label="context">
                        <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                            :style="{ backgroundImage: `url('${context.option.value}')` }"></div>
                        <!-- :style="{backgroundImage: `url(${context.option.value})` }"
                    style="background-image:url('/images/image\ 22.png')" -->
                        <span class="sr-only">{{ context.option.label }}</span>
                    </template>
                </FormKit>

                <FormKit name="commande_montre" type="checkbox" label="commander ? "
                    wrapper-class="w-full flex text-xl" />
                <!-- <FormKit name="date_basket" type="date" label="date de commande" wrapper-class="w-full flex text-xl" /> -->

                <button class="bg-bkg-dark-main" @click="deleteMontre()">Supp</button>
            </FormKit>
        </div>
        <div>
            <TestMontre />
        </div>
    </div>


    <FormKit type="form" v-model="montre" @submit="upsertMontre">
        <!-- <FormKit name="libelle_montre" label="libellé" /> -->
        <FormKitListColors name="ecran" label="ecran" />
        <FormKitListColors name="boitier" label="boitier" />
        <FormKitListColors name="bracelet" label="bracelet" />
        <FormKit label="materiaux (fonctionne pas)" type="radio" :options="materiaux" :sections-schema="{
            inner: { $el: null },
            decorator: { $el: null }
        }" input-class="peer sr-only" options-class="flex gap-1"><template #label="context">
                <div class="h-6 w-6 rounded-full border-2 peer-checked:border-red-600"
                    :style="{ backgroundImage: `url('${context.option.value}')` }"></div>
                <!-- :style="{backgroundImage: `url(${context.option.value})` }"
                    style="background-image:url('/images/image\ 22.png')" -->
                <span class="sr-only">{{ context.option.label }}</span>
            </template>
        </FormKit>

        <FormKit name="commande_montre" type="checkbox" label="commander ? " wrapper-class="w-full flex text-xl" />
        <!-- <FormKit name="date_basket" type="date" label="date de commande" wrapper-class="w-full flex text-xl" /> -->

        <button class="bg-bkg-dark-main" @click="deleteMontre()">Supp</button>
    </FormKit>
</template>