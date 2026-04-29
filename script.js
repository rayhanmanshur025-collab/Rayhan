// ==================== MENU HAMBURGER (MOBILE) ====================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Tutup menu otomatis ketika link diklik (agar tidak menggantung)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==================== ANIMASI SCROLL (OPSIONAL) ====================
// Tambahkan class 'scrolled' ke header saat di-scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

// ==================== FITUR WHATSAPP (UNTUK HALAMAN KONTAK) ====================
// Cek apakah form WhatsApp ada di halaman ini
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai dari form
        const nama = document.getElementById('nama')?.value || '';
        const telepon = document.getElementById('telepon')?.value || '';
        const pesan = document.getElementById('pesan')?.value || '';
        
        // Validasi minimal nama dan pesan tidak boleh kosong
        if (!nama.trim() || !pesan.trim()) {
            alert('Harap isi Nama dan Pesan terlebih dahulu!');
            return;
        }
        
        // Nomor WhatsApp UMKM (GANTI DENGAN NOMOR ASLI ANDA)
        const nomorWA = '6281234567890'; // Contoh: 62812xxxxxxx (tanpa tanda + atau 0 di depan)
        
        // Format pesan untuk WhatsApp
        const text = `Halo FrostyFood!%0A%0A*Nama:* ${encodeURIComponent(nama)}%0A*Telepon:* ${encodeURIComponent(telepon)}%0A*Pesan:* ${encodeURIComponent(pesan)}%0A%0A-- Dikirim dari Website FrostyFood --`;
        
        // Buka WhatsApp Web/App
        const url = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${text}`;
        window.open(url, '_blank');
    });
}

// ==================== TAHUN OTOMATIS DI FOOTER (OPSIONAL) ====================
const yearElement = document.getElementById('currentYear');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ==================== SMOOTH SCROLL UNTUK TOMBOL INTERNAL (OPSIONAL) ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});