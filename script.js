// ============================================
// Script commun pour toutes les pages
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // === BACK TO TOP ===
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (document.documentElement.scrollTop > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // === FADE IN ANIMATION ===
    const fadeElements = document.querySelectorAll('.fade-in');
    
    if (fadeElements.length > 0) {
        const checkFade = function() {
            fadeElements.forEach(el => {
                const position = el.getBoundingClientRect().top;
                const screenHeight = window.innerHeight;
                
                if (position < screenHeight - 100) {
                    el.classList.add('show');
                }
            });
        };
        
        // Vérifier au chargement et au scroll
        checkFade();
        window.addEventListener('scroll', checkFade);
    }

    // === THEME TOGGLE ===
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        // Charger le thème sauvegardé
        const savedTheme = localStorage.getItem('theme');
        const html = document.documentElement;
        const icon = themeToggle.querySelector('i');
        
        if (savedTheme === 'day') {
            html.setAttribute('data-theme', 'day');
            if (icon) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        }
        
        themeToggle.addEventListener('click', toggleTheme);
    }
});

// === FONCTION THEME TOGGLE (globale) ===
function toggleTheme() {
    const html = document.documentElement;
    const toggleBtn = document.getElementById('themeToggle');
    const icon = toggleBtn ? toggleBtn.querySelector('i') : null;
    
    if (!icon) return;
    
    if (html.getAttribute('data-theme') === 'day') {
        html.setAttribute('data-theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'day');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'day');
    }
}

// === GALERIE (portfolio.html) ===
function openGallery(project) {
    const gallery = document.getElementById(project);
    if (gallery) {
        gallery.style.display = 'block';
    }
}

function closeGallery(project) {
    const gallery = document.getElementById(project);
    if (gallery) {
        gallery.style.display = 'none';
    }
}

// === SLIDER (portfolio.html) ===
function openSlider(img) {
    const slider = document.getElementById('image-slider');
    const sliderImg = document.getElementById('slider-img');
    const sliderPdf = document.getElementById('slider-pdf');
    
    if (slider && sliderImg) {
        // Cacher le PDF s'il est affiché
        if (sliderPdf) {
            sliderPdf.style.display = 'none';
        }
        sliderImg.style.display = 'block';
        slider.style.display = 'flex';
        sliderImg.src = img.src;
    }
}

// === OUVRIR UN PDF DANS LE SLIDER ===
function openPdfSlider(pdfUrl) {
    const slider = document.getElementById('image-slider');
    const sliderImg = document.getElementById('slider-img');
    const sliderPdf = document.getElementById('slider-pdf');
    
    if (slider && sliderPdf) {
        // Cacher l'image si elle est affichée
        if (sliderImg) {
            sliderImg.style.display = 'none';
        }
        sliderPdf.style.display = 'block';
        sliderPdf.src = pdfUrl;
        slider.style.display = 'flex';
    }
}

// === OUVRIR UN FICHIER EXCEL DANS LE SLIDER (Google Sheets Viewer) ===
function openExcelSlider(excelUrl) {
    const slider = document.getElementById('image-slider');
    const sliderImg = document.getElementById('slider-img');
    const sliderPdf = document.getElementById('slider-pdf');
    
    if (slider && sliderPdf) {
        // Cacher l'image si elle est affichée
        if (sliderImg) {
            sliderImg.style.display = 'none';
        }
        sliderPdf.style.display = 'block';
        // Utiliser Google Sheets Viewer pour afficher le fichier Excel
        const encodedUrl = encodeURIComponent(window.location.origin + window.location.pathname.replace(/[^/]+$/, '') + excelUrl);
        sliderPdf.src = 'https://docs.google.com/gview?embedded=1&url=' + encodedUrl;
        slider.style.display = 'flex';
    }
}

function closeSlider() {
    const slider = document.getElementById('image-slider');
    const sliderPdf = document.getElementById('slider-pdf');
    if (slider) {
        slider.style.display = 'none';
    }
    // Réinitialiser le PDF
    if (sliderPdf) {
        sliderPdf.src = '';
        sliderPdf.style.display = 'none';
    }
}

// === CASE STUDY (portfolio.html) ===
function openCase(id) {
    const caseEl = document.getElementById('case-' + id);
    if (caseEl) {
        caseEl.style.display = 'block';
    }
}

function closeCase(id) {
    const caseEl = document.getElementById('case-' + id);
    if (caseEl) {
        caseEl.style.display = 'none';
    }
}

// === FERMER LES MODALES EN CLIQUANT DEHORS ===
document.addEventListener('click', function(e) {
    // Fermer les galeries en cliquant à l'extérieur
    document.querySelectorAll('.gallery-modal').forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Fermer le slider en cliquant à l'extérieur
    const slider = document.getElementById('image-slider');
    const sliderPdf = document.getElementById('slider-pdf');
    if (slider && e.target === slider) {
        slider.style.display = 'none';
        // Réinitialiser le PDF
        if (sliderPdf) {
            sliderPdf.src = '';
            sliderPdf.style.display = 'none';
        }
    }
});

// === ANIMATION D'ENTRÉE AU CHARGEMENT ===
document.addEventListener('DOMContentLoaded', function() {
    // Animation du hero
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        hero.style.transform = 'translateY(30px)';
        hero.style.transition = 'all 0.8s ease';
        
        setTimeout(() => {
            hero.style.opacity = '1';
            hero.style.transform = 'translateY(0)';
        }, 100);
    }
    
    // Animation des cartes de compétences
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });
    
    // Animation des cartes de services
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 400 + (index * 100));
    });
});
