// Плавная прокрутка к секциям
document.querySelectorAll('.cta-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(button.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});