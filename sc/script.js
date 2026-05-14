const xmages2 = [
    'img/gallery/1.jpg',
    'img/gallery/2.jpg',
    'img/gallery/3.jpg'
];

let currentIndex = 0;
const paper = document.querySelector('.origami-paper');
const frontFace = document.querySelector('.face.front');
const nextLayer = document.querySelector('.origami-next');

// Set gambar awal
frontFace.style.backgroundImage = `url('${xmages2[0]}')`;
nextLayer.style.backgroundImage = `url('${xmages2[1]}')`;

function foldTransition() {
    // 1. Mulai animasi melipat
    paper.classList.add('fold');

    setTimeout(() => {
        // 2. Saat kertas sudah tidak terlihat (setelah 1.5 detik)
        currentIndex = (currentIndex + 1) % xmages2.length;
        const futureIndex = (currentIndex + 1) % xmages2.length;

        // 3. Gambar yang tadi di belakang sekarang pindah ke depan
        frontFace.style.backgroundImage = `url('${xmages2[currentIndex]}')`;
        
        // 4. Siapkan gambar berikutnya lagi di layer belakang
        nextLayer.style.backgroundImage = `url('${xmages2[futureIndex]}')`;

        // 5. Kembalikan posisi kertas tanpa animasi (instan)
        paper.style.transition = 'none';
        paper.classList.remove('fold');
        
        // Trigger reflow
        void paper.offsetWidth;

        // 6. Kembalikan transition untuk putaran berikutnya
        paper.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.5s';
    }, 1500);
}

// Jalankan setiap 6 detik
setInterval(foldTransition, 6000);

const testimonials = [
        { name: "Septian Adi", loc: "Nagoya", img: "img/alumni/1.jpg", msg: "Pelatihan bahasa di sini sangat praktis untuk kerja di pabrik Jepang." },
        { name: "Rina Wijaya", loc: "Osaka", img: "img/alumni/2.jpg", msg: "Sensei sangat sabar membimbing sampai saya lulus interview perusahaan." },
        { name: "Arif Budiman", loc: "Tokyo", img: "img/alumni/3.jpg", msg: "Proses administrasi transparan, tidak ada biaya tersembunyi. Mantap!" },
        { name: "Sari Fitriani", loc: "Fukuoka", img: "img/alumni/4.jpg", msg: "Asramanya bersih dan disiplin, benar-benar melatih mental untuk di Jepang." },
        { name: "Budi Santoso", loc: "Chiba", img: "img/alumni/5.jpg", msg: "Sangat bersyukur bisa kenal LPK ini, sekarang saya sudah di Jepang." }
    ];
    
    const marqueeContainer = document.getElementById('testi-marquee');
    
    // Fungsi generate HTML Card
    function generateCard(data) {
        // Jika foto lokal tidak ditemukan, otomatis pakai placeholder inisial
        const photoUrl = data.img.includes('/') ? data.img : `https://ui-avatars.com/api/?name=${data.name}&background=ffb7c5&color=d32f2f`;
        
        return `
            <div class="testi-card">
                <div class="testi-profile">
                    <img src="${photoUrl}" alt="${data.name}">
                    <div class="testi-info">
                        <h4>${data.name}</h4>
                        <span>${data.loc}, Jepang</span>
                    </div>
                </div>
                <p class="testi-quote">${data.msg}</p>
            </div>
        `;
    }
    
    // Gabungkan semua card
    const cardHTML = testimonials.map(item => generateCard(item)).join('');
    
    // Masukkan ke container sebanyak 2 KALI (Sangat Penting untuk Infinite Loop)
    marqueeContainer.innerHTML = cardHTML + cardHTML;

	  const galleryCards = document.querySelectorAll('.gallery-card img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    galleryCards.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.classList.add('active');
        });
    });
    
    function createPetal() {
        const container = document.getElementById('sakura-container');
        if (container.childElementCount > 7) return;
    
        const petal = document.createElement('div');
        petal.classList.add('petal');
    
        // Variasi ukuran
        const size = Math.random() * 15 + 8 + 'px';
        petal.style.width = size;
        petal.style.height = size;
    
        // Posisi awal horizontal
        petal.style.left = Math.random() * 100 + 'vw';
    
        // Durasi jatuh (vertikal) - dibuat lambat agar elegan
        const fallDuration = Math.random() * 5 + 10 + 's'; 
        
        // Durasi ayunan (horizontal) - berbeda dengan durasi jatuh agar pola tidak monoton
        const swayDuration = Math.random() * 2 + 3 + 's';
        const swayDelay = Math.random() * -5 + 's'; // Delay negatif agar animasi langsung jalan di posisi acak
    
        petal.style.animationDuration = `${fallDuration}, ${swayDuration}`;
        petal.style.animationDelay = `0s, ${swayDelay}`;
        
        // Opacity acak
        petal.style.opacity = Math.random() * 0.6 + 0.3;
        container.appendChild(petal);
    
        // Hapus setelah jatuh
        setTimeout(() => {
            petal.remove();
        }, parseFloat(fallDuration) * 1000);
    }
    
    // Interval kemunculan kelopak
    setInterval(createPetal, 2000);
    
    // Mengambil elemen checkbox toggle dan semua link di dalam navigasi
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Menambahkan event listener untuk setiap link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Mengubah status checkbox menjadi tidak tercentang (menutup menu)
            menuToggle.checked = false;
        });
    });
    
    // 1. Daftar nama file gambar Anda di folder img/gallery/
    // 1. Data gambar (isi sesuai nama file di folder img/gallery/)
    const xmages = [
        { src: '3.jpg', title: 'gallery' },
        { src: '2.jpg', title: 'gallery' },
        { src: '3.jpg', title: 'gallery' },
        { src: '4.jpg', title: 'gallery' },
        { src: '5.jpg', title: 'gallery' },
        { src: '6.jpg', title: 'gallery' },
        { src: '7.jpg', title: 'gallery' },
        { src: '8.jpg', title: 'gallery' }
    ];
    
    let currentIndex = 0;
    const xmagesPerLoad = 4; // Jumlah default yang ditampilkan
    const galleryContainer = document.getElementById('dynamic-gallery');
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    function renderNextxmages() {
        // Ambil potongan array gambar berikutnya
        const nextBatch = xmages.slice(currentIndex, currentIndex + xmagesPerLoad);
        
        nextBatch.forEach(imgData => {
            const figure = document.createElement('figure');
            figure.className = 'gallery-card';
            // Animasi fade-in sederhana saat muncul
            figure.style.opacity = '0';
            figure.style.transition = 'opacity 0.5s ease-in-out';
            
            figure.innerHTML = `
                <img src="img/gallery/${imgData.src}" alt="${imgData.title}" loading="lazy">
                <figcaption>${imgData.title}</figcaption>
            `;
    
            // Event Klik Lightbox (Gunakan script lightbox Anda yang sudah ada)
            figure.addEventListener('click', () => {
                const lightboxImg = document.getElementById('lightbox-img');
                const lightbox = document.getElementById('lightbox');
                if(lightboxImg && lightbox) {
                    lightboxImg.src = `img/gallery/${imgData.src}`;
                    lightbox.classList.add('active');
                }
            });
    
            galleryContainer.appendChild(figure);
            
            // Trigger animasi fade-in
            setTimeout(() => figure.style.opacity = '1', 10);
        });
    
        currentIndex += xmagesPerLoad;
    
        // Sembunyikan tombol jika semua gambar sudah ditampilkan
        if (currentIndex >= xmages.length) {
            loadMoreBtn.style.display = 'none';
        }
    }
    
    // Jalankan saat pertama kali halaman dimuat
    document.addEventListener('DOMContentLoaded', () => {
        renderNextxmages();
        
        loadMoreBtn.addEventListener('click', () => {
            renderNextxmages();
        });
    });
    
    const translations = {
    'ID': {
        // Navbar
		
		'dp':'Daftar Kelas Pagi',
		'dm':'Daftar Kelas Malam',
		'm1' : 'Materi : JLPT N5 - N4, Budaya, Kaiwa',
		'alumni': 'Pesan Dari Alumni',
		'nav': 'Navigasi',
        'nav-home': 'Beranda',
        'nav-program': 'Program Unggulan',
        'nav-alur': 'Alur Daftar',
        'nav-kontak': 'Kontak',
        'nav-daftar': 'Daftar',

        // Hero Section
        'hero-title': 'Masa Depanmu di Negeri Sakura',
        'hero-desc': 'LPK Bengaku Mandiri membantu pemuda Indonesia meraih karir impian di Jepang melalui pelatihan bahasa dan mentalitas yang unggul.',
        'hero-btn': 'Mulai Perjalananmu',
		  // Program Section
        'program-title': 'Program Unggulan',
        'program-1-title': 'Ikusei Suro',
		    'program-1-desc': 'Program kerja baru Jepang Pengganti Ginou Jisshusei',
        'program-2-title': 'Tokutei Ginou',
		    'program-2-desc': 'Bekerja di Jepang bagi tenaga kerja asing yang telah lulus ujian bahasa Jepang dan ujian keterampilan',
        'program-3-title': 'Konstruksi',
        'program-3-desc': 'Berperan dalam pembangunan infrastruktur modern di kota-kota besar seperti Tokyo dan Osaka.',
        'program-4-title': 'Pertanian',
        'program-4-desc': 'Mempelajari teknologi budidaya tanaman modern di Prefektur Nagano yang asri.',
        'program-5-title': 'Caregiver',
        'program-5-desc': 'Berdedikasi melayani lansia dengan teknologi dan standar hospitality tinggi khas Jepang.',

        // Gallery
        'gallery-title': 'Gallery Kegiatan',
        'gallery-btn': 'Lihat Lainnya',

        // Pricing & Facility
        'price-section-title': 'Pendaftaran',
        'price-label': 'Biaya Awal',
        'price-amount': 'Rp 3.000.000',
        'price-note': '*Syarat dan ketentuan berlaku',
        'facility-title': 'Fasilitas yang Didapatkan:',
        'fac-1': 'Kursus Bahasa Jepang',
        'fac-2': 'Buku Pelajaran',
        'fac-3': 'Outfit / Seragam',
        'fac-4': 'Pembinaan Mensetsu',
        'fac-5': 'Ruang Kelas Nyaman',
        'fac-6': 'Konsultasi Karir',
        'fac-btn': 'Tanya Detail Biaya',

        // Batch Section
        'batch-title': 'Batch Pendaftaran Terbaru',
        'batch-status': 'Tersedia',
        'batch-pagi-title': 'Kelas Pagi',
        'batch-pagi-desc': 'Program Intensif Harian',
        'batch-malam-title': 'Kelas Malam',
        'batch-malam-desc': 'Program Pekerja & Mahasiswa',
        'batch-time-pagi': '08:00 - 14:00 WIB',
        'batch-time-malam': '20:00 - 23:00 WIB',
        'batch-days': 'Senin s/d Jumat',
        'batch-btn': 'Daftar Sekarang',

        // Alur Keberangkatan
        'process-title': 'Alur Keberangkatan',
        'process-subtitle': 'Proses terukur dari awal pendaftaran hingga terbang ke Jepang',
        'step-1-title': 'Pendaftaran LPK',
        'step-1-desc': 'Pengisian formulir pendaftaran dan seleksi administrasi di kantor Aruva.',
        'step-2-title': 'Pendidikan Bahasa',
        'step-2-desc': 'Pelatihan intensif bahasa Jepang (N5 - N4) dengan metode praktis.',
        'step-3-title': 'Ujian Kualifikasi',
        'step-3-desc': 'Mengikuti ujian resmi (JLPT/JFT & SSW) untuk mendapatkan sertifikat keahlian.',
        'step-4-title': 'Pengurusan Dokumen',
        'step-4-desc': 'Proses COE, paspor, dan dokumen resmi lainnya jika dinyatakan lulus & fit.',
        'step-5-title': 'Pemantapan Budaya',
        'step-5-desc': 'Pembekalan disiplin kerja (Choure) dan pengenalan budaya hidup di Jepang.',
        'step-6-title': 'Pendaftaran JOB',
        'step-6-desc': 'Wawancara dengan user/perusahaan Jepang dan keberangkatan kerja.',

        // Footer
        'footer-desc': 'LPK Bengaku Mandiri berdedikasi menciptakan SDM berkualitas, berkarakter, dan siap bersaing di pasar kerja internasional, khususnya Jepang.',
        'footer-contact-title': 'Hubungi Kami',
        'footer-address': 'Pule Tegalsari Kandeman Batang'
    },
    'JP': {
        // Navbar
		'dp':'午前クラスの登録',
		'dm':'夜間クラスの登録',
		'm1':'学習内容 JLPT N5 - N4 対策, 日本文化,会話 ',
		'alumni': '卒業生からのメッセージ',
		'nav': 'ナビゲーション',
        'nav-home': 'ホーム',
        'nav-program': '優良プログラム',
        'nav-alur': '登録の流れ',
        'nav-kontak': '連絡先',
        'nav-daftar': '登録',
		  // Hero Section
        'hero-title': '桜の国でのあなたの未来',
        'hero-desc': 'LPK Bengaku Mandiriは、優れた語学訓練とメンタリティを通じて、インドネシアの若者が日本で夢のキャリアを達成できるよう支援します。',
        'hero-btn': '旅を始める',

        // Program Section
        'program-title': '優良プログラム',
        'program-1-title': '育成就労',
		'program-1-desc': '技能実習制度に代わる日本の新しい就労制度',
        'program-2-title': '特定技能',
		'program-2-desc': '日本語試験と技能試験に合格した外国人労働者のための日本での就労',
        'program-3-title': '建設',
        'program-3-desc': '東京や大阪などの大都市で近代的なインフラ整備に貢献します。',
        'program-4-title': '農業',
        'program-4-desc': '自然豊かな長野県で近代的な栽培技術を学びます。',
        'program-5-title': '介護',
        'program-5-desc': '日本独自の高いホスピタリティ基準と技術で高齢者に奉仕します。',

        // Gallery
        'gallery-title': '活動ギャラリー',
        'gallery-btn': 'もっと見る',

        // Pricing & Facility
        'price-section-title': 'お申し込み',
        'price-label': '初期費用',
        'price-amount': 'Rp.3000.000',
        'price-note': '*利用規約が適用されます',
        'facility-title': '含まれる施設・特典：',
        'fac-1': '日本語学習',
        'fac-2': '教科書',
        'fac-3': '制服',
        'fac-4': '面接指導',
        'fac-5': '快適な教室',
        'fac-6': 'キャリア相談',
        'fac-btn': '費用の詳細を聞く',

        // Batch Section
        'batch-title': '最新の募集バッチ',
        'batch-status': '募集中',
        'batch-pagi-title': '午前のクラス',
        'batch-pagi-desc': '毎日集中プログラム',
        'batch-malam-title': '夜間のクラス',
        'batch-malam-desc': '社会人・学生向け',
        'batch-time-pagi': '08:00 - 14:00 WIB',
        'batch-time-malam': '20:00 - 23:00 WIB',
        'batch-days': '月曜日〜金曜日',
        'batch-btn': '今すぐ申し込む',

        // Alur Keberangkatan
        'process-title': '日本への流れ',
        'process-subtitle': '申し込みから出国までの明確なプロセス',
        'step-1-title': 'LPK登録',
        'step-1-desc': 'Aruva事務所での申込書記入と書類選考。',
        'step-2-title': '語学教育',
        'step-2-desc': '実践的な方法による日本語集中訓練 (N5 - N4)。',
        'step-3-title': '資格試験',
        'step-3-desc': '技能証明書取得のための公式試験 (JLPT/JFT & SSW) の受験。',
        'step-4-title': '書類手続き',
        'step-4-desc': '合格後のCOE、パスポート、その他の公式書類の申請。',
        'step-5-title': '文化定着',
        'step-5-desc': '朝礼などの仕事の規律と日本での生活文化のオリエンテーション。',
        'step-6-title': '仕事の応募',
        'step-6-desc': '日本企業との面接および出国。',

        // Footer
        'footer-desc': 'LPK Bengaku Mandiriは、質の高い人材を育成し、日本を中心とした国際的な労働市場で競争できる人材の創出に専念しています。',
        'footer-contact-title': 'お問い合わせ',
        'footer-address': 'バタン県カンデマン、プーレ・テガルサリ'
    }
};

// Penampung untuk menghentikan proses ketik yang sedang berjalan
function changeLang(lang) {
    const elements = document.querySelectorAll('[data-key]');
    const currentLangDisplay = document.getElementById('current-lang');

    // 1. Update Preferensi
    if(currentLangDisplay) currentLangDisplay.innerText = lang;
    localStorage.setItem('selectedLang', lang);

    elements.forEach(el => {
        // Reset animasi jika sedang berjalan
        el.classList.remove('mask-animate');
        
        // Trigger reflow agar browser sadar class dihapus
        void el.offsetWidth; 

        // 2. Mulai Animasi Sapuan
        el.classList.add('mask-animate');

        // 3. Ganti teks tepat saat kotak berada di tengah (300ms)
        setTimeout(() => {
            const key = el.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        }, 300);

        // Bersihkan class setelah animasi selesai (600ms)
        setTimeout(() => {
            el.classList.remove('mask-animate');
        }, 600);
    });

    // Tutup menu FAB
    const langCheckbox = document.getElementById('lang-checkbox');
    if(langCheckbox) langCheckbox.checked = false;
}

// Pastikan inisialisasi saat halaman dimuat hanya ada satu
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ID';
    changeLang(savedLang);
});

// Saat halaman dimuat, gunakan bahasa yang terakhir dipilih atau default ke ID
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ID';
    changeLang(savedLang);
});
