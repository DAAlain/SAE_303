   // Extraction des données
    const ADS = Reseaux.ADS;

    // Couleurs pour chaque segment
    const COLORS = ["#FF5733", "#FFBD33", "#75FF33", "#33FF57", "#33D4FF", "#335BFF", "#8D33FF"];

    // Référence au SVG
    const pieChart = document.getElementById("pie-chart");

    // Conversion des valeurs en nombres et calcul du total
    const total = Object.values(ADS).reduce((sum, value) => sum + parseFloat(value), 0);

    // Variables pour le tracé
    let cumulativeAngle = 0;

    // Création des segments
    Object.entries(ADS).forEach(([platform, value], index) => {
      const numericValue = parseFloat(value);
      const percentage = numericValue / total;
      const angle = percentage * 360; // Angle en degrés

      // Coordonnées pour la fin de l'arc
      const x = Math.cos((cumulativeAngle + angle) * Math.PI / 180);
      const y = Math.sin((cumulativeAngle + angle) * Math.PI / 180);

      // Grand arc ou petit arc
      const largeArc = angle > 180 ? 1 : 0;

      // Définition du chemin pour ce segment
      const pathData = `
        M 0 0 
        L ${Math.cos(cumulativeAngle * Math.PI / 180)} ${Math.sin(cumulativeAngle * Math.PI / 180)}
        A 1 1 0 ${largeArc} 1 ${x} ${y}
        Z
      `;

      // Création d'un élément SVG `<path>`
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathData);
      path.setAttribute("fill", COLORS[index % COLORS.length]);
      path.setAttribute("stroke", "#fff");
      path.setAttribute("stroke-width", "0.005");

      // Ajout du segment au SVG
      pieChart.appendChild(path);

      // Mise à jour de l'angle cumulé
      cumulativeAngle += angle;
    });






//Script pour le svg de la carte du monde

const map = document.getElementById("map");

// Créer un seul élément de tooltip à l'avance
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.position = 'absolute'; // Assurez-vous que le tooltip est positionné absolument
tooltip.style.display = 'none'; // Le tooltip est caché par défaut
document.body.appendChild(tooltip);  // Ajouter le tooltip au body

// Fonction pour mettre une couleur suivant son intensité sur un pays suivant les données de chaque réseau
function couleur(reseau) {
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
        // Mettre à jour le contenu du tooltip
        tooltip.innerHTML = `${countryId}: ${countryData} heures`;

        // Afficher le tooltip
        tooltip.style.display = 'block';

        // Mettre à jour la position du tooltip
        const updateTooltipPosition = (e) => {
          tooltip.style.left = `${e.pageX + 10}px`; 
          tooltip.style.top = `${e.pageY + 10}px`; 
        };

        // Suivre la position de la souris
        document.addEventListener('mousemove', updateTooltipPosition);

        // Retirer le tooltip lorsqu'on sort du pays
        country.addEventListener('mouseout', () => {
          tooltip.style.display = 'none'; 
          document.removeEventListener('mousemove', updateTooltipPosition); 
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