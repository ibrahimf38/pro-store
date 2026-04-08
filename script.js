
function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    })
}
function goToSelection() {
    document.getElementById("center").scrollIntoView({
        behavior: "smooth"
    });
}
function goToSelection1() {
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
        autoScrollInterval = setInterval(nextSlide, 1000);
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


// ============================================
// SIDEBAR CARROUSEL (sidebar-nav)
// ============================================

(function initSidebarCarousel() {
    // 1. Liste des images pour le carrousel (remplacez par vos vraies images)
    const galleryImages = [
        { src: "img/image 5.png", alt: "Produit 1" },
        { src: "img/image 6.png", alt: "Produit 2" },
        { src: "img/image 8.png", alt: "Produit 3" },
        { src: "img/image 22.png", alt: "Produit 4" },
        { src: "img/image 23.png", alt: "Produit 5" },
        { src: "img/image 24.png", alt: "Produit 6" },
        { src: "img/image 25.png", alt: "Produit 7" },
        { src: "img/image 21.png", alt: "Produit 8" },
        { src: "img/image 20.png", alt: "Produit 9" },
    ];

    const galleryContainer = document.querySelector('.sidebar-gallery-plus');
    const prevBtn = document.querySelector('.sidebar-nav__btn:first-child');
    const nextBtn = document.querySelector('.sidebar-nav__btn:last-child');

    if (!galleryContainer || !prevBtn || !nextBtn) {
        console.warn('Sidebar carousel elements not found');
        return;
    }

    // 2. Générer les miniatures
    function buildGallery() {
        galleryContainer.innerHTML = '';

        galleryImages.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'carousel-item';
            item.setAttribute('data-index', index);

            const image = document.createElement('img');
            image.src = img.src;
            image.alt = img.alt;

            item.appendChild(image);
            galleryContainer.appendChild(item);
        });
    }

    // 3. Fonction de défilement
    function scrollGallery(direction) {
        const items = document.querySelectorAll('.carousel-item');
        if (items.length === 0) return;

        // Calculer la largeur d'un élément + la marge
        const itemWidth = items[0].offsetWidth;
        const computedStyle = window.getComputedStyle(galleryContainer);
        const gap = parseInt(computedStyle.gap) || 16;
        const scrollAmount = itemWidth + gap;

        const currentScroll = galleryContainer.scrollLeft;
        let newScroll;

        if (direction === 'next') {
            newScroll = currentScroll + scrollAmount;
        } else {
            newScroll = currentScroll - scrollAmount;
        }

        galleryContainer.scrollTo({
            left: newScroll,
            behavior: 'smooth'
        });
    }

    // 4. Événements des boutons
    prevBtn.addEventListener('click', () => scrollGallery('prev'));
    nextBtn.addEventListener('click', () => scrollGallery('next'));

    // 5. Optionnel : clic sur une image pour l'afficher en grand
    function handleImageClick() {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                // Retirer la classe active de tous
                items.forEach(i => i.classList.remove('active'));
                // Ajouter la classe active sur l'élément cliqué
                item.classList.add('active');
                console.log(`Image sélectionnée : ${item.getAttribute('data-index')}`);
            });
        });
    }

    // 6. Initialisation
    buildGallery();

    // Observer l'ajout des éléments pour attacher les événements
    const observer = new MutationObserver(() => {
        handleImageClick();
    });
    observer.observe(galleryContainer, { childList: true });

    handleImageClick();

    console.log('Sidebar carousel initialized');
})();


// ============================================
// SIDEBAR GALLERY - Smart Animation 400ms
// ============================================

(function initSidebarGallery() {
    // Images de la galerie
    const galleryImages = [
        { src: "img/12.png", alt: "Gallery 1" },
        { src: "img/11.png", alt: "Gallery 2" },
        { src: "img/14.png", alt: "Gallery 3" },
        { src: "img/15.png", alt: "Gallery 4" },
        { src: "img/11.png", alt: "Gallery 5" },
        { src: "img/16.png", alt: "Gallery 6" },
        { src: "img/17.png", alt: "Gallery 7" }
    ];

    const galleryContainer = document.querySelector('.sidebar-gallery');
    if (!galleryContainer) {
        console.warn('Sidebar gallery container not found');
        return;
    }

    // Style du conteneur
    galleryContainer.style.cssText = `
        position: relative;
        width: 280px;
        height: 300px;
        overflow: hidden;
        border-radius: 10px;
    `;

    // Créer le track pour l'animation
    const track = document.createElement('div');
    track.className = 'gallery-track';
    track.style.cssText = `
        display: flex;
        width: 250px;
        height: 280px;
        transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        will-change: transform;
    `;
    galleryContainer.appendChild(track);

    // Créer les slides
    galleryImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'gallery-slide';
        slide.style.cssText = `
            flex: 0 0 100%;
            height: 100%;
        `;

        const image = document.createElement('img');
        image.src = img.src;
        image.alt = img.alt;
        image.style.cssText = `
            width: 250px;
            height: 280px;
            object-fit: cover;
            transition: transform 400ms ease;
        `;

        slide.appendChild(image);
        track.appendChild(slide);
    });

    // Animation smart : changement d'image automatique en boucle
    let currentIndex = 0;
    const totalSlides = galleryImages.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;

        // Effet smart : zoom léger sur l'image active
        const slides = document.querySelectorAll('.gallery-slide img');
        slides.forEach((img, i) => {
            if (i === currentIndex) {
                img.style.transform = 'scale(1)';
            } else {
                img.style.transform = 'scale(0.95)';
            }
        });
    }


    setInterval(nextSlide, 1000);

    // Animation au survol : pause
    let intervalId = setInterval(nextSlide, 1000);

    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    galleryContainer.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 1000);
    });

    // Initialisation
    nextSlide();

    console.log('Sidebar gallery initialized with smart animation 400ms');
})();