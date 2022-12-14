export interface Montre {
  id_montre?: string;
  ecran?: string;
  boitier?: string;
  bracelet?: string;
};
export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};
export const materiaux = [
  {
    value: "/images/cuir.jpg",
    label: "Cuir",
  },
  {
    value: "/images/acier.jpg",
    label: "Acier",
  },
  {
    value: "/images/cuivre.jpg",
    label: "Cuivre",
  },
  {
    value: "/images/or.jpg",
    label: "Or",
  },
  {
    value: "/images/plastique.jpg",
    label: "Plastique",
  },
];