// Mengambil referensi elemen-elemen yang diperlukan
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Toggle menu navigasi saat tombol di klik
navToggle.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});

// Scroll smooth ketika menu navigasi di klik
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 50,
      behavior: 'smooth'
    });
  });
});

// Animasi saat elemen masuk ke viewport
const animatedElements = document.querySelectorAll('.animate');

window.addEventListener('scroll', debounce(checkViewport));

function checkViewport() {
  animatedElements.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('animate-visible');
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function debounce(func, delay = 250) {
  let timeout;
  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}
