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
        stock: 20,
        whatsapp: "+905550453659"
    }
];

let products = [];

// Initialize data
function initData() {
    const stored = localStorage.getItem('guna_products');
    if (stored) {
        products = JSON.parse(stored);
    } else {
        products = initialProducts;
        saveData();
    }
    renderProducts();
}

function saveData() {
    localStorage.setItem('guna_products', JSON.stringify(products));
}

function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = '';

    products.forEach(p => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src="${p.image}" class="product-img" onerror="this.src='https://via.placeholder.com/60'"></td>
            <td>
                <div style="font-weight:600">${p.name_en}</div>
                <div style="font-size:0.8rem; opacity:0.6">${p.name_tr}</div>
            </td>
            <td>
                <div class="stock-control">
                    <button class="btn-action" onclick="updateStock('${p.id}', -1)">-</button>
                    <span class="stock-input">${p.stock}</span>
                    <button class="btn-action" onclick="updateStock('${p.id}', 1)">+</button>
                </div>
            </td>
            <td>
                <button class="btn-action" onclick="editProduct('${p.id}')">Edit</button>
                <button class="btn-action btn-delete" onclick="deleteProduct('${p.id}')">Delete</button>
            </td>
        `;
        list.appendChild(tr);
    });
}

function updateStock(id, change) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.stock = Math.max(0, product.stock + change);
        saveData();
        renderProducts();
    }
}

// Image handling
let currentBase64 = '';

const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('prodImageFile');
const imgPreview = document.getElementById('imgPreview');

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        handleFile(file);
    }
});

fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
});

function handleFile(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        currentBase64 = e.target.result;
        imgPreview.src = currentBase64;
        dropZone.classList.add('has-image');
    };
    reader.readAsDataURL(file);
}

function openModal(id = null) {
    const modal = document.getElementById('productModal');
    const form = document.getElementById('productForm');
    const title = document.getElementById('modalTitle');

    form.reset();
    document.getElementById('editId').value = id || '';
    currentBase64 = '';
    imgPreview.src = '';
    dropZone.classList.remove('has-image');

    if (id) {
        const p = products.find(prod => prod.id === id);
        title.innerText = 'Edit Product';
        currentBase64 = p.image;
        imgPreview.src = p.image;
        dropZone.classList.add('has-image');

        document.getElementById('prodNameEn').value = p.name_en;
        document.getElementById('prodNameTr').value = p.name_tr;
        document.getElementById('prodDescEn').value = p.desc_en;
        document.getElementById('prodDescTr').value = p.desc_tr;
        document.getElementById('prodStock').value = p.stock;
        document.getElementById('prodWa').value = p.whatsapp;
    } else {
        title.innerText = 'Add Product';
    }

    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== id);
        saveData();
        renderProducts();
    }
}

function editProduct(id) {
    openModal(id);
}

document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('editId').value;

    if (!currentBase64) {
        alert('Please upload an image');
        return;
    }

    const productData = {
        id: id || 'p' + Date.now(),
        image: currentBase64,
        name_en: document.getElementById('prodNameEn').value,
        name_tr: document.getElementById('prodNameTr').value,
        desc_en: document.getElementById('prodDescEn').value,
        desc_tr: document.getElementById('prodDescTr').value,
        stock: parseInt(document.getElementById('prodStock').value),
        whatsapp: document.getElementById('prodWa').value
    };

    if (id) {
        const index = products.findIndex(p => p.id === id);
        products[index] = productData;
    } else {
        products.push(productData);
    }

    saveData();
    renderProducts();
    closeModal();
});

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}

initData();
