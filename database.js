// ============================================================
// DATABASE.JS - GUDANG DATA UTAMA (FINAL REVISION)
// ============================================================

// 1. DATA MENTAH 110 SOAL HOTS (SUMBER UTAMA)
const RAW_TRYOUT_110 = [
    // --- TWK (30 Soal) ---
    { id: 1, type: "TWK", text: "Nasionalisme di era digital seringkali tergerus oleh arus informasi global... Sikap nasionalisme yang paling relevan adalah...", options: ["Menutup akun media sosial.", "Hanya memposting budaya daerah.", "Memfilter informasi & menyebarkan konten positif (Counter-Narrative).", "Menyerang akun asing.", "Menggunakan bahasa daerah di caption."], key: 2 },
    { id: 2, type: "TWK", text: "Integritas: Rekan kerja senior memanipulasi laporan perjalanan dinas nominal kecil. Sikap Anda?", options: ["Mengingatkan personal.", "Diam saja.", "Melaporkan ke unit kepatuhan internal.", "Menyindir.", "Ikut melakukannya."], key: 2 },
    { id: 3, type: "TWK", text: "Bela Negara: Dokter menolak ditempatkan di daerah konflik. Penilaian Anda?", options: ["Wajar.", "Salah, terikat sumpah & UU Bela Negara.", "Benar, HAM.", "Kurang tepat.", "Sangat salah."], key: 1 },
    { id: 4, type: "TWK", text: "Pilar Negara: Kelompok menyuarakan penggantian ideologi Pancasila. Tindakan negara?", options: ["Membiarkan.", "Membubarkan paksa.", "Melarang & menindak tegas (inkonstitusional).", "Dialog terbuka.", "Mencabut kewarganegaraan."], key: 2 },
    { id: 5, type: "TWK", text: "Sejarah: Hikmah konflik Rengasdengklok bagi kepemimpinan masa kini...", options: ["Otoriter.", "Muda selalu benar.", "Sinergi semangat muda & kebijaksanaan tua.", "Abaikan orang tua.", "Konflik menghambat."], key: 2 },
    { id: 6, type: "TWK", text: "Bahasa Indonesia: Penulisan gelar yang BENAR sesuai PUEBI...", options: ["Prof. Dr. H. Riandi Pratama, S.H, M.Kn.", "Prof. Dr. H. Riandi Pratama, S.H., M.Kn.", "Prof, Dr, H, Riandi Pratama, SH., M.Kn.", "Prof. Dr. H. Riandi Pratama, S.H., M.Kn", "Prof.Dr.H. Riandi Pratama, S.H., M.Kn."], key: 1 },
    { id: 7, type: "TWK", text: "Bhinneka Tunggal Ika: Buka puasa bersama di kantor mayoritas Muslim. Rekan Non-Muslim ingin ikut...", options: ["Larang.", "Pisah meja.", "Ajak ikut & sediakan menu netral.", "Batalkan.", "Suruh pindah agama."], key: 2 },
    { id: 8, type: "TWK", text: "Wawasan Nusantara: Dasar hukum internasional terkuat untuk Natuna Utara...", options: ["Deklarasi Djuanda", "UUD 1945", "UNCLOS 1982", "TNI AL", "Perjanjian Linggarjati"], key: 2 },
    { id: 9, type: "TWK", text: "Pilar Negara: Pancasila sebagai 'Staatsfundamentalnorm' artinya...", options: ["Hukum tertinggi.", "Sumber hukum tak dapat diubah.", "Simbol.", "Bisa referendum.", "Setara TAP MPR."], key: 1 },
    { id: 10, type: "TWK", text: "Integritas: Ditawari jabatan basah dengan syarat setor 10%. Sikap...", options: ["Terima.", "Tolak halus.", "Terima diam-diam.", "Tolak tegas.", "Rekam viral."], key: 3 },
    { id: 11, type: "TWK", text: "Sejarah: Budi Utomo (1908) disebut tonggak Kebangkitan Nasional karena...", options: ["Punya tentara.", "Ubah strategi ke organisasi modern.", "Kaum bangsawan.", "Tuntut merdeka.", "Usir Belanda."], key: 1 },
    { id: 12, type: "TWK", text: "UUD 1945: Kedudukan MPR setelah amandemen...", options: ["Setara lembaga tinggi lain.", "Di bawah Presiden.", "Hanya melantik.", "Dibubarkan.", "Eksekutif murni."], key: 0 },
    { id: 13, type: "TWK", text: "Bahasa Indonesia: Makna 'insentif' dan 'kondusif'...", options: ["Hadiah & Aman", "Tambahan & Tenang", "Stimulus & Mendukung", "Gaji buta & Ramai", "Bantuan & Kacau"], key: 2 },
    { id: 14, type: "TWK", text: "Bela Negara: Contoh ancaman Proxy War...", options: ["Pelanggaran udara.", "Narkoba & Hoaks.", "Latihan militer.", "Pencurian ikan.", "Embargo."], key: 1 },
    { id: 15, type: "TWK", text: "Integritas: Gratifikasi dianggap suap apabila...", options: ["Diterima PNS & tidak lapor 30 hari.", "Diterima swasta.", "Bernilai < 1 juta.", "Saat nikahan.", "Makanan."], key: 0 },
    { id: 16, type: "TWK", text: "Pancasila: Voting dilakukan saat deadlock. Sesuai Sila 4 karena...", options: ["Demokrasi liberal.", "Musyawarah gagal.", "Jalan terakhir (ultimum remedium).", "Otoriter.", "Suka voting."], key: 2 },
    { id: 17, type: "TWK", text: "Sejarah: Perubahan Sila 1 Piagam Jakarta menunjukkan...", options: ["Takut Jepang.", "Mementingkan persatuan bangsa.", "Dipaksa minoritas.", "Tidak taat.", "Ingin bantuan Sekutu."], key: 1 },
    { id: 18, type: "TWK", text: "Sistem Pemerintahan: Presiden menyatakan perang harus persetujuan...", options: ["Menlu", "MK", "DPR", "MPR", "Panglima TNI"], key: 2 },
    { id: 19, type: "TWK", text: "Wawasan Nusantara: Arti ekonomi Negara Kepulauan...", options: ["Laut bebas.", "Laut penghubung & sumber kekayaan mutlak.", "Asing boleh ambil.", "Hanya daratan.", "Tempat limbah."], key: 1 },
    { id: 20, type: "TWK", text: "Bahasa Indonesia: Penulisan serapan BENAR...", options: ["Analisa, Praktek", "Analisis, Praktik, Risiko", "Analisa, Praktik", "Analisis, Praktek", "Analisis, Praktik, Resiko"], key: 1 },
    { id: 21, type: "TWK", text: "Pancasila: Beda Sila 2 dan 5...", options: ["Sila 2 (Individu/Moral), Sila 5 (Sosial/Sistem).", "Hukum vs Ekonomi.", "Dalam vs Luar negeri.", "Vertikal vs Horizontal.", "Sama saja."], key: 0 },
    { id: 22, type: "TWK", text: "UUD 1945: Pengujian peraturan di bawah UU terhadap UU dilakukan oleh...", options: ["MK", "MA", "KY", "DPR", "Presiden"], key: 1 },
    { id: 23, type: "TWK", text: "Integritas: Yang BUKAN benturan kepentingan...", options: ["Tunjuk perusahaan istri.", "Promosi keponakan.", "Melayani KTP tetangga sesuai antrean.", "Audit mantan kantor.", "Uji skripsi anak."], key: 2 },
    { id: 24, type: "TWK", text: "Bahasa Indonesia: Ide pokok paragraf banjir Jakarta...", options: ["Curah hujan.", "Sampah.", "Penyebab & penanganan banjir kompleks.", "Tata ruang.", "Resapan air."], key: 2 },
    { id: 25, type: "TWK", text: "Pilar Negara: Ciri Parlementer dalam sistem kita...", options: ["Presiden kepala negara & pemerintahan.", "Menteri lapor Presiden.", "Presiden bubarkan DPR.", "Impeachment.", "Tidak ada PM."], key: 3 }, // Koreksi: Impeachment adalah ciri check & balance presidensial, tp di soal ini konteks 'nyangkut' mungkin merujuk ke tanggung jawab menteri (dulu parlementer). Tapi kunci user 3 (Impeachment). Kita ikut kunci user.
    { id: 26, type: "TWK", text: "Bela Negara: Tindakan konkret bela negara ekonomi...", options: ["Larang impor.", "Beli produk lokal meski mahal.", "Beli jika kualitas sama.", "Demo kedubes.", "Status medsos."], key: 1 },
    { id: 27, type: "TWK", text: "Sejarah: Isi mandat Soekarno ke Syafruddin Prawiranegara...", options: ["Menyerah.", "Pindah ibu kota.", "Bentuk PDRI.", "Perang gerilya.", "Minta bantuan PBB."], key: 2 },
    { id: 28, type: "TWK", text: "Hak DPR untuk penyelidikan kebijakan pemerintah...", options: ["Interpelasi", "Angket", "Menyatakan Pendapat", "Budget", "Imunitas"], key: 1 },
    { id: 29, type: "TWK", text: "Bahasa Indonesia: Tanda baca SALAH...", options: ["Ibu membeli...", "Dia tidak suka...", "Wow...", "Saya ingin ke Bali; namun...", "Karena sakit..."], key: 3 },
    { id: 30, type: "TWK", text: "Pancasila: Makna 'Hikmat Kebijaksanaan'...", options: ["Dipilih langsung.", "Mayoritas.", "Kaya.", "Rasionalitas & hati nurani.", "Bangsawan."], key: 3 },

    // --- TIU (30 Soal) ---
    { id: 31, type: "TIU", text: "Silogisme: Semua BEM pakai almet. Sebagian Teknik anggota BEM. Tidak ada yang pakai almet dihukum.", options: ["Sebagian Teknik tidak dihukum.", "Semua Teknik pakai almet.", "Semua dihukum BEM.", "Ada BEM dihukum.", "Tidak dapat disimpulkan."], key: 0 },
    { id: 32, type: "TIU", text: "Analitik: A depan B. C belakang D. B depan E. D depan A. Urutan?", options: ["D-A-B-E-C", "D-A-C-B-E", "D-C-A-B-E", "C-D-A-B-E", "A-B-E-D-C"], key: 2 },
    { id: 33, type: "TIU", text: "Analogi: ABRASI : HEMPASAN = ...", options: ["Memasak:Panas", "Reruntuhan:Hancur", "Rayuan:Pujian", "Erosi:Aliran Air", "Serpihan:Potongan"], key: 3 },
    { id: 34, type: "TIU", text: "Hitungan: 0,75 + 2/3 x 0,25 = ...", options: ["0,88", "0,91", "0,95", "1,05", "1,25"], key: 1 },
    { id: 35, type: "TIU", text: "Perbandingan: 30 hari 12 pekerja. Hari ke-10 stop 5 hari. Tambahan?", options: ["2", "4", "6", "8", "16"], key: 1 },
    { id: 36, type: "TIU", text: "Deret: 2, 3, 5, 8, 13, 21, X", options: ["29", "30", "34", "35", "40"], key: 2 },
    { id: 37, type: "TIU", text: "JKW: Jarak 120km. A (40km/j) 07.00. B (60km/j) 07.30. Susul?", options: ["08.00", "08.30", "09.00", "09.30", "10.00"], key: 1 },
    { id: 38, type: "TIU", text: "Posisi Meja Bundar: P hadap S. T antara P-U. R kanan S. Hadap T?", options: ["Q", "R", "U", "S", "Tidak ada"], key: 0 },
    { id: 39, type: "TIU", text: "Himpunan: 40 orang. 25 Komp, 20 Ing, 7 tidak keduanya. Keduanya?", options: ["10", "12", "15", "18", "8"], key: 1 },
    { id: 40, type: "TIU", text: "Analogi 3: GURU : PAPAN : KAPUR", options: ["Petani:Cangkul:Padi", "Dokter:Stetoskop:Pasien", "Pelukis:Kanvas:Kuas", "Sopir:Mobil:Jalan", "Nelayan:Jaring:Ikan"], key: 2 },
    { id: 41, type: "TIU", text: "Akar: √144 + √25 x 4", options: ["22", "32", "52", "68", "12"], key: 1 },
    { id: 42, type: "TIU", text: "Deret Huruf: A, Z, C, X, E, ...", options: ["U", "V", "W", "T", "S"], key: 1 },
    { id: 43, type: "TIU", text: "Logika: Jika BBM naik, Cabai naik. Cabai tidak naik.", options: ["BBM tidak naik.", "BBM naik.", "Cabai turun.", "Subsidi.", "Tidak disimpulkan."], key: 0 },
    { id: 44, type: "TIU", text: "Diskon: 200rb diskon 50%+20%. Bayar?", options: ["60rb", "80rb", "100rb", "120rb", "140rb"], key: 1 },
    { id: 45, type: "TIU", text: "Umur: Ayah 4x Anak. 5 thn lagi Ayah 3x Anak. Ayah skrg?", options: ["30", "36", "40", "44", "48"], key: 2 },
    { id: 46, type: "TIU", text: "Statistik: 7, 8, 8, 9, 7, 6, 8. Modus & Median?", options: ["8 & 8", "8 & 7", "7 & 8", "7 & 7", "8 & 7.5"], key: 0 },
    { id: 47, type: "TIU", text: "Peluang: 3 Merah, 2 Biru. Peluang Merah?", options: ["2/5", "3/5", "1/2", "1/3", "3/2"], key: 1 },
    { id: 48, type: "TIU", text: "Bahasa Buatan: Loro=Makan, Sopo=Nasi. Sopo Enak=Nasi Goreng. Makan Goreng?", options: ["Loro Enak", "Enak Loro", "Sopo Loro", "Goreng Sopo", "Enak Sopo"], key: 0 },
    { id: 49, type: "TIU", text: "Deret: 2, 4, 8, 14, 22, ...", options: ["30", "32", "34", "36", "40"], key: 1 },
    { id: 50, type: "TIU", text: "Analogi: ABADI : ... = ... : ...", options: ["Kekal:Sementara", "Fana:Tetap", "Lama:Sebentar", "Fana:Sementara", "Awet:Rusak"], key: 1 },
    { id: 51, type: "TIU", text: "Figural Serial: Rotasi 45 derajat. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 1 },
    { id: 52, type: "TIU", text: "Figural Analogi: Penambahan elemen. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 2 },
    { id: 53, type: "TIU", text: "Figural Beda: Ganjil/Genap. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 2 },
    { id: 54, type: "TIU", text: "Figural Matriks: Pola Baris. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 2 },
    { id: 55, type: "TIU", text: "Figural Cermin: Diagonal. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 0 },
    { id: 56, type: "TIU", text: "Figural Kubus: Rotasi 3D. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 0 },
    { id: 57, type: "TIU", text: "Figural Kertas: 3 Lipatan. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 2 },
    { id: 58, type: "TIU", text: "Figural Analogi: 3 Elemen. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 1 },
    { id: 59, type: "TIU", text: "Figural Serial: Dinamis. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 2 },
    { id: 60, type: "TIU", text: "Figural Rotasi: Mirror Image. (Lihat Gambar)", options: ["A", "B", "C", "D", "E"], key: 2 },

    // --- TKP (50 Soal - Skala 1-5) ---
    { id: 61, type: "TKP", text: "Pelayanan: Warga marah & teriak. Sikap?", options: ["Panggil satpam.", "Dengar, minta maaf, bantu.", "Minta tenang.", "Jelaskan bukan salah saya.", "Lapor atasan."], points: [2, 5, 3, 1, 4], key: 1 },
    { id: 62, type: "TKP", text: "Profesionalisme: Tugas dadakan saat deadline. Sikap?", options: ["Tolak.", "Terima & kerjakan cepat.", "Minta bantuan.", "Mengeluh.", "Kerjakan sekaligus."], points: [2, 5, 4, 1, 3], key: 1 },
    { id: 63, type: "TKP", text: "Jejaring: Rekan tunda kerja. Sikap?", options: ["Tegur forum.", "Bicara empat mata.", "Lapor.", "Kerjakan sendiri.", "Diam."], points: [2, 5, 3, 4, 1], key: 1 },
    { id: 64, type: "TKP", text: "TIK: Sistem down, antrean numpuk. Sikap?", options: ["Tutup.", "Manual sementara.", "Minta teknisi.", "Suruh pulang.", "Panik."], points: [1, 5, 4, 1, 2], key: 1 },
    { id: 65, type: "TKP", text: "Sosbud: Tradisi langgar prinsip. Sikap?", options: ["Tolak tegas.", "Ikut sekadarnya (hormat).", "Pura-pura sakit.", "Edukasi.", "Ikut total."], points: [2, 5, 1, 2, 3], key: 1 },
    { id: 66, type: "TKP", text: "Radikalisme: Rekan posting hoax. Sikap?", options: ["Unfriend.", "Ingatkan personal (DM).", "Lapor.", "Sindiri.", "Masa bodoh."], points: [2, 5, 4, 1, 1], key: 1 },
    { id: 67, type: "TKP", text: "Integritas: Uang di berkas. Sikap?", options: ["Terima.", "Tolak & kembalikan.", "Sumbangkan.", "Lapor polisi.", "Marah."], points: [1, 5, 2, 3, 2], key: 1 },
    { id: 68, type: "TKP", text: "Profesionalisme: Kritik atasan di depan umum. Sikap?", options: ["Bantah.", "Terima & jelaskan pribadi.", "Diam malu.", "Cari dukungan.", "Resign."], points: [2, 5, 3, 1, 1], key: 1 },
    { id: 69, type: "TKP", text: "Pelayanan: Anak telepon nangis saat melayani. Sikap?", options: ["Angkat.", "Izin sebentar, pastikan, lanjut.", "Matikan.", "Minta teman.", "Abaikan."], points: [1, 5, 2, 3, 4], key: 1 },
    { id: 70, type: "TKP", text: "Jejaring: Tim gagal target. Sikap?", options: ["Salahkan ketua.", "Evaluasi bersama.", "Pura-pura.", "Kerja sendiri.", "Pindah."], points: [1, 5, 1, 3, 1], key: 1 },
    { id: 71, type: "TKP", text: "Radikalisme: Rekan tolak hormat bendera. Sikap?", options: ["Lapor BNPT.", "Jauhi.", "Dialog.", "Lapor atasan/HR.", "Ingatkan lain."], points: [3, 1, 5, 4, 2], key: 2 },
    { id: 72, type: "TKP", text: "Pelayanan: Nenek tanpa KTP. Sikap?", options: ["Tolak.", "Izin atasan (diskresi).", "Layani diam-diam.", "Suruh ambil.", "Marah."], points: [2, 5, 3, 4, 1], key: 1 },
    { id: 73, type: "TKP", text: "Profesionalisme: Saudara ikut tender. Sikap?", options: ["Bocoran dikit.", "Tolak & prosedural.", "Saran jangan ikut.", "Mundur dari panitia.", "Biarkan."], points: [1, 5, 3, 2, 4], key: 1 },
    { id: 74, type: "TKP", text: "Jejaring: Rekan pasif. Sikap?", options: ["Biarkan.", "Tegur.", "Proaktif tanya.", "Ngobrol personal.", "Lapor."], points: [1, 2, 5, 4, 3], key: 2 },
    { id: 75, type: "TKP", text: "Sosbud: Lingkungan jam karet. Sikap?", options: ["Marah.", "Ikut.", "Tetap disiplin & persuasif.", "Minta pindah.", "Sanksi."], points: [2, 1, 5, 1, 3], key: 2 },
    { id: 76, type: "TKP", text: "TIK: Gaptek cloud computing. Sikap?", options: ["Pasrah.", "Belajar mandiri.", "Minta ajarin.", "Protes.", "Manual."], points: [3, 5, 4, 1, 2], key: 1 },
    { id: 77, type: "TKP", text: "Profesionalisme: Limpahan tugas rekan cuti. Sikap?", options: ["Tolak.", "Terima.", "Negosiasi prioritas.", "Semampunya.", "Sakit."], points: [2, 3, 5, 1, 1], key: 2 },
    { id: 78, type: "TKP", text: "Pelayanan: Warga asing tak bisa bahasa. Sikap?", options: ["Tolak.", "Pakai aplikasi translate.", "Minta bantuan.", "Isyarat.", "Minggir."], points: [1, 5, 4, 3, 2], key: 1 },
    { id: 79, type: "TKP", text: "Jejaring: Gosip miring. Sikap?", options: ["Marah.", "Klarifikasi.", "Buktikan kinerja.", "Lapor.", "Resign."], points: [1, 2, 5, 3, 1], key: 2 },
    { id: 80, type: "TKP", text: "Radikalisme: Tidak hormat bendera. Sikap?", options: ["Tendang.", "Biarkan.", "Lapor.", "Tegur.", "Diskusi."], points: [1, 2, 5, 3, 4], key: 2 },
    { id: 81, type: "TKP", text: "Profesionalisme: Kesalahan laporan. Sikap?", options: ["Diam.", "Revisi & lapor.", "Tunggu tegur.", "Salahkan teman.", "Tukar diam-diam."], points: [1, 5, 2, 1, 3], key: 1 },
    { id: 82, type: "TKP", text: "Sosbud: Doa bersama beda agama. Sikap?", options: ["Tiadakan.", "Mayoritas.", "Hening cipta universal.", "Bergantian.", "Mundur."], points: [2, 1, 5, 4, 1], key: 2 },
    { id: 83, type: "TKP", text: "TIK: Atasan sebar hoax. Sikap?", options: ["Ikut sebar.", "Japri santun.", "Reply grup.", "Diam.", "Keluar."], points: [1, 5, 3, 2, 1], key: 1 },
    { id: 84, type: "TKP", text: "Pelayanan: Antrean elektronik rusak. Sikap?", options: ["Teriak.", "Stop.", "Manual inisiatif.", "Pilih kasih.", "Pura-pura."], points: [1, 2, 5, 1, 1], key: 2 },
    { id: 85, type: "TKP", text: "Jejaring: Kritik pedas. Sikap?", options: ["Balas.", "Diam marah.", "Terima & jawab data.", "Walk out.", "Minta bela."], points: [1, 2, 5, 1, 3], key: 2 },
    { id: 86, type: "TKP", text: "Profesionalisme: Pakai printer kantor. Sikap?", options: ["Diam-diam.", "Ganti kertas.", "Izin atasan.", "Ke rental.", "Jangan kumpul."], points: [1, 3, 4, 5, 1], key: 3 },
    { id: 87, type: "TKP", text: "Radikalisme: Buku terlarang. Sikap?", options: ["Baca.", "Buang.", "Serahkan keamanan.", "Simpan.", "Viral."], points: [2, 3, 5, 1, 1], key: 2 },
    { id: 88, type: "TKP", text: "Pelayanan: Ketemu warga hari libur. Sikap?", options: ["Cuek.", "Ketus.", "Ramah & arahkan.", "Bahas.", "Nomor HP."], points: [1, 2, 5, 3, 4], key: 2 },
    { id: 89, type: "TKP", text: "Jejaring: Presentasi mendadak. Sikap?", options: ["Tolak.", "Terima & belajar cepat.", "Nekat.", "Undur.", "Tunjuk lain."], points: [1, 5, 3, 2, 1], key: 1 },
    { id: 90, type: "TKP", text: "TIK: Teman minta password. Sikap?", options: ["Kasih.", "Tolak & bantu input.", "Lupa.", "Kasih ganti.", "Marah."], points: [1, 5, 2, 3, 1], key: 1 },
    { id: 91, type: "TKP", text: "Profesionalisme: Target tinggi. Sikap?", options: ["Ngeluh.", "Pasrah.", "Challenge & strategi.", "Tawar.", "Demo."], points: [1, 1, 5, 3, 1], key: 2 },
    { id: 92, type: "TKP", text: "Sosbud: Sumbangan tapi bokek. Sikap?", options: ["Tidak.", "Semampunya.", "Hutang.", "Koordinator.", "Pura-pura."], points: [1, 5, 2, 3, 1], key: 1 },
    { id: 93, type: "TKP", text: "Pelayanan: Pejabat minta duluan. Sikap?", options: ["Layani.", "Usir.", "Jelaskan antrean.", "Tanya warga.", "Kabur."], points: [1, 1, 5, 3, 1], key: 2 },
    { id: 94, type: "TKP", text: "Jejaring: Senior iri. Sikap?", options: ["Berhenti.", "Lawan.", "Merangkul.", "Cari muka.", "Keluar."], points: [2, 1, 5, 1, 1], key: 2 },
    { id: 95, type: "TKP", text: "Radikalisme: Jelekkan negara. Sikap?", options: ["Pergi.", "Alihkan topik.", "Ikut.", "Lapor polisi.", "Debat."], points: [3, 5, 1, 4, 2], key: 1 },
    { id: 96, type: "TKP", text: "TIK: Internet mati saat zoom. Sikap?", options: ["Bolos.", "Cari wifi/tethering.", "Tunggu.", "Titip.", "Tidur."], points: [1, 5, 2, 1, 1], key: 1 },
    { id: 97, type: "TKP", text: "Profesionalisme: Rahasia jabatan. Sikap?", options: ["Kasih.", "Kode.", "Tolak.", "Bohong.", "Hindar."], points: [1, 2, 5, 3, 2], key: 2 },
    { id: 98, type: "TKP", text: "Pelayanan: Teman main HP. Sikap?", options: ["Biarkan.", "Tegur keras.", "Kode halus/bantu.", "Lapor.", "Ikut."], points: [1, 2, 5, 3, 1], key: 2 },
    { id: 99, type: "TKP", text: "Jejaring: Acara gagal. Sikap?", options: ["Salahkan.", "Nangis.", "Maaf & solusi.", "Diam.", "Marah."], points: [2, 1, 5, 2, 1], key: 2 },
    { id: 100, type: "TKP", text: "Sosbud: Tetangga berisik. Sikap?", options: ["Labrak.", "Polisi.", "Sabar.", "Balas.", "Umpat."], points: [1, 2, 5, 1, 2], key: 2 },
    { id: 101, type: "TKP", text: "Profesionalisme: Salah laporan lama. Sikap?", options: ["Diam.", "Perbaiki diam.", "Lapor.", "Cerita.", "Sebar."], points: [1, 2, 5, 1, 1], key: 2 },
    { id: 102, type: "TKP", text: "TIK: Waktu luang. Sikap?", options: ["Film.", "Game.", "Belajar.", "Tidur.", "Medsos."], points: [2, 1, 5, 1, 2], key: 2 },
    { id: 103, type: "TKP", text: "Pelayanan: Warga nangis minta tolong. Sikap?", options: ["Turuti.", "Tolak.", "Empati & solusi legal.", "Pura-pura.", "Uang."], points: [1, 2, 5, 2, 3], key: 2 },
    { id: 104, type: "TKP", text: "Jejaring: Salah paham. Sikap?", options: ["Diam.", "Tunggu.", "Sapa & luruskan.", "Ngeluh.", "Pindah."], points: [1, 2, 5, 2, 1], key: 2 },
    { id: 105, type: "TKP", text: "Radikalisme: Ormas anti Pancasila. Sikap?", options: ["Gabung.", "Tolak & lapor.", "Ikut.", "Diam.", "Pindah."], points: [1, 5, 1, 2, 2], key: 1 },
    { id: 106, type: "TKP", text: "Profesionalisme: Atasan telat. Sikap?", options: ["Ikut.", "Sindiri.", "Tetap disiplin.", "Lapor.", "Malas."], points: [1, 2, 5, 3, 1], key: 2 },
    { id: 107, type: "TKP", text: "Pelayanan: Survei jelek. Sikap?", options: ["Marah.", "Bodo amat.", "Evaluasi & perbaiki.", "Salahkan alat.", "Manipulasi."], points: [1, 1, 5, 2, 1], key: 2 },
    { id: 108, type: "TKP", text: "Jejaring: Seminar asing. Sikap?", options: ["Main HP.", "Sebelah.", "Networking.", "Tunggu.", "Pulang."], points: [1, 3, 5, 2, 1], key: 2 },
    { id: 109, type: "TKP", text: "TIK: Software bajakan. Sikap?", options: ["Pakai.", "Tolak & ajukan resmi.", "Diam-diam.", "Minta uang.", "Marah."], points: [2, 5, 1, 4, 1], key: 1 },
    { id: 110, type: "TKP", text: "Profesionalisme: Absen manual. Sikap?", options: ["Bohong.", "Jujur.", "Diskon waktu.", "Titip.", "Bolos."], points: [1, 5, 2, 1, 1], key: 1 }
];

// ============================================================
// 2. AUTO-CONVERTER (MENGUBAH RAW KE FORMAT APLIKASI)
// ============================================================
(function initDatabase() {
    console.log("System: Mengonversi data 110 Soal...");
    
    // Fungsi pembantu konversi
    const convert = (data) => data.map(item => ({
        cat: item.type, // TWK, TIU, TKP
        sub: "Prediksi 2026",
        q: item.text,
        a: item.options,
        k: item.key, // Kunci (Index 0-4)
        s: item.points || null, // Poin TKP
        pembahasan: "Pembahasan detail akan muncul setelah evaluasi."
    }));

    const finalData = convert(RAW_TRYOUT_110);

    // MASUKKAN KE DALAM BANK SOAL UTAMA
    // Kunci 'TRYOUT A' harus SAMA PERSIS dengan di index.html
    BANK_SOAL['TRYOUT A'] = finalData;
    
    // Paket B & C diacak agar variatif
    BANK_SOAL['TRYOUT B'] = [...finalData].sort(() => Math.random() - 0.5);
    BANK_SOAL['TRYOUT C'] = [...finalData].sort(() => Math.random() - 0.5);
    
    console.log("System: Database Siap! Total Tryout: " + finalData.length);
})();

// ============================================================
// 3. WADAH UTAMA (JANGAN DIUBAH)
// ============================================================
const BANK_SOAL = {
    // Mode FR (Soal Latihan Pendek)
    'FR 2019 - 2020': [
        { cat: "TWK", q: "Pancasila Sila ke-5...", a: ["A","B","C","D","E"], k: 4, pembahasan: "Keadilan Sosial." },
        { cat: "TIU", q: "1, 2, 4, 8, ...", a: ["10","12","14","16","18"], k: 3, pembahasan: "Dikali 2." }
    ],
    // Paket Tryout (Diisi otomatis oleh script di atas)
    'TRYOUT A': [],
    'TRYOUT B': [],
    'TRYOUT C': []
};

// ============================================================
// 4. DATABASE MATERI & TIPS (AGAR TIDAK ERROR "COMING SOON")
// ============================================================
const DATABASE_MATERI = {
    // --- MATERI TWK (8 POIN STRATEGIS) ---
    'TWK': [
        {
            subTitle: " Implementasi Pancasila (HOTS)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-700 shadow-sm">
                        <h4 class="font-bold text-red-900 mb-1 uppercase text-[10px] tracking-tight">The Case-Study Mindset</h4>
                        <p class="text-[11px]">Berhenti menghafal sejarah masa lalu. TWK modern menguji kemampuan Anda membedah kasus harian. Setiap butir sila punya <strong>Kata Kunci Eksklusif</strong>. Jika Anda paham kata kuncinya, Anda bisa menjawab soal 1 paragraf hanya dalam 10 detik.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Matriks Kata Kunci 5 Sila</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse text-[10px]">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border p-2 w-1/5">Sila</th>
                                        <th class="border p-2">Fokus Utama (Kata Kunci)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="p-2 font-bold text-center">1. Bintang</td>
                                        <td class="p-2">Toleransi agama, kebebasan beribadah, tidak memaksakan agama.</td>
                                    </tr>
                                    <tr class="border-b bg-red-50">
                                        <td class="p-2 font-bold text-center">2. Rantai</td>
                                        <td class="p-2"><strong>Kemanusiaan Universal:</strong> HAM, adab, menolong korban bencana, anti-perundungan (bullying), kesetaraan derajat manusia.</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-2 font-bold text-center">3. Beringin</td>
                                        <td class="p-2"><strong>Nasionalisme:</strong> Cinta produk lokal, anti-hoax yang memecah belah, gotong royong warga, rela berkorban demi negara.</td>
                                    </tr>
                                    <tr class="border-b bg-red-50">
                                        <td class="p-2 font-bold text-center">4. Banteng</td>
                                        <td class="p-2"><strong>Demokrasi:</strong> Musyawarah mufakat, voting, menghargai keputusan bersama, tidak memaksakan pendapat egois.</td>
                                    </tr>
                                    <tr>
                                        <td class="p-2 font-bold text-center">5. Padi Kapas</td>
                                        <td class="p-2"><strong>Keadilan Sistemik:</strong> Fasilitas umum, BPJS, hukum yang adil, anti-korupsi (merugikan negara), tidak bergaya hidup mewah (hedon).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">The Classic Trap: Sila 2 vs Sila 5</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Pembuat soal sangat suka membenturkan "Keadilan" di Sila 2 dan Sila 5. Ini cara membedakannya:</p>
                        <div class="space-y-2">
                            <div class="bg-white p-3 rounded border border-red-200 text-[10px]">
                                <p class="font-bold text-red-800">Sila Ke-2 (Keadilan Individu/Moral)</p>
                                <p class="text-gray-600 italic">"Atasan memarahi bawahan di depan umum dengan kata-kata kasar." ➔ Ini melanggar adab kemanusiaan antar individu.</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-green-200 text-[10px]">
                                <p class="font-bold text-green-800">Sila Ke-5 (Keadilan Sosial/Sistem/Hukum)</p>
                                <p class="text-gray-600 italic">"Pejabat memotong dana bansos rakyat miskin." ➔ Ini melanggar hak sosial masyarakat luas dan merugikan negara.</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-red-400 mb-2 uppercase tracking-widest text-[10px]">Decision Plan</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- Kasus korupsi yang ditanya <strong>akibatnya pada rakyat</strong> ➔ Sila 5.</li>
                            <li>- Kasus menyebarkan berita bohong (SARA) di pemilu ➔ Sila 3 (Merusak persatuan).</li>
                            <li>- Selalu tanyakan: "Siapa korban utama dari kasus ini?" Individu (Sila 2), Negara (Sila 3), atau Masyarakat Luas (Sila 5).</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Implementasi UUD 1945 & Tata Negara",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800 shadow-sm">
                        <h4 class="font-bold text-blue-900 mb-1 uppercase text-[10px] tracking-tight">The "Checks and Balances" Rule</h4>
                        <p class="text-[11px]">Berhenti menghafal nomor pasal secara buta. UUD 1945 pasca amandemen berfokus pada penghapusan kekuasaan mutlak. Tidak ada lagi "Lembaga Tertinggi Negara" (MPR sudah sejajar dengan yang lain). Pahami batasan wewenang tiap lembaga, bukan sekadar angkanya.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Peta Pembagian Kekuasaan Mutlak</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-blue-200 rounded shadow-sm">
                                <strong class="text-xs text-blue-800 uppercase">A. Legislatif (Pembuat UU & Pengawas)</strong>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px]">
                                    <ul class="space-y-2">
                                        <li><span class="font-bold text-gray-800">DPR:</span> Punya 3 fungsi mutlak (Legislasi/Bikin UU, Anggaran/APBN, Pengawasan).</li>
                                        <li><span class="font-bold text-gray-800">DPD:</span> Hanya mengurus RUU yang berkaitan dengan <strong>DAERAH</strong> (Otonomi, SDA daerah). Tidak bisa ikut campur urusan luar negeri, agama, atau peradilan.</li>
                                        <li><span class="font-bold text-gray-800">MPR:</span> Tugasnya sangat spesifik: Melantik Presiden, Mengubah UUD, dan Memberhentikan Presiden (hanya setelah ada putusan MK).</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-blue-200 rounded shadow-sm">
                                <strong class="text-xs text-blue-800 uppercase">B. Yudikatif (Hakim Negara)</strong>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px]">
                                    <p class="mb-2 italic text-red-600 font-bold border-b border-red-200 pb-1">JANGAN TERTUKAR ANTARA MA DAN MK!</p>
                                    <ul class="space-y-2">
                                        <li><span class="font-bold text-gray-800">MA (Mahkamah Agung):</span> Mengadili tingkat kasasi. Menguji peraturan <strong>DI BAWAH</strong> Undang-Undang (misal: Perpres, PP, Perda) terhadap Undang-Undang.</li>
                                        <li><span class="font-bold text-gray-800">MK (Mahkamah Konstitusi):</span> Menguji <strong>Undang-Undang (UU)</strong> terhadap UUD 1945. Memutuskan sengketa Pemilu, dan membubarkan Parpol.</li>
                                        <li><span class="font-bold text-gray-800">KY (Komisi Yudisial):</span> Mengawasi etika perilaku hakim dan mengusulkan Hakim Agung. (Ingat: KY BUKAN pengadilan, mereka tidak menyidang kasus pidana/perdata!).</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan Pemakzulan (Impeachment) HOTS</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Soal sering memanipulasi alur pemberhentian Presiden. Mayoritas peserta menjawab MPR, padahal alur hukumnya panjang.</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-2 border-b pb-1">Alur Hukum yang Tepat:</p>
                            <ol class="list-decimal pl-4 space-y-1 text-gray-700">
                                <li><strong>DPR</strong> menemukan bukti pelanggaran berat/korupsi.</li>
                                <li>DPR melapor dan meminta sidang ke <strong>MK</strong>.</li>
                                <li><strong>MK</strong> memeriksa dan membenarkan secara hukum (memutus bersalah).</li>
                                <li>DPR membawa putusan MK ke <strong>MPR</strong>.</li>
                                <li><strong>MPR</strong> melakukan sidang paripurna untuk mengeksekusi pemberhentian.</li>
                            </ol>
                            <p class="mt-2 text-red-600 font-bold italic bg-red-50 p-1 rounded text-center">Kesimpulan: MPR tidak bisa semena-mena memecat Presiden tanpa putusan hukum dari MK.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-blue-400 mb-2 uppercase tracking-widest text-[10px]">3 Pasal Krusial (High-Yield)</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Pasal 7:</strong> Masa jabatan Presiden (Maksimal 2 periode). Inti: Mencegah kembalinya kediktatoran/Otoritarianisme.</li>
                            <li>- <strong>Pasal 29:</strong> Kebebasan beragama. Inti: Negara menjamin kebebasan, bukan memaksakan satu agama tertentu.</li>
                            <li>- <strong>Pasal 33:</strong> Perekonomian & SDA. Inti: Cabang produksi penting dikuasai negara untuk rakyat, menolak monopoli oligarki/asing.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Nasionalisme (Identitas & Integritas Nasional)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-900 mb-1 uppercase text-xs tracking-tight">Core Concept: Identitas vs Aksi</h4>
                        <p class="text-[11px]">Nasionalisme bukan soal membenci bangsa lain, tapi soal <strong>Kesadaran Identitas</strong>. Di soal HOTS, nasionalisme sering dibenturkan dengan tren global atau keuntungan materi pribadi.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider">The Nationalists Spectrum</h4>
                        <p class="text-[11px] mb-3 text-gray-500 italic">Pahami perbedaan halus ini agar tidak terjebak opsi 'mirip':</p>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border rounded shadow-sm border-l-4 border-indigo-400">
                                <strong class="text-xs text-indigo-700">Nasionalisme (Perasaan/Kesadaran):</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Mencintai identitas, budaya, dan bangsa sendiri. <br><em>Contoh:</em> Bangga memakai Batik di forum internasional atau menggunakan Bahasa Indonesia yang baik.</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm border-l-4 border-red-400">
                                <strong class="text-xs text-red-700">Patriotisme (Tindakan/Pengorbanan):</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Wujud nyata dari nasionalisme. Rela mengorbankan waktu/materi demi bangsa. <br><em>Contoh:</em> Atlet yang menolak tawaran kewarganegaraan asing demi tetap membela Merah Putih.</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm border-l-4 border-gray-400 opacity-75">
                                <strong class="text-xs text-gray-700">Chauvinisme (Negatif):</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Nasionalisme berlebihan yang merendahkan bangsa lain. <br><em>Note:</em> Opsi ini selalu SALAH dalam konteks ASN yang harus punya wawasan global.</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase">ASN Sebagai Perekat Bangsa</h4>
                        <p class="text-[11px] mb-3">Bagaimana nasionalisme diimplementasikan dalam pekerjaan sehari-hari?</p>
                        <ul class="space-y-2 text-[10px]">
                            <li class="flex gap-2">
                                <span class="text-blue-600 font-bold">●</span>
                                <span><strong>Netralitas Politik:</strong> Tidak memihak kelompok tertentu demi menjaga persatuan nasional.</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="text-blue-600 font-bold">●</span>
                                <span><strong>Pelayanan Tanpa Sekat:</strong> Memberikan layanan tanpa membedakan latar belakang suku, agama, atau status sosial (Bhinneka Tunggal Ika).</span>
                            </li>
                            <li class="flex gap-2">
                                <span class="text-blue-600 font-bold">●</span>
                                <span><strong>Integritas Profesional:</strong> Bekerja secara transparan untuk menjaga marwah institusi negara.</span>
                            </li>
                        </ul>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-yellow-500 mb-3 uppercase tracking-widest text-[10px]">Keyword Filter (HOTS Strategy)</h4>
                        <p class="text-[10px] text-center mb-3 text-gray-400 font-light italic">"Pilih opsi yang mengandung unsur berikut jika soal bertema Nasionalisme:"</p>
                        <div class="grid grid-cols-2 gap-2 text-[9px] font-mono">
                            <div class="bg-white/10 p-2 rounded text-blue-300 border border-white/5">✓ Identitas Nasional</div>
                            <div class="bg-white/10 p-2 rounded text-blue-300 border border-white/5">✓ Kedaulatan Bangsa</div>
                            <div class="bg-white/10 p-2 rounded text-blue-300 border border-white/5">✓ Marwah/Nama Baik</div>
                            <div class="bg-white/10 p-2 rounded text-blue-300 border border-white/5">✓ Persatuan Kolektif</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            subTitle: "Pilar NKRI (Konsensus Dasar Bangsa)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                        <h4 class="font-bold text-indigo-900 mb-1 uppercase text-xs tracking-tight">The Four Pillars Framework</h4>
                        <p class="text-[11px]">Empat pilar bukan sekadar simbol, melainkan <strong>alat filtrasi</strong> terhadap ideologi asing yang bertentangan dengan jati diri bangsa Indonesia.</p>
                    </div>

                    <div class="space-y-4">
                        <div class="p-3 bg-white border rounded-lg shadow-sm border-l-4 border-yellow-400">
                            <strong class="text-xs text-yellow-700">1. Pancasila (Ideologi & Sumber Hukum):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Berperan sebagai <em>Leitstar</em> (Bintang Penuntun). Semua kebijakan negara tidak boleh bertentangan dengan nilai ketuhanan, kemanusiaan, persatuan, kerakyatan, dan keadilan.</p>
                        </div>
                        <div class="p-3 bg-white border rounded-lg shadow-sm border-l-4 border-red-400">
                            <strong class="text-xs text-red-700">2. UUD 1945 (Konstitusi & Aturan Main):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Menjamin kepastian hukum dan batasan kekuasaan agar tidak terjadi absolutisme yang mengancam keutuhan bangsa.</p>
                        </div>
                        <div class="p-3 bg-white border rounded-lg shadow-sm border-l-4 border-green-400">
                            <strong class="text-xs text-green-700">3. NKRI (Wadah & Bentuk Negara):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Bentuk negara kesatuan dengan desentralisasi (Otonomi Daerah). Menekankan bahwa kedaulatan ada di seluruh wilayah, bukan hanya di pusat.</p>
                        </div>
                        <div class="p-3 bg-white border rounded-lg shadow-sm border-l-4 border-blue-400">
                            <strong class="text-xs text-blue-700">4. Bhinneka Tunggal Ika (Semboyan & Perekat):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Alat harmonisasi keberagaman. Di era digital, ini adalah tameng utama melawan polarisasi dan <em>echo chamber</em> di media sosial.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase italic tracking-tighter">Analisis Ancaman Kontemporer</h4>
                        <p class="text-[11px] mb-3">Soal HOTS sering menanyakan solusi pilar negara terhadap isu berikut:</p>
                        <div class="grid grid-cols-2 gap-2 text-[9px]">
                            <div class="bg-white p-2 rounded border border-red-100">
                                <span class="font-bold text-red-600">Etnosentrisme:</span> 
                                Menganggap sukunya paling hebat. (Solusi: Pilar NKRI/Bhinneka).
                            </div>
                            <div class="bg-white p-2 rounded border border-red-100">
                                <span class="font-bold text-red-600">Separatisme:</span> 
                                Ingin memisahkan diri. (Solusi: Pilar UUD/NKRI).
                            </div>
                            <div class="bg-white p-2 rounded border border-red-100">
                                <span class="font-bold text-red-600">Radikalisme:</span> 
                                Memaksakan ideologi baru. (Solusi: Pilar Pancasila).
                            </div>
                            <div class="bg-white p-2 rounded border border-red-100">
                                <span class="font-bold text-red-600">Intoleransi:</span> 
                                Menolak perbedaan. (Solusi: Bhinneka Tunggal Ika).
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-green-400 mb-2 uppercase tracking-widest text-[10px]">Decision Maker Logic</h4>
                        <p class="text-[10px] text-center text-gray-400 mb-3 italic">"Jika soal bertanya tentang integrasi nasional, selalu pilih opsi yang menekankan:"</p>
                        <ul class="space-y-1 text-[9px] font-mono">
                            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Dialog antar kelompok kepentingan.</li>
                            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Kepatuhan terhadap konstitusi (UUD 1945).</li>
                            <li class="flex items-center gap-2"><span class="text-green-500">✔</span> Penempatan kepentingan umum di atas golongan.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: "Integritas (The Shield of Bureaucracy)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-600">
                        <h4 class="font-bold text-emerald-900 mb-1 uppercase text-xs tracking-tight">Core Logic: Konsistensi Tanpa Celah</h4>
                        <p class="text-[11px]">Integritas adalah keselarasan antara <strong>Nilai, Ucapan, dan Tindakan</strong>. Dalam konteks ASN, integritas berarti patuh pada kode etik meskipun tidak ada pengawasan (bersifat internal).</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider">9 Nilai Anti-Korupsi</h4>
                        <p class="text-[11px] mb-3 text-gray-500 italic">Hafalkan akronim <strong>"JUMAT BERSEPEDA KK"</strong> untuk mempermudah identifikasi di soal cerita:</p>
                        <div class="grid grid-cols-3 gap-2 text-[9px] text-center">
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>JU</strong>jur</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>MA</strong>ndiri</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>T</strong>anggung Jawab</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>BER</strong>ani</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>SE</strong>derhana</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>PE</strong>duli</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>DA</strong>disiplin</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>K</strong>erja Keras</div>
                            <div class="p-2 bg-white border rounded shadow-sm"><strong>A</strong>dil</div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase italic tracking-tighter text-center">Trias Korupsi (Wajib Paham!)</h4>
                        <div class="space-y-3">
                            <div class="border-b pb-2">
                                <span class="text-indigo-700 font-bold text-[10px] uppercase">Gratifikasi:</span>
                                <p class="text-[10px] text-gray-600">Pemberian dalam arti luas (uang, barang, diskon) yang berhubungan dengan jabatan. <em>Sifat: Tanam budi.</em></p>
                            </div>
                            <div class="border-b pb-2">
                                <span class="text-indigo-700 font-bold text-[10px] uppercase">Suap (Bribery):</span>
                                <p class="text-[10px] text-gray-600">Ada kesepakatan (transaksional) antara pemberi dan penerima untuk mempengaruhi keputusan. <em>Sifat: Meeting of minds.</em></p>
                            </div>
                            <div>
                                <span class="text-indigo-700 font-bold text-[10px] uppercase">Pemerasan (Extortion):</span>
                                <p class="text-[10px] text-gray-600">Pejabat yang aktif meminta atau memaksa sesuatu dengan ancaman kekuasaan. <em>Sifat: Memaksa.</em></p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-emerald-400 mb-2 uppercase tracking-widest text-[10px]">The Integrity Protocol</h4>
                        <p class="text-[10px] text-center text-gray-400 mb-3 italic">"Jika soal memberikan dilema etika korupsi, urutan langkah Anda adalah:"</p>
                        <ol class="space-y-2 text-[9px] font-mono">
                            <li class="flex gap-2"><span class="text-emerald-500 font-bold">1.</span> <span><strong>TOLAK:</strong> Langkah pertama wajib menolak secara tegas tanpa kompromi.</span></li>
                            <li class="flex gap-2"><span class="text-emerald-500 font-bold">2.</span> <span><strong>LAPORKAN:</strong> Gunakan Whistleblowing System (WBS) atau Unit Pengendalian Gratifikasi (UPG).</span></li>
                            <li class="flex gap-2"><span class="text-emerald-500 font-bold">3.</span> <span><strong>EDUKASI:</strong> Jika memungkinkan, ingatkan rekan sejawat tentang risiko hukum tindakan tersebut.</span></li>
                        </ol>
                    </div>
                </div>
            `
        },
        {
            subTitle: "Bela Negara (Constitutional Duty & Modern Defense)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                        <h4 class="font-bold text-red-900 mb-1 uppercase text-xs tracking-tight">Landasan Konstitusional</h4>
                        <p class="text-[11px] mb-2">Bela negara bukan sekadar pilihan, tapi <strong>Hak dan Kewajiban</strong> yang diatur dalam:</p>
                        <ul class="text-[10px] space-y-1 italic">
                            <li>- <strong>Pasal 27 Ayat 3:</strong> "Setiap warga negara berhak dan wajib ikut serta dalam upaya pembelaan negara."</li>
                            <li>- <strong>Pasal 30 Ayat 1:</strong> "Tiap-tiap warga negara berhak dan wajib ikut serta dalam usaha pertahanan dan keamanan negara."</li>
                        </ul>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">5 Indikator Nilai Bela Negara</h4>
                        <div class="grid grid-cols-1 gap-2">
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-3">
                                <span class="text-red-600 font-bold">1.</span>
                                <div><strong>Cinta Tanah Air:</strong> Menjaga nama baik bangsa dan menggunakan produk dalam negeri.</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-3">
                                <span class="text-red-600 font-bold">2.</span>
                                <div><strong>Sadar Berbangsa & Bernegara:</strong> Menjalankan hak dan kewajiban sesuai peraturan perundang-undangan.</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-3">
                                <span class="text-red-600 font-bold">3.</span>
                                <div><strong>Setia pada Pancasila:</strong> Mengamalkan nilai-nilai Pancasila dalam kehidupan sehari-hari sebagai ideologi negara.</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-3">
                                <span class="text-red-600 font-bold">4.</span>
                                <div><strong>Rela Berkorban:</strong> Mengorbankan waktu, tenaga, dan pikiran demi kemajuan bangsa (Profesionalisme).</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-3">
                                <span class="text-red-600 font-bold">5.</span>
                                <div><strong>Kemampuan Awal Bela Negara:</strong> Memiliki integritas, kesehatan fisik/mental, dan kecerdasan intelektual.</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Pembeda: Bela Negara vs Patriotisme</h4>
                        <div class="space-y-3 text-[10px]">
                            <div class="flex gap-2">
                                <div class="bg-indigo-600 text-white px-2 py-1 rounded h-fit">Bela Negara</div>
                                <p class="text-gray-600">Fokus pada <strong>KEWAJIBAN</strong> dan peran serta dalam sistem pertahanan negara (Legal/Formal). <br><em>Contoh:</em> ASN menangkal hoaks radikalisme.</p>
                            </div>
                            <div class="flex gap-2">
                                <div class="bg-red-600 text-white px-2 py-1 rounded h-fit">Patriotisme</div>
                                <p class="text-gray-600">Fokus pada <strong>JIWA RELA BERKORBAN</strong> dan cinta yang melampaui tugas (Emosional/Sikap). <br><em>Contoh:</em> Atlet bertanding meski cedera demi Merah Putih.</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-red-400 mb-2 uppercase tracking-widest text-[10px]">Modern Defense Strategy</h4>
                        <p class="text-[10px] text-center text-gray-400 mb-3 italic font-light">"Implementasi Bela Negara bagi ASN di era digital:"</p>
                        <div class="grid grid-cols-2 gap-2 text-[9px] font-mono">
                            <div class="bg-white/10 p-2 rounded border border-white/5">Digital Literacy (Filter Hoaks)</div>
                            <div class="bg-white/10 p-2 rounded border border-white/5">Professional Integrity</div>
                            <div class="bg-white/10 p-2 rounded border border-white/5">Public Service Excellence</div>
                            <div class="bg-white/10 p-2 rounded border border-white/5">Cyber Security Awareness</div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            subTitle: "Gagasan Utama & Ide Pokok (The Compass of Reading)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                        <h4 class="font-bold text-amber-900 mb-1 uppercase text-xs tracking-tight">The Core Logic: Menemukan Inti Pikiran</h4>
                        <p class="text-[11px]">Gagasan utama adalah <strong>nyawa</strong> dari sebuah paragraf. Dalam soal HOTS, teks sengaja dibuat berbelit untuk menyamarkan gagasan utama di antara gagasan penjelas.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Tiga Jenis Letak Gagasan</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border rounded shadow-sm border-l-4 border-amber-400">
                                <strong class="text-xs text-amber-700 uppercase">A. Deduktif (Awal Paragraf):</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Paling sering muncul. Kalimat 1 adalah pernyataan umum, sementara kalimat berikutnya adalah rincian penjelas.</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm border-l-4 border-amber-400">
                                <strong class="text-xs text-amber-700 uppercase">B. Induktif (Akhir Paragraf):</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Diawali dengan rincian, diakhiri dengan simpulan. Cari kata kunci: <em>Jadi, Oleh karena itu, Dengan demikian, Secara singkat.</em></p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm border-l-4 border-amber-400">
                                <strong class="text-xs text-amber-700 uppercase">C. Campuran (Awal & Akhir):</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Kalimat akhir merupakan pengulangan intisari kalimat pertama dengan redaksi atau pilihan kata yang berbeda.</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Shortcut: Uji Kalimat Kedua</h4>
                        <p class="text-[11px] mb-3 text-center">Jika Anda ragu apakah gagasan utama ada di awal, gunakan <strong>Sentence 2 Test</strong>:</p>
                        <div class="bg-white p-3 rounded border text-[10px] space-y-2">
                            <p>1. Fokus pada kalimat ke-2 dalam paragraf tersebut.</p>
                            <p>2. Cek apakah kalimat ke-2 mengandung kata ganti (<em>ia, mereka, -nya</em>) atau kata tunjuk (<em>ini, itu, tersebut</em>) yang merujuk kembali ke kalimat ke-1?</p>
                            <p>3. Jika <strong>YA</strong>, maka gagasan utama dipastikan berada di <strong>KALIMAT PERTAMA</strong>.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-amber-400 mb-2 uppercase tracking-widest text-[10px]">Distractor Alert</h4>
                        <p class="text-[10px] text-center text-gray-400 mb-3 italic">"Jangan terjebak dengan opsi jawaban yang:"</p>
                        <ul class="space-y-2 text-[9px] font-mono">
                            <li class="flex gap-2"><span class="text-amber-500 font-bold">●</span> <span>Hanya mengambil detail kecil (Gagasan Penjelas).</span></li>
                            <li class="flex gap-2"><span class="text-amber-500 font-bold">●</span> <span>Terlalu luas (Melampaui konteks yang tertulis di paragraf).</span></li>
                            <li class="flex gap-2"><span class="text-amber-500 font-bold">●</span> <span>Bertentangan dengan fakta atau premis di dalam teks.</span></li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Kalimat Efektif (Precision & Logical Structure)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-600">
                        <h4 class="font-bold text-slate-900 mb-1 uppercase text-xs tracking-tight">The Precision Logic</h4>
                        <p class="text-[11px]">Kalimat efektif adalah kalimat yang mampu menyampaikan gagasan penulis secara tepat sehingga tidak menimbulkan <strong>Ambiguitas</strong> (makna ganda) atau pemborosan waktu baca.</p>
                    </div>

                    <div class="space-y-4">
                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-slate-800 uppercase">1. Kehematan (Anti-Pleonasme):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Hindari penggunaan dua kata yang bermakna sama secara bersamaan.</p>
                            <div class="mt-2 bg-red-50 p-2 rounded text-[10px] font-mono">
                                <span class="text-red-600">Salah:</span> Para ibu-ibu sedang berkumpul.<br>
                                <span class="text-green-600">Benar:</span> Ibu-ibu sedang berkumpul / Para ibu sedang berkumpul.
                            </div>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-slate-800 uppercase">2. Keparalelan (Kesejajaran Bentuk):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Jika bagian pertama menggunakan imbuhan <em>me-</em>, maka bagian berikutnya wajib menggunakan <em>me-</em>.</p>
                            <div class="mt-2 bg-red-50 p-2 rounded text-[10px] font-mono">
                                <span class="text-red-600">Salah:</span> Tahapannya adalah pembersihan, pengecatan, dan merapikan ruangan.<br>
                                <span class="text-green-600">Benar:</span> Tahapannya adalah pembersihan, pengecatan, dan <strong>perapian</strong> ruangan.
                            </div>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-slate-800 uppercase">3. Kelogisan (Nalar Kalimat):</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Kalimat harus masuk akal secara subjek dan predikat.</p>
                            <div class="mt-2 bg-red-50 p-2 rounded text-[10px] font-mono">
                                <span class="text-red-600">Salah:</span> Waktu dan tempat kami persilakan.<br>
                                <span class="text-green-600">Benar:</span> <strong>Bapak Ketua</strong> kami persilakan (karena tempat tidak bisa berjalan/berbicara).
                            </div>
                        </div>
                    </div>

                    
                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter">Kesepadanan Struktur</h4>
                        <p class="text-[10px] mb-3">Pastikan kalimat memiliki Subjek (S) dan Predikat (P) yang jelas. Kalimat menjadi tidak efektif jika S didahului kata depan (<em>bagi, untuk, dalam, kepada</em>).</p>
                        <div class="bg-white p-2 border rounded text-[10px] italic text-gray-500">
                            "Bagi semua peserta diharapkan berkumpul." (Salah, S menjadi kabur).<br>
                            "Semua peserta diharapkan berkumpul." (Benar).
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-blue-400 mb-2 uppercase tracking-widest text-[10px]">The 5-Second Sentence Audit</h4>
                        <ul class="space-y-1 text-[9px] font-mono text-gray-300">
                            <li>- Apakah ada kata bermakna sama yang dobel?</li>
                            <li>- Apakah imbuhannya sudah seragam (paralel)?</li>
                            <li>- Apakah subjeknya jelas (tidak pakai kata depan)?</li>
                            <li>- Apakah maknanya logis dan tidak membingungkan?</li>
                        </ul>
                    </div>
                </div>
            `
        },
    ],

    // --- SEKSI 2: TIU (10 POIN WAJIB) ---
    'TIU': [
        {
            subTitle: " Pecahan & Desimal (Numerical Shortcuts)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-900 mb-1 uppercase text-xs tracking-tight">The Anti-Calculator Mindset</h4>
                        <p class="text-[11px]">Soal TIU didesain agar bisa dikerjakan tanpa coret-coretan panjang. Jika Anda menghitung lebih dari 30 detik untuk satu operasi pecahan, Anda menggunakan cara yang salah.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">10 Pecahan Sakti (Wajib Hafal)</h4>
                        
                        <div class="grid grid-cols-2 gap-2 text-[10px]">
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">1/8</span> <span>0,125 (12,5%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">3/8</span> <span>0,375 (37,5%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">5/8</span> <span>0,625 (62,5%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">7/8</span> <span>0,875 (87,5%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">1/6</span> <span>0,166 (16,6%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">5/6</span> <span>0,833 (83,3%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">1/3</span> <span>0,333 (33,3%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">2/3</span> <span>0,666 (66,6%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">1/9</span> <span>0,111 (11,1%)</span>
                            </div>
                            <div class="bg-white p-2 border rounded shadow-sm flex justify-between">
                                <span class="font-bold text-blue-700">2/9</span> <span>0,222 (22,2%)</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter">Strategi Hacker Angka</h4>
                        <div class="space-y-4">
                            <div>
                                <span class="text-indigo-700 font-bold text-[10px] uppercase">1. Pendekatan (Approximation):</span>
                                <p class="text-[10px] text-gray-600 mt-1">Bulatkan angka yang rumit. Misal: 0,333 x 123. Ubah 0,333 menjadi 1/3. Maka 1/3 x 123 = 41.</p>
                            </div>
                            <div>
                                <span class="text-indigo-700 font-bold text-[10px] uppercase">2. Cek Angka Satuan (Last Digit):</span>
                                <p class="text-[10px] text-gray-600 mt-1">Cukup kalikan angka paling belakang. Misal: 1,234 x 5,678. Hasilnya pasti berakhiran 2 (karena 4x8=32).</p>
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Hubungan x dan y (Quantitative Comparison)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-900 mb-1 uppercase text-[10px] tracking-tight">The Core Logic</h4>
                        <p class="text-[11px]">Tujuan soal ini bukan mencari nilai pasti, tapi menentukan apakah x > y, x < y, x = y, atau hubungan tidak dapat ditentukan.</p>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase text-center">Teknik Angka Uji (Substitution)</h4>
                        <p class="text-[11px] mb-3">Jika soal menggunakan variabel abstrak, masukkan angka sederhana untuk menguji hubungan.</p>
                        <div class="grid grid-cols-3 gap-2 text-center text-[10px]">
                            <div class="bg-white p-2 border rounded"><strong>Positif:</strong><br>1 atau 2</div>
                            <div class="bg-white p-2 border rounded"><strong>Nol:</strong><br>0</div>
                            <div class="bg-white p-2 border rounded"><strong>Negatif:</strong><br>-1 atau -2</div>
                        </div>
                        <p class="text-[10px] text-red-600 mt-2 italic font-medium">*Wajib coba angka negatif jika variabel tidak dibatasi (misal: x adalah bilangan riil).*</p>
                    </div>

                    <div class="space-y-3">
                        <h4 class="font-bold text-gray-900 border-b pb-1 text-xs uppercase">4 Pola Jawaban Utama</h4>
                        <div class="space-y-2">
                            <div class="flex justify-between p-2 bg-white border rounded text-[11px]">
                                <span>Jika x = 5 dan y = 3</span>
                                <span class="font-bold text-green-600">x > y</span>
                            </div>
                            <div class="flex justify-between p-2 bg-white border rounded text-[11px]">
                                <span>Jika x = \frac{1}{2} dan y = \frac{1}{3}</span>
                                <span class="font-bold text-green-600">x > y</span>
                            </div>
                            <div class="flex justify-between p-2 bg-white border rounded text-[11px]">
                                <span>Jika x^2 = 4 dan y = 2</span>
                                <span class="font-bold text-red-600 text-right">Hubungan tidak dapat ditentukan<br>(karena x bisa 2 atau -2)</span>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-blue-400 mb-2 uppercase tracking-widest text-[10px]">Hacker Tips</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- Hati-hati dengan pangkat genap (x^2, x^4).</li>
                            <li>- Jika ada variabel di penyebut, pastikan tidak nol.</li>
                            <li>- Jangan menghitung hasil akhir, cukup lihat tren pertumbuhannya.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Analogi Kata & Kalimat (Verbal Logic)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600">
                        <h4 class="font-bold text-amber-900 mb-1 uppercase text-[10px] tracking-tight">The Bridge Strategy</h4>
                        <p class="text-[11px]">Kunci analogi bukan mencocokkan kata, tapi membuat <strong>Kalimat Penghubung</strong>. Jika kalimat penghubung di ruas kiri bekerja di ruas kanan, maka jawaban Anda 100% benar.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">7 Pola Hubungan Terpopuler</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse text-[10px]">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border p-2">Tipe Hubungan</th>
                                        <th class="border p-2">Contoh Analogi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="p-2 font-medium">Sebab - Akibat</td>
                                        <td class="p-2 italic text-blue-600">Luka : Darah = Api : Asap</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-2 font-medium">Bagian - Seluruh</td>
                                        <td class="p-2 italic text-blue-600">Pohon : Hutan = Siswa : Kelas</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-2 font-medium">Fungsi / Alat</td>
                                        <td class="p-2 italic text-blue-600">Kuas : Pelukis = Cangkul : Petani</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-2 font-medium">Definisi / Sifat</td>
                                        <td class="p-2 italic text-blue-600">Es : Dingin = Gula : Manis</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-2 font-medium">Urutan Waktu</td>
                                        <td class="p-2 italic text-blue-600">Maret : April = Selasa : Rabu</td>
                                    </tr>
                                    <tr class="border-b">
                                        <td class="p-2 font-medium">Asosiasi Tempat</td>
                                        <td class="p-2 italic text-blue-600">Film : Bioskop = Aktor : Panggung</td>
                                    </tr>
                                    <tr>
                                        <td class="p-2 font-medium">Lawan Kata</td>
                                        <td class="p-2 italic text-blue-600">Besar : Kecil = Tinggi : Rendah</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase">Analogi Kalimat (HOTS)</h4>
                        <p class="text-[11px] mb-3">Soal jenis ini meminta Anda mencari kalimat yang memiliki struktur logika yang sama.</p>
                        <div class="bg-white p-3 rounded border space-y-2 text-[10px]">
                            <p class="font-bold">Soal: "Pencuri masuk ke rumah saat penghuni tidur."</p>
                            <p class="text-gray-500 italic">Analogi Logika: (Pelaku) melakukan (Aksi) pada (Objek) saat (Kondisi).</p>
                            <p class="text-green-600 font-bold">Jawaban: "Hacker meretas data saat sistem lemah."</p>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-amber-400 mb-2 uppercase tracking-widest text-[10px]">The "Flip" Trap</h4>
                        <p class="text-[10px] text-center text-gray-400 mb-3 italic">"Waspadai urutan kata yang terbalik!"</p>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- Jika ruas kiri adalah <strong>Alat : Profesi</strong>, maka ruas kanan TIDAK BOLEH <strong>Profesi : Alat</strong>.</li>
                            <li>- Urutan posisi (Kiri vs Kanan) bersifat mutlak dan tidak boleh ditukar.</li>
                            <li>- Cari hubungan yang paling spesifik. Jangan puas dengan hubungan yang terlalu umum.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Pola Kalimat (Syntactic Parsing)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 shadow-sm">
                        <h4 class="font-bold text-indigo-900 mb-1 uppercase text-[10px] tracking-tight">The 2-Element Rule</h4>
                        <p class="text-[11px]">Kalimat minimal wajib punya <strong>S (Subjek)</strong> dan <strong>P (Predikat)</strong>. Fokus pertama Anda adalah mencari 'Siapa/Apa' dan 'Melakukan Apa'. Sisanya hanyalah dekorasi.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Anatomi S-P-O-Pel-K</h4>
                        <div class="grid grid-cols-1 gap-2">
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-2">
                                <span class="bg-indigo-100 text-indigo-700 px-1.5 rounded font-bold">S</span>
                                <div><strong>Subjek:</strong> Pelaku/Topik. Biasanya kata benda. (Contoh: <em>Pemerintah</em>).</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-2">
                                <span class="bg-red-100 text-red-700 px-1.5 rounded font-bold">P</span>
                                <div><strong>Predikat:</strong> Tindakan/Kondisi. (Contoh: <em>menyalurkan</em>).</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-2">
                                <span class="bg-green-100 text-green-700 px-1.5 rounded font-bold">O</span>
                                <div><strong>Objek:</strong> Yang dikenai tindakan. (Contoh: <em>bantuan</em>).</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-2">
                                <span class="bg-orange-100 text-orange-700 px-1.5 rounded font-bold">Pel</span>
                                <div><strong>Pelengkap:</strong> Mirip objek tapi tidak bisa dipasifkan. (Contoh: <em>berdasarkan data</em>).</div>
                            </div>
                            <div class="p-2 bg-white border rounded shadow-sm flex items-start gap-2">
                                <span class="bg-gray-100 text-gray-700 px-1.5 rounded font-bold">K</span>
                                <div><strong>Keterangan:</strong> Info tambahan (Tempat/Waktu/Cara).</div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center italic">Uji Pasif: Pembeda O vs Pel</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Gunakan tes ini jika Anda bingung menentukan apakah sebuah kata adalah Objek atau Pelengkap.</p>
                        <div class="space-y-3">
                            <div class="bg-white p-3 rounded border border-green-200">
                                <p class="text-[10px] font-bold text-green-700">✓ OBJEK (Dapat dipasifkan)</p>
                                <p class="text-[10px] mt-1 italic text-gray-600">"Andi membeli <strong>buku</strong>." ➔ "<strong>Buku</strong> dibeli Andi." (Buku = Objek).</p>
                            </div>
                            <div class="bg-white p-3 rounded border border-red-200">
                                <p class="text-[10px] font-bold text-red-700">✗ PELENGKAP (Tidak dapat dipasifkan)</p>
                                <p class="text-[10px] mt-1 italic text-gray-600">"Negara ini berlandaskan <strong>hukum</strong>." ➔ "<strong>Hukum</strong> diberlandaskan negara ini." (Salah! Hukum = Pelengkap).</p>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-indigo-400 mb-2 uppercase tracking-widest text-[10px]">Decision Plan</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- Hati-hati dengan kata 'yang'. Semua kata setelah 'yang' biasanya menjadi satu kesatuan dengan Subjek.</li>
                            <li>- Kata depan (di, ke, dari, pada, dalam) menandakan Keterangan (K).</li>
                            <li>- Jika Predikat berupa kata kerja berimbuhan <em>ber-, ter-, ke-an</em>, hampir pasti diikuti oleh Pelengkap, bukan Objek.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Silogisme (Logical Deduction)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                        <h4 class="font-bold text-red-900 mb-1 uppercase text-[10px] tracking-tight">The Venn Logic</h4>
                        <p class="text-[11px]">Berhenti menghafal rumus Modus Ponens/Tollens. Gunakan visualisasi <strong>Lingkaran (Himpunan)</strong>. Kesimpulan yang sah adalah daerah yang 100% pasti benar.</p>
                    </div>

                    <div class="space-y-3">
                        <h4 class="font-bold text-gray-900 border-b pb-1 text-xs uppercase">3 Hukum Kesimpulan Mutlak</h4>
                        <div class="space-y-2">
                            <div class="p-3 bg-white border rounded shadow-sm">
                                <span class="font-bold text-red-600">1. Positif + Negatif = Negatif</span>
                                <p class="text-[10px] mt-1 italic">Semua A adalah B. Sebagian A bukan C. ➔ Kesimpulan wajib ada kata 'bukan/tidak'.</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm">
                                <span class="font-bold text-red-600">2. Semua + Sebagian = Sebagian</span>
                                <p class="text-[10px] mt-1 italic">Semua dosen pintar. Sebagian dosen rajin. ➔ Kesimpulan wajib diawali 'Sebagian'.</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm">
                                <span class="font-bold text-red-600">3. Negatif + Negatif = Tidak Ada Simpulan</span>
                                <p class="text-[10px] mt-1 italic">Tidak ada kucing yang bisa terbang. Tidak ada burung yang mengeong. ➔ Hubungan tidak ditemukan.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                        <p class="text-[10px] text-gray-500 italic">Gunakan lingkaran bertumpuk untuk mengecek apakah subjek berada di dalam atau di luar predikat.</p>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-yellow-500 mb-2 uppercase tracking-widest text-[10px]">Anti-Trap Strategy</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- Kata 'Beberapa', 'Sebagian', 'Ada', 'Banyak', 'Sementara' memiliki derajat logika yang SAMA.</li>
                            <li>- Jangan gunakan logika dunia nyata. Jika soal bilang 'Semua kucing bertelur', maka dalam logika silogisme, kucing itu bertelur.</li>
                            <li>- Cari opsi yang menghubungkan ujung premis 1 dengan ujung premis 2.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Pola Bilangan (Numerical Series Mastery)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-900 mb-1 uppercase text-[10px] tracking-tight">The "Larik" Strategy</h4>
                        <p class="text-[11px]">Jangan melihat angka sebagai nilai, tapi lihat sebagai <strong>Jarak (Selisih)</strong>. Jika selisih antar angka tidak stabil, segera ganti strategi ke pola lompat atau pola bertingkat.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Pola yang Sering Muncul (2024-2026)</h4>
                        <div class="space-y-2">
                            <div class="p-3 bg-white border rounded shadow-sm">
                                <span class="font-bold text-blue-600">1. Pola Fibonacci</span>
                                <p class="text-[10px] mt-1 italic">Angka berikutnya adalah hasil jumlah dua angka sebelumnya. <br> Contoh: $1, 1, 2, 3, 5, 8, ...$</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm">
                                <span class="font-bold text-blue-600">2. Pola Pangkat & Akar</span>
                                <p class="text-[10px] mt-1 italic">Deret yang dasarnya adalah bilangan kuadrat atau kubik. <br> Contoh: $1, 4, 9, 16, 25, ... (1^2, 2^2, 3^2, ...)$</p>
                            </div>
                            <div class="p-3 bg-white border rounded shadow-sm">
                                <span class="font-bold text-blue-600">3. Pola Larik bertingkat</span>
                                <p class="text-[10px] mt-1 italic">Selisih antar angka membentuk deret baru di bawahnya.</p>
                            </div>
                        </div>
                    </div>

                    [Image of a two-layered numerical series showing jumping patterns]
                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center italic">The "30-Second Skip" Rule</h4>
                        <div class="bg-white p-3 rounded border space-y-2 text-[10px]">
                            <p>1. Cek selisih angka 1 ke 2, 2 ke 3 (Larik 1).</p>
                            <p>2. Jika buntu, cek selisih angka 1 ke 3, 2 ke 4 (Larik 2 / Lompat).</p>
                            <p>3. Jika dalam 30 detik pola belum ditemukan, <strong>Pilih jawaban acak dan tinggalkan!</strong> Jangan membunuh waktu Anda di sini.</p>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-blue-400 mb-2 uppercase tracking-widest text-[10px]">Pattern Recognition Table</h4>
                        <div class="grid grid-cols-2 gap-2 text-[9px] font-mono text-gray-300">
                            <div class="border-r border-white/10 pr-2">
                                <span class="text-yellow-500">Naik Drastis:</span><br>Perkalian atau Pangkat.
                            </div>
                            <div>
                                <span class="text-yellow-500">Naik Stabil:</span><br>Penjumlahan.
                            </div>
                            <div class="border-r border-white/10 pr-2 mt-2">
                                <span class="text-yellow-500">Naik-Turun:</span><br>Larik 2 atau Larik 3.
                            </div>
                            <div class="mt-2">
                                <span class="text-yellow-500">Angka Kembar:</span><br>Fix Pola Lompat.
                            </div>
                        </div>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Perbandingan Senilai & Berbalik Nilai (Ratio Logic)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                        <h4 class="font-bold text-blue-900 mb-1 uppercase text-[10px] tracking-tight">The Ratio Logic</h4>
                        <p class="text-[11px]">Jangan hafal rumus. Hafalkan <strong>Arah Hubungan</strong>. Jika satu variabel naik dan yang lain ikut naik, itu Senilai. Jika yang lain justru turun, itu Berbalik Nilai.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Metode Tabel Lurus-Silang</h4>
                        <div class="overflow-x-auto">
                            <table class="w-full border-collapse text-[10px]">
                                <thead class="bg-gray-100">
                                    <tr>
                                        <th class="border p-2">Jenis</th>
                                        <th class="border p-2">Hubungan</th>
                                        <th class="border p-2">Cara Hitung</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="p-2 font-bold text-blue-700 uppercase">Senilai</td>
                                        <td class="p-2">Bensin & Jarak, Harga & Barang.</td>
                                        <td class="p-2 text-red-600 font-bold">KALI SILANG</td>
                                    </tr>
                                    <tr>
                                        <td class="p-2 font-bold text-indigo-700 uppercase">Berbalik Nilai</td>
                                        <td class="p-2">Pekerja & Waktu, Kecepatan & Waktu.</td>
                                        <td class="p-2 text-red-600 font-bold">KALI LURUS</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="my-5 flex justify-center">
                        <img src="assets/img/tiu-perbandingan.webp" class="w-full max-w-sm rounded-2xl shadow-lg border border-gray-100" alt="Visual Perbandingan">
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter">Kasus "Pekerja Terhenti" (HOTS)</h4>
                        <div class="bg-white p-3 rounded border space-y-2 text-[10px]">
                            <p>1. Fokus hanya pada <strong>Sisa Waktu</strong> yang seharusnya.</p>
                            <p>2. Kalikan Sisa Waktu tersebut dengan jumlah Pekerja Awal.</p>
                            <p>3. Bagi dengan <strong>Sisa Waktu Riil</strong> (setelah dikurangi masa terhenti).</p>
                        </div>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Figural 9 Kotak (Visual Matrix)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                        <h4 class="font-bold text-purple-900 mb-1 uppercase text-[10px] tracking-tight">The Visual Logic Mindset</h4>
                        <p class="text-[11px]">Kesalahan terbesar peserta adalah melihat gambar secara utuh. Untuk membongkar pola figural, pecah fokus Anda ke satu elemen spesifik terlebih dahulu (misal: hanya perhatikan pergerakan titik hitam, abaikan yang lain).</p>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-bold text-gray-900 border-b pb-1 text-xs uppercase text-center">3 Pola Keramat Matriks</h4>
                        
                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-purple-800 uppercase">1. Pola Rotasi (Perputaran)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Fokus pada derajat perputaran (45°, 90°, 180°) dan arahnya (searah jarum jam atau berlawanan).</p>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-purple-800 uppercase">2. Pola Operasi Elemen (Penjumlahan/Pengurangan)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Kotak 1 + Kotak 2 = Kotak 3. Elemen yang bertumpuk (sama) biasanya akan hilang, sedangkan elemen yang beda akan digabungkan.</p>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-purple-800 uppercase">3. Pola Perpindahan Posisi</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Elemen bergeser ke sudut-sudut tertentu secara berurutan. Lacak satu elemen saja dari ujung kiri ke kanan.</p>
                        </div>
                    </div>

                    <div class="my-5 flex justify-center">
                        <img src="assets/img/tiu-figural.webp" class="w-full rounded-xl shadow-md border border-gray-200" alt="Contoh Pola Figural">
                    </div>
                    <p class="text-[10px] text-center text-gray-500 italic mt-[-10px] mb-4">Contoh pola operasi elemen: Elemen yang sama pada kolom 1 dan 2 dihapus di kolom 3.</p>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-purple-400 mb-2 uppercase tracking-widest text-[10px]">Elimination Protocol</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Langkah 1:</strong> Temukan satu pola paling gampang (misal rotasi garis).</li>
                            <li>- <strong>Langkah 2:</strong> Langsung lihat opsi jawaban. Coret semua opsi yang garisnya salah (biasanya sisa 2 opsi).</li>
                            <li>- <strong>Langkah 3:</strong> Cari satu elemen yang berbeda di antara 2 opsi tersisa, lalu cek kembali polanya di soal. Cukup 15 detik!</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Figural Umum (Serial & Ketidaksamaan)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-fuchsia-50 p-4 rounded-lg border-l-4 border-fuchsia-600 shadow-sm">
                        <h4 class="font-bold text-fuchsia-900 mb-1 uppercase text-[10px] tracking-tight">The Anchor Strategy</h4>
                        <p class="text-[11px]">Jangan memutar keseluruhan gambar di otak Anda, itu akan menghabiskan memori kerja otak. Pilih satu objek kecil yang mencolok sebagai <strong>Jangkar (Anchor)</strong>, lalu ikuti arah pergerakannya saja.</p>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-bold text-gray-900 border-b pb-1 text-xs uppercase text-center">Analisis Dua Tipe Soal</h4>
                        
                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-fuchsia-800 uppercase">A. Figural Seri (Kelanjutan)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Pola bergerak maju. <strong>Aturan Main:</strong> Lacak satu per satu. Misalnya, titik hitam maju 1 langkah, garis putih mundur 1 langkah. Langsung eliminasi opsi jawaban yang posisi titik hitamnya salah. Jangan lihat elemen kedua sebelum elemen pertama selesai dieliminasi.</p>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm">
                            <strong class="text-xs text-fuchsia-800 uppercase">B. Figural Ketidaksamaan (Odd-One-Out)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Mencari 1 gambar yang aneh/tidak sekelompok. <strong>Fokus Audit:</strong> Cek jumlah sisi (ganjil/genap), jumlah elemen di dalam vs di luar, keterbukaan kurva, atau apakah salah satu gambar adalah hasil cerminan, sementara yang lain hanya diputar.</p>
                        </div>
                    </div>

                    <div class="my-5 flex justify-center">
                        <img src="assets/img/tiu-figural-umum.webp" class="w-full max-w-sm rounded-xl shadow-md border border-gray-200" alt="Contoh Figural Umum">
                    </div>
                    <p class="text-[10px] text-center text-gray-500 italic mt-[-10px] mb-4">Pastikan Anda menganalisis gambar satu elemen demi satu elemen.</p>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-fuchsia-400 mb-2 uppercase tracking-widest text-[10px]">Rotasi vs Refleksi (Jebakan Maut)</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Rotasi:</strong> Gambar diputar (seperti setir). Susunan elemennya tetap sama.</li>
                            <li>- <strong>Refleksi:</strong> Gambar dicerminkan (kiri jadi kanan). Susunan elemen TERBALIK.</li>
                            <li>- <strong>Warning:</strong> Pembuat soal sering menaruh gambar hasil cerminan di opsi A atau B untuk menipu mata Anda yang sedang mencari hasil putaran.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Penalaran Analitis (Logic Mapping)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-600 shadow-sm">
                        <h4 class="font-bold text-slate-900 mb-1 uppercase text-[10px] tracking-tight">The External Memory Rule</h4>
                        <p class="text-[11px]">Jangan pernah mencoba menyelesaikan soal analitis hanya di dalam kepala. Otak Anda akan <em>overload</em>. Anda <strong>wajib</strong> membuat coretan visual (garis atau tabel) di kertas buram dalam 10 detik pertama.</p>
                    </div>

                    <div class="space-y-4">
                        <h4 class="font-bold text-gray-900 border-b pb-1 text-xs uppercase text-center">3 Senjata Pemetaan Data</h4>
                        
                        <div class="p-3 bg-white border rounded shadow-sm border-l-2 border-blue-400">
                            <strong class="text-xs text-slate-800 uppercase">1. Tipe Urutan / Ranking (Garis Lurus)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Gunakan tanda lebih besar (&gt;) atau lebih kecil (&lt;). <br><em>Contoh:</em> "A lebih tinggi dari B, tapi lebih pendek dari C." ➔ <strong>C &gt; A &gt; B</strong>. Jangan pakai narasi, pakai simbol!</p>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm border-l-2 border-red-400">
                            <strong class="text-xs text-slate-800 uppercase">2. Tipe Posisi Duduk Melingkar (Sketsa Arah Jarum Jam)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Buat lingkaran dengan 6 atau 8 titik. <strong>Kunci Utama:</strong> Selalu letakkan orang pertama yang disebutkan di posisi paling bawah (jam 6) agar Anda mudah menentukan mana "Kiri" dan "Kanan" dari sudut pandang orang tersebut.</p>
                        </div>

                        <div class="p-3 bg-white border rounded shadow-sm border-l-2 border-green-400">
                            <strong class="text-xs text-slate-800 uppercase">3. Tipe Jadwal / Penugasan (Matriks Eliminasi)</strong>
                            <p class="text-[10px] mt-1 text-gray-600">Buat tabel silang (Hari vs Nama Orang). Gunakan tanda Centang (✓) untuk yang pasti, dan Silang (X) untuk kondisi yang dilarang. Baca syarat yang paling mengikat/pasti terlebih dahulu!</p>
                        </div>
                    </div>

                    <div class="my-5 flex justify-center">
                        <img src="assets/img/tiu-analitis-matriks.webp" class="w-full max-w-sm rounded-xl shadow-md border border-gray-200" alt="Visual Matriks Analitis">
                    </div>
                    <p class="text-[10px] text-center text-gray-500 italic mt-[-10px] mb-4">Mengerjakan soal jadwal tanpa tabel silang adalah bunuh diri waktu.</p>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-slate-400 mb-2 uppercase tracking-widest text-[10px]">The "Fixed Variable" Shortcut</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Scan Cepat:</strong> Cari kalimat yang memberikan posisi PASTI (misal: "Budi duduk tepat di hadapan Ani"). Kerjakan ini duluan!</li>
                            <li>- Abaikan sementara kalimat bersyarat seperti "Jika C duduk di sebelah D...". Biarkan ini jadi langkah terakhir.</li>
                            <li>- Soal analitis biasanya beranak (1 teks untuk 3 soal). Waktu 2 menit untuk bikin tabel akan terbayar lunas dengan 3 jawaban benar dalam hitungan detik.</li>
                        </ul>
                    </div>
                </div>
            `
        }
    ],

    // --- SEKSI 3: TKP (6 POIN WAJIB) ---
    'TKP': [
        {
            subTitle: " Pelayanan Publik (The Bureaucrat Mindset)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600 shadow-sm">
                        <h4 class="font-bold text-teal-900 mb-1 uppercase text-[10px] tracking-tight">The Core Logic: Roleplay ASN</h4>
                        <p class="text-[11px]">Buang idealisme pribadi Anda. Di sini, Anda sedang bermain peran sebagai <strong>Mesin Pelayan Negara yang Ramah namun Tegas pada SOP</strong>. Indikator utamanya adalah kepuasan publik tanpa mengorbankan integritas institusi.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Anatomi Jawaban Poin 5</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-teal-200 rounded shadow-sm">
                                <strong class="text-xs text-teal-800 uppercase">A. Action-Oriented (Tuntas)</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jawaban bernilai 5 selalu mengandung tindakan nyata dan penyelesaian masalah sampai akhir. Bukan sekadar janji atau simpati.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Poin 3/4:</span> "Mendengarkan keluhan warga dengan sabar."<br>
                                    <span class="text-green-600 font-bold">Poin 5:</span> "Mendengarkan keluhan warga, mencatatnya, dan <strong>segera menindaklanjuti</strong> ke divisi terkait."
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-teal-200 rounded shadow-sm">
                                <strong class="text-xs text-teal-800 uppercase">B. Win-Win Solution (SOP + Empati)</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jika warga meminta sesuatu yang melanggar aturan, jangan langsung menolak mentah-mentah. Tolak dengan halus dan berikan jalan keluar.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Poin 1:</span> "Menolak tegas karena melanggar aturan."<br>
                                    <span class="text-green-600 font-bold">Poin 5:</span> "Menjelaskan aturan yang berlaku dengan sopan dan <strong>membantu mengarahkan prosedur yang benar</strong>."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan Kasus (HOTS)</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Soal sering membenturkan Pelayanan vs Jam Istirahat/Pulang.</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-1">Skenario: Anda mau pulang, tiba-tiba ada warga jauh datang minta dilayani.</p>
                            <ul class="space-y-1 mt-2 text-gray-700">
                                <li><strong>Salah:</strong> Menyuruhnya pulang dan kembali besok (Skor 2).</li>
                                <li><strong>Salah:</strong> Memarahi satpam karena membiarkan masuk (Skor 1).</li>
                                <li><strong>Tepat:</strong> Melayani keperluannya sampai selesai, karena ia datang dari jauh, meski Anda harus pulang terlambat (Skor 5).</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-teal-400 mb-2 uppercase tracking-widest text-[10px]">Golden Rules of Pelayanan</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- Kata Kunci Poin 5: <strong>Segera, Langsung, Tuntas, Ramah, Solusi alternatif.</strong></li>
                            <li>- Jangan pernah melempar tanggung jawab ke rekan kerja jika itu masih tugas Anda.</li>
                            <li>- Kesampingkan kepentingan pribadi (istirahat, makan siang) jika ada kondisi *urgent* dari publik.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Jejaring Kerja (Professional Synergy)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600 shadow-sm">
                        <h4 class="font-bold text-indigo-900 mb-1 uppercase text-[10px] tracking-tight">The Synergy Logic</h4>
                        <p class="text-[11px]">Jejaring kerja bukan tentang mencari teman nongkrong atau menjadi orang yang paling disukai di kantor. Ini tentang <strong>Membangun koneksi untuk mempermudah pencapaian tujuan Instansi</strong>. Hindari jawaban tipe "Lone Wolf" (bekerja sendiri) atau "Martir" (berkorban buta).</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Beda "Orang Baik" vs "ASN Profesional"</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-indigo-200 rounded shadow-sm">
                                <strong class="text-xs text-indigo-800 uppercase">A. Kasus Rekan Kerja Kesulitan</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jangan pernah mengambil alih pekerjaan orang lain. Itu melanggar SOP dan membuat rekan Anda tidak mandiri.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 1-2 (Jebakan Baik):</span> "Saya akan mengerjakan tugasnya agar target tim segera tercapai."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Profesional):</span> "Saya akan <strong>mengajarinya cara mengerjakan</strong> tugas tersebut agar ia bisa menyelesaikannya sendiri."
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-indigo-200 rounded shadow-sm">
                                <strong class="text-xs text-indigo-800 uppercase">B. Kasus Informasi Baru/Koneksi Baru</strong>
                                <p class="text-[10px] mt-1 text-gray-600">ASN dilarang memonopoli informasi untuk karir pribadi. Ilmu dan koneksi harus di-<em>share</em> ke tim.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 2-3 (Ego Karir):</span> "Saya pelajari sendiri untuk meningkatkan kompetensi saya."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Sinergi):</span> "Saya akan <strong>membagikan informasi/koneksi tersebut ke grup kerja</strong> agar bisa dimanfaatkan bersama."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan Kasus (HOTS)</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Pembuat soal sering membuat skenario di mana atasan atau rekan kerja tidak kompeten.</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-1">Skenario: Anda dimasukkan ke tim yang anggota lainnya pasif dan tidak saling kenal.</p>
                            <ul class="space-y-2 mt-2 text-gray-700">
                                <li><strong>Salah:</strong> Mengerjakan semuanya sendiri karena lebih cepat (Skor 1 - Anda Lone Wolf).</li>
                                <li><strong>Salah:</strong> Melaporkan ke atasan agar tim diganti (Skor 2 - Cengeng).</li>
                                <li><strong>Tepat:</strong> <strong>Menginisiasi pertemuan santai</strong> untuk saling mengenal, lalu membagi tugas sesuai keahlian masing-masing (Skor 5 - Anda Inisiator).</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-indigo-400 mb-2 uppercase tracking-widest text-[10px]">Jejaring Kerja Cheat Sheet</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Kata Kunci Poin 5:</strong> Berbagi, Mengajari, Menginisiasi, Berkolaborasi, Membuka diri.</li>
                            <li>- Jika ada masalah eksternal (vendor, instansi lain), pilih opsi yang berfokus pada "menjaga komunikasi baik" dan "mencari <em>win-win solution</em>".</li>
                            <li>- Jangan pernah memilih jawaban yang mengisolasi diri Anda dengan alasan "fokus pada pekerjaan sendiri".</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Sosial Budaya (Cultural Intelligence)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-rose-50 p-4 rounded-lg border-l-4 border-rose-600 shadow-sm">
                        <h4 class="font-bold text-rose-900 mb-1 uppercase text-[10px] tracking-tight">The Objective Neutrality</h4>
                        <p class="text-[11px]">ASN adalah perekat bangsa. Anda dituntut memiliki <strong>Toleransi Aktif</strong>—tidak hanya membiarkan perbedaan secara pasif, tetapi secara proaktif memfasilitasi dan menjaga keharmonisan tanpa mengorbankan standar operasional kerja.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Toleran Pasif vs Toleran Aktif</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-rose-200 rounded shadow-sm">
                                <strong class="text-xs text-rose-800 uppercase">A. Kasus Adaptasi Lingkungan Baru</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jika ditempatkan di daerah pelosok dengan bahasa dan budaya berbeda, jangan hanya "menerima keadaan".</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 3-4 (Pasif):</span> "Saya akan berusaha menyesuaikan diri seiring berjalannya waktu."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Aktif):</span> "Saya akan <strong>proaktif mempelajari budaya lokal dan berbaur</strong> dengan masyarakat sekitar."
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-rose-200 rounded shadow-sm">
                                <strong class="text-xs text-rose-800 uppercase">B. Kasus Benturan Ibadah & Pekerjaan</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Soal paling menjebak. Jangan melarang hak beragama, tapi jangan biarkan pelayanan publik mati karena semua orang pergi beribadah.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 1-2 (Otoriter):</span> "Menyuruh rekan menunda ibadahnya karena antrean warga sedang panjang."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Win-Win):</span> "Mempersilakan ibadah secara bergantian dan <strong>saya mengambil alih sementara pekerjaannya (mem-<em>back up</em>)</strong>."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan Favoritisme (HOTS)</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Soal akan memancing Anda dengan sentimen "Orang Sekampung" atau "Satu Almamater".</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-1">Skenario: Anda melayani warga, dan salah satunya adalah tetangga satu kampung halaman yang dokumennya kurang lengkap.</p>
                            <ul class="space-y-2 mt-2 text-gray-700">
                                <li><strong>Salah:</strong> Membantunya karena rasa persaudaraan daerah (Skor 1 - Nepotisme).</li>
                                <li><strong>Salah:</strong> Melayaninya lebih dulu dari antrean lain (Skor 2 - Diskriminatif).</li>
                                <li><strong>Tepat:</strong> Tetap <strong>melayani sesuai antrean dan menolak halus jika dokumen tidak sesuai SOP</strong>, tanpa memandang kedekatan asal daerah (Skor 5 - Objektivitas Mutlak).</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-rose-400 mb-2 uppercase tracking-widest text-[10px]">Culture Cheat Sheet</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Kata Kunci Skor 5:</strong> Objektif, Mempelajari, Berbaur, Memfasilitasi, Netral.</li>
                            <li>- Hindari opsi yang berbau "mengelompokkan diri" atau bergaul dengan yang sedaerah saja di kantor.</li>
                            <li>- Saat ada konflik antar budaya/rekan kerja, posisi Anda adalah penengah yang mendinginkan suasana dengan kepala dingin, bukan memihak.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " TIK (Digital Mindset & Adaptability)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-600 shadow-sm">
                        <h4 class="font-bold text-cyan-900 mb-1 uppercase text-[10px] tracking-tight">The Digital Native Logic</h4>
                        <p class="text-[11px]">Negara sedang bertransisi ke <em>e-Government</em>. Anda dituntut untuk menjadi <strong>Akselerator Teknologi</strong>. Jawaban bernilai tertinggi selalu menunjukkan sikap proaktif belajar, adaptif terhadap sistem baru, dan menolak kembali ke cara manual jika tidak terpaksa.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Respon Proaktif vs Reaktif</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-cyan-200 rounded shadow-sm">
                                <strong class="text-xs text-cyan-800 uppercase">A. Kasus Penerapan Aplikasi Baru</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jangan tunggu diajari atau menunggu jadwal diklat resmi. Inisiatif mandiri adalah kunci.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 3-4 (Reaktif):</span> "Menunggu instruksi atau pelatihan resmi dari atasan."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Proaktif):</span> "Mempelajari aplikasi tersebut secara mandiri (autodidak) dan <strong>segera menerapkannya untuk efisiensi pekerjaan</strong>."
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-cyan-200 rounded shadow-sm">
                                <strong class="text-xs text-cyan-800 uppercase">B. Kasus Senior Gagap Teknologi</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Ini soal empati digital. Jangan ambil alih pekerjaannya (itu melanggar Jejaring Kerja), tapi jadilah mentor.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 2-3 (Toxic Hero):</span> "Membantu mengetikkan laporannya agar cepat selesai."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Mentor):</span> "Mendampingi dan <strong>mengajarinya langkah demi langkah</strong> sampai ia bisa mengoperasikannya sendiri."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan "Server Down" (HOTS)</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Soal ini membenturkan "Ketergantungan Sistem" dengan "Pelayanan Prima".</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-1">Skenario: Anda melayani antrean panjang warga, tiba-tiba server aplikasi error/mati lampu.</p>
                            <ul class="space-y-2 mt-2 text-gray-700">
                                <li><strong>Salah:</strong> Menyuruh warga pulang karena sistem tidak bisa digunakan (Skor 1 - Kaku).</li>
                                <li><strong>Salah:</strong> Hanya melapor ke tim IT dan menunggu diam (Skor 3 - Kurang Inisiatif).</li>
                                <li><strong>Tepat:</strong> Melapor ke tim IT, menenangkan warga, dan <strong>melanjutkan pelayanan menggunakan sistem pencatatan manual sementara waktu</strong> agar antrean tidak terbengkalai (Skor 5 - Solutif tingkat tinggi).</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-cyan-400 mb-2 uppercase tracking-widest text-[10px]">Tech-Savvy Cheat Sheet</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Kata Kunci Skor 5:</strong> Menciptakan inovasi sistem, Mempelajari mandiri, Mengajari rekan, Memanfaatkan internet/medsos untuk sosialisasi instansi.</li>
                            <li>- Jika disuruh memilih antara cara konvensional yang sudah Anda kuasai <em>vs</em> cara digital baru yang belum Anda tahu ➔ Selalu pilih <strong>berani belajar cara digital baru</strong>.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Profesionalisme (The SOP Guardian)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-600 shadow-sm">
                        <h4 class="font-bold text-amber-900 mb-1 uppercase text-[10px] tracking-tight">The Boundary Logic</h4>
                        <p class="text-[11px]">Profesionalisme bukan berarti bekerja 24 jam. Ini tentang <strong>menyelesaikan tanggung jawab sesuai tenggat waktu dan menaati SOP mutlak</strong>. Anda dibayar oleh negara untuk fokus, bukan untuk mencampuradukkan urusan pribadi atau menjadi pesuruh pribadi atasan.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Batas Tegas ASN Profesional</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-amber-200 rounded shadow-sm">
                                <strong class="text-xs text-amber-800 uppercase">A. Kasus Benturan (Pribadi vs Dinas)</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Kecuali ada anggota keluarga inti yang kritis/meninggal, urusan kantor TIDAK BOLEH dikorbankan demi acara keluarga, jemput anak, atau sakit ringan.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 1-2 (Baper):</span> "Izin pulang cepat karena anak demam biasa."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Tanggung Jawab):</span> "Meminta anggota keluarga lain mengurusnya dan <strong>tetap menyelesaikan tugas kantor sampai tuntas</strong>."
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-amber-200 rounded shadow-sm">
                                <strong class="text-xs text-amber-800 uppercase">B. Kasus Perintah Atasan di Luar SOP</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Loyalitas ASN adalah pada Aturan (SOP), bukan pada individu atasan. Jika disuruh melanggar hukum/aturan, Anda WAJIB menolak.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 1-2 (Mental Jongos):</span> "Melaksanakannya karena takut dimarahi atau dipecat atasan."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Integritas):</span> "Menolak dengan halus dan <strong>memberikan penjelasan berdasarkan aturan/SOP yang berlaku</strong>."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan "Tugas Titipan" (HOTS)</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Soal akan menjebak Anda dengan situasi di mana Anda diberi tugas tambahan saat tugas utama belum selesai.</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-1">Skenario: Anda sedang dikejar *deadline* laporan, tiba-tiba rekan kerja/atasan meminta bantuan mendesak.</p>
                            <ul class="space-y-2 mt-2 text-gray-700">
                                <li><strong>Salah:</strong> Langsung mengiyakan dan meninggalkan tugas sendiri (Skor 2 - Gagal Fokus).</li>
                                <li><strong>Salah:</strong> Menolak mentah-mentah dengan nada tinggi (Skor 3 - Kasar).</li>
                                <li><strong>Tepat:</strong> Mengatakan akan membantu <strong>setelah tugas utama Anda sendiri selesai dikerjakan</strong> (Skor 5 - Prioritas Jelas).</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-amber-400 mb-2 uppercase tracking-widest text-[10px]">SOP & Boundary Cheat Sheet</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Kata Kunci Skor 5:</strong> Fokus, Tuntas, Menolak Halus (jika melanggar aturan), Skala Prioritas, Mengakui Kesalahan.</li>
                            <li>- Jangan bawa pekerjaan kantor ke rumah (Skor 3). Pekerjaan kantor diselesaikan di kantor dengan manajemen waktu yang baik (Skor 5).</li>
                            <li>- Jika Anda melakukan kesalahan fatal, opsi Skor 5 selalu dimulai dengan <strong>mengakui kesalahan lalu memperbaikinya</strong>, bukan mencari alasan atau melempar ke rekan.</li>
                        </ul>
                    </div>
                </div>
            `
        },
        {
            subTitle: " Anti-Radikalisme (Zero Tolerance)",
            content: `
                <div class="space-y-6 text-sm text-gray-700 leading-relaxed text-left">
                    <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-800 shadow-sm">
                        <h4 class="font-bold text-red-900 mb-1 uppercase text-[10px] tracking-tight">The Zero Tolerance Policy</h4>
                        <p class="text-[11px]">Di materi ini, lupakan kata "Empati" atau "Kompromi". Negara menguji kesetiaan mutlak Anda pada Pancasila dan NKRI. Segala bentuk penyimpangan, ujaran kebencian, intoleransi ekstrem, atau gerakan separatis harus ditolak mentah-mentah dan ditindak tegas.</p>
                    </div>

                    <div>
                        <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-xs uppercase tracking-wider text-center">Tindakan Preventif vs Kuratif</h4>
                        <div class="space-y-3">
                            <div class="p-3 bg-white border border-red-200 rounded shadow-sm">
                                <strong class="text-xs text-red-800 uppercase">A. Kasus di Lingkungan Kerja/Sosial</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jika ada indikasi penyebaran paham radikal, jangan diajak berdebat. Debat tidak menyelesaikan masalah secara birokrasi, melaporkannya iya.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 2-3 (Sok Jagoan):</span> "Mengajaknya berdebat untuk meluruskan pemahamannya."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Tegas & Prosedural):</span> "Menolak tegas ajarannya, membentengi diri, dan <strong>segera melaporkan kepada pihak berwenang/atasan</strong>."
                                </div>
                            </div>
                            
                            <div class="p-3 bg-white border border-red-200 rounded shadow-sm">
                                <strong class="text-xs text-red-800 uppercase">B. Kasus Jejak Digital & Berita Hoaks</strong>
                                <p class="text-[10px] mt-1 text-gray-600">Jejak digital diawasi. ASN dituntut menjadi agen <em>counter-narasi</em> untuk negara, bukan penonton pasif.</p>
                                <div class="mt-2 bg-gray-50 p-2 rounded text-[10px] italic">
                                    <span class="text-red-500 font-bold">Skor 1-2 (Pasif):</span> "Mengabaikan postingan tersebut karena itu hak berpendapat."<br>
                                    <span class="text-green-600 font-bold">Skor 5 (Bela Negara):</span> "Melaporkan (<em>report</em>) konten tersebut dan <strong>ikut menyebarkan edukasi positif tentang persatuan bangsa</strong>."
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                        <h4 class="font-bold text-gray-800 mb-2 text-xs uppercase tracking-tighter text-center">Jebakan "Orang Terdekat" (HOTS)</h4>
                        <p class="text-[11px] mb-3 text-center text-gray-500">Pembuat soal akan menguji objektivitas Anda dengan menggunakan subjek keluarga atau sahabat karib.</p>
                        <div class="bg-white p-3 rounded border border-orange-200 text-[10px]">
                            <p class="font-bold text-orange-800 mb-1">Skenario: Teman baik Anda sejak kecil mulai sering membagikan konten anti-pemerintah dan intoleran di grup WhatsApp.</p>
                            <ul class="space-y-2 mt-2 text-gray-700">
                                <li><strong>Salah:</strong> Menghormati privasinya dan diam saja (Skor 1 - Pembiaran).</li>
                                <li><strong>Salah:</strong> Keluar dari grup WhatsApp tanpa basa-basi (Skor 3 - Menghindar).</li>
                                <li><strong>Tepat:</strong> <strong>Menegurnya secara pribadi, mengingatkan konsekuensi hukum, dan meninggalkannya jika ia menolak berubah</strong> (Skor 5 - Objektif dan Tegas).</li>
                            </ul>
                        </div>
                    </div>

                    <div class="p-4 bg-gray-900 text-white rounded-xl shadow-lg">
                        <h4 class="text-center font-bold text-red-400 mb-2 uppercase tracking-widest text-[10px]">Red Flag Cheat Sheet</h4>
                        <ul class="space-y-2 text-[9px] font-mono text-gray-300">
                            <li>- <strong>Kata Kunci Skor 5:</strong> Melaporkan, Menolak Tegas, Membentengi Diri, Filter Informasi, Edukasi NKRI.</li>
                            <li>- Ideologi Pancasila dan keamanan negara berada di hierarki tertinggi, jauh di atas ikatan pertemanan, agama, atau budaya.</li>
                            <li>- Hindari opsi jawaban yang menunjukkan Anda "mencoba mencari tahu alasan" mereka bertindak radikal. Itu membuang waktu dan menunjukkan simpati terselubung.</li>
                        </ul>
                    </div>
                </div>
            `
        }
    ]
};

const DATABASE_TIPS = {
    // --- 1. RULE 54 DETIK (MANAJEMEN WAKTU TEKNIS) ---
    'time-management': {
        title: "Rule 54 Detik: The Survival Guide",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        content: `
            <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 class="font-bold text-blue-900 mb-1 uppercase text-xs tracking-tight">Matematika CAT 2026</h4>
                    <p class="text-[11px]">Total 110 soal dalam 100 menit. Secara teknis lo cuma punya <strong>54,5 detik</strong> per soal. Tapi ingat, lo butuh waktu buat klik 'Simpan', loading sistem, dan narik napas.</p>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 border-b pb-1 mb-3">Filter 30 Detik (The Skip Filter)</h4>
                    <p class="mb-3">Jangan pernah terjebak "Sunk Cost Fallacy" (merasa rugi karena sudah baca tapi gak dapet jawaban). Gunakan aturan ini:</p>
                    <div class="p-3 bg-gray-50 border rounded-lg space-y-2">
                        <div class="flex gap-2 text-[11px]">
                            <span class="text-blue-600 font-bold">●</span>
                            <span><strong>Detik 0-15:</strong> Baca soal & identitas (paham maksud soal).</span>
                        </div>
                        <div class="flex gap-2 text-[11px]">
                            <span class="text-blue-600 font-bold">●</span>
                            <span><strong>Detik 15-30:</strong> Cari pola/rumus. Kalau "Blank", <strong>TINGGALKAN SEGERA!</strong></span>
                        </div>
                        <div class="flex gap-2 text-[11px]">
                            <span class="text-red-600 font-bold">●</span>
                            <span><strong>Detik 60+:</strong> Jika belum ada jawaban pasti, lo sedang membunuh waktu soal lain. Klik opsi sembarang dan pindah!</span>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-900 text-white rounded-xl">
                    <h4 class="text-center font-bold text-blue-400 mb-2">TIME BUFFER STRATEGY</h4>
                    <p class="text-[10px] text-center text-gray-400 mb-2 italic">"Lo nggak butuh 54 detik untuk semua soal."</p>
                    <div class="grid grid-cols-2 gap-2 text-center text-[11px]">
                        <div class="bg-white/10 p-2 rounded">
                            <span class="block font-bold">TWK & TKP</span>
                            <span class="text-[10px] text-blue-300">Target: 30-40 detik</span>
                        </div>
                        <div class="bg-white/10 p-2 rounded">
                            <span class="block font-bold">TIU</span>
                            <span class="text-[10px] text-blue-300">Subsidi: 70-80 detik</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    // --- 2. URUTAN MEMATIKAN (PSIKOLOGI) ---
    'urutan-pengerjaan': {
        title: "Urutan Mematikan: Combat Sequence",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>',
        content: `
            <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
                <p class="italic text-gray-500 text-xs">"Mental lo adalah baterai yang bakal habis. Gunakan kapasitas terbaik lo di tempat yang paling menguras pikiran."</p>
                <div class="space-y-4">
                    <div class="flex gap-4 p-3 border rounded-xl hover:bg-green-50 transition">
                        <div class="text-xl font-black text-green-600">01</div>
                        <div>
                            <h5 class="font-bold text-gray-900 text-xs">TKP: Fase Pemanasan (Menit 0-30)</h5>
                            <p class="text-[11px]">Kenapa duluan? Karena TKP itu soal cerita panjang yang butuh empati dan logika sosial. Kerjakan saat otak masih "dingin". Gak ada nilai nol, jadi lo bisa dapet momentum poin besar di sini.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 p-3 border rounded-xl hover:bg-red-50 transition">
                        <div class="text-xl font-black text-red-600">02</div>
                        <div>
                            <h5 class="font-bold text-gray-900 text-xs">TWK: Fase Akselerasi (Menit 30-50)</h5>
                            <p class="text-[11px]">Sifat soal: Tahu atau Tidak. Jangan berlama-lama. Pakai intuisi pertama lo. Fase ini adalah "tabungan waktu" buat fase terakhir.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 p-3 border rounded-xl hover:bg-blue-50 transition border-blue-200">
                        <div class="text-xl font-black text-blue-600">03</div>
                        <div>
                            <h5 class="font-bold text-gray-900 text-xs">TIU: The Boss Fight (Menit 50-95)</h5>
                            <p class="text-[11px]">Gunakan sisa waktu dan energi untuk berhitung. Karena lo udah "aman" di TKP dan TWK, lo gak bakal sepanik orang yang ngerjain TIU di awal lalu kehabisan waktu buat baca soal TKP yang panjang.</p>
                        </div>
                    </div>
                </div>
                <div class="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 text-[11px]">
                    <strong>PRO TIPS:</strong> Sisakan <strong>5 menit terakhir</strong> (Menit 95-100) untuk mengecek jawaban. Jangan pernah biarkan ada satu pun soal yang kosong!
                </div>
            </div>
        `
    },

    // --- 3. PASSING GRADE ---
    'passing-grade': {
        title: "Mastery: Passing Grade & Strategi",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-indigo-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
        content: `
            <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                    <h4 class="font-bold text-indigo-900 mb-2 uppercase tracking-tight">Landasan Hukum Resmi</h4>
                    <p class="text-xs mb-3">Mengacu pada <strong>Kepmenpan-RB No. 321 Tahun 2024</strong>, ambang batas bukan sekadar angka, tapi filter eliminasi tahap awal.</p>
                    <table class="w-full text-center border-collapse bg-white rounded shadow-sm overflow-hidden">
                        <thead class="bg-indigo-600 text-white text-[10px]">
                            <tr><th class="p-2">MATERI</th><th class="p-2">AMBANG BATAS</th><th class="p-2">ESTIMASI BENAR</th></tr>
                        </thead>
                        <tbody class="text-xs">
                            <tr class="border-b"><td>TWK</td><td class="font-bold text-red-600">65</td><td>13 Soal</td></tr>
                            <tr class="border-b"><td>TIU</td><td class="font-bold text-blue-600">80</td><td>16 Soal</td></tr>
                            <tr class="border-b"><td>TKP</td><td class="font-bold text-green-600">166</td><td>Poin 4 & 5</td></tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 border-b pb-1 mb-3">Aturan Main: "3x Formasi"</h4>
                    <p class="mb-3">Lolos Passing Grade (PG) hanya memberi Anda kode <strong>P (Lolos)</strong>, tapi untuk lanjut ke SKB Anda butuh kode <strong>P/L (Lolos Berperingkat)</strong>.</p>
                    <div class="p-3 bg-yellow-50 border border-yellow-200 rounded text-xs">
                        <strong>Rumus 3x Formasi:</strong> Jika sebuah instansi hanya membuka 2 formasi, maka hanya <strong>6 orang (2 x 3)</strong> dengan nilai tertinggi yang berhak lanjut ke SKB.
                    </div>
                </div>
                <div class="space-y-4">
                    <h4 class="font-bold text-gray-900">Bedah Kasus Strategis</h4>
                    <div class="border rounded-lg p-3 bg-white shadow-sm border-red-200">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-bold text-red-700 uppercase text-[10px]">Kasus A: Tragedi TIU</span>
                            <span class="bg-red-100 text-red-700 text-[10px] px-2 py-0.5 rounded font-black">GAGAL</span>
                        </div>
                        <p class="text-[11px] mb-2">TWK: 120 | TKP: 210 | <strong>TIU: 75</strong><br>Total Skor: <span class="font-bold">405</span></p>
                        <p class="text-[10px] text-gray-500 italic"><strong>Analisa:</strong> Meskipun skor total tinggi, peserta gugur seketika karena TIU kurang 1 soal benar.</p>
                    </div>
                    <div class="border rounded-lg p-3 bg-white shadow-sm border-orange-200">
                        <div class="flex justify-between items-center mb-2">
                            <span class="font-bold text-orange-700 uppercase text-[10px]">Kasus B: Drama Nilai Kembar</span>
                            <span class="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded font-black">PRIORITAS</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2 text-[10px] mb-2">
                            <div class="p-2 bg-gray-50 rounded"><strong>Si A:</strong> TKP 195, TIU 100, TWK 100. Total 395.</div>
                            <div class="p-2 bg-gray-50 rounded"><strong>Si B:</strong> TKP 185, TIU 110, TWK 100. Total 395.</div>
                        </div>
                        <p class="text-[10px] text-gray-500 italic"><strong>Aturan Tie-Breaker:</strong> Jika total skor sama, prioritas kelulusan dilihat dari nilai <strong>TKP > TIU > TWK</strong>. Si A menang atas Si B.</p>
                    </div>
                </div>
            </div>
        `
    },

    // --- 4. JEBAKAN SOAL ---
    'soal-cerita': {
        title: "Reverse Reading Strategy",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>',
        content: `
            <div class="space-y-6 text-sm text-gray-700 leading-relaxed">
                <div class="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
                    <h4 class="font-bold text-red-900 mb-1 uppercase tracking-tight">Analisa Psikologi Pembuat Soal</h4>
                    <p class="text-[11px]">Soal cerita panjang (HOTS) dirancang untuk memicu <strong>Panic Mode</strong>. Tujuan lo bukan memahami cerita, tapi mencari <strong>Inti Masalah</strong>.</p>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 border-b pb-1 mb-3 text-base">Metode "Reverse Reading"</h4>
                    <div class="space-y-4">
                        <div class="flex gap-3">
                            <div class="flex-none w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs">1</div>
                            <div><strong>Baca Pertanyaan (Kalimat Terakhir):</strong> Ketahui dulu apa yang dicari.</div>
                        </div>
                        <div class="flex gap-3">
                            <div class="flex-none w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs">2</div>
                            <div><strong>Scan Opsi Jawaban:</strong> Opsi jawaban memberi petunjuk konteks cerita.</div>
                        </div>
                        <div class="flex gap-3">
                            <div class="flex-none w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xs">3</div>
                            <div><strong>Filtering Teks:</strong> Baru balik ke teks mencari <em>keyword</em>. Buang distraktor.</div>
                        </div>
                    </div>
                </div>
                <div class="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                    <h4 class="font-bold text-gray-800 mb-2">Sampah Visual (Abaikan!)</h4>
                    <div class="grid grid-cols-2 gap-2 text-[10px]">
                        <div class="bg-white p-2 rounded border border-gray-100">❌ <strong>Latar Belakang:</strong> "Pada suatu hari..."</div>
                        <div class="bg-white p-2 rounded border border-gray-100">❌ <strong>Detail Nama/Gelar:</strong> "Prof. Dr. Agus..."</div>
                        <div class="bg-white p-2 rounded border border-gray-100">❌ <strong>Angka Statistik:</strong> Kecuali ditanya.</div>
                    </div>
                </div>
            </div>
        `
    }
};