// Ajouter au début du fichier
document.addEventListener('DOMContentLoaded', function() {
  createDonutChart();
});

function createDonutChart() {
    const svg = document.querySelector('.donut-chart');
    const data = socialMediaStats.platforms.top10;
    
    // Convertir les chaînes de caractères en nombres (en milliards/millions)
    const processedData = data.map(item => {
        const users = item.users.toLowerCase();
        let value = parseFloat(users.split(' ')[0]);
        if (users.includes('milliards')) {
            value = value * 1000; // Convertir en millions
        }
        return {
            name: item.name,
            value: value
        };
    });

    // Dimensions
    const width = 600;
    const height = 600;
    const radius = Math.min(width, height) / 2.5;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Mettre à jour le viewBox du SVG
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Nettoyer le SVG existant
    svg.innerHTML = '';

    // Groupe principal
    const g = createSVGElement('g');
    g.setAttribute('transform', `translate(${centerX},${centerY})`);
    svg.appendChild(g);

    // Calculer les angles pour chaque segment
    const total = processedData.reduce((sum, d) => sum + d.value, 0);
    let currentAngle = 0;

    // Créer les segments
    processedData.forEach((d, i) => {
        const angle = (d.value / total) * (2 * Math.PI);
        const largeArcFlag = angle > Math.PI ? 1 : 0;
        
        // Coordonnées des points
        const startX = radius * Math.cos(currentAngle);
        const startY = radius * Math.sin(currentAngle);
        const endX = radius * Math.cos(currentAngle + angle);
        const endY = radius * Math.sin(currentAngle + angle);

        // Créer le segment
        const segment = createSVGElement('path');
        const color = getNeonColor(i);
        
        // Créer le chemin d'arc
        const path = [
            `M ${startX * 0.6} ${startY * 0.6}`, // Point de départ (rayon intérieur)
            `L ${startX} ${startY}`, // Ligne vers le point extérieur
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc extérieur
            `L ${endX * 0.6} ${endY * 0.6}`, // Ligne vers le point intérieur
            `A ${radius * 0.6} ${radius * 0.6} 0 ${largeArcFlag} 0 ${startX * 0.6} ${startY * 0.6}`, // Arc intérieur
            'Z' // Fermer le chemin
        ].join(' ');

        segment.setAttribute('d', path);
        segment.setAttribute('fill', color);
        segment.setAttribute('stroke', '#1B1F3B');
        segment.setAttribute('stroke-width', '2');
        segment.setAttribute('filter', 'url(#neonGlow)');
        
        // Ajouter des événements de survol
        segment.addEventListener('mouseover', () => {
            segment.style.filter = 'url(#neonGlowIntense)';
            segment.style.transform = 'scale(1.1)';
            updateLabel(d.name, d.value);
        });
        segment.addEventListener('mouseout', () => {
            segment.style.filter = 'url(#neonGlow)';
            segment.style.transform = 'scale(1)';
            hideLabel();
        });

        g.appendChild(segment);
        currentAngle += angle;
    });

    // Ajouter les filtres pour l'effet néon
    const defs = createSVGElement('defs');
    defs.innerHTML = `
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <filter id="neonGlowIntense" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
    `;
    svg.insertBefore(defs, g);

    // Créer le label central
    const labelGroup = createSVGElement('g');
    labelGroup.setAttribute('class', 'chart-label');
    labelGroup.style.opacity = '0';
    
    const labelText = createSVGElement('text');
    labelText.setAttribute('text-anchor', 'middle');
    labelText.setAttribute('dy', '-10');
    labelText.setAttribute('fill', '#ffffff');
    labelText.setAttribute('font-family', 'Exo, serif');
    labelText.setAttribute('font-size', '24px');
    labelText.setAttribute('font-weight', '500');
    
    const labelValue = createSVGElement('text');
    labelValue.setAttribute('text-anchor', 'middle');
    labelValue.setAttribute('dy', '20');
    labelValue.setAttribute('fill', '#ffffff95');
    labelValue.setAttribute('font-family', 'Exo, serif');
    labelValue.setAttribute('font-size', '18px');
    
    labelGroup.appendChild(labelText);
    labelGroup.appendChild(labelValue);
    g.appendChild(labelGroup);

    function updateLabel(name, value) {
        labelText.textContent = name;
        labelValue.textContent = `${value} Millions d'utilisateurs`;
        labelGroup.style.opacity = '1';
    }

    function hideLabel() {
        labelGroup.style.opacity = '0';
    }

    // Ajouter les labels avec effet hover
    const label = g.append('text')
        .attr('class', 'donut-label')
        .attr('text-anchor', 'middle')
        .attr('dy', '0.35em')
        .style('fill', '#fff')
        .style('font-family', 'Exo, serif')
        .style('transition', 'all 0.3s ease')
        .text('');

    // Ajouter l'effet hover sur les segments
    segments.on('mouseover', function(d) {
        const segment = d3.select(this);
        segment.style('transform', 'scale(1.05)');
    })
    .on('mouseout', function() {
        const segment = d3.select(this);
        segment.style('transform', 'scale(1)');
    });
}


// Fonction utilitaire pour créer des éléments SVG
function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}

// Fonction pour générer des couleurs néon
function getNeonColor(index) {
    const colors = [
        '#4B4FA1',    // Bleu-violet lumineux
        '#5A5EBF',    // Bleu-violet plus clair
        '#6A6EDD',    // Violet électrique
        '#7A7EFF',    // Violet néon clair
        '#8B8FFF',    // Violet brillant
        '#9B9FFF',    // Violet lumineux
        '#ABAEFF',    // Violet très lumineux
        '#BCBEFF',    // Violet éclatant
        '#CDCEFF',    // Violet ultra-lumineux
        '#DEDEFF'     // Violet presque blanc
    ];
    return colors[index % colors.length];
}

//Script pour le svg de la carte du monde

const map = document.getElementById("map");

// Créer un seul élément de tooltip à l'avance
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
tooltip.style.position = 'absolute'; // Assurez-vous que le tooltip est positionné absolument
tooltip.style.display = 'none'; // Le tooltip est caché par défaut
document.body.appendChild(tooltip);  // Ajouter le tooltip au body

// Mapping des codes ISO vers les noms de pays
const countryMapping = {
  'FR': 'france',
  'US': 'unitedStates',
  'GB': 'unitedKingdom',
  'DE': 'germany',
  'IT': 'italy',
  'ES': 'spain',
  'BR': 'brazil',
  'IN': 'india',
  'JP': 'japan',
  'KR': 'southKorea',
  'CN': 'china',
  'RU': 'russia',
  'AU': 'australia',
  'CA': 'canada',
  'ZA': 'southAfrica',
  'ID': 'indonesia',
  'TR': 'turkey',
  'NL': 'netherlands',
  'SE': 'sweden',
  'PT': 'portugal',
  'BE': 'belgium',
  'CH': 'switzerland',
  'PL': 'poland',
  'TH': 'thailand',
  'VN': 'vietnam',
  'PH': 'philippines',
  'MY': 'malaysia',
  'SG': 'singapore',
  'IE': 'ireland',
  'DK': 'denmark',
  'NO': 'norway',
  'FI': 'finland',
  'AT': 'austria',
  'GR': 'greece',
  'CZ': 'czechRepublic',
  'HU': 'hungary',
  'RO': 'romania',
  'IL': 'israel',
  'AE': 'uae',
  'SA': 'saudiArabia',
  'EG': 'egypt',
  'MA': 'morocco',
  'NG': 'nigeria',
  'KE': 'kenya',
  'NZ': 'newZealand',
  'CO': 'colombia',
  'PE': 'peru',
  'CL': 'chile',
  'AR': 'argentina',
  'MX': 'mexico',
  'UG': 'uganda',
  'ET': 'ethiopia',
  'MG': 'madagascar',
  'MZ': 'mozambique',
  'ZW': 'zimbabwe',
  'ZM': 'zambia',
  'AO': 'angola',
  'NA': 'namibia',
  'TZ': 'tanzania',
  'RW': 'rwanda',
  'SO': 'somalia',
  'SD': 'sudan',
  'SS': 'southSudan',
  'ML': 'mali',
  'BF': 'burkinaFaso',
  'NE': 'niger',
  'TG': 'togo',
  'BJ': 'benin',
  'LR': 'liberia',
  'SL': 'sierraLeone',
  'GA': 'gabon'
};

console.log('Données disponibles:', socialMediaStats.countriesData);
// Créer un objet Reseaux qui utilise les données de socialMediaStats
const Reseaux = {
  Facebook: {
    data: Object.fromEntries(
      Object.entries(countryMapping).map(([isoCode, countryName]) => [
        isoCode,
        socialMediaStats.countriesData[countryName]?.platforms?.usageStats?.facebook ? 
          parseFloat(socialMediaStats.countriesData[countryName].platforms.usageStats.facebook.match(/[\d.]+/)[0]) : 0
      ])
    ),
    startColor: { r: 255, g: 255, b: 255 },
    endColor: { r: 66, g: 103, b: 178 }
  },
  Youtube: {
    data: Object.fromEntries(
      Object.entries(countryMapping).map(([isoCode, countryName]) => [
        isoCode,
        socialMediaStats.countriesData[countryName]?.platforms?.usageStats?.youtube ? 
          parseFloat(socialMediaStats.countriesData[countryName].platforms.usageStats.youtube.match(/[\d.]+/)[0]) : 0
      ])
    ),
    startColor: { r: 255, g: 255, b: 255 },
    endColor: { r: 255, g: 0, b: 0 }
  },
  Instagram: {
    data: Object.fromEntries(
      Object.entries(countryMapping).map(([isoCode, countryName]) => [
        isoCode,
        socialMediaStats.countriesData[countryName]?.platforms?.usageStats?.instagram ? 
          parseFloat(socialMediaStats.countriesData[countryName].platforms.usageStats.instagram.match(/[\d.]+/)[0]) : 0
      ])
    ),
    startColor: { r: 255, g: 255, b: 255 },
    endColor: { r: 225, g: 48, b: 108 }
  },
  Tiktok: {
    data: Object.fromEntries(
      Object.entries(countryMapping).map(([isoCode, countryName]) => [
        isoCode,
        socialMediaStats.countriesData[countryName]?.platforms?.usageStats?.tiktok ? 
          parseFloat(socialMediaStats.countriesData[countryName].platforms.usageStats.tiktok.match(/[\d.]+/)[0]) : 0
      ])
    ),
    startColor: { r: 255, g: 255, b: 255 },
    endColor: { r: 37, g: 244, b: 238 }
  },
  Whatsapp: {
    data: Object.fromEntries(
      Object.entries(countryMapping).map(([isoCode, countryName]) => [
        isoCode,
        socialMediaStats.countriesData[countryName]?.platforms?.usageStats?.whatsapp ? 
          parseFloat(socialMediaStats.countriesData[countryName].platforms.usageStats.whatsapp.match(/[\d.]+/)[0]) : 0
      ])
    ),
    startColor: { r: 255, g: 255, b: 255 },
    endColor: { r: 37, g: 211, b: 102 }
  }
};

console.log(Reseaux);

// Fonction pour mettre une couleur suivant son intensité sur un pays suivant les données de chaque réseau
function couleur(reseau) {
  const { data, startColor, endColor } = reseau;
  const Pays = map.querySelectorAll("path");
  
  // Supprimer tous les événements existants et réinitialiser les styles
  Pays.forEach((country) => {
    // Supprimer tous les écouteurs d'événements existants
    const oldHandleMouseOver = country.handleMouseOver;
    const oldHandleMouseOut = country.handleMouseOut;
    if (oldHandleMouseOver) country.removeEventListener('mouseover', oldHandleMouseOver);
    if (oldHandleMouseOut) country.removeEventListener('mouseout', oldHandleMouseOut);
    if (country.updateTooltipPosition) {
      document.removeEventListener('mousemove', country.updateTooltipPosition);
    }
    
    // Réinitialiser les propriétés
    country.handleMouseOver = null;
    country.handleMouseOut = null;
    country.updateTooltipPosition = null;
    country.style.fill = '#000000'; // Couleur noire par défaut
  });

  // Appliquer les nouvelles couleurs et événements
  Pays.forEach((country) => {
    const countryId = country.id;
    const countryData = data[countryId];
    
    if (countryData && countryData > 0) {
      const color = getColor(countryData, startColor, endColor);
      country.style.fill = color;

      // Créer la fonction de gestion du survol
      function handleMouseOver(event) {
        const countryName = countryMapping[countryId];
        const countryInfo = countryName ? socialMediaStats.countriesData[countryName] : null;
        const platformName = Object.keys(Reseaux).find(key => Reseaux[key] === reseau);
        
        if (countryInfo?.platforms?.usageStats) {
          const platformStats = countryInfo.platforms.usageStats[platformName.toLowerCase()];
          if (platformStats) {
            tooltip.innerHTML = `${countryId}: ${platformStats}`;
            tooltip.style.display = 'block';
            
            // Mettre à jour la position du tooltip
            const updateTooltipPosition = (e) => {
              tooltip.style.left = `${e.pageX + 10}px`;
              tooltip.style.top = `${e.pageY + 10}px`;
            };
            
            updateTooltipPosition(event);
            document.addEventListener('mousemove', updateTooltipPosition);
            country.updateTooltipPosition = updateTooltipPosition;
          }
        }
      }

      // Créer la fonction de gestion de la sortie
      function handleMouseOut() {
        tooltip.style.display = 'none';
        if (country.updateTooltipPosition) {
          document.removeEventListener('mousemove', country.updateTooltipPosition);
          country.updateTooltipPosition = null;
        }
      }

      // Stocker les références aux fonctions
      country.handleMouseOver = handleMouseOver;
      country.handleMouseOut = handleMouseOut;

      // Ajouter les écouteurs d'événements
      country.addEventListener('mouseover', handleMouseOver);
      country.addEventListener('mouseout', handleMouseOut);
    }
  });
}

// Fonction pour avoir la couleur suivant le temps passé sur l'application
function getColor(value, startColor, endColor) {
  const max = 50; 
  const min = 0;  

  value = Math.max(min, Math.min(max, value));
  console.log('Valeur normalisée:', value); // Vérifie la normalisation

  const ratio = (value - min) / (max - min);
  console.log('Ratio:', ratio); // Vérifie le ratio

  const r = Math.round(startColor.r + ratio * (endColor.r - startColor.r));
  const g = Math.round(startColor.g + ratio * (endColor.g - startColor.g));
  const b = Math.round(startColor.b + ratio * (endColor.b - startColor.b));

  const color = `rgb(${r}, ${g}, ${b})`;
  console.log('Couleur finale:', color); // Vérifie la couleur finale
  return color;
}

// Écouteurs pour les boutons
document.getElementById("facebook").addEventListener("click", () => couleur(Reseaux.Facebook));
document.getElementById("youtube").addEventListener("click", () => couleur(Reseaux.Youtube));
document.getElementById("instagram").addEventListener("click", () => couleur(Reseaux.Instagram));
document.getElementById("tiktok").addEventListener("click", () => couleur(Reseaux.Tiktok));
document.getElementById("whatsapp").addEventListener("click", () => couleur(Reseaux.Whatsapp));

/*document.getElementById("linkedin").addEventListener("click", () => couleur(Reseaux.Linkedin));
document.getElementById("snapchat").addEventListener("click", () => couleur(Reseaux.Snapchat));
document.getElementById("x").addEventListener("click", () => couleur(Reseaux.X));*/

const isoList = Array.from(map.querySelectorAll("path")).map(path => path.id);
console.log(isoList);