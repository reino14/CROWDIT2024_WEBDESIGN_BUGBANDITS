// Event listener untuk tombol cart
document.querySelector('.cart-button').addEventListener('click', (e) => {
    e.stopPropagation();
    document.getElementById('popupMenu').classList.toggle('hidden');
});

// Event listener untuk dokumen untuk menutup popup saat klik di luar
document.addEventListener('click', (e) => {
    const popupMenu = document.getElementById('popupMenu');
    const cartButton = document.querySelector('.cart-button');
    if (!popupMenu.classList.contains('hidden') && !popupMenu.contains(e.target) && !cartButton.contains(e.target)) {
        popupMenu.classList.add('hidden');
    }
});

document.addEventListener("DOMContentLoaded", function(){
    const hoverDiv = document.getElementById("hoverDiv");

    hoverDiv.addEventListener("mouseover", function() {
        hoverDiv.style.cursor = "pointer";
    });

})

// Navbar Scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

  
  
// JavaScript for parallax effect
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.querySelector('.parallax').style.transform = `translateY(${scrollPosition * -0.5}px)`;
});






// JavaScript for carousel Men shoes
function changeImage(imageSrc) {
  const mainImage = document.getElementById('mainImage');
  mainImage.classList.remove('fade-in');
  mainImage.classList.add('fade-out');
  setTimeout(() => {
      mainImage.src = imageSrc;
      mainImage.classList.remove('fade-out');
      mainImage.classList.add('fade-in');
  }, 500);
}

function changeImage2(imageSrc2) {
  const mainImage = document.getElementById('mainImage2');
  mainImage.classList.remove('fade-in');
  mainImage.classList.add('fade-out');
  setTimeout(() => {
      mainImage.src = imageSrc2;
      mainImage.classList.remove('fade-out');
      mainImage.classList.add('fade-in');
  }, 500);
}

// JavaScript for carousel Men sale
function changeSale(imageSale) {
  const mainSale = document.getElementById('mainSale');
  mainSale.classList.remove('fade-in');
  mainSale.classList.add('fade-out');
  setTimeout(() => {
      mainSale.src = imageSale;
      mainSale.classList.remove('fade-out');
      mainSale.classList.add('fade-in');
  }, 500);
}

// JavaScript for carousel Women shoes
function changeImage3(imageSrc3) {
  const mainImage3 = document.getElementById('mainImage3');
  mainImage3.classList.remove('fade-in');
  mainImage3.classList.add('fade-out');
  setTimeout(() => {
      mainImage3.src = imageSrc3;
      mainImage3.classList.remove('fade-out');
      mainImage3.classList.add('fade-in');
  }, 500);
}

function changeImage4(imageSrc3) {
  const mainImage3 = document.getElementById('mainImage4');
  mainImage3.classList.remove('fade-in');
  mainImage3.classList.add('fade-out');
  setTimeout(() => {
      mainImage3.src = imageSrc3;
      mainImage3.classList.remove('fade-out');
      mainImage3.classList.add('fade-in');
  }, 500);
}

// JavaScript for carousel Women sale
function changeSale2(imageSale2) {
  const mainSale2 = document.getElementById('mainSale2');
  mainSale2.classList.remove('fade-in');
  mainSale2.classList.add('fade-out');
  setTimeout(() => {
      mainSale2.src = imageSale2;
      mainSale2.classList.remove('fade-out');
      mainSale2.classList.add('fade-in');
  }, 500);
}