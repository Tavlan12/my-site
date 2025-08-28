// Показ/скрытие картинок в категориях
document.querySelectorAll(".toggle").forEach(title => {
  title.addEventListener("click", () => {
    const grid = title.parentElement.querySelector(".category-grid");
    grid.classList.toggle("active");
  });
});

// Анимация появления категорий при загрузке
document.addEventListener("DOMContentLoaded", () => {
  const categories = document.querySelectorAll(".category");
  categories.forEach((cat, i) => {
    cat.style.opacity = "0";
    cat.style.transform = "translateY(30px)";
    setTimeout(() => {
      cat.style.transition = "0.6s ease";
      cat.style.opacity = "1";
      cat.style.transform = "translateY(0)";
    }, i * 300);
  });
});
