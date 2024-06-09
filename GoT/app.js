const paginationSwiper = new Swiper('.swiper-container-pagination', {
    slidesPerView: 1,
    spaceBetween: 10,
});

const textSwiper = new Swiper('.swiper-container-text', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-container-pagination',
        clickable: true,
    },
});

const paginationItems = document.querySelectorAll('.pagination-item');
paginationItems.forEach(item => {
    item.addEventListener('click', () => {
    const textContent = item.dataset.text;
    });
});