// Anda bisa menambahkan JavaScript di sini nanti,
// seperti efek scroll halus atau validasi form.
document.addEventListener('DOMContentLoaded', function() {
    // Contoh sederhana: log saat halaman dimuat
    console.log("Website Desa Danurojo siap!");

    // Smooth scroll untuk navigasi
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});