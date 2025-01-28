// Définition des réseaux et leurs couleurs
const SocialNetworks = {
    Facebook: {
        data: {},
        startColor: { r: 66, g: 103, b: 178 },  // Bleu Facebook clair
        endColor: { r: 59, g: 89, b: 152 }      // Bleu Facebook foncé
    },
    Instagram: {
        data: {},
        startColor: { r: 225, g: 48, b: 108 },  // Rose Instagram clair
        endColor: { r: 193, g: 53, b: 132 }     // Rose Instagram foncé
    },
    WhatsApp: {
        data: {},
        startColor: { r: 37, g: 211, b: 102 },  // Vert WhatsApp clair
        endColor: { r: 18, g: 140, b: 126 }     // Vert WhatsApp foncé
    },
    Youtube: {
        data: {},
        startColor: { r: 255, g: 0, b: 0 },     // Rouge YouTube clair
        endColor: { r: 139, g: 0, b: 0 }        // Rouge YouTube foncé
    },
    Tiktok: {
        data: {},
        startColor: { r: 238, g: 29, b: 82 },   // Rouge TikTok clair
        endColor: { r: 0, g: 0, b: 0 }          // Noir TikTok
    }
};

// Initialiser les données pour chaque réseau
function initializeSocialData() {
    const countries = Object.entries(socialMediaStats.countriesData)
        .filter(([key]) => key !== 'getCountryData' && key !== 'compareCountries');

    for (const [countryCode, countryData] of countries) {
        const usageStats = countryData.platforms.usageStats;
        const population = parseFloat(countryData.population.split(' ')[0]);

        // Pour chaque réseau social, calculer le pourcentage d'utilisation
        for (const network in SocialNetworks) {
            const networkKey = network.toLowerCase();
            if (usageStats[networkKey]) {
                const users = parseFloat(usageStats[networkKey].split(' ')[0]);
                const percentage = (users / population) * 100;
                SocialNetworks[network].data[countryCode] = percentage;
            }
        }
    }
}

// Fonction pour colorer la carte
function colorMap(network) {
    const { data, startColor, endColor } = SocialNetworks[network];
    const countries = map.querySelectorAll("path");
    
    // Mettre à jour les couleurs des boutons
    updateButtonColors(network);

    countries.forEach((country) => {
        const countryId = country.id.toLowerCase();
        const percentage = data[countryId];

        if (percentage !== undefined) {
            const color = getColor(percentage, startColor, endColor);
            country.style.fill = color;
        } else {
            country.style.fill = "#ccc";
        }
    });
}

// Fonction pour mettre à jour les couleurs des boutons
function updateButtonColors(selectedNetwork) {
    const buttons = document.querySelectorAll('.btreseau button');
    buttons.forEach(button => {
        const network = button.id.charAt(0).toUpperCase() + button.id.slice(1);
        if (network === selectedNetwork) {
            const { startColor } = SocialNetworks[network];
            button.style.backgroundColor = `rgb(${startColor.r}, ${startColor.g}, ${startColor.b})`;
            button.style.color = 'white';
        } else {
            button.style.backgroundColor = '#fff';
            button.style.color = '#000';
        }
    });
}

// Fonction pour afficher les informations au survol
function showTooltip(event, country) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    
    // Récupérer le réseau social actif
    const activeButton = document.querySelector('.btreseau button[style*="rgb"]');
    if (!activeButton) return;
    
    const network = activeButton.id.charAt(0).toUpperCase() + activeButton.id.slice(1);
    const percentage = SocialNetworks[network].data[country.id.toLowerCase()];
    
    if (percentage !== undefined) {
        tooltip.innerHTML = `
            <strong>${country.getAttribute('title')}</strong><br>
            ${network}: ${percentage.toFixed(1)}%
        `;
        
        tooltip.style.left = event.pageX + 10 + 'px';
        tooltip.style.top = event.pageY + 10 + 'px';
        
        document.body.appendChild(tooltip);
    }
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Fonction pour obtenir la couleur en fonction du pourcentage
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

// Initialiser les données et les événements
document.addEventListener('DOMContentLoaded', () => {
    initializeSocialData();
    
    // Ajouter les écouteurs d'événements pour les boutons
    document.getElementById("facebook").addEventListener("click", () => colorMap("Facebook"));
    document.getElementById("instagram").addEventListener("click", () => colorMap("Instagram"));
    document.getElementById("whatsapp").addEventListener("click", () => colorMap("WhatsApp"));
    document.getElementById("youtube").addEventListener("click", () => colorMap("Youtube"));
    document.getElementById("tiktok").addEventListener("click", () => colorMap("Tiktok"));
    
    // Ajouter les événements de survol pour tous les pays
    const countries = map.querySelectorAll("path");
    countries.forEach(country => {
        country.addEventListener('mouseover', (e) => showTooltip(e, country));
        country.addEventListener('mouseout', hideTooltip);
    });
    
    // Colorer la carte avec Facebook par défaut
    colorMap("Facebook");
});

// Ajouter le CSS pour le tooltip
const style = document.createElement('style');
style.textContent = `
    .tooltip {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 14px;
        pointer-events: none;
        z-index: 1000;
    }
`;
document.head.appendChild(style); 