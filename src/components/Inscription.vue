<template>
    <div class="grid grid-cols-3 justify-items-center pt-20">
        <div class="mt-[20px] w-[323px]">
            <img src="/images/line3A.svg" alt="ligne gauche exemples acceuil">
        </div>
        <h2 class="font-orkney italic text-[40px] text-center font-bold mb-8 text-darkModeFondMainBlack">Inscription</h2>
        <div class="mt-[20px] w-[323px]">
            <img src="/images/line3b.svg" alt="ligne droite exemples acceuil">
        </div>
    </div>




    <div class="bg-darkModeFondMainWhite bg-opacity-60 grid grid-rows-[7] font-orkney mt-[50px] ml-[200px] mr-[200px] pb-[-100px] text-darkModeFondMainBlack">
        <p class="font-light text-common p-4">Veuillez renseigner ces champs pour vous inscrire: </p>
        <form action="#" method="post" class="grid justify-items-start">
            <div class="p-5">
                <p>
                    <label for="nom" class="my-5 mx-5 flex flex-col text-common">Nom :
                        <input type="text" id="nom" name="nom" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder "
                            size="70" />
                    </label>
                </p>
            </div>
            <div class="p-5">
                <p>
                    <label for="prenom" class="my-5 mx-5 flex flex-col text-common">Prénom :
                        <input type="text" id="prenom" name="prenom" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder "
                            size="70" />
                    </label>
                </p>
            </div>
            <div class="p-5">
                <p>
                    <label for="sexe" class="my-5 mx-5 flex flex-col text-common">Sexe :
                        <input type="text" id="sexe" name="sexe" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder "
                            size="70" />
                    </label>
                </p>
            </div>
            <div class="p-5">
                <p>
                    <label for="Adresse" class="my-5 mx-5 flex flex-col text-common">Adresse :
                        <input type="text" id="Adress" name="Adresse" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder "
                            size="70" />
                    </label>
                </p>
            </div>       
            <div class="p-5">
                <p>
                    <label for="adressM" class="my-5 mx-5 flex flex-col text-common">Adresse mail :
                        <input type="text" id="adreseM" name="adresseM" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder "
                            size="70" />
                    </label>
                </p>
            </div>
            <div class="p-5 ">
                <p>
                    <label for="prenom" class="my-5 mx-5 flex flex-col text-common">Mot de passe :
                        <input type="text" id="name" name="name" value=""
                            class="my-3 mx-5 border-2 font-regular placeholder:text-base placeholder:text-placeholder w-auto"
                            size="70" />
                    </label>
                </p>
            </div>
        </form>       
        <div class="flex items-center justify-center p-8">
            <router-link to="/montre"><button class=" bg-darkModePureWhite text-darkModeMainTextBlack font-orkney font-normal text-common p-5 mb-10">
                S'inscrire
            </button></router-link>
        </div>
    </div>



</template>   