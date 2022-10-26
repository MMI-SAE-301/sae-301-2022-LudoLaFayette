<template>

  <header class="bg-bkg-main-dark sticky top-0 ">
    <div class="flex justify-between ">
      <div class=" p-10 ">
        <router-link to="/"><img src="/images/logo.svg" alt="logo tik tak" height="100"></router-link>
      </div>
      <nav class="font-aquire flex items-center gap-10">
        <router-link to="/" class="text-white text-common">Acceuil</router-link>
        <router-link to="/" class="bg-white text-black text-common p-2">Personnalisation</router-link>
        <router-link to="/" class="bg-white text-black text-common mr-10 p-2">Connexion</router-link>
      </nav>
    </div>
  </header>

  <main class="bg-main-pattern">
    <nav>

      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/">
            <code class="font-mono">Acceuil</code>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/logingooglevue">
            <code class="font-mono">Se connecter avec Google</code>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/loginfacebookvue">
            <code class="font-mono">Se connecter avec Facebook</code>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/testmontrevue">
            <code class="font-mono">Vue de la montre seule</code>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/formmontrevue">
            <code class="font-mono">Créer une montre</code>
          </router-link>
        </li>
      </ul>
      <ul>
        <li>
          <router-link class="text-red-600 underline" to="/montre">
            <code class="font-mono">Voir les créations</code>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Affiche les pages -->
    <Suspense>
      <router-view class="m-2 border-2 p-2" />
    </Suspense>
  </main>
  <footer>
    <div class="grid grid-cols-3 bg-bkg-main-dark justify-between text-white font-aquire">
      <div class="grid text-center p-5">
        <h2 class="text-aquire text-common font-bold">Menu du site</h2>
        <nav class="grid text-center">
          <router-link to="/" class="text-white text-common mt-[-30px] ">Acceuil</router-link>
          <router-link to="/" class="text-white text-common ">Personnalisation</router-link>
          <router-link to="/" class="text-white text-common ">Connexion</router-link>
        </nav>
      </div>
      <div class="grid text-center font-aquire text-common font-bold p-5">
        <h2>Nous suivre</h2>
        <div class="grid grid-cols-4 mt-[-75px] justify-items-center">
          <img src="/images/FacebookCircled.svg" alt="Facebook logo">
          <img src="/images/InstagramCircle.svg" alt="Instragram logo">
          <img src="/images/TikTok.svg" alt="tikTok logo">
          <img src="/images/TwitterCircled.svg" alt="twitter logo">
        </div>

      </div>
      <div class="flex-col text-center text-common">
        <h2 class="font-bold p-5">Nous contacter</h2>

        <p >Tik-tak</p>
        <p>
          4 place tHaradin
        </p>
        <p>
          25200 Montbéliard
        </p>
        <p class="mt-5">
          Tik-tak@gmail.com
        </p>
        <p>
          012030405
        </p>
      </div>
    </div>



  </footer>

</template>

<script setup lang="ts">

</script>
