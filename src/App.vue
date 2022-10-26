<template>

  <header class="bg-bkg-main-dark sticky top-0 ">
    <div class="flex justify-between ">
      <div class="ml-10 p-10">
        <router-link to="/"><img src="/images/logo.svg" alt="logo tik tak"></router-link>
      </div>
      <nav class="font-aquire flex items-center gap-10">
        <router-link to="/" class="text-white text-[40px]">Acceuil</router-link>
        <router-link to="/" class="bg-white text-black text-[40px] p-2">Personnalisation</router-link>
        <router-link to="/" class="bg-white text-black text-[40px] mr-10 p-2">Connexion</router-link>
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
  <div class="flex bg-bkg-main-dark">
    <nav>
      <h2>Menu du site</h2>
      <router-link to="/" class="text-white text-[40px]">Acceuil</router-link>
        <router-link to="/" class="bg-white text-black text-[40px] p-2">Personnalisation</router-link>
        <router-link to="/" class="bg-white text-black text-[40px] mr-10 p-2">Connexion</router-link>
    </nav>
    <h2>Nous suivre</h2>

    <h2>Nous contacter</h2>
  </div>
  
 </footer>

</template>

<script setup lang="ts">

</script>
