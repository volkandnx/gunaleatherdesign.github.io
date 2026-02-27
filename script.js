const translations = {
    en: {
        page_title: "GunaLetherDesign | Crafted Heritage, Modern Elegance",
        page_desc: "Luxurious handcrafted premium leather goods. Discover timeless craftsmanship in every bag, wallet, and belt.",
        nav_collections: "Collections",
        nav_shop: "Shop",
        nav_legacy: "Our Legacy",
        nav_contact: "Contact",
        hero_title: "GunaLetherDesign",
        hero_tagline: "Crafted Heritage, Modern Elegance",
        hero_btn: "Explore Collection",
        btn_add_to_cart: "Add to Cart",
        auth_login_title: "Login",
        auth_register_title: "Register",
        auth_profile_title: "My Account",
        auth_email: "Email",
        auth_password: "Password",
        auth_name: "Full Name",
        auth_login_btn: "Login",
        auth_register_btn: "Register",
        auth_logout: "Logout",
        auth_to_register: "Don't have an account? <a href='#' id='show-register'>Register</a>",
        auth_to_login: "Already have an account? <a href='#' id='show-login'>Login</a>",
        cart_title: "Your Cart",
        cart_empty: "Your cart is empty.",
        cart_total: "Total",
        cart_checkout: "Checkout on WhatsApp",
        cart_item_removed: "Item removed from cart",
        cart_item_added: "Item added to cart",
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
        legacy_title: "The Guna Legacy",
        legacy_p1: "Rooted in the Günal family's dedication to quality, our workshop blends traditional craftsmanship with timeless design. Every piece is a testament to our commitment to durability and quiet luxury.",
        legacy_p2: "Hand-selected hides, meticulously stitched by skilled hands — this is heritage you can feel.",
        footer_instagram: "Instagram",
        footer_facebook: "Facebook",
        footer_contact: "Contact",
        footer_copy: "GunaLetherDesign &copy; 2026. All rights reserved.",
        auth_admin_btn: "Admin Dashboard",
        auth_login_success: "Login successful! Redirecting...",
        auth_register_success: "Registration successful! Welcome."
    },
    tr: {
        page_title: "GunaLetherDesign | Miras ve Modern Zarafet",
        page_desc: "Lüks el yapımı premium deri ürünler. Her çanta, cüzdan ve kemerde zamansız işçiliği keşfedin.",
        nav_collections: "Koleksiyonlar",
        nav_shop: "Mağaza",
        nav_legacy: "Mirasımız",
        nav_contact: "İletişim",
        hero_title: "GunaLetherDesign",
        hero_tagline: "İşlenmiş Miras, Modern Zarafet",
        hero_btn: "Koleksiyonu Keşfet",
        btn_add_to_cart: "Sepete Ekle",
        auth_login_title: "Giriş Yap",
        auth_register_title: "Kayıt Ol",
        auth_profile_title: "Hesabım",
        auth_email: "E-posta",
        auth_password: "Şifre",
        auth_name: "Ad Soyad",
        auth_login_btn: "Giriş",
        auth_register_btn: "Kayıt Ol",
        auth_logout: "Çıkış Yap",
        auth_to_register: "Hesabınız yok mu? <a href='#' id='show-register'>Kayıt Ol</a>",
        auth_to_login: "Zaten hesabınız var mı? <a href='#' id='show-login'>Giriş Yap</a>",
        cart_title: "Sepetiniz",
        cart_empty: "Sepetiniz boş.",
        cart_total: "Toplam",
        cart_checkout: "WhatsApp ile Satın Al",
        cart_item_removed: "Ürün sepetten çıkarıldı",
        cart_item_added: "Ürün sepete eklendi",
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
        legacy_title: "Guna Mirası",
        legacy_p1: "Günal ailesinin kaliteye olan tutkusundan doğan atölyemiz, geleneksel işçiliği zamansız tasarımla harmanlıyor. Her parça, dayanıklılık ve sessiz lüks anlayışımıza olan bağlılığımızın bir kanıtıdır.",
        legacy_p2: "Özenle seçilmiş deriler, usta ellerle titizlikle dikildi — bu hissedeceğiniz bir miras.",
        footer_instagram: "Instagram",
        footer_facebook: "Facebook",
        footer_contact: "İletişim",
        footer_copy: "GunaLetherDesign &copy; 2026. Tüm hakları saklıdır.",
        auth_admin_btn: "Yönetici Paneli",
        auth_login_success: "Giriş başarılı! Yönlendiriliyor...",
        auth_register_success: "Kayıt başarılı! Hoş geldiniz."
    }
};

// Product Data Management
const initialProducts = [
    {
        id: 'p1',
        name_en: "The Legacy Tote Bag",
        name_tr: "The Legacy Tote Çanta",
        desc_en: "Hand-stitched full-grain leather, built to endure.",
        desc_tr: "Elde dikilmiş tam taneli deri, dayanıklılık için üretildi.",
        image: "assets/product_1.png",
        stock: 12,
        whatsapp: "+905550453659"
    },
    {
        id: 'p2',
        name_en: "The Artisan Wallet",
        name_tr: "Zanaatkar Cüzdan",
        desc_en: "Minimalist design, maximum craftsmanship.",
        desc_tr: "Minimalist tasarım, maksimum işçilik.",
        image: "assets/product_2.png",
        stock: 8,
        whatsapp: "+905550453659"
    },
    {
        id: 'p3',
        name_en: "The Classic Belt",
        name_tr: "Klasik Kemer",
        desc_en: "Timeless accessory for the discerning individual.",
        desc_tr: "Seçici bireyler için zamansız aksesuar.",
        image: "assets/product_3.png",
        stock: 15,
        whatsapp: "+905550453659"
    },
    {
        id: 'p4',
        name_en: "The Heritage Satchel",
        name_tr: "Miras El Çantası",
        desc_en: "Meticulous stitching meets modern utility.",
        desc_tr: "Titiz dikişler ve modern kullanışlılık.",
        image: "assets/product_4.png",
        stock: 5,
        whatsapp: "+905550453659"
    },
    {
        id: 'p5',
        name_en: "The Voyage Messenger",
        name_tr: "Voyage Postacı Çantası",
        desc_en: "Elegant companion for your daily journey.",
        desc_tr: "Günlük yolculuğunuz için zarif eşlikçi.",
        image: "assets/product_5.png",
        stock: 3,
        whatsapp: "+905550453659"
    },
    {
        id: 'p6',
        name_en: "The Gold-Line Cardholder",
        name_tr: "Gold-Line Kartlık",
        desc_en: "Ultra-slim profile with antique gold accents.",
        desc_tr: "Antika altın detaylı ultra ince profil.",
        image: "assets/product_6.png",
        stock: 0,
        whatsapp: "+905550453659"
    }
];

let products = [];
let currentUser = null;
let cart = [];

// Persistence for Cart and Users
function loadData() {
    const storedProducts = localStorage.getItem('guna_products');
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        products = initialProducts;
        localStorage.setItem('guna_products', JSON.stringify(products));
    }

    const storedUser = localStorage.getItem('guna_current_user');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        cart = currentUser.cart || [];
    } else {
        const guestCart = localStorage.getItem('guna_guest_cart');
        cart = guestCart ? JSON.parse(guestCart) : [];
    }
}

function saveData() {
    if (currentUser) {
        currentUser.cart = cart;
        localStorage.setItem('guna_current_user', JSON.stringify(currentUser));

        // Update users list
        const users = JSON.parse(localStorage.getItem('guna_users') || '[]');
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        if (userIndex !== -1) {
            users[userIndex].cart = cart;
            localStorage.setItem('guna_users', JSON.stringify(users));
        }
    } else {
        localStorage.setItem('guna_guest_cart', JSON.stringify(cart));
    }
    updateCartUI();
}

function renderDynamicProducts(lang) {
    const grid = document.getElementById('dynamic-product-grid');
    if (!grid) return;

    grid.innerHTML = '';
    products.forEach(p => {
        const name = p[`name_${lang}`] || p.name_en;
        const desc = p[`desc_${lang}`] || p.desc_en;
        const isOutOfStock = p.stock <= 0;
        const waText = lang === 'tr' ? 'WhatsApp\'tan Bilgi Al' : 'Inquire on WhatsApp';

        const card = document.createElement('div');
        card.className = `product-card ${isOutOfStock ? 'out-of-stock' : ''}`;
        card.innerHTML = `
            <div class="product-image">
                <img src="${p.image}" alt="${name}" onerror="this.src='https://via.placeholder.com/400x500?text=Product+Image'">
                ${isOutOfStock ? `<div class="sold-out-badge">${lang === 'tr' ? 'Tükendi' : 'Sold Out'}</div>` : ''}
            </div>
            <div class="product-info">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="product-actions">
                    <a href="${isOutOfStock ? '#' : `https://wa.me/${p.whatsapp.replace('+', '')}`}" 
                       class="btn btn-whatsapp ${isOutOfStock ? 'disabled' : ''}" 
                       ${isOutOfStock ? 'onclick="event.preventDefault()"' : ''}>
                       ${waText}
                    </a>
                    <button class="btn btn-cart ${isOutOfStock ? 'disabled' : ''}" 
                            ${isOutOfStock ? 'disabled' : `onclick="addToCart('${p.id}')"`}>
                        ${translations[lang].btn_add_to_cart || 'Add to Cart'}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    // Re-observe new elements for reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    grid.querySelectorAll('.product-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name_en: product.name_en,
            name_tr: product.name_tr,
            image: product.image,
            quantity: 1
        });
    }
    saveData();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveData();
}

function updateCartUI() {
    const lang = document.getElementById('html-lang').lang;
    const countEl = document.getElementById('cart-count');
    const itemsContainer = document.getElementById('cart-items');
    const totalAmountEl = document.getElementById('cart-total-amount');

    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    countEl.textContent = totalCount;

    if (cart.length === 0) {
        itemsContainer.innerHTML = `<p class="empty-cart-msg">${translations[lang].cart_empty}</p>`;
        totalAmountEl.textContent = "0 Items";
        return;
    }

    itemsContainer.innerHTML = '';
    cart.forEach(item => {
        const name = item[`name_${lang}`] || item.name_en;
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
            <img src="${item.image}" alt="${name}" class="cart-item-img">
            <div class="cart-item-info">
                <h4>${name}</h4>
                <p>x${item.quantity}</p>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')">${lang === 'tr' ? 'Kaldır' : 'Remove'}</button>
            </div>
        `;
        itemsContainer.appendChild(itemEl);
    });

    totalAmountEl.textContent = totalCount + " Items";
}

function initModals() {
    const authModal = document.getElementById('auth-modal');
    const cartModal = document.getElementById('cart-modal');
    const authBtn = document.getElementById('auth-btn');
    const cartBtn = document.getElementById('cart-btn');
    const closeBtns = document.querySelectorAll('.close-modal');

    // Tab Logic
    const tabLogin = document.getElementById('modal-tab-login');
    const tabRegister = document.getElementById('modal-tab-register');
    const formLogin = document.getElementById('login-form-container');
    const formRegister = document.getElementById('register-form-container');

    const switchTab = (mode) => {
        // Clear messages when switching
        document.getElementById('login-error-msg').style.display = 'none';
        document.getElementById('reg-error-msg').style.display = 'none';
        document.getElementById('login-success-msg').style.display = 'none';
        document.getElementById('reg-success-msg').style.display = 'none';

        if (mode === 'login') {
            tabLogin.classList.add('active');
            tabRegister.classList.remove('active');
            formLogin.classList.add('active');
            formRegister.classList.remove('active');
        } else {
            tabRegister.classList.add('active');
            tabLogin.classList.remove('active');
            formRegister.classList.add('active');
            formLogin.classList.remove('active');
        }
    };

    tabLogin.addEventListener('click', () => switchTab('login'));
    tabRegister.addEventListener('click', () => switchTab('register'));

    authBtn.addEventListener('click', () => {
        updateAuthUI();
        authModal.style.display = 'block';
        if (!currentUser) switchTab('login');
    });

    cartBtn.addEventListener('click', () => {
        updateCartUI();
        cartModal.style.display = 'block';
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            authModal.style.display = 'none';
            cartModal.style.display = 'none';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.style.display = 'none';
        if (e.target === cartModal) cartModal.style.display = 'none';

        // Event delegation for register/login links inside forms
        if (e.target.id === 'show-register') {
            e.preventDefault();
            switchTab('register');
        }
        if (e.target.id === 'show-login') {
            e.preventDefault();
            switchTab('login');
        }
    });
}

function updateAuthUI() {
    const tabs = document.querySelector('.auth-tabs');
    const loginCont = document.getElementById('login-form-container');
    const regCont = document.getElementById('register-form-container');
    const profileCont = document.getElementById('user-profile-container');

    if (currentUser) {
        tabs.style.display = 'none';
        loginCont.classList.remove('active');
        regCont.classList.remove('active');
        profileCont.style.display = 'block';
        document.getElementById('profile-name-display').textContent = currentUser.name || currentUser.username;
        document.getElementById('profile-email-display').textContent = currentUser.email || 'Administrator';

        // Show Admin Dashboard button if user is an admin
        const admins = JSON.parse(localStorage.getItem('guna_admins') || '[]');
        const isDefaultAdmin = (!currentUser.email && currentUser.username === 'admin') || (currentUser.username === 'admin@admin.com');
        const isAdmin = isDefaultAdmin || admins.find(a => a.username === (currentUser.username || currentUser.email));

        // Clear existing admin button if any
        const existingBtn = document.getElementById('go-to-admin');
        if (existingBtn) existingBtn.remove();

        if (isAdmin) {
            const adminBtn = document.createElement('a');
            adminBtn.id = 'go-to-admin';
            adminBtn.href = 'admin.html';
            adminBtn.className = 'btn btn-primary';
            adminBtn.style.display = 'block';
            adminBtn.style.marginTop = '1rem';
            adminBtn.setAttribute('data-i18n', 'auth_admin_btn');

            // Localize immediately or let the global system handle it
            const lang = document.getElementById('html-lang').lang;
            adminBtn.textContent = translations[lang].auth_admin_btn;

            profileCont.insertBefore(adminBtn, document.getElementById('logout-btn'));
        }
    } else {
        tabs.style.display = 'flex';
        // Ensure login tab is active when no user is logged in
        const tabLogin = document.getElementById('modal-tab-login');
        const tabRegister = document.getElementById('modal-tab-register');
        const formLogin = document.getElementById('login-form-container');
        const formRegister = document.getElementById('register-form-container');

        // Default to login tab if no user
        if (!tabLogin.classList.contains('active') && !tabRegister.classList.contains('active')) {
            tabLogin.classList.add('active');
            formLogin.classList.add('active');
        }

        profileCont.style.display = 'none';
    }
}

function showError(elementId, message) {
    const errorEl = document.getElementById(elementId);
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.style.display = 'block';
    }
}

function showSuccess(elementId, message) {
    const successEl = document.getElementById(elementId);
    if (successEl) {
        successEl.textContent = message;
        successEl.style.display = 'block';
    }
}

function initAuth() {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const logoutBtn = document.getElementById('logout-btn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // Check regular users
        const users = JSON.parse(localStorage.getItem('guna_users') || '[]');
        const user = users.find(u => u.email === email && u.password === password);

        // Check admins
        const admins = JSON.parse(localStorage.getItem('guna_admins') || '[]');
        const admin = admins.find(a => a.username === email && a.password === password);
        const isDefaultAdmin = email === 'admin@admin.com' && password === 'admin';

        if (user || admin || isDefaultAdmin) {
            currentUser = user || admin || { username: 'admin@admin.com' };
            cart = currentUser.cart || [];
            localStorage.setItem('guna_current_user', JSON.stringify(currentUser));

            if (admin || isDefaultAdmin) {
                sessionStorage.setItem('guna_admin_logged_in', 'true');
            }

            updateAuthUI();
            updateCartUI();

            const lang = document.getElementById('html-lang').lang;
            showSuccess('login-success-msg', translations[lang].auth_login_success);

            setTimeout(() => {
                document.getElementById('auth-modal').style.display = 'none';
            }, 1000);
        } else {
            const msg = document.getElementById('html-lang').lang === 'tr'
                ? 'Hatalı e-posta/kullanıcı adı veya şifre'
                : 'Invalid email/username or password';
            showError('login-error-msg', msg);
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const errorEl = document.getElementById('reg-error-msg');
        errorEl.style.display = 'none';

        const users = JSON.parse(localStorage.getItem('guna_users') || '[]');
        if (users.find(u => u.email === email)) {
            const msg = document.getElementById('html-lang').lang === 'tr'
                ? 'Bu e-posta adresi zaten kullanımda'
                : 'This email address is already in use';
            showError('reg-error-msg', msg);
            return;
        }

        const newUser = { name, email, password, cart: cart }; // Merge current guest cart if any
        users.push(newUser);
        localStorage.setItem('guna_users', JSON.stringify(users));

        const lang = document.getElementById('html-lang').lang;
        showSuccess('reg-success-msg', translations[lang].auth_register_success);

        currentUser = newUser;
        localStorage.setItem('guna_current_user', JSON.stringify(currentUser));

        setTimeout(() => {
            updateAuthUI();
            document.getElementById('auth-modal').style.display = 'none';
        }, 1000);
    });

    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        cart = [];
        localStorage.removeItem('guna_current_user');
        sessionStorage.removeItem('guna_admin_logged_in');
        updateAuthUI();
        updateCartUI();
        document.getElementById('auth-modal').style.display = 'none';
    });

    // Clear errors on input
    const authInputs = document.querySelectorAll('#auth-modal input');
    authInputs.forEach(input => {
        input.addEventListener('input', () => {
            const form = input.closest('form');
            const errorMsg = form.querySelector('.error-message');
            if (errorMsg) errorMsg.style.display = 'none';
        });
    });
}


document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initModals();
    initAuth();
    updateCartUI();

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
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update attributes
        translatableAttrs.forEach(el => {
            const attrData = el.getAttribute('data-i18n-attr');
            const [attrName, key] = attrData.split(':');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute(attrName, translations[lang][key]);
            }
        });

        // Special case for page title
        document.title = translations[lang].page_title;

        // Render products for current language
        renderDynamicProducts(lang);
        updateCartUI(); // Refresh cart names
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

    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) return;

        const lang = document.getElementById('html-lang').lang;
        let message = lang === 'tr' ? 'Merhaba, sepetimdekileri satın almak istiyorum:%0A' : 'Hello, I want to purchase the items in my cart:%0A';

        cart.forEach(item => {
            const name = item[`name_${lang}`] || item.name_en;
            message += `- ${name} (x${item.quantity})%0A`;
        });

        const waUrl = `https://wa.me/905550453659?text=${message}`;
        window.open(waUrl, '_blank');
    });

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

    // Reveal animations for static content
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    const scrollElements = document.querySelectorAll('.category-card, .section-title, .legacy-content');
    scrollElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
