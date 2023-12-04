// Add this JavaScript after your existing code
function openModal(element) {
    console.log(element);
    const modal = element.closest('.item').querySelector('.modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    // Close the modal if the overlay is clicked
    /* modal.onclick = function (event) {
        if (event.target === document.querySelector('.modal')) {
            closeModal();
        }
    }; */
    // Initialize Swiper when the modal is opened
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow", // "coverflow" or "cards"
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    }

function closeModal(element) {
    console.log(element);
    const modal = element.closest('.modal');
    console.log(modal);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // enable scrolling
}