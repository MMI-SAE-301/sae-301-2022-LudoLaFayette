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



    <!--Changement d'intégration suite à que Formkit ne permet pad de spliter les options librement, ou que cela est possible mais très dur. => erreur de maquetteage après surprise du FormKit-->
    <div class="grid grid-cols-2 p-10 mb-[-50px]">
        <div class="p-10">
            <TestMontre v-bind="montre" />
        </div>
        <div class="grid ">
        <FormKit type="form" v-model="montre" @submit="upsertMontre" submit-label="Enregistrer"
                :submit-attrs="{ classes: { input: 'bg-bkg-main-dark font-orkney font-bold text-white text-common p-3 ' } }">
                <div class="grid grid-rows-5 font-orkney text-[40px] font-bold gap-10 p-2">
                    <div class="mr-[300px] mt-[105px]">
                        <h2 class="font-orkney  text-[38px] text-right font-bold ">1. Choix des Couleurs :</h2>
                    </div>

                    <div class=" bg-blancFond bg-opacity-60 p-5 ">
                        <FormKitListColors name="ecran" label="Ecran :" />
                    </div>
                    <div class="bg-blancFond bg-opacity-60 p-5">
                        <FormKitListColors name="boitier" label="Boitier :" />
                    </div>
                    <div class="bg-blancFond  bg-opacity-60 p-5">
                        <FormKitListColors name="bracelet" label="Bracelet :" />
                    </div>
                    <div class="mr-[260px]">
                        <h2 class="font-orkney text-[38px] text-right font-bold  ">2. Choix des Materiaux :
                    </h2>
                    </div>                  

                    <div class="bg-blancFond font-orkney bg-opacity-60 text-[40px] font-bold p-5 mt-[-115px]">
                        <FormKit label="Materiaux (fonctionne pas) :" type="radio" :options="materiaux"
                            :sections-schema="{
                                inner: { $el: null },
                                decorator: { $el: null }
                            }" input-class="peer sr-only" options-class="flex gap-1"><template #label="context">
                                <div class="h-12 w-12 rounded-full border-2 peer-checked:border-red-600"
                                    :style="{ backgroundImage: `url('${context.option.value}')` }"></div>
                                <!-- :style="{backgroundImage: `url(${context.option.value})` }"
                    style="background-image:url('/images/image\ 22.png')" -->
                                <span class="sr-only">{{ context.option.label }}</span>
                            </template>
                        </FormKit>
                    </div>
                    <div class="mr-[500px]">
                        <h2 class="font-orkney text-[38px] text-right font-bold  ">3. Détails :
                    </h2>
                    </div>

                    <div class="grid grid-rows-4 gap-5 mb-[-50px]">
                        
                        
                        <div class=" bg-blancFond bg-opacity-60  p-5 ">
                            <FormKit name="libelle_montre" label="Nom de la montre :" />
                        </div>

                        <div class=" bg-blancFond  bg-opacity-60 p-5 ">
                            <FormKit name="taille_poignet" label="Taille de votre poignet (entre 14 et 18 cm) :"  />
                        </div>                       
                        <div class="p-5 ">
                            <FormKit name="date_montre" type="date" label="Date de commande :" wrapper-class="w-full flex bg-opacity-60 bg-blancFond gap-5 text-common p-8" />
                        </div>
                        <div class="p-2 mr-[350px] ">
                            <FormKit name="commande_montre" type="checkbox" label="Valider ma commande ? "
                        wrapper-class="flex p-2 text-common gap-5 bg-bkg-main-dark text-white"/>
                        </div>
                        
                       
                    </div>
                </div>
                
                
            </FormKit>
            <div class="p-5 flex justify-end items-end">
                    <button class="bg-bkg-main-dark font-orkney font-bold text-common p-5 text-white" @click="deleteMontre()">Annuler</button>
                </div>
        </div>
    </div>

   




</template>