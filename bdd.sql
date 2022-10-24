--
-- code pour la création des tables
--
-- CREATE table montre(
--     idMontre uuid primary key not null,
--     libelleMontre varchar,
--     ecranMontre varchar,
--     boitierMontre varchar,
--     braceletMontre varchar,
--     materiauxBoitierMontre uuid,
--     materiauxBraceletMontre uuid,
--     commandeMontre bool,
--     foreign key (materiauxBoitierMontre) references materiaux(idMateriaux),
--     foreign key (materiauxBraceletMontre) references materiaux(idMateriaux)
-- );
-- CREATE table materiaux(
--     idMateriaux uuid primary key not null,
--     libelleMateriaux varchar,
--     urlMateriaux varchar,
--     idMontre uuid,
--     foreign key (idMontre) references montre(idMontre)
-- );








--
-- code pour la création des vues
--




--
-- code pour la création des policies
--