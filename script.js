// --- PRELOADER LOGIC ---
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const mainContent = document.getElementById('main-content');
    setTimeout(() => {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
        if (mainContent) {
            mainContent.classList.remove('hidden');
        }
    }, 2500); // Durasi splash screen 2.5 detik
});

// --- MAIN APP LOGIC ---
document.addEventListener('DOMContentLoaded', function() {
    
    // --- SLIDER LOGIC ---
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        const prevBtn = document.querySelector('.slider-nav.prev');
        const nextBtn = document.querySelector('.slider-nav.next');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(n) {
            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === n);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        function startSlider() {
            slideInterval = setInterval(nextSlide, 7000);
        }

        function stopSlider() {
            clearInterval(slideInterval);
        }

        showSlide(currentSlide);
        startSlider();
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => { nextSlide(); stopSlider(); startSlider(); });
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => { prevSlide(); stopSlider(); startSlider(); });
        }
    }

    // --- MODAL LOGIC ---
    const modal = document.getElementById('movieModal');
    if (modal) {
        const closeModalButton = document.querySelector('.close-button');
        const thumbnails = document.querySelectorAll('.thumbnail, .grid-item');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => { modal.style.display = 'flex'; });
        });
        if (closeModalButton) {
            closeModalButton.addEventListener('click', () => { modal.style.display = 'none'; });
        }
        window.addEventListener('click', event => {
            if (event.target == modal) { modal.style.display = 'none'; }
        });
    }

    // --- VIDEO PLAYER LOGIC ---
    const playerOverlay = document.getElementById('player-overlay');
    if (playerOverlay) {
        const mainPlayer = document.getElementById('main-player');
        const closePlayerBtn = document.getElementById('close-player');
        const playButtons = document.querySelectorAll('.btn-primary');

        function openPlayer() {
            mainPlayer.src = 'trailer_vynix.mp4'; // GANTI DENGAN NAMA FILE VIDEO ANDA
            playerOverlay.classList.remove('hidden');
            playerOverlay.style.visibility = 'visible';
            playerOverlay.style.opacity = '1';
            mainPlayer.play();
            if (mainPlayer.requestFullscreen) mainPlayer.requestFullscreen();
        }

        function closePlayer() {
            mainPlayer.pause();
            mainPlayer.src = '';
            playerOverlay.style.opacity = '0';
            playerOverlay.style.visibility = 'hidden';
            if (document.exitFullscreen) document.exitFullscreen();
        }

        playButtons.forEach(button => {
            button.addEventListener('click', openPlayer);
        });
        if (closePlayerBtn) {
            closePlayerBtn.addEventListener('click', closePlayer);
        }
    }
});
