/* ============================================ */
/* FONCTIONS DE NAVIGATION
/* ============================================ */

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
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

/* ============================================ */
/* CARROUSEL HERO
/* ============================================ */

(function() {
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
    carousel.addEventListener('scroll', function() {
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

/* ============================================ */
/* DONNÉES PRODUITS
/* ============================================ */

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

/* ============================================ */
/* FONCTIONS DE GESTION DES PRODUITS
/* ============================================ */

function createProductCard(product) {
    const card = document.createElement('div');

    let cardClasses = 'product-card';
    if (product.cardSize === 'small') {
        cardClasses += ' product-card--small';
    } else if (product.cardSize === 'large') {
        cardClasses += ' product-card--large';
    }
    card.className = cardClasses;
    card.setAttribute('data-product-id', product.id);

    const badge = document.createElement('span');
    badge.className = 'product-badge';
    badge.textContent = product.badge;
    card.appendChild(badge);

    const productImg = document.createElement('img');
    productImg.className = 'product-card__img';
    productImg.src = product.image;
    productImg.alt = product.title;
    card.appendChild(productImg);

    const favBtn = document.createElement('img');
    favBtn.className = 'product-fav';
    favBtn.src = product.isFavorite ? 'img/heart-filled.png' : 'img/ellipse 6.png';
    favBtn.alt = 'Favoris';
    favBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(product.id);
    });
    card.appendChild(favBtn);

    const title = document.createElement('h4');
    title.className = 'product-title';
    title.textContent = product.title;
    card.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.className = 'product-subtitle';
    subtitle.textContent = product.subtitle;
    card.appendChild(subtitle);

    const price = document.createElement('p');
    price.className = 'product-price';
    price.innerHTML = `<strong>${product.price} mil</strong> <span>${product.currency}</span>`;
    card.appendChild(price);

    return card;
}

function addProduct(product) {
    productsData.push(product);
    reloadSectionProducts(product.section);
}

function reloadSectionProducts(section) {
    const sectionProducts = productsData.filter(p => p.section === section);
    const container = getSectionContainer(section);

    if (container) {
        const scrollDiv = container.querySelector('.product-scroll');
        if (scrollDiv) {
            scrollDiv.innerHTML = '';

            sectionProducts.forEach(product => {
                const card = createProductCard(product);
                scrollDiv.appendChild(card);
            });
        }
    }
}

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

function toggleFavorite(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        product.isFavorite = !product.isFavorite;

        const card = document.querySelector(`.product-card[data-product-id="${productId}"]`);
        if (card) {
            const favBtn = card.querySelector('.product-fav');
            favBtn.src = product.isFavorite ? 'img/heart-filled.png' : 'img/ellipse 6.png';
        }

        saveFavoritesToLocalStorage();
    }
}

function saveFavoritesToLocalStorage() {
    const favorites = productsData.filter(p => p.isFavorite).map(p => p.id);
    localStorage.setItem('productFavorites', JSON.stringify(favorites));
}

function loadFavoritesFromLocalStorage() {
    const savedFavorites = localStorage.getItem('productFavorites');
    if (savedFavorites) {
        const favoriteIds = JSON.parse(savedFavorites);
        productsData.forEach(product => {
            product.isFavorite = favoriteIds.includes(product.id);
        });
    }
}

function initializeAllSections() {
    loadFavoritesFromLocalStorage();
    ['phone', 'tablet', 'desktop'].forEach(section => {
        reloadSectionProducts(section);
    });
}

function filterProductsByPrice(maxPrice) {
    return productsData.filter(product => parseInt(product.price) <= maxPrice);
}

function filterProductsByBadge(badge) {
    return productsData.filter(product => product.badge === badge);
}

function getAllProducts() {
    return [...productsData];
}

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

function updateProduct(productId, updatedData) {
    const index = productsData.findIndex(p => p.id === productId);
    if (index !== -1) {
        productsData[index] = { ...productsData[index], ...updatedData };
        reloadSectionProducts(productsData[index].section);
        return true;
    }
    return false;
}

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

/* ============================================ */
/* SIDEBAR CARROUSEL
/* ============================================ */

(function initSidebarCarousel() {
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

    function scrollGallery(direction) {
        const items = document.querySelectorAll('.carousel-item');
        if (items.length === 0) return;

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

    function handleImageClick() {
        const items = document.querySelectorAll('.carousel-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                console.log(`Image sélectionnée : ${item.getAttribute('data-index')}`);
            });
        });
    }

    prevBtn.addEventListener('click', () => scrollGallery('prev'));
    nextBtn.addEventListener('click', () => scrollGallery('next'));

    buildGallery();

    const observer = new MutationObserver(() => {
        handleImageClick();
    });
    observer.observe(galleryContainer, { childList: true });

    handleImageClick();

    console.log('Sidebar carousel initialized');
})();

/* ============================================ */
/* SIDEBAR GALLERY - SMART ANIMATION
/* ============================================ */

(function initSidebarGallery() {
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

    galleryContainer.style.cssText = `
        position: relative;
        width: 280px;
        height: 300px;
        overflow: hidden;
        border-radius: 10px;
    `;

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

    let currentIndex = 0;
    const totalSlides = galleryImages.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        const translateX = -currentIndex * 100;
        track.style.transform = `translateX(${translateX}%)`;

        const slides = document.querySelectorAll('.gallery-slide img');
        slides.forEach((img, i) => {
            if (i === currentIndex) {
                img.style.transform = 'scale(1)';
            } else {
                img.style.transform = 'scale(0.95)';
            }
        });
    }

    let intervalId = setInterval(nextSlide, 1000);

    galleryContainer.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });

    galleryContainer.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 1000);
    });

    nextSlide();

    console.log('Sidebar gallery initialized with smart animation 400ms');
})();

/* ============================================ */
/* EFFETS DE SURVOL AVANCÉS
/* ============================================ */

function initAdvancedHoverEffects() {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    });
}

function handleMouseEnter(event) {
    const card = event.currentTarget;
    const productId = card.getAttribute('data-product-id');

    card.classList.add('product-card--hovering');

    if (window.productsManager && productId) {
        const product = productsData.find(p => p.id == productId);
        if (product) {
            card.setAttribute('data-hover-product', JSON.stringify({
                title: product.title,
                price: product.price
            }));
        }
    }

    createRippleEffect(event, card);
}

function handleMouseLeave(event) {
    const card = event.currentTarget;
    card.classList.remove('product-card--hovering');
    card.removeAttribute('data-hover-product');
}

function createRippleEffect(event, element) {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.cssText = `
        position: absolute;
        top: ${y}px;
        left: ${x}px;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(199,187,148,0.3) 0%, rgba(199,187,148,0) 70%);
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 10;
        transition: all 0.4s ease-out;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
        ripple.style.width = '200px';
        ripple.style.height = '200px';
        ripple.style.opacity = '0';
    }, 10);

    setTimeout(() => {
        if (ripple && ripple.parentNode) {
            ripple.remove();
        }
    }, 400);
}

function observeNewProducts() {
    const productContainers = document.querySelectorAll('.product-scroll');

    productContainers.forEach(container => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    setTimeout(initAdvancedHoverEffects, 50);
                }
            });
        });

        observer.observe(container, { childList: true, subtree: true });
    });
}

function initGalleryHoverEffect() {
    const productScrolls = document.querySelectorAll('.product-scroll');

    productScrolls.forEach(scroll => {
        scroll.addEventListener('mouseenter', (e) => {
            const cards = scroll.querySelectorAll('.product-card');
            const targetCard = e.target.closest('.product-card');

            if (targetCard) {
                cards.forEach(card => {
                    if (card !== targetCard) {
                        card.style.opacity = '0.6';
                        card.style.filter = 'blur(1px)';
                        card.style.transition = 'all 0.3s ease';
                    }
                });
            }
        });

        scroll.addEventListener('mouseleave', () => {
            const cards = scroll.querySelectorAll('.product-card');
            cards.forEach(card => {
                card.style.opacity = '';
                card.style.filter = '';
            });
        });
    });
}

/* ============================================ */
/* STYLES DYNAMIQUES POUR LES EFFETS DE SURVOL
/* ============================================ */

function addDynamicHoverStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .product-scroll {
            transition: all 0.3s ease;
        }
        
        @keyframes badgePulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.08); }
            100% { transform: scale(1.05); }
        }
        
        .product-card:hover .product-badge {
            animation: badgePulse 0.3s ease-out;
        }
        
        .product-card:hover::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: linear-gradient(135deg, var(--gold-light), var(--gold-dark), var(--gold-light));
            border-radius: 7px;
            z-index: -1;
            opacity: 0.6;
            animation: borderGlow 1.5s ease-in-out infinite;
        }
        
        @keyframes borderGlow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
        }
        
        .product-card {
            position: relative;
            z-index: 1;
        }
        
        .product-card,
        .product-card * {
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .product-card:hover .product-title::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background: linear-gradient(90deg, var(--gold-light), transparent);
            animation: underlineSlide 0.3s ease-out;
        }
        
        @keyframes underlineSlide {
            from { width: 0; opacity: 0; }
            to { width: 100%; opacity: 1; }
        }
        
        .product-title {
            position: relative;
            display: inline-block;
        }
    `;
    document.head.appendChild(style);
}

const originalReloadSectionProducts = window.productsManager?.reloadSectionProducts || reloadSectionProducts;

function enhancedReloadSectionProducts(section) {
    if (originalReloadSectionProducts) {
        originalReloadSectionProducts(section);
    }
    setTimeout(() => {
        initAdvancedHoverEffects();
        initGalleryHoverEffect();
    }, 100);
}

if (typeof reloadSectionProducts === 'function') {
    window.reloadSectionProducts = enhancedReloadSectionProducts;
}

/* ============================================ */
/* INITIALISATION
/* ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initializeAllSections();
    addDynamicHoverStyles();

    setTimeout(() => {
        initAdvancedHoverEffects();
        initGalleryHoverEffect();
        observeNewProducts();
    }, 200);

    console.log('Tous les produits ont été chargés dynamiquement !');
    console.log('Effets de survol des cartes initialisés');
});

window.hoverEffects = {
    initAdvancedHoverEffects,
    initGalleryHoverEffect,
    observeNewProducts
};