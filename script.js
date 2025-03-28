document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            image: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&crop=faces",
            title: "Luxury Gold Watch",
            description: "Elegant and stylish gold watch with a leather strap.",
            price: "$199"
        },
        {
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format&fit=crop",
            title: "Smartwatch Pro",
            description: "Feature-packed smartwatch with health tracking and GPS.",
            price: "$299"
        },
        {
            image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&auto=format&fit=crop",
            title: "Classic Leather Watch",
            description: "Timeless leather strap watch with a minimalist dial.",
            price: "$149"
        },
        {
            image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=500&auto=format&fit=crop",
            title: "Casual Sports Watch",
            description: "Durable and water-resistant watch for outdoor adventures.",
            price: "$99"
        },
        {
            image: "https://images.unsplash.com/photo-1557531365-e8b22d93dbd0?w=500&auto=format&fit=crop",
            title: "Stainless Steel Watch",
            description: "Premium stainless steel watch with a scratch-resistant face.",
            price: "$249"
        },
        {
            image: "https://images.unsplash.com/photo-1554342872-034a06541bad?w=500&auto=format&fit=crop",
            title: "Minimalist Black Watch",
            description: "Sleek and modern black watch for a sophisticated look.",
            price: "$129"
        }
    ];

    const container = document.getElementById("card-container");

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-4");
        card.innerHTML = `
            <div class="card shadow">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <a href="#" class="btn btn-primary">Buy Now</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
});