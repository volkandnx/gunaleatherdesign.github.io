const translations = {
    en: {
        page_title: "GunaLeather Design | Crafted Heritage, Modern Elegance",
        page_desc: "Luxurious handcrafted premium leather goods. Discover timeless craftsmanship in every bag, wallet, and belt.",
        nav_collections: "Collections",
        nav_shop: "Shop",
        nav_legacy: "Our Legacy",
        nav_contact: "Contact",
        hero_title: "GunaLeather Design",
        hero_tagline: "Crafted Heritage, Modern Elegance",
        hero_btn: "Explore Collection",
        section_collections: "The Collections",
        cat_bags: "Bags",
        cat_wallets: "Wallets",
        cat_belts: "Belts",
        section_exclusive: "Essential Pieces",
        p1_name: "The Legacy Tote Bag",
        p1_desc: "Hand-stitched full-grain leather, built to endure.",
        p2_name: "The Artisan Wallet",
        p2_desc: "Minimalist design, maximum craftsmanship.",
        p3_name: "The Classic Belt",
        p3_desc: "Timeless accessory for the discerning individual.",
        p4_name: "The Heritage Satchel",
        p4_desc: "Meticulous stitching meets modern utility.",
        p5_name: "The Voyage Messenger",
        p5_desc: "Elegant companion for your daily journey.",
        p6_name: "The Gold-Line Cardholder",
        p6_desc: "Ultra-slim profile with antique gold accents.",
        btn_whatsapp: "Inquire on WhatsApp",
        legacy_title: "The GunaLether Legacy",
        legacy_p1: "Rooted in the Günal family's dedication to quality, our workshop blends traditional craftsmanship with timeless design. Every piece is a testament to our commitment to durability and quiet luxury.",
        legacy_p2: "Hand-selected hides, meticulously stitched by skilled hands — this is heritage you can feel.",
        footer_instagram: "Instagram",
        footer_facebook: "Facebook",
        footer_contact: "Contact",
        footer_copy: "GunaLeather Design &copy; 2026. All rights reserved."
    },
    tr: {
        page_title: "GunaLeather Design | Miras ve Modern Zarafet",
        page_desc: "Lüks el yapımı premium deri ürünler. Her çanta, cüzdan ve kemerde zamansız işçiliği keşfedin.",
        nav_collections: "Koleksiyonlar",
        nav_shop: "Mağaza",
        nav_legacy: "Mirasımız",
        nav_contact: "İletişim",
        hero_title: "GunaLeather Design",
        hero_tagline: "İşlenmiş Miras, Modern Zarafet",
        hero_btn: "Koleksiyonu Keşfet",
        section_collections: "Koleksiyonlar",
        cat_bags: "Çantalar",
        cat_wallets: "Cüzdanlar",
        cat_belts: "Kemerler",
        section_exclusive: "Seçkin Parçalar",
        p1_name: "The Legacy Tote Çanta",
        p1_desc: "Elde dikilmiş tam taneli deri, dayanıklılık için üretildi.",
        p2_name: "Zanaatkar Cüzdan",
        p2_desc: "Minimalist tasarım, maksimum işçilik.",
        p3_name: "Klasik Kemer",
        p3_desc: "Seçici bireyler için zamansız aksesuar.",
        p4_name: "Miras El Çantası",
        p4_desc: "Titiz dikişler ve modern kullanışlılık.",
        p5_name: "Voyage Postacı Çantası",
        p5_desc: "Günlük yolculuğunuz için zarif eşlikçi.",
        p6_name: "Gold-Line Kartlık",
        p6_desc: "Antika altın detaylı ultra ince profil.",
        btn_whatsapp: "WhatsApp'tan Bilgi Al",
        legacy_title: "GunaLether Mirası",
        legacy_p1: "Günal ailesinin kaliteye olan tutkusundan doğan atölyemiz, geleneksel işçiliği zamansız tasarımla harmanlıyor. Her parça, dayanıklılık ve sessiz lüks anlayışımıza olan bağlılığımızın bir kanıtıdır.",
        legacy_p2: "Özenle seçilmiş deriler, usta ellerle titizlikle dikildi — bu hissedeceğiniz bir miras.",
        footer_instagram: "Instagram",
        footer_facebook: "Facebook",
        footer_contact: "İletişim",
        footer_copy: "GunaLeather Design &copy; 2026. Tüm hakları saklıdır."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Localization
    const langBtns = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-i18n]');
    const translatableAttrs = document.querySelectorAll('[data-i18n-attr]');

    const setLanguage = (lang) => {
        document.getElementById('html-lang').lang = lang;
        localStorage.setItem('guna_lang', lang);

        // Update active class
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.id === `btn-${lang}`);
        });

        // Update content
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update attributes
        translatableAttrs.forEach(el => {
            const attrData = el.getAttribute('data-i18n-attr');
            const [attrName, key] = attrData.split(':');
            if (translations[lang][key]) {
                el.setAttribute(attrName, translations[lang][key]);
            }
        });

        // Special case for page title
        document.title = translations[lang].page_title;
    };

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.id.replace('btn-', '');
            setLanguage(lang);
        });
    });

    // Initialize language
    const storedLang = localStorage.getItem('guna_lang') || 'en';
    setLanguage(storedLang);

    // Header background change on scroll
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(10, 10, 10, 0.95)';
            header.style.padding = '1rem 0';
        } else {
            header.style.background = 'rgba(18, 18, 18, 0.8)';
            header.style.padding = '1.5rem 0';
        }
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    const scrollElements = document.querySelectorAll('.category-card, .product-card, .section-title, .legacy-content');
    scrollElements.forEach(el => {
        el.style.opacity = '0'; // Initial state for JS-based fade in
        observer.observe(el);
    });
});

