const books = [
{
id: 1,
title: "Python Programming",
author: "Reema Thareja",
price: 350,
emoji: "🐍",
category: "Programming"
},
{
id: 2,
title: "Let Us C",
author: "Yashavant Kanetkar",
price: 280,
emoji: "💻",
category: "Programming"
},
{
id: 3,
title: "Data Structures",
author: "Seymour Lipschutz",
price: 320,
emoji: "🧠",
category: "Computer Science"
},
{
id: 4,
title: "Database Management Systems",
author: "Raghu Ramakrishnan",
price: 400,
emoji: "🗄️",
category: "Computer Science"
},
{
id: 5,
title: "Artificial Intelligence",
author: "Stuart Russell",
price: 450,
emoji: "🤖",
category: "Technology"
},
{
id: 6,
title: "The Psychology of Money",
author: "Morgan Housel",
price: 250,
emoji: "💰",
category: "Finance"
},
{
id: 7,
title: "Atomic Habits",
author: "James Clear",
price: 300,
emoji: "🌱",
category: "Self Help"
},
{
id: 8,
title: "Harry Potter",
author: "J. K. Rowling",
price: 350,
emoji: "⚡",
category: "Fiction"
}
];

function displayBooks() {
const bookGrid = document.getElementById("book-grid");

```
if (!bookGrid) {
    return;
}

bookGrid.innerHTML = books.map(function(book) {
    return `
        <div class="book-card">
            <div class="book-cover">${book.emoji}</div>

            <p class="book-category">${book.category}</p>

            <h3>${book.title}</h3>

            <p>By ${book.author}</p>

            <h3>₹${book.price}</h3>

            <button
                class="btn primary-btn"
                onclick="addToCart(${book.id})">
                Add to Cart
            </button>

            <button
                class="btn"
                onclick="addToWishlist(${book.id})">
                ♡ Wishlist
            </button>
        </div>
    `;
}).join("");
```

}

function addToCart(bookId) {
let cart = [];

```
try {
    cart = JSON.parse(localStorage.getItem("bb_cart")) || [];
} catch (error) {
    cart = [];
}

const existingBook = cart.find(function(item) {
    return Number(item.id) === Number(bookId);
});

if (existingBook) {
    existingBook.quantity = (Number(existingBook.quantity) || 1) + 1;
} else {
    cart.push({
        id: bookId,
        quantity: 1
    });
}

localStorage.setItem("bb_cart", JSON.stringify(cart));

alert("Book added to your cart! 📚");
```

}

function addToWishlist(bookId) {
let wishlist = [];

```
try {
    wishlist = JSON.parse(localStorage.getItem("bb_wishlist")) || [];
} catch (error) {
    wishlist = [];
}

if (!wishlist.includes(bookId)) {
    wishlist.push(bookId);
    localStorage.setItem("bb_wishlist", JSON.stringify(wishlist));
    alert("Book added to your wishlist! ❤️");
} else {
    alert("This book is already in your wishlist!");
}
```

}

document.addEventListener("DOMContentLoaded", displayBooks);
