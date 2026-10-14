// Shoe data array
const shoes = [
  {
    name: "Running Shoe",
    description: "Lightweight and durable, perfect for runners.",
    img: "https://via.placeholder.com/150?text=Running+Shoe"
  },
  {
    name: "Casual Sneaker",
    description: "Trendy and comfortable everyday wear.",
    img: "https://via.placeholder.com/150?text=Casual+Sneaker"
  },
  {
    name: "Formal Shoe",
    description: "Elegant design for special occasions.",
    img: "https://via.placeholder.com/150?text=Formal+Shoe"
  }
];

// Populate the shoes section dynamically
const shoeList = document.getElementById('shoeList');

shoes.forEach(shoe => {
  const shoeCard = document.createElement('div');
  shoeCard.className = 'shoe';
  shoeCard.innerHTML = `
    <img src="${shoe.img}" alt="${shoe.name}" />
    <h3>${shoe.name}</h3>
    <p>${shoe.description}</p>
  `;
  shoeList.appendChild(shoeCard);
});

// Scroll to collection on button click
document.getElementById('shopBtn').addEventListener('click', () => {
  document.getElementById('collection').scrollIntoView({ behavior: 'smooth' });
});

