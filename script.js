// Tunggu sampai semua konten halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {

    // 1. Ambil elemen-elemen yang kita butuhkan
    const modal = document.getElementById('movieModal');
    const closeModalButton = document.querySelector('.close-button');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // 2. Tambahkan fungsi untuk setiap poster film (thumbnail)
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Saat ini kita hanya menampilkan modal.
            // Nanti kita akan isi dengan info film yang sesuai.
            modal.style.display = 'block'; 
        });
    });

    // 3. Fungsi untuk menutup modal saat tombol 'x' diklik
    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // 4. Fungsi untuk menutup modal saat area di luar modal diklik
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

});
