<template>

  <header class="flex bg-bkg-main-dark">
    <div class="flex-row">
      <div class="ml-10  ">
        <router-link to="/"><img src="/images/logo.svg" alt="logo tik tak"></router-link>        
      </div>
      <nav class="text-white font-aquire">
        <router-link to="/">Acceuil</router-link>
        <router-link to="/">Personnalisation</router-link>
        <router-link to="/">Connexion</router-link>
      </nav>
    </div>
  </header>
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
</template>

<script setup lang="ts">

</script>
