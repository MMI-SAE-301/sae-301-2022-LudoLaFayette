--
-- code pour la création des tables
--
CREATE table montre(
    idMontre uuid primary key not null,
    libelleMontre varchar,
    ecranMontre varchar,
    boitierMontre varchar,
    braceletMontre varchar,
    materiauxBoitierMontre uuid,
    materiauxBraceletMontre uuid,
    commandeMontre bool,
    foreign key (materiauxBoitierMontre) references materiaux(idMateriaux),
    foreign key (materiauxBraceletMontre) references materiaux(idMateriaux)
);
CREATE table materiaux(
    idMateriaux uuid primary key not null,
    libelleMateriaux varchar,
    urlMateriaux varchar,
    idMontre uuid,
    foreign key (idMontre) references montre(idMontre)
);


--
-- code pour la création des vues
CREATE VIEW montre_materiaux
AS
SELECT montre.id_montre ,
       libelle_montre,
       ecran,
       bracelet,
       boitier,
       commande_montre,
       materiaux_boitier_montre.libelle_materiaux as materiaux_boitier_libelle,
       materiaux_bracelet_montre.libelle_materiaux as materiaux_bracelet_libelle

FROM montre,
     materiaux as materiaux_boitier_montre,
     materiaux as materiaux_bracelet_montre

WHERE montre.materiaux_boitier_montre = materiaux_boitier_montre.id_materiaux
  AND montre.materiaux_bracelet_montre = materiaux_bracelet_montre.id_materiaux;

CREATE VIEW allMontre AS
select * from montre;

CREATE VIEW allMateriaux AS
select * from materiaux;

Create view siCommandéparuser as Select libelle_montre, commande_montre, id_montre, user_montre
                                 from montre where commande_montre = true;


--
-- code pour la création des policies

CREATE POLICY "Lecture de montres crées aux inscrits" ON "public"."montre"
AS PERMISSIVE FOR SELECT
TO authenticated
USING ((uid() = user_montre))

CREATE POLICY "Ajouter les montres aux inscrits" ON "public"."montre"
AS PERMISSIVE FOR INSERT
TO authenticated
WITH CHECK ((uid() = user_montre))

CREATE POLICY "Modifier la montre par les inscrits et si non commandé" ON "public"."montre"
AS PERMISSIVE FOR UPDATE
TO authenticated
USING (((uid() = user_montre) AND (commande_montre = false)))
WITH CHECK ((uid() IN ( SELECT montre_1.user_montre FROM montre montre_1)))

CREATE POLICY "Suppression montre par le client seulement" ON "public"."montre"
AS PERMISSIVE FOR DELETE
TO authenticated
USING ((uid() = user_montre))
