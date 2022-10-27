<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { supabase, user } from '../supabase';

async function signIn(data, node) {
    const { user, error } = await (nvlUtilisateur.value
        ? supabase.auth.signUp(data)
        : supabase.auth.signIn(data));
    console.log(user, error);
    if (error) {
        console.error(error);
        node.setErrors([error.message]);
    }
}
const nvlUtilisateur = ref(false);
</script>


<template>
    <div class="grid grid-cols-3 justify-items-center pt-20">
        <div class="mt-[20px] w-[323px]">
            <img src="/images/line3A.svg" alt="ligne gauche exemples acceuil">
        </div>
        <h2 class="font-orkney italic text-[40px] text-center font-bold mb-8 ">Connexion</h2>
        <div class="mt-[20px] w-[323px]">
            <img src="/images/line3b.svg" alt="ligne droite exemples acceuil">
        </div>
    </div>




    <div class="bg-blancFond bg-opacity-60 grid grid-rows-[7] font-orkney mt-[50px] ml-[200px] mr-[200px] pb-[-100px]">


        <p class="font-light text-common p-4">Veuillez renseigner ces champs : </p>
        <div class="p-5 flex justify-center font-orkney ">
            <button v-if="user" @pointerdown="supabase.auth.signOut()">
                Se déconnecter ({{ user.email }})
            </button>
            <FormKit v-else type="form"
                :submit-attrs="{ classes: { input: 'flex items-center justify-center p-8 bg-white font-[80px] ml-[250px] mb-10 mt-10' } }"
                :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Connecter'" @submit="signIn">
                <div class="font-bold font-common">
                    <FormKit name="email" label="Adresse Mail :" type="email" />
                <FormKit name="password" label="Mot de passe :" type="password" />
                <div class="p-2 mr-[350px]">
                    <FormKit label="Nouvel utilisateur ?" name="nvlUtilisateur" type="checkbox" v-model="nvlUtilisateur"
                        wrapper-class="flex p-2 text-common gap-5 bg-blancFond text-black" />
                </div>
                </div>
                

            </FormKit>
        </div>
        <!-- <form class="grid justify-items-start">
            <div class="p-5">
                <p>
                    <label for="adressM" class="my-5 mx-5 flex flex-col text-common">Adresse mail :
                        <input type="text" id="adreseM" name="adresseM" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder "
                            size="70" />
                    </label>
                </p>
            </div>
            <div class="p-5 mt-[-80px]">
                <p>
                    <label for="prenom" class="my-5 mx-5 flex flex-col text-common">Mot de passe :
                        <input type="text" id="name" name="name" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder w-auto"
                            size="70" />
                    </label>
                </p>
            </div>
        </form> -->



        <!-- <div class="flex items-center justify-center p-4">
            <button class=" bg-white text-black font-orkney font-normal text-common p-5 mb-10">
                Connecter
            </button>
        </div> -->

        <div class="grid grid-cols-3 justify-items-center">
            <div class="mr-[-500px] mt-[20px]">
                <img src="/images/OuLine.svg" alt="ligne OU" />
            </div>
            <div class="font-light text-[35px] text-center ">
                <p>Ou</p>
            </div>
            <div class="ml-[-500px] mt-[20px]">
                <img src="/images/OuLine.svg" alt="ligne OU" />
            </div>
        </div>


        <div class="flex items-center justify-center p-8">
            <router-link to="/inscriptionvue"><button
                    class=" bg-white text-black font-orkney font-normal text-common p-5 mb-10">
                    S'inscrire
                </button></router-link>
        </div>

        <div class="grid grid-cols-3 justify-items-center">
            <div class="mr-[-500px] mt-[20px]">
                <img src="/images/OuLine.svg" alt="ligne OU" />
            </div>
            <div class="font-light text-[35px] text-center ">
                <p>Ou</p>
            </div>
            <div class="ml-[-500px] mt-[20px]">
                <img src="/images/OuLine.svg" alt="ligne OU" />
            </div>
        </div>

        <div class="flex items-center justify-center p-4">
            <button class=" bg-white text-black font-orkney font-normal text-common p-5 mb-10" v-if="user"
                @pointerdown="supabase.auth.signOut()">
                Se déconnecter ({{ user.email }})
            </button>
            <button class="flex bg-white text-black font-orkney font-normal text-common p-5 mb-10 gap-5" v-else
                @pointerdown="supabase.auth.signIn({ provider: 'google' })">
                <img src="/images/logoGoogle.png" alt="logo google" width="40" height="40" />
                Se connecter avec Google
            </button>
        </div>

        <div class="grid grid-cols-3 justify-items-center">
            <div class="mr-[-500px] mt-[20px]">
                <img src="/images/OuLine.svg" alt="ligne OU" />
            </div>
            <div class="font-light text-[35px] text-center ">
                <p>Ou</p>
            </div>
            <div class="ml-[-500px] mt-[20px]">
                <img src="/images/OuLine.svg" alt="ligne OU" />
            </div>
        </div>

        <div class="flex items-center justify-center p-4 ">
            <button class=" bg-white text-black font-orkney font-normal text-common p-5 mb-10 " v-if="user"
                @pointerdown="supabase.auth.signOut()">
                Se déconnecter ({{ user.email }})
            </button>
            <button class="flex bg-white text-black font-orkney font-normal text-common p-5 mb-10 gap-5" v-else
                @pointerdown="supabase.auth.signIn({ provider: 'facebook' })">
                <img src="/images/logoFacebook.png" alt="logo Fb" width="40" height="40" />

                Se connecter avec Facebook
            </button>
        </div>

    </div>



</template>   