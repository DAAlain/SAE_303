const map = document.getElementById("map");

// Variable pour stocker le tooltip actuel
let currentTooltip = "";

// Fonction pour mettre une couleur suivant son intensité sur un pays suivant les données de chaque réseau
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
    const countryId = country.id; 
    const countryData = data[countryId]; 
    if (countryData) {
      const value = parseFloat(countryData); 
      const color = getColor(value, startColor, endColor); 
      country.style.fill = color; 

      // Ajouter l'événement hover pour afficher un tooltip avec les données
      country.addEventListener('mouseover', (event) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip'; 
        tooltip.innerHTML = `${countryId}: ${countryData} heures`; 

        // Ajouter le tooltip au body
        document.body.appendChild(tooltip); 

        // Mettre à jour la position du tooltip avec la souris
        const updateTooltipPosition = (e) => {
          tooltip.style.left = `${e.pageX + 10}px`; 
          tooltip.style.top = `${e.pageY + 10}px`; 
        };

        // Suivre la position de la souris
        document.addEventListener('mousemove', updateTooltipPosition);

        // Retirer le tooltip lorsqu'on sort du pays
        country.addEventListener('mouseout', () => {
          document.removeEventListener('mousemove', updateTooltipPosition);
          tooltip.remove(); 
        });
      });
    }
  });
}

// Fonction pour avoir la couleur suivant le temps passé sur l'application
function getColor(value, startColor, endColor) {
  const max = 50; 
  const min = 0;  

  value = Math.max(min, Math.min(max, value));

  const ratio = (value - min) / (max - min);

  const r = Math.round(startColor.r + ratio * (endColor.r - startColor.r));
  const g = Math.round(startColor.g + ratio * (endColor.g - startColor.g));
  const b = Math.round(startColor.b + ratio * (endColor.b - startColor.b));

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

