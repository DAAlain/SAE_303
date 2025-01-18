
const map = document.getElementById("map");

// Variable pour stocker le tooltip actuel
let currentTooltip = "";

// Fonction pour mettre une couleur et son intensité sur un pays suivant les données de chaque réseau
function couleur(reseau) {
  // Supprimer le tooltip actuel, s'il existe
  if (currentTooltip) {
    currentTooltip.remove();
    currentTooltip = "";
  }

  const { data, startColor, endColor } = reseau;

  // Sélectionner tous les pays de la carte
  const Pays = map.querySelectorAll("path");

  // Parcourir chaque pays et appliquer la couleur en fonction des données
  Pays.forEach((country) => {
    const countryId = country.id; // ID du pays dans la carte, qui doit correspondre aux codes pays (ex: "FR" pour la France)
    const countryData = data[countryId]; // Récupère les données pour le pays
    if (countryData) {
      const value = parseFloat(countryData); // Convertir en nombre
      const color = getColor(value, startColor, endColor); // Obtenir la couleur correspondant à l'intensité
      country.style.fill = color; // Appliquer la couleur au pays

      // Ajouter l'événement hover pour afficher un tooltip avec les données
      country.addEventListener('mouseover', (event) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip'; // Classe CSS pour le style
        tooltip.innerHTML = `${countryId}: ${countryData} heures`; // Afficher le pays et la donnée

        // Ajouter le tooltip au body
        document.body.appendChild(tooltip); 

        // Mettre à jour la position du tooltip avec la souris
        const updateTooltipPosition = (e) => {
          tooltip.style.left = `${e.pageX + 10}px`; // Décalage à droite
          tooltip.style.top = `${e.pageY + 10}px`;  // Décalage vers le bas
        };

        // Suivre la position de la souris
        document.addEventListener('mousemove', updateTooltipPosition);

        // Retirer le tooltip lorsqu'on sort du pays
        country.addEventListener('mouseout', () => {
          document.removeEventListener('mousemove', updateTooltipPosition);
          tooltip.remove(); 
        });

        // Garder une référence du tooltip actuel
        currentTooltip = tooltip;
      });
    }
  });
}

// Fonction pour mapper le temps passé sur l'application à une couleur
function getColor(value, startColor, endColor) {
  const max = 50; // Temps maximal pour l'échelle
  const min = 0;  // Temps minimal pour l'échelle

  // Clamp la valeur entre min et max
  value = Math.max(min, Math.min(max, value));

  // Normaliser la valeur entre 0 et 1
  const ratio = (value - min) / (max - min);

  // Interpoler les valeurs R, G, B
  const r = Math.round(startColor.r + ratio * (endColor.r - startColor.r));
  const g = Math.round(startColor.g + ratio * (endColor.g - startColor.g));
  const b = Math.round(startColor.b + ratio * (endColor.b - startColor.b));

  // Convertir en format hexadécimal
  return `rgb(${r}, ${g}, ${b})`;
}

// Écouteurs pour les boutons
document.getElementById("facebook").addEventListener("click", () => couleur(Reseaux.Facebook));
document.getElementById("youtube").addEventListener("click", () => couleur(Reseaux.Youtube));
document.getElementById("instagram").addEventListener("click", () => couleur(Reseaux.Instagram));
document.getElementById("tiktok").addEventListener("click", () => couleur(Reseaux.Tiktok));
document.getElementById("linkedin").addEventListener("click", () => couleur(Reseaux.Linkedin));
document.getElementById("snapchat").addEventListener("click", () => couleur(Reseaux.Snapchat));
document.getElementById("x").addEventListener("click", () => couleur(Reseaux.X));

