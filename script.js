
function scrollToBottom(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}
function goToSelection(){
   document.getElementById("center").scrollIntoView({
     behavior: "smooth"
   });
}
function goToSelection1(){
   document.getElementById("acceuil").scrollIntoView({
     behavior: "smooth"
   });
}


(function () {
    const carousel = document.getElementById('heroCarousel');
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoScrollInterval;

    if (!carousel || slideCount === 0) return;

    carousel.style.scrollBehavior = 'smooth';

    function goToSlide(index) {
        if (index >= slideCount) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slideCount - 1;
        } else {
            currentIndex = index;
        }

        // Correction : scroll uniquement dans le carrousel, pas dans toute la page
        const targetSlide = slides[currentIndex];
        const scrollAmount = targetSlide.offsetLeft - carousel.offsetLeft;

        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function startAutoPlay() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(nextSlide, 1000); // Changé à 3 secondes
    }

    function stopAutoPlay() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    let scrollTimeout;
    carousel.addEventListener('scroll', function () {
        stopAutoPlay();

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            let closestIndex = 0;
            let minDistance = Infinity;

            slides.forEach((slide, idx) => {
                const rect = slide.getBoundingClientRect();
                const carouselRect = carousel.getBoundingClientRect();
                const distance = Math.abs(rect.left - carouselRect.left);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = idx;
                }
            });

            currentIndex = closestIndex;
            startAutoPlay();
        }, 150);
    });

    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    startAutoPlay();

    console.log('Carrousel démarré - défilement corrigé');
})();


///////////////////////////////////////////////

// Tableau contenant toutes les informations des produits
const productsData = [
    // Produits pour la section mobile/phone
    {
        id: 1,
        section: "phone",
        badge: "Authentique",
        image: "img/11.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "600",
        currency: "Fcfa",
        isFavorite: false
    },
    {
        id: 2,
        section: "phone",
        badge: "Authentique",
        image: "img/11.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "450",
        currency: "Fcfa",
        isFavorite: false
    },
    {
        id: 3,
        section: "phone",
        badge: "Nouveau",
        image: "img/11.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "780",
        currency: "Fcfa",
        isFavorite: false
    },
    {
        id: 4,
        section: "phone",
        badge: "Authentique",
        image: "img/11.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "320",
        currency: "Fcfa",
        isFavorite: false
    },

    // Produits pour la section tablette
    {
        id: 21,
        section: "tablet",
        badge: "Authentique",
        image: "img/image 12.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "320",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "small"
    },
    {
        id: 22,
        section: "tablet",
        badge: "Authentique",
        image: "img/image 12.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "320",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "small"
    },
    {
        id: 23,
        section: "tablet",
        badge: "Authentique",
        image: "img/image 12.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "320",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "small"
    },
    {
        id: 24,
        section: "tablet",
        badge: "Authentique",
        image: "img/image 12.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "320",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "small"
    },
    {
        id: 25,
        section: "tablet",
        badge: "Authentique",
        image: "img/image 12.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "320",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "small"
    },


    // Produits pour la section desktop
    {
        id: 8,
        section: "desktop",
        badge: "Authentique",
        image: "img/image 17.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "950",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "large"
    },
    {
        id: 9,
        section: "desktop",
        badge: "Nouveau",
        image: "img/image 17.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "1200",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "large"
    },
    {
        id: 10,
        section: "desktop",
        badge: "Authentique",
        image: "img/image 17.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "850",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "large"
    },
    {
        id: 11,
        section: "desktop",
        badge: "Authentique",
        image: "img/image 17.png",
        title: "Lorem Ipsum is simply",
        subtitle: "Lorem Ipsum",
        price: "850",
        currency: "Fcfa",
        isFavorite: false,
        cardSize: "large"
    }
];

// Fonction pour générer une carte produit
function createProductCard(product) {
    const card = document.createElement('div');

    // Déterminer les classes CSS
    let cardClasses = 'product-card';
    if (product.cardSize === 'small') {
        cardClasses += ' product-card--small';
    } else if (product.cardSize === 'large') {
        cardClasses += ' product-card--large';
    }
    card.className = cardClasses;
    card.setAttribute('data-product-id', product.id);

    // Badge
    const badge = document.createElement('span');
    badge.className = 'product-badge';
    badge.textContent = product.badge;
    card.appendChild(badge);

    // Image produit
    const productImg = document.createElement('img');
    productImg.className = 'product-card__img';
    productImg.src = product.image;
    productImg.alt = product.title;
    card.appendChild(productImg);

    // Bouton favoris
    const favBtn = document.createElement('img');
    favBtn.className = 'product-fav';
    favBtn.src = product.isFavorite ? 'img/heart-filled.png' : 'img/ellipse 6.png';
    favBtn.alt = 'Favoris';
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(product.id);
    });
    card.appendChild(favBtn);

    // Titre
    const title = document.createElement('h4');
    title.className = 'product-title';
    title.textContent = product.title;
    card.appendChild(title);

    // Sous-titre
    const subtitle = document.createElement('p');
    subtitle.className = 'product-subtitle';
    subtitle.textContent = product.subtitle;
    card.appendChild(subtitle);

    // Prix
    const price = document.createElement('p');
    price.className = 'product-price';
    price.innerHTML = `<strong>${product.price} mil</strong> <span>${product.currency}</span>`;
    card.appendChild(price);

    return card;
}

// Fonction pour ajouter un nouveau produit
function addProduct(product) {
    // Ajouter au tableau
    productsData.push(product);

    // Recharger les produits de la section correspondante
    reloadSectionProducts(product.section);
}

// Fonction pour recharger les produits d'une section spécifique
function reloadSectionProducts(section) {
    const sectionProducts = productsData.filter(p => p.section === section);
    const container = getSectionContainer(section);

    if (container) {
        // Vider le conteneur
        const scrollDiv = container.querySelector('.product-scroll');
        if (scrollDiv) {
            scrollDiv.innerHTML = '';

            // Ajouter les produits
            sectionProducts.forEach(product => {
                const card = createProductCard(product);
                scrollDiv.appendChild(card);
            });
        }
    }
}

// Fonction pour obtenir le conteneur d'une section
function getSectionContainer(section) {
    switch (section) {
        case 'phone':
            return document.querySelector('.shop-section--phone');
        case 'tablet':
            return document.querySelector('.shop-section--tablet');
        case 'desktop':
            return document.querySelector('.shop-section--desktop');
        default:
            return null;
    }
}

// Fonction pour basculer l'état favori
function toggleFavorite(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        product.isFavorite = !product.isFavorite;

        // Mettre à jour l'interface
        const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
        if (card) {
            const favBtn = card.querySelector('.product-fav');
            favBtn.src = product.isFavorite ? 'img/heart-filled.png' : 'img/ellipse 6.png';
        }

        // Sauvegarder dans localStorage
        saveFavoritesToLocalStorage();
    }
}

// Sauvegarder les favoris dans localStorage
function saveFavoritesToLocalStorage() {
    const favorites = productsData.filter(p => p.isFavorite).map(p => p.id);
    localStorage.setItem('productFavorites', JSON.stringify(favorites));
}

// Charger les favoris depuis localStorage
function loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('productFavorites');
    if (savedFavorites) {
        const favoriteIds = JSON.parse(savedFavorites);
        productsData.forEach(product => {
            product.isFavorite = favoriteIds.includes(product.id);
        });
    }
}

// Initialiser toutes les sections
function initializeAllSections() {
    loadFavoritesFromLocalStorage();

    // Initialiser chaque section
    ['phone', 'tablet', 'desktop'].forEach(section => {
        reloadSectionProducts(section);
    });
}

// Fonction pour filtrer les produits par prix
function filterProductsByPrice(maxPrice) {
    return productsData.filter(product => parseInt(product.price) <= maxPrice);
}

// Fonction pour filtrer les produits par badge
function filterProductsByBadge(badge) {
    return productsData.filter(product => product.badge === badge);
}

// Fonction pour obtenir tous les produits
function getAllProducts() {
    return [...productsData];
}

// Fonction pour supprimer un produit
function deleteProduct(productId) {
    const index = productsData.findIndex(p => p.id === productId);
    if (index !== -1) {
        productsData.splice(index, 1);
        const product = productsData[index];
        if (product) {
            reloadSectionProducts(product.section);
        }
        return true;
    }
    return false;
}

// Fonction pour mettre à jour un produit
function updateProduct(productId, updatedData) {
    const index = productsData.findIndex(p => p.id === productId);
    if (index !== -1) {
        productsData[index] = { ...productsData[index], ...updatedData };
        reloadSectionProducts(productsData[index].section);
        return true;
    }
    return false;
}

// Exemple d'ajout d'un nouveau produit
function addNewProductExample() {
    const newProduct = {
        id: productsData.length + 1,
        section: "phone",
        badge: "Nouveau",
        image: "img/new-product.png",
        title: "Nouveau produit",
        subtitle: "Description courte",
        price: "999",
        currency: "Fcfa",
        isFavorite: false
    };

    addProduct(newProduct);
    console.log("Nouveau produit ajouté !");
}

// Exporter les fonctions pour une utilisation globale
window.productsManager = {
    addProduct,
    deleteProduct,
    updateProduct,
    getAllProducts,
    filterProductsByPrice,
    filterProductsByBadge,
    addNewProductExample,
    reloadSectionProducts,
    toggleFavorite
};

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initializeAllSections();
    console.log("Tous les produits ont été chargés dynamiquement !");
});

