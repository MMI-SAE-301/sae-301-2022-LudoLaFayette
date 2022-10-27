<template>
  <div class="grid grid-cols-2 justify-items-center p-10 mb-[-20px]">
    <div class="font-orkney font-light italic text-center text-[45px] mt-10 p-5 text-darkModeMainTextBlack">
      <p class="mb-5">
        Le temps est un précieux atout.<br />
      </p>
      <p class="mb-5">
        On pense rarement à prendre le temps de créer sa propre montre.<br />
      </p>
      <p>
        Dépêchez-vous, ca fait Tik-Tak.
      </p>
    </div>

    <img src="images/montreAcceuil.png" alt="montre Acceuil" height="175" width="250" />
  </div>
  <div class="flex items-center justify-center p-8">
    <button class=" bg-darkModeFondMainBlack text-darkModeMainTextWhite font-aquire font-medium text-common p-5 mb-10">
      Decouvrir
    </button>
  </div>

  <div class="grid grid-cols-2 justify-items-center p-8">
    <div class="ml-[80px] mt-3">
      <img src="/images/line1.svg" alt="ligne1" />
    </div>
    <h2 class="font-orkney italic font-medium text-common text-right ml-[-30px] mt-3 text-darkModeMainTextBlack">Personnalisation</h2>
  </div>

  <div class="grid grid-cols-2 justify-items-center p-10 mb-[-200px]">
    <div class="grid grid-rows-2 justify-items-center p-8">
      <img src="images/items.webp" alt="ensemble de items électroniques" height="175" width="500" />
      <div class="">
       <router-link to="/formmontrevue"><button class=" bg-darkModeFondMainBlack text-darkModeMainTextWhite font-aquire font-medium text-common p-5 ">
          Personnaliser
        </button></router-link>
      </div>
    </div>
    <div class="font-orkney font-light text-center text-common items-center  p-5 text-darkModeMainTextBlack ">
      <p class="mb-5">
        Votre montre à votre image.<br />
      </p>
      <p class="mb-5">
        Profitez de la palette de couleurs ou encore des matériaux que propose le site afin de rendre votre montre aussi
        unique que vous.<br />
      </p>
      <p>
        Vous pourrez ainsi l’associer au style de votre smartphone ou encore de vos écouteurs.
      </p>
    </div>
  </div>


  <div class="grid grid-cols-3 justify-items-center">
    <div class="mt-[20px]">
      <img src="/images/line3A.svg" alt="ligne gauche exemples acceuil">
    </div>

    <h2 class="font-orkney italic font-medium text-common text-center text-darkModeMainTextBlack">Exemples de montres</h2>

    <div class="mt-[20px]">
      <img src="/images/line3b.svg" alt="ligne droite exemples acceuil">
    </div>

  </div>

  <div class="grid grid-cols-4 bg-blancFond bg-opacity-60 justify-items-center p-20 ">
    <div>
      <img src="/images/chevron-left.svg" alt="fleche gauche">
    </div>
    <div>
      <img src="/images/exempleMontre1.svg" alt="montre1">
    </div>
    <div>
      <img src="/images/exempleMontre2.svg" alt="montre2">
    </div>
    <div>
      <img src="/images/chevron-right.svg" alt="fleche droite">
    </div>

  </div>

  <div class="grid grid-cols-2 p-5 mt-6">
    <h2 class="font-orkney italic font-medium text-common text-center text-darkModeMainTextBlack">Connexion</h2>
    <div class="mt-5">
      <img src="/images/line2.svg" alt="ligne2">
    </div>
  </div>

  <div class="grid grid-cols-2 justify-items-center p-10 mb-[-20px]">
    <div class="font-orkney font-light text-center text-common text-darkModeMainTextBlack  ">
      <p class="mb-5">
        Vous voulez customiser pas une seule montre, mais plusieurs dans le futur ?<br />
      </p>
      <p class="mb-5">
        Créez un compte dès aujourd’hui afin de bénéficier de l’enregistrement de plusieurs montres sur le long terme.
      </p>
    </div>
    <div class="grid grid-rows-2 justify-items-center mb-[-200px]">
      <img src="images/connexion.png" alt="connexion" height="300" width="425" />
      <div class="">
        <router-link to="/connexiondeconnexionvue"><button class=" bg-darkModeFondMainBlack text-darkModeMainTextWhite font-aquire font-medium text-common p-5 ">
          Se connecter
        </button> </router-link>
      </div>
    </div>
    
  </div>

</template>