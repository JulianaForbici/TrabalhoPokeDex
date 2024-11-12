async function loadProducts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();

        const productList = document.getElementById('product-list');
        const productCount = document.getElementById('product-count');
        window.products = data.slice(0, 12); 

        renderProducts(window.products, productList, productCount);

    } catch (error) {
        console.error('Erro ao carregar produtos:', error);
    }
}

function renderProducts(products, productList, productCount) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.thumbnailUrl}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>R$ 0,00</p>
        `;
        productList.appendChild(productCard);
    });

    productCount.textContent = Mostrando ${products.length} produtos;
}

function searchProducts(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = window.products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
    );

    const productList = document.getElementById('product-list');
    const productCount = document.getElementById('product-count');
    renderProducts(filteredProducts, productList, productCount);
}

document.addEventListener('DOMContentLoaded', loadProducts);

document.getElementById('search-bar').addEventListener('input', searchProducts);