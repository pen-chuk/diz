document.addEventListener('DOMContentLoaded', function () {
  const DISTANCE = 500;
  const block = document.querySelector('#rec1704465531');
  let isInside = false;
  let isScrolling = false;

  function updateInside() {
    const rect = block.getBoundingClientRect();
    isInside = rect.top < window.innerHeight && rect.bottom > 0;
  }

  window.addEventListener('scroll', updateInside);

  window.addEventListener('wheel', function (e) {
    updateInside();

    if (!isInside) return; // работаем только внутри блока

    e.preventDefault();

    if (isScrolling) return;
    isScrolling = true;

    const direction = e.deltaY > 0 ? 1 : -1;

    window.scrollBy({
      top: direction * DISTANCE,
      behavior: 'smooth'
    });

    setTimeout(() => {
      isScrolling = false;
    }, 500);
  }, { passive: false });
});
