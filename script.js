document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('movieModal');
    const closeModalButton = document.querySelector('.close-button');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            modal.style.display = 'block'; 
        });
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
