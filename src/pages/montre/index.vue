<script setup lang="ts">
import ListeMontres from '@/components/ListeMontres.vue'

</script>
<template>
    <div class="grid grid-cols-2 justify-items-center p-10 mb-[-20px]">
        <div class="font-orkney font-light italic text-center text-[45px] mt-10 p-5 ">
            <p class="mb-5">
                Bienvenue Mr.X<br />
            </p>
            <p class="mb-5">
                Nous sommes ravis de vous revoir sur notre site.<br />
            </p>
            <p>
                Quels seront vos prochains modèles de montres ?
            </p>
            <div class="grid grid-cols-2 justify-items-center">
                <div class="flex items-center justify-center p-5">
                    <button class=" bg-bkg-main-dark text-white font-aquire font-medium text-common p-5 mb-10">
                        Voir mes modèles
                    </button>
                </div>
                <div class="flex items-center justify-center p-8">
                    <button class=" bg-bkg-main-dark text-white font-aquire font-medium text-common p-5 mb-10">
                        Crée un modèle
                    </button>
                </div>
            </div>
        </div>
        <img src="images/exemple22.svg" alt="exemple statique" height="400" width="600" />
    </div>


    <section>
        <div class="grid grid-cols-2 p-5 mt-6">
            <h2 class="font-orkney italic font-medium text-common text-center">Vos modèles</h2>
            <div class="mt-5">
                <img src="/images/line2.svg" alt="ligne2">
            </div>
        </div>
        <div class="grid grid-cols-2 justify-items-center">
            <div class="grid">
                <ListeMontres />
            </div>
            <div class="grid">
                <ListeMontres />
            </div>
        </div>
    </section>
</template>