// ============================================================
// DATABASE.JS - GUDANG DATA SOAL & MATERI
// ============================================================

// 1. DATA MENTAH TRYOUT (110 SOAL PREDIKSI HOTS)
// Format Asli: { id, type, text, options, key }
// Nanti akan dikonversi otomatis oleh sistem di bawah.
const RAW_TRYOUT_110 = [
    // --- TWK ---
    {
        id: 1, type: "TWK", scoreType: "absolute",
        text: "Nasionalisme di era digital seringkali tergerus oleh arus informasi global yang tak terbendung. Sebagai seorang ASN milenial yang aktif di media sosial, sikap nasionalisme yang paling relevan untuk ditunjukkan adalah...",
        options: ["Menutup akun media sosial agar tidak terkontaminasi budaya asing.", "Hanya memposting konten budaya daerah sendiri setiap hari.", "Memfilter informasi asing dan aktif menyebarkan konten positif tentang prestasi bangsa (Counter-Narrative).", "Menyerang akun-akun asing yang menjelekkan Indonesia di kolom komentar.", "Menggunakan bahasa daerah di setiap caption postingan."],
        key: 2
    },
    {
        id: 2, type: "TWK", scoreType: "absolute",
        text: "Integritas: Anda melihat rekan kerja senior memanipulasi laporan perjalanan dinas. Nominalnya kecil, namun dilakukan berulang kali. Dia adalah mentor yang sangat baik kepada Anda. Sikap Anda?",
        options: ["Mengingatkan secara personal bahwa hal itu melanggar aturan.", "Diam saja karena nominalnya kecil dan tidak merugikan negara secara signifikan.", "Melaporkan ke atasan langsung atau unit kepatuhan internal tanpa sepengetahuan yang bersangkutan.", "Menyindirnya saat makan siang bersama.", "Ikut melakukannya karena sudah menjadi budaya kantor."],
        key: 2
    },
    {
        id: 3, type: "TWK", scoreType: "absolute",
        text: "Bela Negara: Seorang dokter menolak ditempatkan di daerah perbatasan yang rawan konflik bersenjata dengan alasan keselamatan. Padahal, warga di sana sangat membutuhkan layanan kesehatan. Dalam konteks Bela Negara, penilaian Anda terhadap sikap dokter tersebut adalah...",
        options: ["Wajar, karena negara wajib menjamin keamanan warganya.", "Salah, karena dokter terikat sumpah profesi dan UU Bela Negara untuk mengabdi sesuai profesi.", "Benar, karena nyawa adalah hak asasi manusia yang tidak bisa ditawar.", "Kurang tepat, seharusnya dia minta jaminan keamanan tentara sebelum berangkat.", "Sangat salah, dia harusnya ikut mengangkat senjata melawan musuh."],
        key: 1
    },
    {
        id: 4, type: "TWK", scoreType: "absolute",
        text: "Pilar Negara: Kebebasan berpendapat dijamin UUD 1945 Pasal 28E Ayat 3. Namun, ketika ada kelompok yang menyuarakan penggantian ideologi Pancasila dengan ideologi lain di muka umum, tindakan negara yang paling tepat berdasarkan konstitusi adalah...",
        options: ["Membiarkan karena itu bagian dari kebebasan berekspresi.", "Membubarkan paksa tanpa proses hukum.", "Melarang dan menindak tegas karena bertentangan dengan konsensus dasar bernegara.", "Mengajak dialog terbuka di televisi nasional.", "Mencabut kewarganegaraan para pelakunya."],
        key: 2
    },
    {
        id: 5, type: "TWK", scoreType: "absolute",
        text: "Sejarah: Peristiwa Rengasdengklok menunjukkan adanya konflik cara pandang antara Golongan Tua dan Muda. Hikmah positif dari konflik tersebut bagi kepemimpinan masa kini adalah...",
        options: ["Pemimpin harus otoriter agar keputusan cepat diambil.", "Golongan muda selalu lebih benar daripada golongan tua.", "Diperlukan sinergi: semangat progresif kaum muda dan kebijaksanaan/kehati-hatian kaum tua.", "Jangan pernah mendengarkan nasihat orang tua yang lambat.", "Konflik internal akan selalu menghambat tujuan organisasi."],
        key: 2
    },
    {
        id: 6, type: "TWK", scoreType: "absolute",
        text: "FR Bahasa Indonesia: Penulisan gelar dan nama yang BENAR sesuai PUEBI adalah...",
        options: ["Prof. Dr. H. Riandi Pratama, S.H, M.Kn.", "Prof. Dr. H. Riandi Pratama, S.H., M.Kn.", "Prof, Dr, H, Riandi Pratama, SH., M.Kn.", "Prof. Dr. H. Riandi Pratama, S.H., M.Kn", "Prof.Dr.H. Riandi Pratama, S.H., M.Kn."],
        key: 1
    },
    {
        id: 7, type: "TWK", scoreType: "absolute",
        text: "Bhinneka Tunggal Ika: Di kantor Anda yang mayoritas Muslim, akan diadakan acara buka puasa bersama. Rekan Anda yang Non-Muslim bertanya apakah dia boleh ikut. Sikap Anda sebagai ketua panitia...",
        options: ["Menyarankan tidak ikut karena ini acara keagamaan.", "Memperbolehkan ikut tapi duduk di meja terpisah.", "Mengajaknya ikut serta dan memastikan tersedia menu makanan yang umum/netral.", "Membatalkan acara demi toleransi.", "Menyuruhnya masuk Islam dulu."],
        key: 2
    },
    {
        id: 8, type: "TWK", scoreType: "absolute",
        text: "Wawasan Nusantara: Kasus klaim Natuna Utara oleh negara asing sering terjadi karena mereka menggunakan peta sembilan garis putus-putus (Nine Dash Line). Dasar hukum internasional terkuat yang dimiliki Indonesia untuk mempertahankan Natuna adalah...",
        options: ["Deklarasi Djuanda 1957", "UUD 1945 Pasal 1", "UNCLOS 1982 (United Nations Convention on the Law of the Sea)", "Kekuatan militer TNI AL", "Perjanjian Linggarjati"],
        key: 2
    },
    {
        id: 9, type: "TWK", scoreType: "absolute",
        text: "Pilar Negara: Kedudukan Pancasila sebagai 'Staatsfundamentalnorm' mengandung arti bahwa...",
        options: ["Pancasila adalah hukum tertinggi di atas UUD 1945.", "Pancasila adalah sumber dari segala sumber hukum yang tidak dapat diubah oleh siapapun.", "Pancasila hanya simbol negara.", "Pancasila bisa diubah lewat referendum.", "Pancasila setara dengan TAP MPR."],
        key: 1
    },
    {
        id: 10, type: "TWK", scoreType: "absolute",
        text: "Integritas: Anda ditawari jabatan basah (banyak proyek) oleh pimpinan, dengan syarat harus menyetor 10% keuntungan proyek kepada beliau. Anda sedang butuh uang untuk biaya sakit orang tua. Sikap Anda...",
        options: ["Menerima demi orang tua, toh ini perintah atasan.", "Menolak halus dan tetap bekerja di posisi lama.", "Menerima tapi diam-diam tidak menyetor uangnya.", "Menolak tegas dan siap dengan risiko dimutasi/dikucilkan.", "Merekam percakapan tersebut untuk viral di medsos."],
        key: 3
    },
    // --- TIU ---
    {
        id: 31, type: "TIU", scoreType: "absolute",
        text: "<b>Silogisme (3 Premis):</b><br>1. Semua anggota BEM wajib memakai almamater.<br>2. Sebagian mahasiswa Teknik adalah anggota BEM.<br>3. Tidak ada orang yang memakai almamater yang dihukum dosen.<br>Kesimpulannya...",
        options: ["Sebagian mahasiswa Teknik tidak dihukum dosen.", "Semua mahasiswa Teknik memakai almamater.", "Semua yang dihukum dosen adalah anggota BEM.", "Ada anggota BEM yang dihukum dosen.", "Tidak dapat ditarik kesimpulan."],
        key: 0
    },
    {
        id: 32, type: "TIU", scoreType: "absolute",
        text: "<b>Logika Analisa (Urutan):</b><br>Dalam antrean vaksin: A di depan B. C di belakang D. B di depan E. D di depan A. Urutan dari depan ke belakang adalah...",
        options: ["D - A - B - E - C", "D - A - C - B - E", "D - C - A - B - E", "C - D - A - B - E", "A - B - E - D - C"],
        key: 2
    },
    {
        id: 33, type: "TIU", scoreType: "absolute",
        text: "<b>Analogi Kata:</b><br>ABRASI : HEMPASAN = ... : ...",
        options: ["Memasak : Panas", "Reruntuhan : Penghancuran", "Rayuan : Pujian", "Erosi : Aliran Air", "Serpihan : Potongan"],
        key: 3
    },
    {
        id: 34, type: "TIU", scoreType: "absolute",
        text: "<b>Hitung Cepat (Pecahan):</b><br>Hasil dari 0,75 + 2/3 x 0,25 adalah...",
        options: ["0,88", "0,91", "0,95", "1,05", "1,25"],
        key: 1
    },
    {
        id: 35, type: "TIU", scoreType: "absolute",
        text: "<b>Perbandingan Berbalik Nilai (Pekerja):</b><br>Renovasi rumah direncanakan selesai 30 hari oleh 12 pekerja. Setelah 10 hari bekerja, pekerjaan terhenti 5 hari karena hujan. Agar selesai tepat waktu, berapa tambahan pekerja yang dibutuhkan?",
        options: ["2 orang", "4 orang", "6 orang", "8 orang", "16 orang"],
        key: 1
    },
    {
        id: 36, type: "TIU", scoreType: "absolute",
        text: "<b>Deret Angka (Fibonacci Lompat):</b><br>2, 3, 5, 8, 13, 21, X. Nilai X adalah...",
        options: ["29", "30", "34", "35", "40"],
        key: 2
    },
    {
        id: 37, type: "TIU", scoreType: "absolute",
        text: "<b>Soal Cerita (Kecepatan):</b><br>Jarak Kota A-B 120 km. Andi berangkat pukul 07.00 dengan kecepatan 40 km/jam. Budi berangkat pukul 07.30 menyusul dengan kecepatan 60 km/jam. Pukul berapa Budi menyusul Andi?",
        options: ["08.00", "08.30", "09.00", "09.30", "10.00"],
        key: 1
    },
    {
        id: 38, type: "TIU", scoreType: "absolute",
        text: "<b>Logika Posisi (Meja Bundar):</b><br>6 orang (P,Q,R,S,T,U) rapat meja bundar. P berhadapan dengan S. T di antara P dan U. R duduk tepat di sebelah kanan S. Siapa yang duduk di hadapan T?",
        options: ["Q", "R", "U", "S", "Tidak ada"],
        key: 0
    },
    {
        id: 39, type: "TIU", scoreType: "absolute",
        text: "<b>Himpunan (Diagram Venn):</b><br>Dari 40 pelamar, 25 bisa Komputer, 20 bisa Bahasa Inggris, 7 tidak bisa keduanya. Berapa yang bisa keduanya?",
        options: ["10", "12", "15", "18", "8"],
        key: 1
    },
    {
        id: 40, type: "TIU", scoreType: "absolute",
        text: "<b>Analogi 3 Kata:</b><br>GURU : PAPAN TULIS : KAPUR = ... : ... : ...",
        options: ["Petani : Cangkul : Padi", "Dokter : Stetoskop : Pasien", "Pelukis : Kanvas : Kuas", "Sopir : Mobil : Jalan", "Nelayan : Jaring : Ikan"],
        key: 2
    },
    // --- TKP ---
    {
        id: 61, type: "TKP", scoreType: "scale",
        text: "<b>Pelayanan Publik (Warga Emosional):</b><br>Seorang warga datang marah-marah karena merasa dipimpong oleh petugas lain. Dia berteriak di depan loket Anda. Sikap Anda...",
        options: ["Memanggil satpam untuk mengamankan situasi.", "Mendengarkan keluhannya sampai selesai, meminta maaf, dan langsung membantu menyelesaikan masalahnya.", "Meminta warga tersebut tenang dulu baru dilayani.", "Menjelaskan bahwa itu bukan kesalahan bagian Anda.", "Melaporkan kejadian ini kepada atasan."],
        points: [2, 5, 3, 1, 4], key: 1
    },
    {
        id: 62, type: "TKP", scoreType: "scale",
        text: "<b>Profesionalisme (Tugas Mendadak):</b><br>Anda sedang mengerjakan laporan tahunan yang deadline besok. Tiba-tiba atasan memberi tugas tambahan yang juga urgent untuk presentasi nanti sore. Sikap Anda...",
        options: ["Menolak tugas tambahan dengan sopan karena sedang fokus laporan.", "Menerima tugas tambahan dan mengerjakannya secepat mungkin, lalu kembali ke laporan.", "Meminta rekan kerja membantu tugas tambahan tersebut.", "Mengeluh kepada atasan karena beban kerja tidak wajar.", "Mengerjakan keduanya sekaligus meskipun hasilnya kurang maksimal."],
        points: [2, 5, 4, 1, 3], key: 1
    },
    {
        id: 63, type: "TKP", scoreType: "scale",
        text: "<b>Jejaring Kerja (Rekan Toxic):</b><br>Dalam tim kerja, ada satu rekan yang suka menunda pekerjaan sehingga menghambat kinerja tim. Ketua tim tampaknya segan menegurnya. Sikap Anda...",
        options: ["Menegur rekan tersebut secara langsung di depan forum rapat.", "Mengajak rekan tersebut bicara empat mata untuk mencari kendalanya dan menawarkan solusi.", "Melaporkan hal ini ke atasan yang lebih tinggi.", "Mengerjakan bagiannya agar tim tidak gagal.", "Diam saja karena bukan wewenang saya."],
        points: [2, 5, 3, 4, 1], key: 1
    },
    {
        id: 64, type: "TKP", scoreType: "scale",
        text: "<b>Teknologi Informasi (Sistem Error):</b><br>Saat pelayanan sedang padat, sistem database kantor tiba-tiba down. Antrean menumpuk. Sikap Anda...",
        options: ["Menutup loket sampai sistem benar kembali.", "Menjelaskan gangguan kepada warga dan mencatat data secara manual untuk diinput nanti saat sistem pulih.", "Meminta teknisi segera memperbaiki.", "Menyuruh warga pulang dan kembali besok.", "Panik dan bertanya kepada atasan."],
        points: [1, 5, 4, 1, 2], key: 1
    },
    {
        id: 65, type: "TKP", scoreType: "scale",
        text: "<b>Sosial Budaya (Prinsip):</b><br>Anda ditempatkan di daerah yang mayoritas warganya memiliki tradisi yang bertentangan dengan prinsip pribadi Anda. Warga mengajak Anda berpartisipasi. Sikap Anda...",
        options: ["Menolak tegas karena melanggar prinsip.", "Ikut berpartisipasi sekadarnya untuk menghormati tanpa mengorbankan prinsip utama, sambil tetap berbaur.", "Pura-pura sakit.", "Mengedukasi warga bahwa tradisi itu salah.", "Mengikuti sepenuhnya agar disukai warga."],
        points: [2, 5, 1, 2, 3], key: 1
    },
    {
                id: 66, type: "TKP", scoreType: "scale",
                text: "<b>Anti Radikalisme (Medsos):</b><br>Rekan kerja memposting konten hoax yang memecah belah persatuan. Sikap Anda...",
                options: [
                    "Langsung unfriend/block.", 
                    "Mengingatkan secara personal (DM) dengan bahasa santun.", 
                    "Melaporkan ke atasan dengan bukti screenshot.", 
                    "Menyindir di kolom komentar.", 
                    "Masa bodoh."
                ],
                points: [2, 5, 4, 1, 1], key: 1
            },
            {
                id: 67, type: "TKP", scoreType: "scale",
                text: "<b>Integritas (Gratifikasi):</b><br>Seorang pemohon layanan menyelipkan amplop uang 'terima kasih' di berkas yang Anda kerjakan. Tidak ada CCTV di ruangan itu. Sikap Anda...",
                options: [
                    "Menerima karena tidak ada yang tahu dan itu rejeki.", 
                    "Menolak dengan tegas dan mengembalikan amplop tersebut serta menjelaskan bahwa layanan ini gratis.", 
                    "Menerima lalu menyumbangkannya ke kotak amal.", 
                    "Melaporkan pemohon tersebut ke polisi.", 
                    "Menolak dengan marah."
                ],
                points: [1, 5, 2, 3, 2], key: 1
            },
            {
                id: 68, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Kritik):</b><br>Atasan mengkritik hasil kerja Anda dengan keras di depan rekan-rekan lain. Anda merasa kritiknya kurang tepat. Sikap Anda...",
                options: [
                    "Langsung membantah saat itu juga.", 
                    "Menerima kritik tersebut sebagai bahan evaluasi, lalu menemui atasan secara pribadi untuk menjelaskan sudut pandang Anda.", 
                    "Diam saja menahan malu.", 
                    "Menceritakan kejadian itu kepada rekan lain untuk mencari dukungan.", 
                    "Resign dari pekerjaan."
                ],
                points: [2, 5, 3, 1, 1], key: 1
            },
            {
                id: 69, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Prioritas):</b><br>Saat sedang melayani warga, ada telepon dari anak Anda yang menangis di sekolah. Sikap Anda...",
                options: [
                    "Langsung mengangkat telepon dan menghentikan pelayanan.", 
                    "Meminta izin sebentar kepada warga untuk mengangkat telepon, memastikan kondisi darurat/tidak, lalu kembali melayani.", 
                    "Mematikan HP.", 
                    "Meminta rekan lain mengangkat telepon Anda.", 
                    "Terus melayani dan mengabaikan telepon."
                ],
                points: [1, 5, 2, 3, 4], key: 1
            },
            {
                id: 70, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Target Tim):</b><br>Tim Anda gagal mencapai target bulanan. Sebagai anggota tim, sikap Anda...",
                options: [
                    "Menyalahkan ketua tim yang tidak becus.", 
                    "Mengajak seluruh anggota tim melakukan evaluasi bersama untuk mencari akar masalah dan solusi perbaikan.", 
                    "Pura-pura tidak tahu.", 
                    "Bekerja lebih keras sendiri di bulan depan.", 
                    "Meminta pindah tim."
                ],
                points: [1, 5, 1, 3, 1], key: 1
            },
            {
                id: 71, type: "TKP", scoreType: "scale",
                text: "<b>Anti Radikalisme (Lingkungan Kerja):</b><br>Anda mendapati bahwa salah satu rekan kerja yang sangat kompeten dan rajin ibadah mulai menunjukkan sikap eksklusif, menolak hormat bendera, dan sering berbicara tentang mengganti sistem negara di jam istirahat. Sikap Anda...",
                options: [
                    "Melaporkan segera kepada BNPT atau pihak berwajib karena sudah membahayakan.",
                    "Menjauhinya agar tidak terpapar paham tersebut.",
                    "Mengajaknya berdialog santai untuk meluruskan pandangannya tentang kebangsaan dan agama.",
                    "Melaporkan kepada atasan atau bagian kepegawaian agar dilakukan pembinaan khusus.",
                    "Mengingatkan rekan lain agar waspada terhadap orang tersebut."
                ],
                points: [3, 1, 5, 4, 2], // 5: Pendekatan persuasif dulu. 4: Lapor internal. 3: Lapor eksternal (terlalu drastis jika belum ada aksi teror).
                key: 2
            },
            {
                id: 72, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Diskresi):</b><br>Seorang nenek tua datang mengurus pensiunan tapi KTP-nya tertinggal di rumah yang sangat jauh. Secara aturan, layanan tidak bisa diproses tanpa KTP asli. Sikap Anda...",
                options: [
                    "Menolak dengan halus dan memintanya kembali besok dengan membawa KTP.",
                    "Meminta izin atasan untuk memberikan dispensasi pelayanan dengan jaminan data pendukung lain.",
                    "Melayaninya diam-diam karena kasihan.",
                    "Meminta nenek tersebut meminta tolong keluarganya mengantarkan KTP.",
                    "Memarahinya karena tidak disiplin administrasi."
                ],
                points: [2, 5, 3, 4, 1], // 5: Solusi legal (izin atasan) + Kemanusiaan. 4: Solusi alternatif. 3: Melanggar SOP.
                key: 1
            },
            {
                id: 73, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Konflik Kepentingan):</b><br>Anda menjadi panitia pengadaan barang. Saudara kandung Anda memiliki perusahaan yang sangat kredibel dan ingin ikut tender. Dia meminta 'bocoran' spesifikasi teknis agar bisa menang. Sikap Anda...",
                options: [
                    "Memberikan sedikit bocoran umum yang tidak krusial.",
                    "Menolak tegas dan memintanya mengikuti prosedur resmi seperti peserta lain.",
                    "Menyarankan dia tidak ikut tender agar tidak terjadi fitnah.",
                    "Mundur dari kepanitiaan agar saudara bisa ikut dengan adil.",
                    "Pura-pura tidak tahu dan membiarkan dia berjuang sendiri."
                ],
                points: [1, 5, 3, 2, 4], // 5: Integritas + Profesional (Hak dia ikut, kewajiban kita jujur).
                key: 1
            },
            {
                id: 74, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Rekan Pasif):</b><br>Anda satu tim dengan rekan yang 'pendiam' dan jarang memberikan ide saat rapat, padahal kinerjanya bagus. Hal ini membuat diskusi tim jadi kurang dinamis. Sikap Anda...",
                options: [
                    "Membiarkannya karena yang penting kerjanya beres.",
                    "Menegurnya di depan forum agar mau bicara.",
                    "Secara proaktif meminta pendapatnya di setiap sesi diskusi untuk memancing keaktifannya.",
                    "Mengajaknya ngobrol personal di luar rapat untuk membangun kepercayaan dirinya.",
                    "Melaporkan ke atasan bahwa dia pasif."
                ],
                points: [1, 2, 5, 4, 3], // 5: Aksi langsung di forum (Inklusif). 4: Pendekatan personal (bagus tapi butuh waktu).
                key: 2
            },
            {
                id: 75, type: "TKP", scoreType: "scale",
                text: "<b>Sosial Budaya (Adaptasi):</b><br>Anda dimutasi ke daerah yang warganya sangat santai dan 'jam karet', berbeda dengan Anda yang sangat disiplin waktu. Hal ini mulai mengganggu ritme kerja Anda. Sikap Anda...",
                options: [
                    "Tetap disiplin kaku dan memarahi siapa saja yang terlambat.",
                    "Mengikuti ritme mereka agar diterima (baur).",
                    "Tetap disiplin sebagai teladan, namun bersikap fleksibel dan persuasif mengajak rekan kerja berubah pelan-pelan.",
                    "Minta pindah kembali ke kota besar.",
                    "Membuat aturan sanksi berat sepihak."
                ],
                points: [2, 1, 5, 1, 3], // 5: Integritas + Adaptabilitas cerdas.
                key: 2
            },
            {
                id: 76, type: "TKP", scoreType: "scale",
                text: "<b>Teknologi Informasi (Upgrade Skill):</b><br>Kantor akan beralih ke sistem cloud computing total bulan depan. Anda merasa gaptek dan sulit belajar hal baru. Sikap Anda...",
                options: [
                    "Pasrah menunggu pelatihan resmi dari kantor.",
                    "Belajar mandiri lewat tutorial di internet di luar jam kerja agar siap saat implementasi.",
                    "Meminta rekan muda mengajari Anda setiap saat.",
                    "Protes karena sistem lama masih bagus.",
                    "Mencari cara agar tetap bisa pakai cara manual."
                ],
                points: [3, 5, 4, 1, 2], // 5: Inisiatif mandiri (Self-driven).
                key: 1
            },
            {
                id: 77, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Beban Kerja):</b><br>Rekan kerja Anda cuti melahirkan selama 3 bulan. Atasan melimpahkan 80% pekerjaannya kepada Anda tanpa tambahan gaji. Anda mulai merasa kewalahan dan stres. Sikap Anda...",
                options: [
                    "Menolak tugas tersebut karena tidak ada di jobdesk.",
                    "Menerima dengan ikhlas sebagai bentuk loyalitas.",
                    "Menghadap atasan, menjelaskan beban kerja Anda saat ini dengan data, dan meminta prioritas tugas atau bantuan tambahan personil.",
                    "Mengerjakan semampunya, kalau tidak selesai ya sudah.",
                    "Sering izin sakit untuk menghindari tugas."
                ],
                points: [2, 3, 5, 1, 1], // 5: Asertif & Solutif (Bukan ngeluh, tapi negosiasi profesional).
                key: 2
            },
            {
                id: 78, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Kendala Bahasa):</b><br>Datang warga asing yang ingin mengurus izin tapi tidak bisa bahasa Indonesia dan Inggris. Anda juga tidak mengerti bahasanya. Antrean di belakang mulai panjang. Sikap Anda...",
                options: [
                    "Menolak melayani sampai dia membawa penerjemah.",
                    "Menggunakan aplikasi penerjemah di HP untuk komunikasi dasar sambil tetap melayani dengan senyum.",
                    "Meminta bantuan rekan lain siapa tahu ada yang mengerti.",
                    "Mencoba bahasa isyarat seadanya.",
                    "Meminta dia minggir dulu agar tidak menghambat antrean lain."
                ],
                points: [1, 5, 4, 3, 2], // 5: Pemanfaatan Teknologi + Service orientation.
                key: 1
            },
            {
                id: 79, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Kabar Miring):</b><br>Beredar gosip di kantor bahwa Anda akan dipromosikan karena 'main belakang' dengan atasan, padahal itu murni prestasi Anda. Suasana tim jadi dingin kepada Anda. Sikap Anda...",
                options: [
                    "Marah dan mencari penyebar gosip.",
                    "Klarifikasi di grup WhatsApp kantor secara panjang lebar.",
                    "Tetap bekerja dengan kinerja terbaik dan bersikap wajar/ramah kepada semua rekan (Show, don't tell).",
                    "Menghadap atasan untuk minta pembelaan.",
                    "Resign karena tidak nyaman."
                ],
                points: [1, 2, 5, 3, 1], // 5: Kematangan emosi & Profesionalisme.
                key: 2
            },
            {
                id: 80, type: "TKP", scoreType: "scale",
                text: "<b>Anti Radikalisme (Simbol Negara):</b><br>Saat upacara bendera, Anda melihat rekan di barisan depan tidak mau hormat pada bendera Merah Putih dengan alasan keyakinan. Sikap Anda...",
                options: [
                    "Menendang kakinya agar sadar.",
                    "Membiarkan saja karena itu hak dia.",
                    "Melaporkan kejadian tersebut kepada pimpinan unit setelah upacara selesai.",
                    "Menegurnya langsung saat upacara berlangsung.",
                    "Mengajaknya diskusi setelah upacara tentang wawasan kebangsaan."
                ],
                points: [1, 2, 5, 3, 4], // 5: Lapor wewenang (karena ini kejadian formal/pelanggaran disiplin). 4: Persuasif personal.
                key: 2
            },
            {
                id: 81, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Kesalahan Sendiri):</b><br>Anda baru sadar telah melakukan kesalahan hitung pada laporan yang sudah diserahkan ke atasan kemarin. Atasan belum menyadarinya. Sikap Anda...",
                options: [
                    "Diam saja berharap tidak ketahuan.",
                    "Segera merevisi, menghadap atasan, mengakui kesalahan, dan menyerahkan revisinya.",
                    "Menunggu ditegur baru memperbaiki.",
                    "Menyalahkan rekan tim yang memberi data.",
                    "Memperbaiki diam-diam dan menukar berkas di meja atasan saat beliau keluar."
                ],
                points: [1, 5, 2, 1, 3], // 5: Integritas & Tanggung Jawab penuh.
                key: 1
            },
            {
                id: 82, type: "TKP", scoreType: "scale",
                text: "<b>Sosial Budaya (Ketua Panitia):</b><br>Anda ditunjuk sebagai ketua panitia HUT RI di lingkungan perumahan yang majemuk. Ada usulan doa bersama, namun warga beda agama berdebat soal cara doanya. Sikap Anda...",
                options: [
                    "Meniadakan sesi doa agar adil.",
                    "Memilih cara doa mayoritas.",
                    "Mengadakan sesi hening cipta bersama yang universal untuk mendoakan bangsa.",
                    "Membuat sesi doa bergantian semua agama (memakan waktu lama).",
                    "Mundur dari ketua panitia."
                ],
                points: [2, 1, 5, 4, 1], // 5: Solusi inklusif & efisien (Sila ke-1 & 3).
                key: 2
            },
            {
                id: 83, type: "TKP", scoreType: "scale",
                text: "<b>Teknologi Informasi (Hoax WAG):</b><br>Atasan Anda (yang gaptek) menyebarkan berita hoax tentang kesehatan di grup WhatsApp kantor. Rekan lain takut menegur. Sikap Anda...",
                options: [
                    "Ikut menyebarkan untuk menyenangkan atasan.",
                    "Japri atasan dengan sopan, memberikan link fakta yang benar, dan menyarankan untuk dikoreksi.",
                    "Langsung reply di grup bahwa itu HOAX.",
                    "Diam saja.",
                    "Keluar grup."
                ],
                points: [1, 5, 3, 2, 1], // 5: Koreksi santun & menjaga wibawa atasan.
                key: 1
            },
            {
                id: 84, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Sistem Antrean):</b><br>Sistem antrean elektronik rusak. Warga mulai berebut minta dilayani duluan. Suasana kacau. Sikap Anda...",
                options: [
                    "Berteriak agar warga diam.",
                    "Menghentikan pelayanan sampai warga tertib.",
                    "Mengambil inisiatif membagikan nomor antrean manual (kertas) dan mengatur ulang barisan dengan tegas tapi ramah.",
                    "Melayani yang paling galak dulu.",
                    "Pura-pura sibuk dengan berkas."
                ],
                points: [1, 2, 5, 1, 1], // 5: Inisiatif & Problem Solving lapangan.
                key: 2
            },
            {
                id: 85, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Beda Pendapat):</b><br>Dalam rapat, ide Anda dikritik habis-habisan oleh rekan dari divisi lain dengan kata-kata pedas. Anda merasa ide Anda benar. Sikap Anda...",
                options: [
                    "Membalas kritiknya dengan menyerang personal.",
                    "Diam menahan marah.",
                    "Mendengarkan sampai selesai, mengucapkan terima kasih atas masukan, lalu menjawab poin kritikannya dengan data objektif.",
                    "Pergi dari ruang rapat (Walk out).",
                    "Minta pimpinan rapat membela Anda."
                ],
                points: [1, 2, 5, 1, 3], // 5: Kematangan Emosi & Komunikasi Profesional.
                key: 2
            },
            {
                id: 86, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Fasilitas Kantor):</b><br>Printer di rumah rusak, padahal anak Anda butuh cetak tugas sekolah sekarang juga. Di kantor ada printer nganggur. Sikap Anda...",
                options: [
                    "Mencetak di kantor diam-diam.",
                    "Mencetak di kantor tapi mengganti kertasnya dengan kertas sendiri.",
                    "Minta izin atasan dulu, kalau boleh baru cetak.",
                    "Pergi ke rental komputer/warnet untuk mencetak.",
                    "Menyuruh anak tidak usah kumpul tugas."
                ],
                points: [1, 3, 4, 5, 1], // 5: Integritas murni (Barang kantor untuk urusan kantor). Poin 4 & 3 masih kompromi.
                key: 3
            },
            {
                id: 87, type: "TKP", scoreType: "scale",
                text: "<b>Anti Radikalisme (Paham Terlarang):</b><br>Anda menemukan buku-buku beraliran radikal/ekstremisme di laci meja rekan kerja yang baru pindah (meja bekas orang lain). Sikap Anda...",
                options: [
                    "Membacanya karena penasaran.",
                    "Membuangnya ke tempat sampah.",
                    "Menyerahkan buku tersebut kepada atasan atau unit keamanan internal untuk ditindaklanjuti.",
                    "Menyimpannya sebagai koleksi.",
                    "Memotret dan menyebarkan di medsos."
                ],
                points: [2, 3, 5, 1, 1], // 5: Prosedur pengamanan barang bukti & lapor.
                key: 2
            },
            {
                id: 88, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Luar Jam Kerja):</b><br>Anda bertemu warga yang pernah Anda layani di pasar saat hari Minggu. Dia menanyakan status berkasnya yang belum selesai. Sikap Anda...",
                options: [
                    "Pura-pura tidak kenal.",
                    "Menjawab ketus 'Ini hari libur, Pak'.",
                    "Menyapa ramah, menjelaskan secara garis besar, dan memintanya datang ke kantor hari Senin untuk detailnya.",
                    "Membahas panjang lebar di tengah pasar.",
                    "Memberikan nomor HP pribadi."
                ],
                points: [1, 2, 5, 3, 4], // 5: Ramah tapi tetap membatasi profesionalisme pada tempatnya.
                key: 2
            },
            {
                id: 89, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Presentasi):</b><br>Anda diminta mewakili tim untuk presentasi mendadak karena ketua tim sakit. Anda belum menguasai materi 100%. Sikap Anda...",
                options: [
                    "Menolak karena takut malu.",
                    "Menerima tugas, segera mempelajari poin-poin kunci, dan berkoordinasi cepat dengan anggota tim lain untuk backup data.",
                    "Maju presentasi dengan modal nekat.",
                    "Minta jadwal diundur.",
                    "Menunjuk teman lain."
                ],
                points: [1, 5, 3, 2, 1], // 5: Adaptabilitas & Tanggung Jawab.
                key: 1
            },
            {
                id: 90, type: "TKP", scoreType: "scale",
                text: "<b>Teknologi Informasi (Keamanan Data):</b><br>Teman meminjam akun login sistem kantor Anda karena akunnya terkunci, padahal dia harus input data urgent. Aturan melarang share password. Sikap Anda...",
                options: [
                    "Memberikan password karena teman sendiri dan urgent.",
                    "Menolak memberikan password, tapi menawarkan bantuan untuk Anda yang menginputkan datanya (jika memungkinkan) atau membantunya lapor IT support.",
                    "Pura-pura lupa password.",
                    "Memberikan password lalu segera menggantinya nanti.",
                    "Memarahinya."
                ],
                points: [1, 5, 2, 3, 1], // 5: Patuh aturan IT + Tetap membantu (Solutif).
                key: 1
            },
            {
                id: 91, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Target Tinggi):</b><br>Pimpinan menetapkan target baru yang menurut Anda dan tim sangat tidak realistis dicapai dalam waktu singkat. Sikap Anda...",
                options: [
                    "Mengeluh di belakang pimpinan.",
                    "Bekerja sekadarnya karena yakin bakal gagal.",
                    "Menerima target sebagai tantangan, lalu menyusun strategi kerja baru yang lebih efisien dan mengajak tim optimis.",
                    "Menawar target agar diturunkan.",
                    "Mengajak tim demo."
                ],
                points: [1, 1, 5, 3, 1], // 5: Semangat Berprestasi & Optimisme.
                key: 2
            },
            {
                id: 92, type: "TKP", scoreType: "scale",
                text: "<b>Sosial Budaya (Sumbangan):</b><br>Ada edaran sumbangan untuk bencana alam di kantor. Keuangan Anda sedang menipis karena banyak pengeluaran mendadak. Sikap Anda...",
                options: [
                    "Tidak menyumbang sama sekali.",
                    "Menyumbang semampunya/seikhlasnya sebagai bentuk empati.",
                    "Ikut menyumbang besar biar tidak malu, meski harus hutang.",
                    "Mengkoordinir sumbangan tapi tidak ikut nyumbang.",
                    "Pura-pura tidak tahu ada edaran."
                ],
                points: [1, 5, 2, 3, 1], // 5: Empati proporsional.
                key: 1
            },
            {
                id: 93, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Prioritas Layanan):</b><br>Ada pejabat daerah datang minta dilayani duluan tanpa antre, padahal banyak warga yang sudah menunggu lama. Pejabat itu sedikit mengancam. Sikap Anda...",
                options: [
                    "Langsung melayani karena takut dimutasi.",
                    "Menolak kasar dan mengusirnya.",
                    "Menjelaskan dengan sopan dan tegas bahwa SOP mengharuskan antre demi keadilan, sambil menawarkan ruang tunggu VIP jika ada.",
                    "Minta pendapat warga yang antre.",
                    "Kabur ke toilet."
                ],
                points: [1, 1, 5, 3, 1], // 5: Tegas, Sopan, Berintegritas.
                key: 2
            },
            {
                id: 94, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Senioritas):</b><br>Anda pegawai baru dengan banyak ide inovasi. Senior merasa tersaingi dan mulai mengucilkan Anda. Sikap Anda...",
                options: [
                    "Berhenti memberikan ide agar aman.",
                    "Melawan senior secara terbuka.",
                    "Tetap berkarya, namun mengubah cara komunikasi menjadi lebih merangkul dan meminta masukan senior (memanusiakan).",
                    "Cari muka ke bos.",
                    "Keluar kerja."
                ],
                points: [2, 1, 5, 1, 1], // 5: Strategi komunikasi & ketahanan mental.
                key: 2
            },
            {
                id: 95, type: "TKP", scoreType: "scale",
                text: "<b>Anti Radikalisme (Diskusi Agama):</b><br>Dalam diskusi santai, rekan kerja mulai membandingkan hukum negara dengan hukum agama secara ekstrim dan menjelekkan dasar negara. Sikap Anda...",
                options: [
                    "Pergi meninggalkan diskusi.",
                    "Mengalihkan topik pembicaraan ke hal yang lebih ringan/pekerjaan.",
                    "Ikut memanas-manasi.",
                    "Melaporkan ke polisi.",
                    "Mendebat dengan keras."
                ],
                points: [3, 5, 1, 4, 2], // 5: Meredam potensi konflik/radikalisasi secara soft (Taktis).
                key: 1
            },
            {
                id: 96, type: "TKP", scoreType: "scale",
                text: "<b>Teknologi Informasi (Work From Home):</b><br>Saat WFH, koneksi internet di rumah mati total padahal ada meeting zoom penting. Sikap Anda...",
                options: [
                    "Tidak ikut meeting dengan alasan sinyal.",
                    "Segera mencari tempat dengan wifi stabil (cafe/coworking) atau tethering HP semaksimal mungkin dan mengabari atasan.",
                    "Menunggu sampai nyala sendiri.",
                    "Nitip absen ke teman.",
                    "Tidur saja."
                ],
                points: [1, 5, 2, 1, 1], // 5: Usaha maksimal & Tanggung jawab.
                key: 1
            },
            {
                id: 97, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Rahasia Jabatan):</b><br>Teman akrab Anda bertanya tentang keputusan mutasi pegawai yang Anda ketahui (dokumen rahasia), karena dia takut dipindah. Sikap Anda...",
                options: [
                    "Memberitahu karena kasihan teman dekat.",
                    "Memberi kode-kode saja.",
                    "Menolak memberitahu dan menjelaskan bahwa itu rahasia jabatan yang harus dijaga.",
                    "Berbohong memberikan info palsu.",
                    "Menghindar bertemu dia."
                ],
                points: [1, 2, 5, 3, 2], // 5: Menjaga rahasia (Integritas mutlak).
                key: 2
            },
            {
                id: 98, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Sikap Apatis):</b><br>Anda melihat rekan kerja di loket sebelah sedang asyik main HP padahal ada warga yang berdiri menunggu dilayani. Sikap Anda...",
                options: [
                    "Membiarkan karena bukan urusan saya.",
                    "Menegur rekan tersebut dengan keras di depan warga.",
                    "Memberi kode/isyarat halus kepada rekan agar melayani, atau jika dia abai, Anda yang memanggil warga tersebut ke loket Anda.",
                    "Melaporkan ke atasan.",
                    "Ikut main HP."
                ],
                points: [1, 2, 5, 3, 1], // 5: Peduli lingkungan & Solusi taktis.
                key: 2
            },
            {
                id: 99, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Event Organizer):</b><br>Acara kantor yang Anda pegang berantakan karena vendor telat datang. Atasan marah besar di depan semua orang. Sikap Anda...",
                options: [
                    "Menyalahkan vendor habis-habisan.",
                    "Menangis.",
                    "Segera meminta maaf, mengambil tanggung jawab, dan fokus mencari solusi darurat (plan B) untuk menyelamatkan acara.",
                    "Diam saja menunduk.",
                    "Balik marah ke atasan."
                ],
                points: [2, 1, 5, 2, 1], // 5: Jiwa Kesatria & Problem Solving dalam tekanan.
                key: 2
            },
            {
                id: 100, type: "TKP", scoreType: "scale",
                text: "<b>Sosial Budaya (Tetangga):</b><br>Tetangga Anda mengadakan acara syukuran yang menutup sebagian jalan dan suaranya bising sampai malam. Besok Anda harus kerja pagi. Sikap Anda...",
                options: [
                    "Melabrak tetangga tersebut.",
                    "Lapor polisi.",
                    "Bersabar dan memakai penutup telinga (earplug) karena hidup bertetangga butuh toleransi sesekali.",
                    "Membalas dengan memutar musik keras juga.",
                    "Mengumpat di dalam hati."
                ],
                points: [1, 2, 5, 1, 2], // 5: Toleransi tingkat tinggi (selama masih batas wajar sesekali).
                key: 2
            },
            {
                id: 101, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Laporan Salah):</b><br>Anda menemukan kesalahan fatal pada laporan keuangan tahun lalu yang dibuat oleh senior yang sekarang sudah pensiun. Jika dibongkar, ini akan bikin heboh kantor. Sikap Anda...",
                options: [
                    "Mendiamkan saja agar situasi kondusif.",
                    "Memperbaiki diam-diam.",
                    "Melaporkan temuan tersebut kepada pimpinan dengan data lengkap dan objektif demi kebaikan instansi ke depan.",
                    "Menceritakan ke teman-teman kantor.",
                    "Menyebarkan ke media."
                ],
                points: [1, 2, 5, 1, 1], // 5: Berani jujur & orientasi perbaikan sistem.
                key: 2
            },
            {
                id: 102, type: "TKP", scoreType: "scale",
                text: "<b>Teknologi Informasi (Self Development):</b><br>Anda memiliki waktu luang di kantor setelah pekerjaan selesai. Fasilitas internet kantor sangat cepat. Sikap Anda...",
                options: [
                    "Streaming film/drama korea.",
                    "Main game online.",
                    "Mencari referensi jurnal, webinar, atau ebook yang berkaitan dengan peningkatan kompetensi pekerjaan.",
                    "Tidur.",
                    "Update status di medsos."
                ],
                points: [2, 1, 5, 1, 2], // 5: Pemanfaatan waktu & fasilitas produktif.
                key: 2
            },
            {
                id: 103, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Over-Expextation):</b><br>Warga meminta layanan di luar prosedur yang bisa membahayakan posisi Anda, tapi dia memohon sambil menangis karena kondisi darurat keluarga. Sikap Anda...",
                options: [
                    "Menuruti karena kasihan.",
                    "Menolak tegas tanpa kompromi.",
                    "Menolak dengan empati, menenangkan, dan membantu mencari solusi lain yang masih dalam koridor aturan.",
                    "Pura-pura tidak bisa.",
                    "Memberi uang pribadi agar dia pergi."
                ],
                points: [1, 2, 5, 2, 3], // 5: Empati + Integritas (Tidak melanggar aturan tapi tetap peduli).
                key: 2
            },
            {
                id: 104, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Salah Paham):</b><br>Rekan kerja salah paham dan mendiamkan Anda berhari-hari. Suasana kerja jadi tidak enak. Sikap Anda...",
                options: [
                    "Ikut mendiamkan (gengsi).",
                    "Menunggu dia menyapa duluan.",
                    "Menghampirinya, menyapa duluan, dan mengajak bicara baik-baik untuk meluruskan masalah.",
                    "Mengeluh ke rekan lain.",
                    "Minta pindah meja."
                ],
                points: [1, 2, 5, 2, 1], // 5: Inisiatif memperbaiki hubungan (Professional Maturity).
                key: 2
            },
            {
                id: 105, type: "TKP", scoreType: "scale",
                text: "<b>Anti Radikalisme (Ideologi):</b><br>Organisasi masyarakat di lingkungan Anda mengajak Anda bergabung dengan visi mengganti dasar negara. Mereka menjanjikan keuntungan ekonomi. Sikap Anda...",
                options: [
                    "Bergabung karena butuh uang.",
                    "Menolak dengan tegas dan melaporkan aktivitas organisasi tersebut kepada aparat setempat.",
                    "Ikut-ikutan saja.",
                    "Diam saja.",
                    "Menghindar pindah rumah."
                ],
                points: [1, 5, 1, 2, 2], // 5: Nasionalisme Aktif (Tolak & Lapor).
                key: 1
            },
            {
                id: 106, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Disiplin):</b><br>Setiap hari atasan Anda datang terlambat, sedangkan Anda selalu tepat waktu. Lama-lama Anda merasa percuma disiplin. Sikap Anda...",
                options: [
                    "Ikut datang terlambat.",
                    "Menyindir atasan.",
                    "Tetap disiplin datang tepat waktu karena itu adalah prinsip dan kewajiban profesional saya, terlepas dari sikap orang lain.",
                    "Melaporkan atasan ke bos besar.",
                    "Bekerja malas-malasan."
                ],
                points: [1, 2, 5, 3, 1], // 5: Integritas Internal (Disiplin karena diri sendiri, bukan karena diawasi).
                key: 2
            },
            {
                id: 107, type: "TKP", scoreType: "scale",
                text: "<b>Pelayanan Publik (Survey Kepuasan):</b><br>Hasil survei kepuasan masyarakat terhadap layanan Anda rendah. Padahal Anda merasa sudah bekerja maksimal. Sikap Anda...",
                options: [
                    "Marah dan menuduh survei tidak valid.",
                    "Masa bodoh.",
                    "Melakukan introspeksi diri, mempelajari detail keluhan, dan berkomitmen memperbaiki aspek yang dinilai kurang.",
                    "Menyalahkan fasilitas kantor.",
                    "Minta teman mengisi survei bagus agar nilai naik."
                ],
                points: [1, 1, 5, 2, 1], // 5: Continuous Improvement (Perbaikan berkelanjutan).
                key: 2
            },
            {
                id: 108, type: "TKP", scoreType: "scale",
                text: "<b>Jejaring Kerja (Network Luar):</b><br>Anda diundang seminar lintas instansi. Anda tidak kenal siapapun di sana. Sikap Anda...",
                options: [
                    "Duduk di pojok main HP sampai acara selesai.",
                    "Hanya menyapa orang yang duduk di sebelah.",
                    "Berani berkeliling, memperkenalkan diri, bertukar kartu nama/kontak untuk memperluas jejaring profesional.",
                    "Menunggu diajak kenalan.",
                    "Pulang cepat."
                ],
                points: [1, 3, 5, 2, 1], // 5: Proaktif Networking.
                key: 2
            },
            {
                id: 109, type: "TKP", scoreType: "scale",
                text: "<b>Teknologi Informasi (Software Ilegal):</b><br>Komputer kantor lambat. Teman menawarkan software bajakan (ilegal) agar kinerja PC lebih cepat dan pekerjaan ringan. Sikap Anda...",
                options: [
                    "Memakainya karena demi pekerjaan kantor juga.",
                    "Menolak dan tetap menggunakan software resmi meskipun lambat, sambil mengajukan upgrade spesifikasi ke bagian IT.",
                    "Menerima tapi dipakai diam-diam.",
                    "Minta uang ke kantor beli software asli.",
                    "Marah-marah ke IT."
                ],
                points: [2, 5, 1, 4, 1], // 5: Ketaatan Hukum/Aturan IT.
                key: 1
            },
            {
                id: 110, type: "TKP", scoreType: "scale",
                text: "<b>Profesionalisme (Kejujuran Absensi):</b><br>Mesin absen rusak. Absensi dilakukan manual tulis tangan. Anda datang telat 15 menit. Tidak ada yang tahu jam berapa Anda datang. Anda akan menulis...",
                options: [
                    "Menulis jam datang sesuai jam masuk (tepat waktu) agar tidak dipotong gaji.",
                    "Menulis jam datang apa adanya (telat 15 menit) meskipun berisiko potong gaji, karena kejujuran lebih utama.",
                    "Menulis telat 5 menit saja.",
                    "Minta tolong teman tuliskan jam tepat waktu.",
                    "Tidak absen sekalian."
                ],
                points: [1, 5, 2, 1, 1], // 5: Kejujuran level tertinggi (Integritas saat tidak diawasi).
                key: 1
            }
];

// 2. DATA FR (ARSIP LAMA)
const FR_DATA_2019 = [
    {
            cat: "TWK", sub: "Pancasila",
            q: "<b>Pancasila (Implementasi Sila):</b><br>Di sebuah instansi pemerintahan, sering terjadi pembagian tugas yang tidak merata. Pegawai senior sering membebankan tugas administratif yang menjadi tanggung jawabnya kepada pegawai CPNS baru dengan alasan 'pembelajaran'. Namun, ketika evaluasi kinerja dan pembagian bonus akhir tahun, pegawai senior tersebut mengklaim hasil kerja tersebut sebagai miliknya sepenuhnya. Tindakan pegawai senior tersebut merupakan bentuk pelanggaran nyata terhadap nilai Pancasila, khususnya sila...",
            a: ["Ketuhanan Yang Maha Esa", "Kemanusiaan yang adil dan beradab", "Persatuan Indonesia", "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan", "Keadilan sosial bagi seluruh rakyat Indonesia"],
            k: 4,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Tap MPR No. I/MPR/2003</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Kasus ini membahas pengingkaran hak orang lain atas hasil kerjanya demi keuntungan pribadi (klaim bonus). Ini melanggar butir Sila ke-5: <i>'Menghargai hasil karya orang lain yang bermanfaat bagi kemajuan dan kesejahteraan bersama'</i>.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🎯 Bedah Taktis (The 10-Second Rule):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Sering bingung antara Sila 2 dan 5? Ingat rumus ini:<br>
                        - <b>Sila 2 (Kemanusiaan):</b> Pelanggaran Fisik/Verbal/Adab (Menghina, memukul, menyiksa).<br>
                        - <b>Sila 5 (Keadilan):</b> Pelanggaran Hak Ekonomi/Fasilitas/Sistem (Mengambil gaji/bonus orang, merusak fasilitas umum).<br>
                        Klaim bonus = Merampas hak ekonomi ➔ <b>Sila 5</b>.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Bahasa Indonesia (Penalaran Paragraf):</b><br>Kemajuan teknologi kecerdasan buatan (AI) membawa dampak ganda bagi sektor ketenagakerjaan. Di satu sisi, otomatisasi mempermudah pekerjaan repetitif dan meningkatkan efisiensi operasional perusahaan secara signifikan. Namun di sisi lain, jutaan pekerja administrasi dan manufaktur tingkat rendah terancam kehilangan mata pencaharian. Tanpa adanya program reskilling (pelatihan ulang) yang masif dari pemerintah, kesenjangan ekonomi akan semakin melebar. Oleh karena itu, kebijakan adaptasi teknologi harus berjalan beriringan dengan penguatan jaring pengaman sosial.<br><br>Gagasan utama paragraf tersebut adalah...",
            a: ["Dampak ganda kecerdasan buatan bagi efisiensi perusahaan dan pekerja.", "Ancaman pemutusan hubungan kerja akibat otomatisasi AI.", "Pentingnya program reskilling pemerintah untuk mengatasi kesenjangan ekonomi.", "Perlunya sinergi antara kebijakan adaptasi teknologi dan penguatan jaring pengaman sosial.", "Otomatisasi teknologi yang mempermudah pekerjaan manusia di sektor administrasi."],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Tata Bahasa Baku Bahasa Indonesia (Kemdikbud)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Paragraf tersebut memaparkan premis-premis masalah di awal hingga pertengahan teks. Pada kalimat terakhir, penulis menarik kesimpulan dari masalah tersebut.</p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">💡 Shortcut Paragraf:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan baca dari awal kalau kalimatnya panjang! Lirik langsung kalimat terakhir. Jika menemukan kata konjungsi penyimpulan seperti <b>"Oleh karena itu", "Dengan demikian", "Jadi",</b> atau <b>"Kesimpulannya"</b>, dipastikan 100% itu adalah paragraf induktif dan gagasan utamanya ada di kalimat terakhir tersebut.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Integritas",
            q: "<b>Integritas ASN:</b><br>Anda bekerja di bagian pengadaan barang. Menjelang akhir tahun anggaran, pimpinan meminta Anda untuk memanipulasi tanggal faktur pembelian laptop kantor agar anggaran tahun ini bisa terserap 100%, meskipun barangnya baru akan dikirim tahun depan. Pimpinan menjamin bahwa vendor tersebut sudah terpercaya dan barang pasti dikirim. Sikap Anda yang paling mencerminkan integritas aparatur sipil negara adalah...",
            a: ["Menuruti perintah pimpinan karena penyerapan anggaran adalah indikator kinerja instansi.", "Menolak dengan halus dan menyarankan anggaran dikembalikan ke kas negara (SiLPA).", "Meminta vendor membuat surat pernyataan tanggung jawab mutlak sebelum memanipulasi faktur.", "Melaporkan pimpinan ke sistem whistleblowing instansi secara anonim.", "Mengingatkan pimpinan akan risiko audit BPK dan menolak memalsukan dokumen negara."],
            k: 4,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Modul Integritas Nasional (LAN RI)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Integritas menuntut ASN untuk patuh pada aturan hukum, bukan sekadar taat buta pada atasan. Memalsukan tanggal faktur adalah kejahatan fraud dokumen negara.</p>
                <div class="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-amber-900 mb-1 uppercase tracking-tight">🛡️ Hierarki Respon Integritas:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika disuruh atasan melanggar aturan, gunakan hierarki langkah ini untuk mencari opsi terbaik:<br>
                        <b>Level 1:</b> Tolak tegas/halus.<br>
                        <b>Level 2 (TERBAIK):</b> Tolak + Ingatkan Aturan/Risiko (Opsi E).<br>
                        <b>Level 3:</b> Lapor (WBS) ➔ Ini baru dilakukan JIKA pimpinan mengancam/memaksa setelah diingatkan. Jangan langsung lapor sebagai langkah pertama.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Nasionalisme",
            q: "<b>Sejarah Konstitusi:</b><br>Pada masa perumusan dasar negara dalam sidang BPUPKI, terjadi perdebatan mengenai Piagam Jakarta, khususnya tujuh kata: 'dengan kewajiban menjalankan syariat Islam bagi pemeluk-pemeluknya'. Demi menjaga keutuhan bangsa yang majemuk dari Indonesia Timur, para tokoh Islam akhirnya sepakat menghapus tujuh kata tersebut. Nilai keteladanan tertinggi yang relevan dengan konteks kebangsaan masa kini dari peristiwa sejarah tersebut adalah...",
            a: ["Toleransi beragama demi kelancaran administrasi pemerintahan yang baru terbentuk.", "Pengorbanan kepentingan golongan demi terwujudnya integrasi nasional yang kokoh.", "Kepatuhan tokoh agama terhadap instruksi pemerintah pusat Jepang saat itu.", "Fleksibilitas hukum dasar negara yang dapat diubah sesuai tuntutan mayoritas.", "Pentingnya musyawarah untuk mencapai mufakat dalam setiap pengambilan keputusan."],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Sejarah Perumusan UUD 1945</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Peristiwa ini adalah momen krusial di mana para *founding fathers* dari golongan mayoritas mau mengalah demi mencegah pecahnya wilayah Indonesia Timur dari bingkai NKRI.</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">📌 Keyword Filter:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika soal HOTS BKN menanyakan "Esensi/Makna" dari penghapusan Piagam Jakarta, opsi jawaban yang benar <b>selalu</b> berkisar pada dua kata kunci ini: <b>"Rela Berkorban"</b> dan <b>"Integrasi Nasional / Keutuhan NKRI"</b>. Abaikan opsi toleransi biasa atau administrasi.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bela Negara",
            q: "<b>Bela Negara Nirmiliter:</b><br>Bela negara tidak selalu diartikan sebagai upaya memanggul senjata menghadapi agresi militer. Di era globalisasi modern, ancaman terhadap eksistensi negara lebih banyak bersifat non-militer (nirmiliter). Di bawah ini, yang <i>bukan</i> merupakan bentuk bela negara dalam menghadapi ancaman non-militer adalah...",
            a: ["Seorang atlet bulu tangkis yang berlatih keras untuk memenangkan All England.", "Seorang ahli IT pemerintah yang memperkuat firewall sistem data kependudukan nasional.", "Seorang mahasiswa kedokteran yang menjadi relawan medis di daerah terdepan, terluar, tertinggal (3T).", "Seorang anggota resimen mahasiswa (Menwa) yang mengikuti pelatihan dasar kemiliteran di kampus.", "Seorang pengusaha batik yang mempromosikan produknya ke pasar internasional melalui pameran."],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: UU No. 23 Tahun 2019 (Pengelolaan SDA untuk Pertahanan Negara)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Semua profesi yang mengharumkan nama bangsa (Atlet), menjaga ekonomi (Pengusaha), atau menjaga sistem sosial/kesehatan (Ahli IT/Dokter) adalah wujud bela negara non-fisik (nirmiliter).</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">⚠️ Jebakan Soal Pengecualian:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Perhatikan instruksi soal: mencari yang <b>"Bukan"</b> contoh <b>"Non-Militer"</b>.<br>
                        Berarti Anda harus mencari opsi yang merupakan bentuk Bela Negara <b>Militer/Fisik</b>. Pelatihan Dasar Kemiliteran (Menwa / Komponen Cadangan) adalah wujud nyata bela negara secara fisik bersenjata.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pancasila",
            q: "<b>Kedudukan & Fungsi Pancasila:</b><br>Globalisasi membawa budaya pop, gaya hidup hedonis, dan paham individualisme secara masif melalui media sosial. Akibatnya, banyak generasi muda yang mulai kehilangan jati diri ketimuran dan rasa gotong royong. Dalam menghadapi tantangan tersebut, fungsi pokok Pancasila yang paling relevan untuk diterapkan adalah sebagai...",
            a: ["Dasar Negara Republik Indonesia", "Sumber dari segala sumber hukum", "Pandangan Hidup Bangsa", "Ideologi Terbuka", "Perjanjian Luhur Bangsa"],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Modul Pembinaan Ideologi Pancasila (BPIP)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Pancasila memiliki multi-fungsi tergantung pada konteks masalahnya. Saat berhadapan dengan invasi budaya asing dan pergeseran moral karakter, Pancasila berfungsi sebagai tameng/filter.</p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">🧠 Cheat Sheet Fungsi Pancasila:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        - <b>Pandangan Hidup (Way of Life):</b> Berkaitan dengan pedoman perilaku, moral, karakter, gaya hidup, filter budaya luar.<br>
                        - <b>Dasar Negara:</b> Berkaitan dengan penyelenggaraan pemerintahan, tata kelola negara.<br>
                        - <b>Sumber Hukum:</b> Berkaitan dengan hierarki peraturan perundang-undangan (UUD, UU, Perda dsb).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Kalimat Efektif:</b><br>Pemakaian bahasa Indonesia yang baik dan benar sangat diperlukan dalam penulisan naskah dinas. Kalimat di bawah ini yang memenuhi syarat sebagai kalimat efektif adalah...",
            a: ["Kepada para peserta ujian CPNS diharap segera memasuki ruangan karena tes akan segera dimulai.", "Bagi pegawai yang belum menyerahkan laporan pertanggungjawaban agar segera dikumpulkan ke meja panitia.", "Untuk mempercepat proses administrasi, kami mohon agar saudara melengkapi berkas persyaratan.", "Dalam rapat koordinasi nasional itu membahas strategi penanganan stunting di wilayah timur Indonesia.", "Buku panduan operasional sistem yang baru diluncurkan itu sangat bermanfaat sekali bagi para operator."],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pedoman Umum Ejaan Bahasa Indonesia (PUEBI)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Opsi C adalah kalimat yang paling lurus. Struktur Subjek ("kami") dan Predikat ("mohon") jelas, dan tidak ada pemborosan kata.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🚫 Aturan Haram Kata Depan:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Sebuah Subjek (S) <b>TIDAK BOLEH</b> didahului oleh preposisi (kata depan). <br>
                        - (A) "<b>Kepada</b> para peserta..." ➔ Subjek hilang.<br>
                        - (B) "<b>Bagi</b> pegawai..." ➔ Subjek hilang.<br>
                        - (D) "<b>Dalam</b> rapat itu membahas..." ➔ Harus dihapus "Dalam"-nya agar rapat jadi Subjek, atau ganti menjadi "dibahas".<br>
                        - (E) Pleonasme (Pemborosan kata "sangat" dan "sekali").
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "UUD 1945",
            q: "<b>Konstitusi:</b><br>Undang-Undang Dasar NRI 1945 mengatur hak dan kewajiban warga negara. Kasus di mana seorang anak putus sekolah karena tidak memiliki biaya, padahal ia berada di usia wajib belajar, menunjukkan adanya masalah dalam pemenuhan hak konstitusional warga negara yang secara eksplisit diamanatkan dalam UUD 1945, yaitu pada...",
            a: ["Pasal 27 ayat (2)", "Pasal 28C ayat (1)", "Pasal 31 ayat (1) dan (2)", "Pasal 33 ayat (1)", "Pasal 34 ayat (1)"],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: UUD 1945 (Amandemen IV)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Pasal 31 UUD 1945 secara eksplisit mengatur tentang pendidikan. Ayat (1) 'Setiap warga negara berhak mendapat pendidikan', dan Ayat (2) 'Setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya'.</p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">📌 Peta Pasal Isu Sosial (Sering Keluar):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan hafal semua pasal secara acak. Fokus pada 3 ranah sosial dasar ini:<br>
                        - Isu <b>Pekerjaan / Gaji UMR</b> ➔ Pasal 27 ayat (2).<br>
                        - Isu <b>Pendidikan / Putus Sekolah</b> ➔ Pasal 31.<br>
                        - Isu <b>Kemiskinan / Gelandangan / BPJS</b> ➔ Pasal 34.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Integritas",
            q: "<b>Anti-Korupsi:</b><br>Korupsi tidak selalu berbentuk penyelewengan dana APBN triliunan rupiah. Tindakan-tindakan kecil yang melanggar kode etik dan menyalahgunakan kewenangan berpotensi menjadi budaya laten koruptif. Berikut ini yang termasuk dalam kategori korupsi bentuk <i>gratifikasi</i> menurut Undang-Undang Pemberantasan Tindak Pidana Korupsi adalah...",
            a: ["Seorang kepala daerah menyalahgunakan wewenang untuk menunjuk perusahaan kerabatnya sebagai pemenang tender pemerintah.", "Seorang pengawas proyek secara paksa meminta jatah 10% dari nilai termin pembayaran kepada kontraktor.", "Seorang guru ASN menerima parcel lebaran berisi perhiasan dari orang tua murid setelah pembagian raport.", "Seorang bendahara instansi membuat kuitansi fiktif perjalanan dinas untuk menutupi defisit kas operasional.", "Seorang petugas kelurahan memungut biaya tidak resmi di luar tarif administrasi pengurusan KTP."],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: UU No. 20 Tahun 2001 (Pemberantasan Tindak Pidana Korupsi)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Opsi (C) adalah wujud gratifikasi. Meskipun tidak diminta, hadiah (parcel/perhiasan) yang berhubungan dengan jabatan (guru-murid) dianggap suap yang tertunda ("tanam budi").</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">⚖️ Beda Gratifikasi, Suap, dan Pemerasan:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        - <b>Gratifikasi:</b> Pasif, tidak ada kesepakatan tertulis. Warga tiba-tiba ngasih barang karena ASN menjabat sesuatu.<br>
                        - <b>Suap (Bribery):</b> Transaksional. Ada "meeting of minds" atau *deal-dealan* ("Bantu loloskan, nanti saya kasih X").<br>
                        - <b>Pemerasan (Opsi B):</b> ASN proaktif mengancam/memaksa orang memberikan sesuatu.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Nasionalisme",
            q: "<b>Wawasan Nusantara:</b><br>Masuknya investasi asing ke Indonesia membuka lapangan kerja baru dan transfer teknologi. Namun, di beberapa daerah, ekspansi industri tersebut menimbulkan konflik agraria dengan masyarakat adat lokal. Pendekatan penyelesaian konflik yang paling mencerminkan ketahanan nasional yang berlandaskan Wawasan Nusantara adalah...",
            a: ["Memprioritaskan kepentingan investasi asing demi pertumbuhan ekonomi makro nasional.", "Menolak seluruh bentuk investasi asing di wilayah adat untuk melindungi budaya lokal.", "Menggunakan pendekatan keamanan oleh aparat penegak hukum agar roda ekonomi tidak terganggu.", "Melakukan dialog partisipatif untuk mencapai kesepakatan ganti untung dan pelibatan masyarakat adat dalam ekosistem ekonomi industri.", "Menyerahkan penyelesaian sengketa lahan sepenuhnya kepada pengadilan HAM internasional."],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Modul Wawasan Nusantara (Lemhannas)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Wawasan Nusantara memandang Indonesia sebagai satu kesatuan Ipoleksosbudhankam. Pembangunan ekonomi tidak boleh menyingkirkan kesejahteraan sosial. Opsi D adalah *win-win solution* yang mengimplementasikan Sila ke-4 dan ke-5.</p>
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">🤝 Resolusi Konflik Birokrasi:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Pendekatan ekstrem seperti terlalu pro-kapital (A), anti-kemajuan (B), represif dengan aparat (C), atau intervensi asing (E) selalu bernilai salah dalam kacamata ASN. Carilah jawaban yang bersifat <b>Dialogis, Partisipatif, dan Menguntungkan Kedua Belah Pihak</b>.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "UUD 1945",
            q: "<b>UUD 1945 (Hak Prerogatif Presiden):</b><br>Seorang aktivis lingkungan hidup divonis bersalah oleh pengadilan negeri karena dianggap mencemarkan nama baik perusahaan tambang. Keputusan ini memicu protes nasional karena aktivis tersebut dinilai hanya memperjuangkan kelestarian alam. Untuk membebaskan aktivis tersebut dari hukuman yang sudah berkekuatan hukum tetap (inkrah), Presiden dapat menggunakan hak prerogatifnya berupa...",
            a: [
                "Grasi, dengan memperhatikan pertimbangan Mahkamah Agung.",
                "Amnesti, dengan memperhatikan pertimbangan Dewan Perwakilan Rakyat.",
                "Abolisi, dengan memperhatikan pertimbangan Mahkamah Konstitusi.",
                "Rehabilitasi, dengan memperhatikan pertimbangan Komisi Yudisial.",
                "Remisi, dengan memperhatikan pertimbangan Menteri Hukum dan HAM."
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pasal 14 UUD 1945</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Hak untuk memberikan pengampunan berupa perubahan, peringanan, pengurangan, atau penghapusan pelaksanaan pidana kepada orang yang <b>sudah divonis (inkrah)</b> adalah Grasi. Berdasarkan Pasal 14 ayat (1), Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan MA.</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">🎯 Bedah Taktis (Hafalan Kilat GA-AR):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Cara cepat menghafal pasangan pertimbangan Presiden:<br>
                        - <b>GA (Grasi & Rehabilitasi)</b> ➔ Urusannya dengan vonis hukum/nama baik, jadi bertanyanya ke <b>MA (Mahkamah Agung)</b>.<br>
                        - <b>AR (Amnesti & Abolisi)</b> ➔ Urusannya dengan pengampunan massal/politik (pemberontak), jadi bertanyanya ke <b>DPR (Wakil Rakyat)</b>.<br>
                        Karena kasus di atas adalah vonis individual yang sudah putus, jawabannya pasti Grasi (MA).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Bahasa Indonesia (Logika Kalimat):</b><br>Bacalah kalimat berikut dengan cermat!<br><i>'Meskipun pemerintah telah menetapkan harga eceran tertinggi untuk beras, namun masih banyak pedagang di pasar tradisional yang menjualnya dengan harga jauh di atas ketentuan.'</i><br><br>Kesalahan penggunaan tata bahasa pada kalimat tersebut terletak pada...",
            a: [
                "Pemilihan kata 'menetapkan' yang seharusnya 'memutuskan'.",
                "Penggunaan kata 'eceran tertinggi' yang merupakan pemborosan.",
                "Penggunaan konjungsi 'meskipun' dan 'namun' secara bersamaan dalam satu kalimat majemuk.",
                "Penempatan keterangan tempat 'di pasar tradisional' yang menghalangi objek.",
                "Penggunaan frasa 'jauh di atas' yang tidak baku."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Tata Bahasa Baku Bahasa Indonesia</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Kalimat tersebut adalah kalimat majemuk bertingkat yang menyatakan hubungan pertentangan/konsesi. Kesalahan utamanya adalah penggunaan dua konjungsi pertentangan sekaligus di awal anak kalimat dan induk kalimat.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">💡 Shortcut Kalimat Majemuk:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Hukum mutlak kalimat efektif: <b>Konjungsi korelatif/pertentangan tidak boleh ganda!</b><br>
                        Jika di awal sudah ada kata <b>Meskipun / Walaupun</b>, maka di tengah kalimat <b>TIDAK BOLEH</b> ada kata <b>Tetapi / Namun</b>. Pilih salah satu saja untuk membuat kalimat tersebut baku.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Nasionalisme",
            q: "<b>Nasionalisme (Resolusi Konflik):</b><br>Di sebuah instansi pemerintah daerah, terjadi ketegangan antara pegawai asli daerah tersebut (putra daerah) dengan pegawai pendatang. Ketegangan dipicu oleh sentimen bahwa putra daerah seharusnya diprioritaskan untuk menduduki jabatan struktural, meskipun secara kompetensi pegawai pendatang memiliki nilai *assessment* yang lebih tinggi. Berdasarkan wawasan kebangsaan, pendekatan yang paling tepat untuk menyelesaikan masalah ini adalah...",
            a: [
                "Membuat kebijakan kuota khusus 70% jabatan untuk putra daerah agar kearifan lokal terjaga.",
                "Mengembalikan pegawai pendatang ke instansi pusat agar tidak terjadi gesekan sosial.",
                "Menerapkan sistem merit secara transparan dan memberikan pemahaman bahwa ASN adalah abdi negara, bukan abdi daerah.",
                "Mengadakan rotasi besar-besaran dengan memisahkan ruangan antara putra daerah dan pendatang.",
                "Menunda promosi jabatan bagi kedua belah pihak sampai situasi internal instansi kembali kondusif."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: UU No. 20 Tahun 2023 tentang ASN (Sistem Merit)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Tantangan Nasionalisme modern di birokrasi adalah Primordialisme (etnosentrisme/kedaerahan). ASN berstatus sebagai perekat NKRI, yang karirnya diatur oleh kompetensi, bukan asal usul suku atau daerah.</p>
                <div class="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-amber-900 mb-1 uppercase tracking-tight">🛡️ Filter Logika Birokrasi:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Setiap soal konflik kedaerahan/SARA di ranah pemerintahan <b>selalu</b> diselesaikan dengan <b>Sistem Merit (Kualifikasi, Kompetensi, Kinerja)</b>. Abaikan opsi yang sifatnya 'menyenangkan satu pihak' (A), 'menghindar' (B & E), atau 'separasi/pemisahan' (D).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pancasila",
            q: "<b>Pancasila (Sila ke-4):</b><br>Dalam sebuah rapat penyusunan APBD, terjadi *deadlock* (kebuntuan) antara pihak eksekutif (Bupati) dan legislatif (DPRD) mengenai alokasi dana pendidikan. Setelah musyawarah berjam-jam tidak mencapai mufakat, langkah paling konstitusional yang mencerminkan semangat Sila Keempat Pancasila untuk mengambil keputusan adalah...",
            a: [
                "Membiarkan Bupati mengambil keputusan sepihak karena memiliki hak prerogatif eksekutif.",
                "Menunda rapat hingga batas waktu yang tidak ditentukan sampai kedua belah pihak setuju.",
                "Melakukan pemungutan suara (voting) berdasarkan suara terbanyak anggota dewan.",
                "Meminta Mahkamah Konstitusi untuk memutuskan alokasi anggaran tersebut.",
                "Melibatkan tokoh masyarakat untuk menekan salah satu pihak agar mengalah."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Ketetapan MPR RI No. II/MPR/1978 (Ekaprasetia Pancakarsa)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Demokrasi Pancasila mengutamakan musyawarah untuk mufakat. Namun, jika mufakat sama sekali tidak dapat dicapai setelah upaya maksimal, UUD dan prinsip tata tertib lembaga negara memperbolehkan pengambilan keputusan berdasarkan suara terbanyak (voting).</p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">📌 Aturan Main Sila ke-4:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Urutan pengambilan keputusan dalam Pancasila:<br>
                        1. <b>Musyawarah Mufakat</b> (Prioritas utama).<br>
                        2. Jika buntu (deadlock) ➔ <b>Voting (Suara Terbanyak)</b>.<br>
                        Pemungutan suara BUKAN pelanggaran Pancasila, melainkan mekanisme sah *exit strategy* demokrasi jika mufakat gagal. Opsi C adalah realitas ketatanegaraan.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Integritas",
            q: "<b>Integritas (Benturan Kepentingan):</b><br>Anda adalah ketua panitia pengadaan alat tulis kantor (ATK). Salah satu peserta tender adalah perusahaan milik adik ipar Anda yang menawarkan harga paling murah dengan spesifikasi yang sesuai standar. Untuk menjaga integritas dan profesionalisme, tindakan yang wajib Anda lakukan adalah...",
            a: [
                "Memenangkan perusahaan tersebut karena harganya paling murah sehingga menghemat uang negara.",
                "Mencoret perusahaan tersebut secara sepihak untuk menghindari fitnah dari rekan kerja.",
                "Mendeklarasikan benturan kepentingan tersebut kepada atasan dan mengundurkan diri dari kepanitiaan.",
                "Tetap menjadi ketua panitia namun meminta anggota lain yang memberikan penilaian akhir.",
                "Meminta adik ipar Anda untuk meminjam nama perusahaan (bendera) orang lain agar tidak dicurigai."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: UU No. 30 Tahun 2014 (Administrasi Pemerintahan)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Kasus ini adalah contoh klasik *Conflict of Interest* (Benturan Kepentingan). Meskipun niatnya baik (menghemat uang negara), proses yang melibatkan keluarga sedarah/semenda dalam yurisdiksi jabatan Anda adalah pelanggaran etik berat.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">⚠️ The "Conflict of Interest" Protocol:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika Anda menghadapi soal di mana Anda harus menilai/memutuskan sesuatu yang berkaitan dengan <b>Keluarga/Kerabat/Partai sendiri</b>, SATU-SATUNYA jawaban poin tertinggi adalah <b>Deklarasi (Lapor Atasan) + Mundur (Recuse) dari posisi pengambil keputusan tersebut</b>. Jangan ambil risiko kompromi (Opsi D) apalagi memalsukan data (Opsi E).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bela Negara",
            q: "<b>Bela Negara (Ancaman Ideologi):</b><br>Banyak generasi muda yang mulai terpengaruh oleh paham radikalisme radikal melalui grup percakapan tertutup di aplikasi pesan singkat. Paham ini secara terang-terangan menolak ideologi Pancasila dan sistem demokrasi. Sebagai bentuk bela negara, pendekatan paling strategis yang harus dilakukan pemerintah melalui lembaga terkait adalah...",
            a: [
                "Memblokir seluruh aplikasi pesan singkat asing yang beroperasi di Indonesia.",
                "Melakukan patroli siber, penegakan hukum tegas, dan kontra-narasi ideologi yang masif di ruang digital.",
                "Mewajibkan seluruh pemuda mengikuti pelatihan wajib militer selama satu tahun penuh.",
                "Mengurangi kurikulum sains dan menggantinya 100% dengan pendidikan sejarah kebangsaan.",
                "Meminta negara asing untuk mengekstradisi pembuat aplikasi pesan singkat tersebut."
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Strategi Pertahanan Negara Menghadapi Ancaman Nirmiliter</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Ancaman ideologi berbasis siber tidak bisa diselesaikan dengan cara militer konvensional atau pemblokiran total yang merugikan ekonomi digital. Penanganannya harus presisi di titik penyebaran informasinya.</p>
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">🛡️ Taktik Solusi Proporsional:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Pilih jawaban yang menawarkan solusi paling <b>masuk akal, modern, dan komprehensif</b>. Opsi B mencakup tiga pilar keamanan digital: Deteksi (Patroli), Penindakan (Hukum), dan Pencegahan (Kontra-narasi). Opsi A, C, dan D adalah solusi ekstrem dan tidak relevan (*overkill*).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Bahasa Indonesia (Ide Pokok Campuran):</b><br>Pendidikan karakter di sekolah dasar sangat krusial untuk membentuk moral anak sejak dini. Melalui pendidikan ini, anak diajarkan nilai kejujuran, disiplin, dan rasa empati terhadap sesama. Sayangnya, banyak sekolah yang masih menitikberatkan pada pencapaian nilai akademik semata, sehingga jam pelajaran moral sering dikesampingkan. Dengan demikian, pengintegrasian nilai-nilai moral ke dalam setiap mata pelajaran adalah sebuah keharusan agar pendidikan karakter tetap berjalan maksimal.<br><br>Gagasan utama paragraf tersebut terletak pada...",
            a: [
                "Kalimat pertama (Deduktif).",
                "Kalimat terakhir (Induktif).",
                "Kalimat pertama dan terakhir (Campuran).",
                "Seluruh kalimat dalam paragraf (Deskriptif).",
                "Kalimat kedua dan ketiga (Ineratif)."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pemahaman Membaca dan Menulis (PMM)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Kalimat pertama menyatakan pentingnya pendidikan karakter. Kalimat terakhir menyimpulkan solusi untuk memaksimalkan pendidikan karakter tersebut (pengintegrasian nilai). Kedua kalimat ini memuat gagasan pokok yang saling menguatkan.</p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">🔎 The "Echo" Trick (Trik Gema):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Bagaimana memastikan ini paragraf campuran? Cek <b>"Gema"</b>-nya. Jika kalimat terakhir MENGULANG substansi inti dari kalimat pertama (meskipun dengan kosakata berbeda) ditambah kata kesimpulan (Dengan demikian, Jadi), maka itu 100% <b>Paragraf Campuran (Deduktif-Induktif)</b>.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pilar Negara",
            q: "<b>Pilar Negara (NKRI):</b><br>Konsep otonomi daerah yang diterapkan di Indonesia memberikan keleluasaan bagi pemerintah daerah untuk mengatur urusan rumah tangganya sendiri. Namun, terdapat kewenangan absolut yang tidak diserahkan kepada daerah dan tetap menjadi yurisdiksi mutlak Pemerintah Pusat. Berikut ini yang <i>bukan</i> merupakan kewenangan absolut Pemerintah Pusat adalah...",
            a: [
                "Menetapkan kebijakan politik luar negeri.",
                "Mengelola sistem pertahanan dan keamanan nasional.",
                "Mengatur tata ruang kota dan perizinan mendirikan bangunan.",
                "Menyelenggarakan peradilan dan sistem hukum.",
                "Mencetak uang dan mengatur kebijakan moneter."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: UU No. 23 Tahun 2014 tentang Pemerintahan Daerah</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Tata ruang wilayah lokal dan IMB (Izin Mendirikan Bangunan) adalah wewenang yang diotonomikan kepada Pemerintah Kabupaten/Kota agar pembangunan sesuai dengan kondisi spesifik wilayahnya.</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">📌 Rumus Cepat 6 Urusan Absolut Pusat:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Pemerintah daerah boleh mengurus pendidikan, kesehatan, dan jalan. Tapi daerah <b>HARAM</b> mengurus 6 hal ini (Wewenang Mutlak Pusat):<br>
                        1. Politik Luar Negeri, 2. Pertahanan, 3. Keamanan, 4. Yustisi (Peradilan), 5. Moneter & Fiskal (Uang), 6. Agama.<br>
                        Opsi C bukan termasuk dalam 6 hal absolut ini.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pancasila",
            q: "<b>Pancasila (Sila ke-3):</b><br>Pemerintah sedang melaksanakan proyek pengadaan server data nasional. Terdapat dua vendor yang lulus uji spesifikasi teknis. Vendor A adalah perusahaan asing yang menawarkan harga 10% lebih murah, sedangkan Vendor B adalah konsorsium perusahaan lokal ciptaan anak bangsa dengan harga sedikit lebih tinggi. Memutuskan untuk memilih Vendor B demi memajukan industri teknologi dalam negeri adalah wujud pengamalan Pancasila, sila...",
            a: [
                "Pertama",
                "Kedua",
                "Ketiga",
                "Keempat",
                "Kelima"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Butir Pengamalan Sila Ke-3 (Nasionalisme Ekonomi)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Banyak yang terkecoh memilih Sila ke-5 karena menyangkut uang dan proyek. Namun, tindakan afirmatif untuk melindungi dan memajukan produk dalam negeri (anak bangsa) di tengah gempuran asing adalah bentuk nyata dari rasa Cinta Tanah Air.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🎯 Bedah Taktis P3DN:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika konteks soal menceritakan tentang <b>"Bangga Buatan Indonesia"</b>, memprioritaskan <b>Produk Lokal / UMKM</b> dibanding produk luar negeri, atau membela karya anak bangsa, itu 100% adalah ranah <b>Sila ke-3 (Persatuan Indonesia)</b>, karena berkaitan dengan ketahanan dan nasionalisme ekonomi.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Bahasa Indonesia (PUEBI - Penulisan Gelar):</b><br>Dalam penulisan naskah pelantikan pejabat eselon, panitia harus memastikan penulisan nama dan gelar akademik dilakukan secara presisi sesuai kaidah bahasa baku. Manakah penulisan nama dan gelar yang paling tepat di bawah ini?",
            a: [
                "Prof. Dr. Andi Susanto. M.Si.",
                "Prof. DR. Andi Susanto, M.Si",
                "Prof. Dr. Andi Susanto, M.Si.",
                "Prof. Dr. Andi Susanto, M,Si.",
                "Prof. dr. Andi Susanto, M.si."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: PUEBI (Penggunaan Tanda Baca)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Aturan penulisan gelar akademik di Indonesia sangat ketat terkait penggunaan titik dan koma. Setiap singkatan gelar diakhiri tanda titik, dan pemisah antara nama dengan gelar akademik di belakangnya MENGGUNAKAN tanda koma.</p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">💡 Rumus Cerdas Tanda Baca Gelar:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        1. <b>Dr.</b> (D besar) = Doktor (S3). <b>dr.</b> (d kecil) = dokter medis. <b>DR.</b> (kapital semua) = SALAH/Tidak Baku.<br>
                        2. Wajib ada <b>KOMA</b> antara huruf terakhir nama dan huruf awal gelar (Susanto<b>,</b> M.Si.).<br>
                        3. Gelar Magister Sains ditulis <b>M.Si.</b> (S besar, i kecil, diakhiri titik mutlak di belakang kalimat). Opsi C memenuhi semua syarat ini.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pancasila",
            q: "<b>Pancasila (Analisis Kasus Sila):</b><br>Di sebuah komplek perumahan, terjadi musibah kebakaran yang menghanguskan rumah salah satu warga. Warga komplek secara spontan mengumpulkan dana, pakaian layak pakai, dan bahan makanan untuk membantu korban. Namun, ketua RT kemudian mengeluarkan kebijakan bahwa dana bantuan tersebut sebagian akan dipotong untuk kas RT yang sedang kosong. Sikap warga yang awalnya menolong mencerminkan sila ke-X, sedangkan kebijakan ketua RT melanggar sila ke-Y. Sila ke-X dan ke-Y secara berurutan adalah...",
            a: [
                "Sila ke-2 dan Sila ke-4",
                "Sila ke-2 dan Sila ke-5",
                "Sila ke-3 dan Sila ke-5",
                "Sila ke-5 dan Sila ke-2",
                "Sila ke-5 dan Sila ke-4"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pedoman Penghayatan dan Pengamalan Pancasila</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Tindakan warga yang spontan menolong korban musibah atas dasar kemanusiaan dan empati adalah murni perwujudan Sila ke-2. Sementara itu, kebijakan Ketua RT yang memotong hak korban demi kepentingan lain adalah bentuk pemerasan dan perampasan hak milik, yang secara telak melanggar keadilan sosial Sila ke-5.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🎯 Rumus Cepat Sila Beruntun:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika soal menanyakan dua sila sekaligus (X dan Y), fokus cari <b>X (Tindakan Awal)</b> terlebih dahulu.<br>
                        "Menolong korban bencana" = Mutlak Sila 2 (Rantai). Dengan mengetahui ini, opsi C, D, dan E langsung bisa dicoret. Tersisa A dan B. Pemotongan hak ekonomi = Keadilan Sosial (Sila 5). Jadi jawabannya Sila 2 dan 5 (Opsi B).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Bahasa Indonesia (Pola Kalimat):</b><br>Perhatikan kalimat dasar berikut: <i>'Pemerintah memberikan bantuan sosial kepada masyarakat miskin di desa.'</i><br>Kalimat di bawah ini yang memiliki pola struktur sintaksis yang sama persis dengan kalimat dasar tersebut adalah...",
            a: [
                "Kemarin sore, ayah membelikan adik mainan baru.",
                "Mahasiswa menyelenggarakan aksi demonstrasi dengan damai.",
                "Direktur menugaskan manajer operasional ke luar negeri.",
                "Polisi menangkap komplotan pencuri di rumah kosong itu.",
                "Kakak membacakan cerita dongeng untuk adik sebelum tidur."
            ],
            k: 4,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Sintaksis Bahasa Indonesia (Pola S-P-O-K)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Analisis kalimat dasar: <b>Pemerintah (S) memberikan (P) bantuan sosial (O) kepada masyarakat miskin (Pelengkap) di desa (K. Tempat).</b><br>
                Analisis Opsi E: <b>Kakak (S) membacakan (P) cerita dongeng (O) untuk adik (Pelengkap) sebelum tidur (K. Waktu).</b></p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">🧠 Hack Logika SPOK (Objek vs Pelengkap):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Sering bingung bedain Objek (O) dan Pelengkap (Pel)?<br>
                        Kata setelah Predikat yang diikuti kata depan (kepada, untuk, buat) <b>PASTI Pelengkap</b>, bukan Objek. Di kalimat dasar ada "kepada", cari opsi yang menggunakan "untuk/kepada" setelah Objek. Opsi E memiliki struktur "untuk adik" (Pelengkap) diikuti keterangan.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "UUD 1945",
            q: "<b>UUD 1945 (Kewenangan DPD):</b><br>Dewan Perwakilan Daerah (DPD) merupakan representasi wilayah dalam sistem ketatanegaraan Indonesia. Namun, wewenang DPD sangat spesifik dan dibatasi konstitusi. Apabila DPR sedang merancang Undang-Undang tentang Anggaran Pendapatan dan Belanja Negara (APBN), hak konstitusional DPD dalam proses tersebut adalah...",
            a: [
                "Memiliki hak veto untuk menolak pengesahan RUU APBN tersebut.",
                "Ikut membahas dan menyetujui bersama DPR dan Presiden.",
                "Hanya berhak memberikan pertimbangan kepada DPR.",
                "Melakukan pengujian materiil (judicial review) ke Mahkamah Konstitusi sebelum disahkan.",
                "Mengesahkan RUU APBN jika DPR tidak mencapai kuorum."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pasal 22D Ayat (2) UUD 1945</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Berdasarkan amandemen UUD 1945, DPD tidak memiliki fungsi legislasi yang absolut seperti DPR. Terkait RUU APBN, Pajak, Pendidikan, dan Agama, DPD <b>hanya berhak memberikan pertimbangan</b> kepada DPR, tidak ikut mengesahkan.</p>
                <div class="p-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-amber-900 mb-1 uppercase tracking-tight">🚫 Batasan Kuasa DPD:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Ingat aturan mutlak ini: DPD <b>TIDAK PERNAH</b> memiliki hak untuk "Ikut Mengesahkan" atau "Memveto" sebuah Undang-Undang tingkat nasional. Kata kerja DPD selalu terbatas pada: <b>Mengajukan (RUU Daerah)</b>, <b>Ikut Membahas</b>, atau sekadar <b>Memberi Pertimbangan</b>. Jika ada opsi "Mengesahkan" untuk DPD, salahkan opsi itu secara otomatis.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Integritas",
            q: "<b>Integritas (Whistleblowing System):</b><br>Anda mendapati rekan satu ruangan Anda, yang juga merupakan sahabat karib Anda sejak kuliah, secara diam-diam memanipulasi laporan absensi lembur untuk mendapatkan honor tambahan. Sikap yang paling mencerminkan integritas seorang abdi negara dalam situasi tersebut adalah...",
            a: [
                "Mengingatkannya secara personal dan membiarkannya berubah dengan sendirinya.",
                "Meminta bagian dari honor tersebut sebagai syarat untuk tutup mulut.",
                "Menegurnya dengan tegas dan melaporkannya kepada atasan atau sistem pengaduan jika ia tidak segera menghentikan dan mengembalikan dana tersebut.",
                "Menjauhinya agar Anda tidak ikut terseret jika perbuatannya terbongkar oleh audit.",
                "Melaporkannya langsung ke pihak kepolisian atas tuduhan korupsi uang negara."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Kode Etik dan Perilaku ASN (UU No. 20 Tahun 2023)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Menghadapi rekan kerja yang melakukan fraud menuntut keberanian menegakkan kebenaran (Integritas). Mengabaikan (D) atau sekadar mengingatkan tanpa tindak lanjut (A) adalah bentuk pembiaran korupsi laten.</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">⚖️ SOP Menghadapi Sejawat Fraud:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan langsung lapor polisi (Opsi E itu berlebihan/melompati birokrasi internal).<br>
                        Rumus yang benar: <b>Tegur Tegas (Persuasif Edukatif) ➔ Ultimatum (Kembalikan/Hentikan) ➔ Laporkan ke Atasan/WBS (Eskalasi)</b>. Opsi C mencakup urutan langkah yang sempurna dan proporsional.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bela Negara",
            q: "<b>Bela Negara (Profesionalisme Profesi):</b><br>Sistem database pelaporan keuangan di instansi Anda tiba-tiba mengalami *crash* dan mati total di hari terakhir batas pelaporan nasional. Anda adalah seorang staf IT. Hari itu bertepatan dengan jadwal cuti tahunan Anda untuk menjenguk orang tua di luar kota. Sikap yang menunjukkan semangat rela berkorban demi bela negara adalah...",
            a: [
                "Tetap mengambil cuti karena sistem tersebut adalah tanggung jawab atasan.",
                "Menunda cuti dan bekerja lembur memulihkan sistem tersebut karena menyangkut kredibilitas instansi negara.",
                "Menyuruh rekan kerja lain yang tidak ahli IT untuk memperbaikinya dengan panduan jarak jauh.",
                "Masuk kerja setengah hari lalu melanjutkan cuti meskipun sistem belum stabil.",
                "Memarahi vendor penyedia sistem karena membuat liburan Anda berantakan."
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Indikator Nilai Bela Negara (Rela Berkorban)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Bela negara bagi ASN diwujudkan melalui pengabdian sesuai profesi. Situasi *force majeure* (kritis) yang mengancam kinerja institusi negara menuntut pengorbanan kepentingan pribadi/golongan.</p>
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">🛡️ Pengorbanan vs Hak Pribadi:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Di dunia nyata, cuti adalah hak mutlak. Namun, di soal CAT CPNS, jika negara dalam keadaan darurat operasional (sistem down, bencana, tenggat waktu krusial), Anda <b>WAJIB</b> memilih opsi yang mengorbankan hak pribadi Anda demi negara. Ingat: <i>Negara > Instansi > Pribadi</i>.
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Sejarah",
            q: "<b>Pilar Negara (Makna Sumpah Pemuda):</b><br>Sumpah Pemuda 28 Oktober 1928 diikrarkan oleh para pemuda dari berbagai Jong (organisasi kedaerahan). Meskipun mereka berasal dari budaya dan bahasa ibu yang berbeda-beda, mereka mengikrarkan satu bahasa persatuan, yaitu bahasa Indonesia. Makna filosofis dari pengakuan 'Satu Bahasa' ini bagi integrasi bangsa adalah...",
            a: [
                "Menghapus seluruh bahasa daerah di Nusantara agar terjadi penyeragaman komunikasi.",
                "Mengangkat bahasa Melayu menjadi bahasa yang lebih tinggi derajatnya dari bahasa Jawa.",
                "Menyediakan alat komunikasi universal yang menjembatani perbedaan tanpa mematikan identitas etnis (bahasa daerah).",
                "Menunjukkan kepada penjajah Belanda bahwa pemuda Indonesia mampu menciptakan bahasa baru.",
                "Memudahkan pemerintah kolonial dalam mendata penduduk pribumi."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Sejarah Pergerakan Nasional</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Bahasa Indonesia (yang berakar dari Melayu Riau) dipilih bukan untuk membunuh bahasa daerah, melainkan sebagai *lingua franca* (bahasa penghubung) yang adil. Sumpah Pemuda berbunyi "menjunjung bahasa persatuan", bukan "mematikan bahasa daerah".</p>
                <div class="p-3 bg-purple-50 border-l-4 border-purple-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-purple-900 mb-1 uppercase tracking-tight">🔍 Jebakan Etnosentrisme:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Soal tentang Sumpah Pemuda selalu menguji pemahaman Anda tentang asimilasi vs integrasi. Opsi (A) adalah asimilasi paksa (salah). Integrasi Nasional yang benar adalah <b>menyatukan keberagaman tanpa menghilangkan ciri khas asli</b>. Kata kunci: "Menjembatani perbedaan".
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Nasionalisme",
            q: "<b>Nasionalisme (Ketahanan Ekonomi):</b><br>Berdasarkan Pasal 33 UUD 1945, cabang-cabang produksi yang penting bagi negara dan yang menguasai hajat hidup orang banyak dikuasai oleh negara. Makna frasa 'dikuasai oleh negara' dalam konteks perekonomian modern saat ini adalah...",
            a: [
                "Negara mengambil alih seluruh kepemilikan saham swasta di perusahaan strategis.",
                "Negara berhak mengatur, membuat kebijakan, mengurus, dan mengawasi sektor tersebut demi kemakmuran rakyat.",
                "Hanya Badan Usaha Milik Negara (BUMN) yang boleh melakukan aktivitas bisnis di Indonesia.",
                "Negara berhak memonopoli seluruh hasil kekayaan alam untuk membiayai belanja pegawai pemerintah.",
                "Menutup akses investasi asing secara total terhadap sumber daya alam nasional."
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Putusan Mahkamah Konstitusi (Tafsir Pasal 33 UUD 1945)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Berdasarkan tafsir Mahkamah Konstitusi, "dikuasai negara" BUKAN berarti negara harus "memiliki" (kepemilikan 100%). Dikuasai berarti negara memegang kendali regulasi (mengatur tata niaga), administrasi (izin), dan pengawasan agar tidak dikuasai oligarki swasta.</p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">💡 Taktik Pasal 33:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan pilih opsi yang bernada fasisme ekonomi (seperti monopoli mutlak, menendang swasta sepenuhnya, atau menutup diri dari dunia luar). Perekonomian Pancasila adalah jalan tengah: Swasta boleh masuk, tapi <b>Negara Pegang Kendali Regulasi</b> agar rakyat tidak diperas (Opsi B).
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pancasila",
            q: "<b>Pancasila (Sila Pertama vs Kebijakan Negara):</b><br>Di sebuah daerah, terjadi polemik penolakan pembangunan rumah ibadah agama minoritas oleh sekelompok masyarakat mayoritas dengan alasan mengganggu ketertiban. Sebagai perpanjangan tangan negara, sikap aparat penegak hukum yang berlandaskan Sila Pertama dan Sila Keempat adalah...",
            a: [
                "Melarang pembangunan rumah ibadah tersebut demi menjaga perasaan kelompok mayoritas.",
                "Menangkap para penolak tanpa dialog karena melanggar hak asasi manusia.",
                "Memfasilitasi dialog dan mediasi, serta menjamin kebebasan beragama selama memenuhi syarat hukum (Peraturan Bersama Menteri).",
                "Meminta kaum minoritas untuk beribadah secara sembunyi-sembunyi agar aman.",
                "Menyerahkan sepenuhnya keputusan akhir kepada hasil pemungutan suara (voting) warga RT setempat."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Peraturan Bersama (SKB) Menteri Agama dan Mendagri</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Kebebasan beragama adalah hak asasi yang dijamin Pasal 29 UUD 1945. Negara tidak boleh tunduk pada tekanan massa (tirani mayoritas). Namun, pendirian rumah ibadah juga tunduk pada hukum positif (SKB 2 Menteri). Dialog (Sila 4) digabungkan dengan kepastian perlindungan hak ibadah (Sila 1) adalah solusi paling tepat.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🚫 Anti-Tyranny Rule:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Hak Asasi (Ibadah, Hidup) <b>TIDAK BISA DI-VOTING</b>. Oleh karena itu, Opsi E salah total (Demokrasi tidak boleh dipakai untuk menghapus HAM minoritas). Opsi A dan D adalah bentuk kekalahan negara terhadap intoleransi. Pilihlah opsi yang mengandung unsur: <b>Mediasi, Jaminan Keamanan, dan Ketaatan Hukum.</b>
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Bahasa Indonesia",
            q: "<b>Bahasa Indonesia (Ejaan & Huruf Kapital):</b><br>Perhatikan aturan PUEBI mengenai penulisan huruf kapital pada nama jabatan. Manakah penulisan kalimat di bawah ini yang sepenuhnya benar sesuai kaidah?",
            a: [
                "Acara tersebut dibuka langsung oleh Gubernur jawa barat, Ridwan Kamil.",
                "Bapak Budi baru saja dilantik menjadi seorang Camat di daerah pelosok.",
                "Keputusan itu ditandatangani oleh Sekretaris Jenderal Kementerian Keuangan Republik Indonesia.",
                "Surat edaran tersebut wajib diteruskan kepada seluruh Walikota di provinsi ini.",
                "Dalam sambutannya, Presiden menekankan pentingnya pembangunan desa."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pedoman Umum Ejaan Bahasa Indonesia (PUEBI)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Aturan penulisan kapital: Nama jabatan <b>Wajib Kapital</b> JIKA diikuti nama orang, nama instansi, atau nama tempat. Jika tidak diikuti nama pelengkapnya (hanya sebutan jabatan umum), ditulis dengan huruf kecil.</p>
                <div class="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-blue-900 mb-1 uppercase tracking-tight">📝 Bedah Kesalahan Ejaan:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        - (A) "jawa barat" harusnya kapital (Jawa Barat).<br>
                        - (B) "Camat" harusnya kecil (camat) karena tidak diikuti wilayahnya.<br>
                        - (D) "Walikota" harusnya dipisah (wali kota) dan huruf kecil jika tidak diikuti nama kota.<br>
                        - (E) "Presiden" harusnya kecil karena tidak diikuti nama (presiden).<br>
                        - <b>(C) BENAR</b>. "Sekretaris Jenderal" kapital karena diikuti nama instansi "Kementerian Keuangan".
                    </p>
                </div>
            `
        },
        {
            cat: "TWK", sub: "Pilar Negara",
            q: "<b>Wawasan Nusantara (Asas Ketahanan Nasional):</b><br>Salah satu sifat ketahanan nasional adalah 'Manunggal', yang berarti menyatunya seluruh aspek kehidupan bangsa (Ipoleksosbudhankam). Ancaman terhadap satu pulau di wilayah terluar Indonesia dianggap sebagai ancaman terhadap seluruh wilayah NKRI. Sifat manunggal ini sangat relevan untuk menangkal ancaman...",
            a: [
                "Inflasi ekonomi global yang merusak mata uang rupiah.",
                "Gerakan separatisme yang ingin memisahkan sebuah provinsi dari NKRI.",
                "Korupsi yang dilakukan oleh pejabat kementerian pusat.",
                "Bencana alam letusan gunung berapi di wilayah padat penduduk.",
                "Persaingan industri asing yang mematikan UMKM lokal."
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-gray-200 text-gray-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Modul Wawasan Nusantara dan Ketahanan Nasional (Lemhannas)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Sifat Manunggal (Utuh Menyeluruh) dalam Wawasan Nusantara adalah antitesis (lawan mutlak) dari perpecahan wilayah. Konsep bahwa "luka di satu wilayah adalah luka seluruh negara" digunakan secara spesifik untuk mencegah dan melawan gerakan separatisme (memisahkan diri).</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">🛡️ Konsep Pertahanan Wilayah:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika soal membicarakan "ancaman di wilayah perbatasan", "pulau terluar", atau "integrasi fisik peta Indonesia", maka musuh utamanya secara konseptual adalah <b>Separatisme (Pemberontakan pemisahan diri)</b>. Opsi lain lebih condong ke ketahanan ekonomi (A, E) atau hukum (C).
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Analogi Verbal",
            q: "<b>Analogi (Hubungan Kata):</b><br>INSOMNIA : TIDUR = ... : ...",
            a: [
                "Lapar : Makan",
                "Amnesia : Ingatan",
                "Dahaga : Minum",
                "Gelisah : Tenang",
                "Patah : Berjalan"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: FR Analogi Verbal BKN</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Insomnia adalah suatu gangguan/penyakit yang menyebabkan seseorang kehilangan kemampuan atau sulit untuk <b>Tidur</b>. Hubungan yang setara adalah Amnesia, yaitu suatu gangguan yang menyebabkan kehilangan <b>Ingatan</b>.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🎯 Taktik Jembatan Kalimat:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan pernah menebak analogi pakai <i>feeling</i>! Buat <b>Jembatan Kalimat</b> yang spesifik.<br>
                        "A adalah gangguan/kehilangan B".<br>
                        Terapkan ke opsi: "Lapar adalah gangguan makan" (Salah, lapar itu sinyal butuh makan). "Amnesia adalah kehilangan ingatan" (BENAR).
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Analogi Verbal",
            q: "<b>Analogi (Tiga Kata):</b><br>GURU : SEKOLAH : MURID = ... : ... : ...",
            a: [
                "Dokter : Rumah Sakit : Pasien",
                "Hakim : Pengadilan : Pengacara",
                "Sopir : Kendaraan : Mesin",
                "Petani : Traktor : Padi",
                "Buku : Perpustakaan : Mahasiswa"
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: FR Analogi Tiga Kata</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Guru adalah profesi yang bekerja di Sekolah untuk melayani/mendidik Murid. Padanan yang sama persis adalah Dokter (profesi) bekerja di Rumah Sakit (tempat) untuk melayani Pasien (subjek yang dilayani).</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">💡 Taktik 3 Entitas:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Pola FR BKN untuk 3 kata biasanya: <b>Subjek (Profesi) : Lokasi Kerja : Objek yang Dilayani</b>.<br>
                        Opsi B salah karena Hakim tidak melayani Pengacara (melainkan Terdakwa/Keadilan). Opsi D salah karena Traktor bukan lokasi, melainkan alat.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Silogisme (Logika Posisi)",
            q: "<b>Silogisme (Kategorik):</b><br>Semua ASN dilarang menerima gratifikasi dalam bentuk apa pun.<br>Sebagian pegawai Dinas X menerima parsel lebaran dari kontraktor proyek.<br><br>Kesimpulan yang paling tepat adalah...",
            a: [
                "Sebagian pegawai Dinas X bukan ASN.",
                "Semua pegawai Dinas X menerima gratifikasi.",
                "Sebagian pegawai Dinas X melanggar aturan ASN.",
                "Parsel lebaran bukan termasuk bentuk gratifikasi.",
                "Semua kontraktor proyek memberikan gratifikasi kepada ASN."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Logika Kuantor (Silogisme)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Premis 1 adalah aturan mutlak (Semua ASN dilarang gratifikasi). Premis 2 adalah fakta spesifik (Sebagian pegawai Dinas X menerima parsel/gratifikasi). Kesimpulannya, tindakan sebagian pegawai tersebut bertentangan dengan aturan ASN.</p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">🧠 Rumus Mutlak Silogisme:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        <b>SEMUA + SEBAGIAN = SEBAGIAN.</b><br>
                        Jika ada satu premis menggunakan kata "Sebagian/Beberapa/Ada", maka kesimpulannya <b>WAJIB</b> menggunakan kata "Sebagian". Langsung coret opsi B dan E. Karena menerima parsel adalah tindakan melanggar larangan gratifikasi, maka Opsi C adalah konklusi logisnya.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Silogisme (Logika Implikasi)",
            q: "<b>Silogisme (Implikasi Berantai):</b><br>Jika hujan turun deras, maka jalanan protokol banjir.<br>Jika jalanan protokol banjir, maka lalu lintas macet parah.<br>Hari ini lalu lintas tidak macet parah.<br><br>Kesimpulan yang sah adalah...",
            a: [
                "Hari ini hujan tidak turun deras.",
                "Hari ini jalanan protokol tidak banjir meskipun hujan deras.",
                "Hujan turun deras tetapi lalu lintas lancar.",
                "Hari ini hujan turun deras dan jalanan banjir.",
                "Tidak dapat ditarik kesimpulan."
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Modus Tollens & Silogisme</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Berdasarkan hukum silogisme berantai: P ➔ Q, dan Q ➔ R. Maka kesimpulan sementaranya adalah P ➔ R (Jika hujan turun deras, maka lalu lintas macet parah). Fakta di lapangan (Premis 3): ~R (Lalu lintas tidak macet parah). Maka menggunakan Modus Tollens, kesimpulannya adalah ~P (Hujan tidak turun deras).</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">🛡️ Hack Modus Tollens (Tarik Mundur):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika <b>Akibat Terakhir</b> dibantah/negatif (Tidak macet), maka <b>Penyebab Pertama</b> pasti juga negatif (Tidak hujan deras). Jangan pilih jawaban yang berbelit-belit. Bantah ujungnya, berarti ujung awalnya juga batal.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Analisis Posisi (HOTS)",
            q: "<b>Kemampuan Analitis (Urutan):</b><br>Lima orang CPNS antre melakukan pemberkasan. <br>- Arika berada tepat di depan Budi.<br>- Coki berada di belakang Dika.<br>- Eka berada tepat di antara Budi dan Coki.<br>Jika Dika berada pada urutan pertama, maka siapa yang berada di urutan ketiga?",
            a: [
                "Arika",
                "Budi",
                "Coki",
                "Dika",
                "Eka"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Analitik Urutan / Seating Arrangement</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Mari kita susun berdasarkan petunjuk:<br>1. Dika urutan pertama ➔ <b>(1) Dika</b><br>2. Coki di belakang Dika ➔ Posisi Coki bisa 2,3,4,5.<br>3. Eka di antara Budi dan Coki ➔ Polanya: Budi - Eka - Coki.<br>4. Arika tepat di depan Budi ➔ Polanya: Arika - Budi - Eka - Coki.<br>Gabungkan dengan Dika di nomor 1, maka urutannya: <b>Dika, Arika, Budi, Eka, Coki</b>. Urutan ke-3 adalah Budi.</p>
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">📝 Tips Soal Analitik:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Selalu mulai dari syarat yang posisinya <b>PASTI</b>. Dalam soal ini, "Dika berada pada urutan pertama" adalah jangkar (anchor). Taruh Dika di nomor 1, lalu susun sisanya berbentuk blok (A-B-E-C).
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Deret Angka Bertingkat",
            q: "<b>Deret Angka (Pola Bertingkat/Lompat):</b><br>100, 95, 85, 70, 50, ...",
            a: [
                "20",
                "25",
                "30",
                "35",
                "40"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-4"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Deret Aritmatika Bertingkat</span></div>
                
                <div class="relative w-full max-w-xs mx-auto mt-8 mb-6 select-none pt-4">
                    <div class="absolute w-full flex justify-between px-2 top-0 left-0 right-0">
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-blue-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-white px-1">-5</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-blue-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-white px-1">-10</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-blue-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-white px-1">-15</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-blue-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-white px-1">-20</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-blue-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-blue-600 bg-amber-50 px-1">-25</span>
                        </div>
                    </div>
                    
                    <div class="flex justify-between relative z-10 w-full gap-1 mt-1">
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">100</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">95</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">85</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">70</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">50</div>
                        <div class="w-[16%] flex items-center justify-center bg-green-100 text-green-800 py-1.5 font-black text-xs border-2 border-green-500 rounded shadow-md animate-pulse">25</div>
                    </div>
                </div>

                <p class="text-sm text-gray-700 text-justify mb-3 mt-4">Polanya adalah pengurangan dengan kelipatan 5 secara bertingkat. Maka suku berikutnya harus dikurangi 25. <b>50 - 25 = 25</b>.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg mt-3">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">💡 Taktik Visualisasi:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika rentang penurunannya semakin lama semakin membesar/curam, itu indikasi kuat adanya pola bertingkat. Jangan buang waktu mencari pembagian, langsung hitung selisih pertamanya saja.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Deret Angka",
            q: "<b>Deret Angka (Pola Kombinasi):</b><br>2, 5, 11, 23, 47, ...",
            a: [
                "89",
                "93",
                "94",
                "95",
                "101"
            ],
            k: 3,
            pembahasan: `
                <div class="mb-4"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika Pola Bilangan</span></div>
                
                <div class="relative w-full max-w-xs mx-auto mt-8 mb-6 select-none pt-4">
                    <div class="absolute w-full flex justify-between px-2 top-0 left-0 right-0">
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-red-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-red-600 bg-white px-1">+3</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-red-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-red-600 bg-white px-1">+6</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-red-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-red-600 bg-white px-1">+12</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-red-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-red-600 bg-white px-1">+24</span>
                        </div>
                        <div class="w-[18%] h-5 border-t-2 border-dashed border-red-500 rounded-t-[100px] relative">
                            <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-red-600 bg-amber-50 px-1">+48</span>
                        </div>
                    </div>
                    
                    <div class="flex justify-between relative z-10 w-full gap-1 mt-1">
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">2</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">5</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">11</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">23</div>
                        <div class="w-[16%] flex items-center justify-center bg-white py-1.5 font-bold text-xs border border-gray-400 rounded shadow-sm">47</div>
                        <div class="w-[16%] flex items-center justify-center bg-green-100 text-green-800 py-1.5 font-black text-xs border-2 border-green-500 rounded shadow-md animate-pulse">95</div>
                    </div>
                </div>

                <p class="text-sm text-gray-700 text-justify mb-3 mt-4">Terlihat bahwa selisihnya selalu dikali 2. Maka selisih berikutnya adalah +48. Sehingga 47 + 48 = <b>95</b>.</p>
                
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg mt-4">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">⚡ The 5-Second Scan:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika angka naik dua kali lipat lebih sedikit (2 ke 5, 11 ke 23), JANGAN hitung manual selisihnya. Langsung curiga dengan rumus <b>(Angka Sebelumnya x 2) ± Konstanta</b>.<br>
                        2x2+1 = 5<br>
                        5x2+1 = 11<br>
                        Pola ini menyumbang 40% tipe soal deret CPNS.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Numerik (Berhitung Cepat)",
            q: "<b>Numerik (Pecahan Istimewa):</b><br>Berapakah hasil dari <b>37,5% x 240</b> ?",
            a: [
                "60",
                "75",
                "80",
                "90",
                "110"
            ],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Matematika Dasar TIU BKN</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Menghitung 37,5/100 x 240 secara manual akan menghabiskan waktu lebih dari 1 menit. Gunakan hafalan pecahan istimewa. Nilai 37,5% itu setara dengan pecahan <b>3/8</b>.<br>Maka: 3/8 x 240 = 3 x 30 = <b>90</b>.</p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">⚠️ CHEAT SHEET WAJIB HAFAL:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        User Premium WAJIB hafal konversi desimal ke pecahan ini untuk hemat 40 detik per soal:<br>
                        - 12,5% = 1/8<br>
                        - 33,33% = 1/3<br>
                        - 37,5% = 3/8<br>
                        - 62,5% = 5/8<br>
                        - 87,5% = 7/8
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Soal Cerita (Perbandingan)",
            q: "<b>Numerik (Perbandingan Berbalik Nilai):</b><br>Sebuah proyek pembangunan jembatan diperkirakan selesai dalam waktu 20 hari jika dikerjakan oleh 15 orang pekerja. Karena cuaca buruk, proyek tersebut harus dipercepat dan diselesaikan dalam waktu 12 hari. Berapa banyak <b>tambahan</b> pekerja yang diperlukan?",
            a: [
                "10 orang",
                "15 orang",
                "20 orang",
                "25 orang",
                "30 orang"
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Soal Cerita Matematika Dasar</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">Ini adalah perbandingan berbalik nilai (semakin sedikit waktu, semakin BANYAK pekerja).<br>Rumus: W1 x P1 = W2 x P2<br>20 x 15 = 12 x P2<br>300 = 12 x P2<br>P2 = 25 orang (Total pekerja yang dibutuhkan).<br>Karena ditanya <b>TAMBAHAN</b>, maka 25 - 15 (pekerja awal) = <b>10 orang</b>.</p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🚫 Jebakan Batman BKN:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Hati-hati! Soal perbandingan BKN sangat sering menggunakan kata <b>"TAMBAHAN"</b> di akhir kalimat. Peserta sering terburu-buru dan langsung menjawab 25 (Opsi D), padahal yang diminta selisihnya. Selalu baca ujung pertanyaan.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Soal Cerita (Jarak, Kecepatan, Waktu)",
            q: "<b>Numerik (JKW):</b><br>Andi mengendarai sepeda motor dari Kota A ke Kota B dengan kecepatan rata-rata 60 km/jam. Jarak antara kedua kota tersebut adalah 150 km. Jika Andi berangkat pada pukul 08.15 dan beristirahat di perjalanan selama 30 menit, pada pukul berapakah Andi tiba di Kota B?",
            a: [
                "10.15",
                "10.45",
                "11.00",
                "11.15",
                "11.45"
            ],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Kecepatan dan Debit Jarak</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">1. Cari waktu tempuh (W) = Jarak (J) / Kecepatan (K).<br>W = 150 km / 60 km/jam = 2,5 jam (2 jam 30 menit).<br>2. Total waktu perjalanan = Waktu tempuh + Waktu istirahat = 2 jam 30 menit + 30 menit = 3 jam.<br>3. Waktu tiba = Waktu Berangkat + Total Waktu = 08.15 + 3 jam = <b>11.15</b>.</p>
                
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg mt-3">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">📐 Segitiga Ajaib Jo-Ko-Wi:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Gunakan segitiga <b>J (Atas), K (Kiri), W (Kanan)</b>.<br>
                        - Tutup J untuk mencari Jarak ➔ K x W<br>
                        - Tutup W untuk mencari Waktu ➔ J / K<br>
                        - Tutup K untuk mencari Kecepatan ➔ J / W<br>
                        Pastikan satuannya sama (Km dengan Jam, Meter dengan Menit/Detik).
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Numerik (Pecahan Kompleks)",
            q: "<b>Numerik (Operasi Campuran):</b><br>Hasil dari operasi <b>0,875 &divide; 1,25 + 0,333 &times; 9</b> adalah...",
            a: [
                "3,5",
                "3,7",
                "4,2",
                "4,5",
                "5,0"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Matematika Dasar / Pecahan Istimewa</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Jangan hitung desimal pakai pembagian bersusun, itu buang waktu! Konversikan ke pecahan istimewa:<br>
                    0,875 = <b>7/8</b><br>
                    1,25 = 1 + 0,25 = 1 + 1/4 = <b>5/4</b><br>
                    0,333 = <b>1/3</b><br><br>
                    Ubah persamaan: (7/8 &divide; 5/4) + (1/3 &times; 9)<br>
                    = (7/8 &times; 4/5) + 3<br>
                    = (28/40) + 3<br>
                    = 7/10 + 3 = 0,7 + 3 = <b>3,7</b>.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🎯 Taktik Kabataku:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Ingat aturan prioritas operasi: <b>Kali/Bagi</b> kerjakan duluan sebelum <b>Tambah/Kurang</b>. Mengubah desimal rumit menjadi pecahan biasa adalah kunci menyelesaikan soal ini di bawah 40 detik.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Aritmatika Sosial",
            q: "<b>Numerik (Diskon Ganda):</b><br>Sebuah toko sepatu memberikan diskon akhir tahun sebesar <b>50% + 20%</b> untuk sepasang sepatu yang dibanderol dengan harga Rp400.000. Berapa total harga yang harus dibayar oleh pembeli?",
            a: [
                "Rp120.000",
                "Rp140.000",
                "Rp160.000",
                "Rp200.000",
                "Rp280.000"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika Sosial</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Diskon ganda 50% + 20% <b>BUKAN</b> berarti diskon 70%. Diskon harus dihitung bertahap dari harga yang sudah didiskon pertama.<br>
                    1. Diskon pertama (50%): Harga menjadi setengahnya = <b>Rp200.000</b>.<br>
                    2. Diskon kedua (20%): 20% dari Rp200.000 = Rp40.000.<br>
                    3. Harga Akhir = Rp200.000 - Rp40.000 = <b>Rp160.000</b>.
                </p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">💡 Shortcut Diskon Ganda:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Cara cepat tanpa kurangi harga: Langsung kalikan persen <b>Sisa Bayar</b>-nya.<br>
                        Diskon 50% (Sisa bayar 50%). Diskon 20% (Sisa bayar 80%).<br>
                        Langsung hitung: <b>50% &times; 80% &times; 400.000 = 0,5 &times; 0,8 &times; 400.000 = 0,4 &times; 400.000 = 160.000</b>.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Kuantitatif (X vs Y)",
            q: "<b>Perbandingan Kuantitatif:</b><br>Diketahui <b>X</b> adalah luas bujur sangkar yang memiliki panjang sisi 6 cm. <br>Diketahui <b>Y</b> adalah luas persegi panjang dengan ukuran panjang 9 cm dan lebar 4 cm. <br>Hubungan yang tepat antara X dan Y adalah...",
            a: [
                "X > Y",
                "X < Y",
                "X = Y",
                "X = 2Y",
                "Hubungan antara X dan Y tidak dapat ditentukan"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Geometri Dasar</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Hitung nilai X (Luas Bujur Sangkar / Persegi): Sisi &times; Sisi = 6 &times; 6 = <b>36 cm&sup2;</b>.<br>
                    Hitung nilai Y (Luas Persegi Panjang): Panjang &times; Lebar = 9 &times; 4 = <b>36 cm&sup2;</b>.<br>
                    Karena X bernilai 36 dan Y bernilai 36, maka <b>X = Y</b>.
                </p>
            `
        },
        {
            cat: "TIU", sub: "Kuantitatif (HOTS Pangkat)",
            q: "<b>Perbandingan Kuantitatif (HOTS):</b><br>Diketahui <b>X&sup2; = 64</b> dan <b>Y = 3&sup3; - 19</b>. <br>Maka hubungan yang paling tepat antara X dan Y adalah...",
            a: [
                "X > Y",
                "X < Y",
                "X = Y",
                "X = 2Y",
                "Hubungan antara X dan Y tidak dapat ditentukan"
            ],
            k: 4,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aljabar - Persamaan Kuadrat</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Mari kita bedah persamaannya:<br>
                    Nilai Y: 3&sup3; - 19 = 27 - 19 = <b>8</b>.<br>
                    Nilai X: X&sup2; = 64. Akar dari 64 memiliki DUA kemungkinan nilai baku, yaitu <b>X = 8</b> atau <b>X = -8</b>.<br>
                    - Jika X = 8, maka X = Y.<br>
                    - Jika X = -8, maka X < Y.<br>
                    Karena terdapat lebih dari satu kepastian hubungan, maka secara matematis hubungan X dan Y tidak dapat ditentukan dengan mutlak.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">⚠️ Jebakan Pangkat Genap:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika Anda menemui variabel pangkat genap (X&sup2;, X&#8308;) di soal Kuantitatif BKN, hampir dipastikan jawabannya adalah <b>"Tidak dapat ditentukan"</b>, KECUALI di soal ada syarat tambahan tertulis "X adalah bilangan positif".
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Figural Analogi",
            q: `<b>Analogi Gambar:</b><br>Perhatikan pola perubahan gambar di bawah ini. Gambar 1 berubah menjadi Gambar 2. Dengan pola perubahan yang sama, Gambar 3 akan berubah menjadi...<br><br>
                <img src="assets/img/tiu-figural-45.webp" class="w-full max-w-sm mx-auto rounded border border-gray-200 shadow-sm mb-4" alt="Soal Analogi Figural">`,
            a: [
                "Gambar A",
                "Gambar B",
                "Gambar C",
                "Gambar D",
                "Gambar E"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Kemampuan Spasial Figural</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Aturan pola dari Gambar 1 ke Gambar 2:<br>
                    1. Posisi bangun diputar/dirotasi <b>90 derajat searah jarum jam</b>.<br>
                    2. Warna objek mengalami <i>inversi</i> (yang awalnya hitam jadi putih, yang awalnya putih jadi hitam).<br>
                    Terapkan pada Gambar 3: Rotasi 90 derajat searah jarum jam, lalu balik warnanya. Hasil yang tepat adalah opsi C.
                </p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">🔍 Taktik Cek Satu Elemen:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan lihat gambarnya secara utuh! Fokus pada <b>warna</b> terlebih dahulu. Jika Gambar 3 dominan hitam, maka jawabannya pasti dominan putih. Eliminasi opsi yang salah, lalu fokus pada arah ujung/panah untuk rotasi.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Figural Ketidaksamaan",
            q: `<b>Ketidaksamaan Gambar (Odd One Out):</b><br>Manakah di antara kelima gambar di bawah ini yang tidak memiliki kesamaan pola kelompok dengan empat gambar lainnya?<br><br>
                <img src="assets/img/tiu-figural-46.webp" class="w-full max-w-sm mx-auto rounded border border-gray-200 shadow-sm mb-4" alt="Soal Ketidaksamaan Figural">`,
            a: [
                "Gambar A",
                "Gambar B",
                "Gambar C",
                "Gambar D",
                "Gambar E"
            ],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Ketidaksamaan Pola Figural</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Pada soal ketidaksamaan, biasanya ada satu gambar yang merupakan hasil <b>pencerminan (refleksi)</b>, sedangkan empat gambar lainnya hanyalah hasil <b>perputaran (rotasi)</b> dari satu objek yang sama.<br>
                    Jika kita memutar gambar A, B, C, dan E, semuanya bisa saling tumpang tindih dengan sempurna (kongruen). Namun Gambar D, sedalam apa pun diputar, arah ujungnya terbalik (merupakan cerminan). 
                </p>
            `
        },
        {
            cat: "TIU", sub: "Figural Matriks",
            q: `<b>Matriks Gambar (9 Kotak):</b><br>Perhatikan pola matriks 3x3 di bawah ini. Tentukan gambar yang tepat untuk mengisi kotak yang kosong (tanda tanya)!<br><br>
                <img src="assets/img/tiu-figural-47.webp" class="w-full max-w-sm mx-auto rounded border border-gray-200 shadow-sm mb-4" alt="Soal Matriks Figural">`,
            a: [
                "Gambar A",
                "Gambar B",
                "Gambar C",
                "Gambar D",
                "Gambar E"
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Serial Matriks Gambar</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Pola matriks di atas bergerak dari kiri ke kanan (per baris horisontal). <br>
                    Aturan operasinya adalah <b>Penjumlahan dengan Penghapusan (Superposisi)</b>:<br>
                    Kolom 1 ditumpuk dengan Kolom 2 akan menghasilkan Kolom 3. Namun dengan syarat mutlak: <b>Elemen garis yang sama/bertumpuk akan saling menghapus (hilang)</b>, sedangkan elemen garis yang beda/tidak bertumpuk akan dipertahankan.<br>
                    Gunakan logika ini di baris ketiga untuk menemukan opsi yang tepat (Opsi A).
                </p>
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">🧠 Rumus Mutlak Matriks:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika Anda melihat matriks 9 kotak di mana gambar kotak ujung kanan terlihat "lebih sederhana" atau "lebih kompleks" dari gabungan kotak 1 dan 2, itu adalah soal Superposisi. Ingat aturannya: <b>BEDA = TULIS, SAMA = HAPUS</b>.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Logika Analitis (Melingkar)",
            q: "<b>Penalaran Analitis:</b><br>Enam orang sahabat (A, B, C, D, E, F) duduk mengelilingi meja bundar. Diketahui kondisi sebagai berikut:<br>1. A duduk berhadapan langsung dengan B.<br>2. C duduk tepat di sebelah kanan A.<br>3. D duduk berseberangan dengan C.<br>4. E duduk tepat di antara B dan D.<br>Berdasarkan posisi tersebut, siapakah yang duduk tepat di sebelah kiri B?",
            a: [
                "A",
                "C",
                "D",
                "E",
                "F"
            ],
            k: 4,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Logika Posisi (Seating Arrangement)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Buat sketsa lingkaran seperti jam dinding:<br>
                    - Taruh <b>A</b> di posisi bawah (jam 6). Maka <b>B</b> (yang berhadapan) ada di posisi atas (jam 12).<br>
                    - C duduk di sebelah KANAN A (berarti posisi jam 4/5).<br>
                    - D berseberangan dengan C (berarti posisi jam 10/11).<br>
                    - E duduk di antara B(12) dan D(10/11), maka posisi E ada di sebelah kiri atas B.<br>
                    - Tersisa satu kursi kosong di sebelah kanan atas B (jam 1/2). Kursi ini pasti diisi oleh <b>F</b>.<br>
                    Pertanyaan: Siapa di sebelah <b>KIRI</b> B? Ingat, sudut pandang KIRI adalah menghadap ke meja (dari posisi jam 12 melihat ke arah jam 6). Maka sebelah kiri B adalah posisi jam 1/2, yaitu ditempati oleh <b>F</b>.
                </p>
            `
        },
        {
            cat: "TIU", sub: "Numerik (Susul Menyusul)",
            q: "<b>Numerik (Jarak & Waktu - HOTS):</b><br>Agus berangkat dari Kota P menuju Kota Q mengendarai mobil dengan kecepatan 40 km/jam pada pukul 07.00. Setengah jam kemudian, Budi berangkat dari Kota P menuju Kota Q melalui rute yang sama menggunakan sepeda motor dengan kecepatan 60 km/jam. Pada pukul berapakah Budi berhasil menyusul Agus?",
            a: [
                "08.00",
                "08.30",
                "09.00",
                "09.30",
                "10.00"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika JKW (Jarak Kecepatan Waktu)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    1. Hitung dulu "Jarak Curi Start" (Selisih Jarak). Agus berangkat jam 07.00, Budi 07.30. Agus curi start 0,5 jam.<br>
                    Jarak Curi Start = Kecepatan Agus &times; Waktu Curi = 40 km/jam &times; 0,5 jam = <b>20 km</b>.<br>
                    2. Gunakan Rumus Waktu Menyusul:<br>
                    Waktu Menyusul = Selisih Jarak / (Kecepatan 2 - Kecepatan 1)<br>
                    Waktu = 20 / (60 - 40) = 20 / 20 = <b>1 jam</b>.<br>
                    3. Budi butuh 1 jam untuk menyusul. Budi berangkat pukul 07.30. Maka Budi menyusul pada pukul 07.30 + 1 jam = <b>08.30</b>.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">⏰ Rule of Thumb - Waktu Tiba:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Perhitungan waktu tiba <b>SELALU ditambahkan dengan waktu keberangkatan orang KEDUA</b> (dalam hal ini Budi 07.30), BUKAN orang pertama. Banyak peserta salah menjawab 08.00 karena menghitung dari keberangkatan Agus (07.00).
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Logika Analitis (Jadwal Syarat)",
            q: "<b>Penalaran Analitis:</b><br>Sebuah klinik menjadwalkan 5 dokter spesialis (P, Q, R, S, T) untuk berjaga satu kali dalam seminggu dari hari Senin sampai Jumat. Jadwal disusun berdasarkan syarat ketat berikut:<br>- Dokter P menolak berjaga di hari Senin.<br>- Dokter Q hanya bisa berjaga jika hari sebelumnya adalah giliran Dokter R.<br>- Dokter S harus berjaga di hari Kamis.<br>- Dokter T mengambil jadwal hari Jumat.<br>Pada hari apakah Dokter Q dijadwalkan berjaga?",
            a: [
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jumat"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Penalaran Analitis (Matriks Jadwal)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Mari eksekusi menggunakan metode pengisian posisi pasti (jangkar):<br>
                    1. Posisi mutlak: <b>Kamis = S</b>, dan <b>Jumat = T</b>.<br>
                    2. Sisa hari kosong: <b>Senin, Selasa, Rabu</b>. Sisa dokter: <b>P, Q, R</b>.<br>
                    3. Syarat: "Q hari sebelumnya harus R" (Polanya harus berdampingan: <b>R ➔ Q</b>). Karena posisi harus nempel, kemungkinan tempat untuk paket "R ➔ Q" ini hanya ada di Senin-Selasa atau Selasa-Rabu.<br>
                    4. Uji kemungkinan 1: Jika R (Selasa) dan Q (Rabu), maka sisa hari Senin harus diisi oleh P. TAPI syarat menyebutkan "P menolak hari Senin". Berarti pola ini SALAH.<br>
                    5. Uji kemungkinan 2: Jika R (Senin) dan <b>Q (Selasa)</b>, maka P mendapat jadwal hari Rabu. Semua syarat terpenuhi! Maka Q dijadwalkan pada hari <b>Selasa</b>.
                </p>
            `
        },
        {
            cat: "TIU", sub: "Deret Huruf Bertingkat",
            q: "<b>Deret Huruf:</b><br>A, C, F, J, O, ...",
            a: ["S", "T", "U", "V", "W"],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Pola Huruf (Konversi Numerik)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Ubah alfabet menjadi urutan angka agar otak lebih cepat memproses:<br>
                    A (1), C (3), F (6), J (10), O (15).<br>
                    Cek selisihnya: +2, +3, +4, +5.<br>
                    Pola tersebut menunjukkan penambahan yang terus meningkat. Maka loncatan selanjutnya adalah <b>+6</b>.<br>
                    15 + 6 = 21. Huruf ke-21 dalam alfabet adalah <b>U</b>.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🎯 Taktik Mapping Alfabet:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Saat tes CAT, gunakan 1 menit pertama sebelum tes dimulai untuk menuliskan A sampai Z beserta angkanya (1-26) di kertas buram. Otak manusia butuh waktu lebih lama untuk melompat huruf ("habis J lompati K, L, M...") daripada menjumlahkan angka dasar (10 + 5). Konversi ke angka adalah jalan pintas tercepat.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Numerik (Kerja Gabungan)",
            q: "<b>Berhitung Cepat (Kecepatan Kerja):</b><br>Mesin A dapat mencetak 1.000 eksemplar buku dalam waktu 4 jam. Mesin B dapat mencetak jumlah yang sama dalam waktu 6 jam. Jika kedua mesin digunakan secara bersamaan, waktu yang dibutuhkan untuk mencetak 1.000 eksemplar buku adalah...",
            a: ["1 jam 24 menit", "2 jam 24 menit", "2 jam 40 menit", "3 jam 15 menit", "5 jam"],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika Kerja Bersama</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Menggunakan rumus cepat Gabungan Kerja:<br>
                    <b>Waktu Gabungan = (A &times; B) / (A + B)</b><br>
                    Waktu = (4 &times; 6) / (4 + 6) = 24 / 10 = <b>2,4 jam</b>.<br><br>
                    Konversikan 0,4 jam ke dalam menit:<br>
                    0,4 &times; 60 menit = 24 menit.<br>
                    Maka waktu totalnya adalah <b>2 jam 24 menit</b>.
                </p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">💡 Logika Jebakan Angka:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Abaikan angka "1.000 eksemplar". Itu hanyalah variabel konstan (beban kerja yang sama) yang sengaja ditaruh untuk mengecoh agar Anda mencoba mencari kecepatan per eksemplar. Langsung fokus pada variabel waktu (4 jam dan 6 jam) dan masukkan ke rumus silang.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Silogisme (3 Premis)",
            q: "<b>Silogisme (HOTS):</b><br>Semua PNS memiliki NIP.<br>Beberapa guru adalah PNS.<br>Semua yang memiliki NIP berhak menerima tunjangan daerah.<br><br>Kesimpulan yang paling tepat adalah...",
            a: [
                "Semua guru mendapatkan tunjangan daerah", 
                "Beberapa guru berhak menerima tunjangan daerah", 
                "Semua PNS adalah guru", 
                "Tidak ada guru yang mendapat tunjangan daerah", 
                "Beberapa PNS bukan guru"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Logika Kuantor & Silogisme Rantai</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Susun ulang alur logikanya (Modus Barbara):<br>
                    - Premis 1 & 3: PNS ➔ Punya NIP ➔ Berhak Tunjangan. (Kesimpulan sementara: <i>Semua PNS berhak tunjangan</i>).<br>
                    - Gabungkan dengan Premis 2: Karena <i>Beberapa guru adalah PNS</i>, maka guru yang berstatus PNS tersebut otomatis mengikuti aturan PNS.<br>
                    - Kesimpulan Final: <b>Beberapa guru berhak menerima tunjangan daerah.</b>
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">⚡ The "Sebagian" Absolute Rule:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika dalam tumpukan premis terdapat satu saja kata <b>Beberapa / Sebagian / Ada</b>, maka kesimpulan mutlak <b>WAJIB</b> mengandung kata tersebut. Anda bisa langsung mengeliminasi opsi A, C, dan D tanpa perlu membaca keseluruhan kalimatnya.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Numerik (Waktu Berpapasan)",
            q: "<b>Jarak, Kecepatan, Waktu:</b><br>Jarak kota P dan Q adalah 275 km. Rina berangkat dari P ke Q pukul 08.05 dengan kecepatan konstan 52 km/jam. Bima berangkat dari Q ke P di waktu yang sama dengan kecepatan konstan 58 km/jam. Pada pukul berapakah mereka akan berpapasan di jalan?",
            a: ["10.05", "10.35", "11.05", "11.35", "12.05"],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika JKW Berpapasan</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Karena mereka berangkat di waktu yang SAMA, gunakan rumus Papasan Dasar:<br>
                    <b>Waktu (W) = Jarak Total / (Kecepatan 1 + Kecepatan 2)</b><br>
                    W = 275 / (52 + 58) = 275 / 110 = <b>2,5 jam</b>.<br><br>
                    2,5 jam setara dengan 2 jam 30 menit.<br>
                    Waktu Berpapasan = Waktu Berangkat + Lama Perjalanan.<br>
                    08.05 + 02.30 = <b>10.35</b>.
                </p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">🛡️ Taktik Kecepatan Relatif:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Saat dua objek bergerak saling mendekat, kecepatan mereka digabungkan (ditambah) karena mereka saling "memakan" jarak. Jangan pernah mengurangkan kecepatannya. Pengurangan kecepatan hanya berlaku untuk kasus <b>Susul-menyusul</b>.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Analitik (Urutan Posisi)",
            q: "<b>Penalaran Analitis:</b><br>Lima siswa (K, L, M, N, O) dijadwalkan presentasi bergantian. Jadwal diatur berdasarkan syarat berikut:<br>- N harus presentasi sebelum M.<br>- L presentasi tepat pada urutan ketiga.<br>- K tidak boleh presentasi pada urutan pertama maupun terakhir.<br>- M presentasi di urutan kelima.<br>Berdasarkan jadwal tersebut, siapakah yang akan presentasi pada urutan pertama?",
            a: ["K", "L", "M", "N", "O"],
            k: 4,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Penalaran Analitis (Logic Mapping)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Buat 5 slot kosong: [ _ , _ , _ , _ , _ ]<br>
                    1. Masukkan posisi tetap: <b>[ _ , _ , L , _ , M ]</b>.<br>
                    2. Evaluasi K: K dilarang di nomor 1 dan 5. Karena 3 dan 5 sudah penuh, K wajib mengisi nomor 2 atau 4. Pola sementara: [ _ , <b>K</b> , L , <b>K</b> , M ].<br>
                    3. Evaluasi N: N harus presentasi sebelum M. Karena M di urutan 5, N bisa di mana saja sebelum 5.<br>
                    4. Logika sisa: Jika K di urutan 2 dan N di urutan 4 (atau sebaliknya), maka satu-satunya kursi kosong di urutan pertama (1) <b>hanya bisa diisi oleh O</b>.
                </p>
                <div class="p-3 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-emerald-900 mb-1 uppercase tracking-tight">📝 Aturan Slot Kosong:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Dalam soal analitis urutan berantai, cari elemen yang mendapat "penolakan" paling banyak (dalam hal ini K). Elemen dengan syarat negatif ("tidak boleh di...") akan memaksa elemen sisa (yang tidak disebutkan di syarat, seperti O) untuk menempati sisa kursi secara default.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Figural (Serial)",
            q: "<b>Figural (Kelanjutan Pola):</b><br>Perhatikan pergerakan elemen pada tiga kotak pertama untuk menentukan pola di kotak keempat!<br><br>" +
               "<div class='flex gap-3 justify-center mb-6 mt-4'>" +
                   "<div class='w-16 h-16 border-2 border-gray-800 relative bg-white'><div class='absolute top-1 left-1 w-3 h-3 bg-black rounded-full'></div><div class='absolute top-2 left-0 right-0 h-1 bg-red-500'></div></div>" + 
                   "<div class='w-16 h-16 border-2 border-gray-800 relative bg-white'><div class='absolute top-1 right-1 w-3 h-3 bg-black rounded-full'></div><div class='absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-red-500'></div></div>" + 
                   "<div class='w-16 h-16 border-2 border-gray-800 relative bg-white'><div class='absolute bottom-1 right-1 w-3 h-3 bg-black rounded-full'></div><div class='absolute bottom-2 left-0 right-0 h-1 bg-red-500'></div></div>" + 
                   "<div class='w-16 h-16 border-2 border-gray-800 bg-gray-50 flex items-center justify-center text-3xl font-black text-gray-300'>?</div>" + 
               "</div>",
            a: [
                "<div class='w-12 h-12 border-2 border-gray-800 relative mx-auto bg-white'><div class='absolute bottom-1 left-1 w-2.5 h-2.5 bg-black rounded-full'></div><div class='absolute top-2 left-0 right-0 h-1 bg-red-500'></div></div>", 
                "<div class='w-12 h-12 border-2 border-gray-800 relative mx-auto bg-white'><div class='absolute bottom-1 right-1 w-2.5 h-2.5 bg-black rounded-full'></div><div class='absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-red-500'></div></div>", 
                "<div class='w-12 h-12 border-2 border-gray-800 relative mx-auto bg-white'><div class='absolute bottom-1 left-1 w-2.5 h-2.5 bg-black rounded-full'></div><div class='absolute top-1/2 -translate-y-1/2 left-0 right-0 h-1 bg-red-500'></div></div>", 
                "<div class='w-12 h-12 border-2 border-gray-800 relative mx-auto bg-white'><div class='absolute top-1 left-1 w-2.5 h-2.5 bg-black rounded-full'></div><div class='absolute bottom-2 left-0 right-0 h-1 bg-red-500'></div></div>", 
                "<div class='w-12 h-12 border-2 border-gray-800 relative mx-auto bg-white'><div class='absolute top-1 right-1 w-2.5 h-2.5 bg-black rounded-full'></div><div class='absolute top-2 left-0 right-0 h-1 bg-red-500'></div></div>" 
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Logika Posisi Figural</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Pecah fokus Anda menjadi dua elemen independen:<br>
                    1. <b>Titik Hitam:</b> Berpindah 1 sudut searah jarum jam setiap pindah kotak (Kiri Atas ➔ Kanan Atas ➔ Kanan Bawah). Maka di kotak ke-4, titik hitam mutlak berada di sudut <b>Kiri Bawah</b>.<br>
                    2. <b>Garis Merah:</b> Bergerak turun satu level (Atas ➔ Tengah ➔ Bawah). Karena mentok di bawah pada kotak ke-3, siklusnya akan mengulang <i>(looping)</i> kembali ke posisi awal, yaitu di <b>Atas</b>.<br><br>
                    Gabungan elemen yang tepat: Titik Kiri-Bawah dan Garis di Atas. Ini ada pada <b>Opsi A</b>.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🔪 Taktik Isolasi Visual:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan pernah memandang perubahan gambar secara utuh! Lacak elemen pertama (titik hitam) sampai ketemu posisinya. Langsung coret opsi B, D, dan E yang titiknya salah letak. Tersisa A dan C. Baru lacak elemen kedua (garis merah) untuk menentukan jawaban akhir.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Kuantitatif (X vs Y Pecahan)",
            q: "<b>Perbandingan Kuantitatif:</b><br>Diketahui nilai <b>X = 3/8 dari 40%</b> dan <b>Y = 1/4 dari 60%</b>. Hubungan kuantitatif yang paling tepat antara X dan Y adalah...",
            a: [
                "X > Y", 
                "X < Y", 
                "X = Y", 
                "X = 2Y", 
                "Hubungan antara X dan Y tidak dapat ditentukan"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Operasi Hitung Cepat Pecahan</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Kata "dari" dalam matematika berarti dikalikan.<br>
                    Hitung nilai X: (3/8) &times; 40% = (120/8)% = <b>15%</b>.<br>
                    Hitung nilai Y: (1/4) &times; 60% = (60/4)% = <b>15%</b>.<br>
                    Karena kedua ruas menghasilkan persentase yang sama, maka <b>X = Y</b>.
                </p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">⚡ Efisiensi Koma:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jangan membuang waktu mengubah 40% menjadi 0,4. Biarkan saja simbol persennya tetap utuh sebagai variabel bebas, karena Anda hanya perlu membandingkan besaran nominal di depan persen tersebut.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Analogi Verbal",
            q: "<b>Analogi (Logika Sifat/Fungsi):</b><br>API : BAKAR : PANAS = ... : ... : ...",
            a: [
                "Es : Beku : Dingin", 
                "Kayu : Keras : Panjang", 
                "Air : Lembab : Basah", 
                "Udara : Segar : Angin", 
                "Matahari : Terang : Siang"
            ],
            k: 0,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Analogi 3 Kata BKN</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Buat struktur kalimat penghubung spesifik:<br>
                    "<b>[Kata 1]</b> memiliki fungsi untuk <b>[Kata 2]</b> dan memiliki sifat dasar <b>[Kata 3]</b>."<br><br>
                    Terapkan pada soal: <i>Api</i> berfungsi untuk <i>membakar</i> dan memiliki sifat dasar <i>panas</i>.<br>
                    Terapkan pada Opsi A: <i>Es</i> berfungsi untuk <i>membekukan</i> dan memiliki sifat dasar <i>dingin</i>. Hubungan analogi ini selaras sempurna.
                </p>
            `
        },
        {
            cat: "TIU", sub: "Aritmatika Sosial (Keuntungan)",
            q: "<b>Numerik (Harga Jual & Rugi - HOTS):</b><br>Seorang pedagang terpaksa menjual barang seharga Rp240.000, dan dari penjualan tersebut ia mengalami kerugian sebesar 20%. Berapa rupiah seharusnya ia menjual barang tersebut jika ia berbalik ingin mendapatkan keuntungan 10%?",
            a: [
                "Rp300.000", 
                "Rp320.000", 
                "Rp330.000", 
                "Rp350.000", 
                "Rp360.000"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika Sosial Ekonomi</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Langkah 1: Cari Harga Beli Modal Dasar (HB).<br>
                    Rugi 20% berarti harga jual Rp240.000 itu sama dengan 80% dari Modal.<br>
                    HB = Rp240.000 / 0,8 = <b>Rp300.000</b>.<br><br>
                    Langkah 2: Hitung Harga Jual (HJ) baru untuk untung 10%.<br>
                    Untung 10% berarti harga jual baru harus 110% dari Modal.<br>
                    HJ = 110% &times; Rp300.000 = 1,1 &times; 300.000 = <b>Rp330.000</b>.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🚫 The Margin Trap:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Kesalahan pemula: Menghitung 10% dari Rp240.000 lalu menjumlahkannya. Persentase untung/rugi <b>selalu dan hanya boleh</b> dikalikan terhadap Harga Beli (Modal), bukan Harga Jual awal.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Deret Angka (Larik Kompleks)",
            q: "<b>Deret Angka (Lompat 3 Larik):</b><br>4, 7, 9, 8, 14, 18, 16, 21, 27, ..., ...",
            a: [
                "24, 30", 
                "32, 36", 
                "30, 35", 
                "32, 28", 
                "32, 30"
            ],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Aritmatika Deret Kompleks</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Karena deret ini terlihat sangat panjang dan angkanya naik-turun secara fluktuatif, pecahkan menjadi 3 baris deret terpisah (lompat dua angka ke depan):<br>
                    - Larik 1 (Urutan 1, 4, 7...): <b>4, 8, 16, ...</b> (Pola dikali 2). Maka suku keempatnya adalah 16 &times; 2 = <b>32</b>.<br>
                    - Larik 2 (Urutan 2, 5, 8...): <b>7, 14, 21, ...</b> (Pola ditambah 7). Maka suku keempatnya adalah 21 + 7 = <b>28</b>.<br>
                    - Larik 3 (Urutan 3, 6, 9...): <b>9, 18, 27, ...</b> (Pola kelipatan 9).<br><br>
                    Dua angka yang dicari melanjutkan Larik 1 dan Larik 2, yaitu <b>32 dan 28</b>.
                </p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">🔎 Detektor Larik:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika Anda melihat lebih dari 7 angka dalam satu deret soal, persentase kemungkinan itu adalah Deret 2 Larik (Lompat 1) atau Deret 3 Larik (Lompat 2) adalah 90%. Jangan buang waktu menghitung selisih angka yang bersebelahan.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Kuantitatif (Peluang & Kombinasi)",
            q: "<b>Numerik (Kombinatorik):</b><br>Sebuah instansi akan mengirimkan delegasi yang terdiri dari 3 pria dan 2 wanita. Jika kandidat yang tersedia adalah 7 pria dan 5 wanita yang memiliki kompetensi setara, berapa banyak cara penyusunan tim delegasi tersebut?",
            a: [
                "120 cara",
                "210 cara",
                "350 cara",
                "420 cara",
                "720 cara"
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Peluang & Kombinasi</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Karena pemilihan anggota tim tidak memperhatikan jabatan/urutan (acak), gunakan rumus Kombinasi (C).<br>
                    1. Pilih 3 pria dari 7 pria: C(7,3) = (7 &times; 6 &times; 5) / (3 &times; 2 &times; 1) = 35.<br>
                    2. Pilih 2 wanita dari 5 wanita: C(5,2) = (5 &times; 4) / (2 &times; 1) = 10.<br>
                    3. Total cara (kalikan keduanya karena kejadian majemuk): 35 &times; 10 = <b>350 cara</b>.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🚫 Permutasi vs Kombinasi:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Cara instan membedakannya: Jika soal menyebutkan <b>Jabatan</b> (Ketua, Sekretaris) atau <b>Posisi/Urutan</b> (Juara 1, Juara 2), gunakan <i>Permutasi (P)</i>. Jika soal hanya menyebutkan <b>Tim, Kelompok, Delegasi, atau Mengambil Bola</b>, WAJIB gunakan <i>Kombinasi (C)</i>.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Aritmatika Sosial (Umur)",
            q: "<b>Numerik (Soal Cerita Usia):</b><br>Sepuluh tahun yang lalu, umur Ayah adalah 4 kali umur Budi. Saat ini, umur Ayah tepat 2 kali umur Budi. Berapakah umur Budi 5 tahun yang akan datang?",
            a: [
                "15 tahun",
                "20 tahun",
                "25 tahun",
                "30 tahun",
                "35 tahun"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Persamaan Linear Dua Variabel</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Bentuk persamaannya (Misal Ayah = A, Budi = B):<br>
                    1) Kondisi saat ini: A = 2B<br>
                    2) Kondisi 10 tahun lalu: (A - 10) = 4(B - 10)<br><br>
                    Substitusi nilai A ke persamaan 2:<br>
                    (2B - 10) = 4B - 40<br>
                    30 = 2B ➔ B = 15. (Umur Budi <b>sekarang</b> adalah 15 tahun).<br>
                    Pertanyaannya adalah umur Budi <b>5 tahun lagi</b>: 15 + 5 = <b>20 tahun</b>.
                </p>
                <div class="p-3 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-indigo-900 mb-1 uppercase tracking-tight">⚡ Taktik Backsolving (Uji Opsi):</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Benci aljabar? Uji langsung dari opsinya! (Ingat, opsi adalah umur Budi 5 tahun lagi).<br>
                        Uji Opsi B (20): Umur Budi sekarang = 15. Umur Ayah sekarang (2x lipat) = 30.<br>
                        Cek 10 tahun lalu: Budi = 5, Ayah = 20. Apakah 20 itu 4 kali lipat dari 5? YA! Hitungan selesai dalam 15 detik tanpa rumus aljabar.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Silogisme (Kuantor Negatif)",
            q: "<b>Silogisme (HOTS):</b><br>Semua karyawan diwajibkan mengenakan seragam kemeja berlogo perusahaan.<br>Sebagian karyawan divisi lapangan tidak mengenakan dasi saat bertugas.<br><br>Kesimpulan yang pasti benar adalah...",
            a: [
                "Semua karyawan divisi lapangan mengenakan seragam kemeja berlogo perusahaan tanpa dasi.",
                "Sebagian karyawan yang tidak mengenakan dasi bukan karyawan divisi lapangan.",
                "Sebagian karyawan mengenakan seragam kemeja berlogo perusahaan dan tidak mengenakan dasi.",
                "Semua karyawan yang mengenakan dasi pasti bukan karyawan divisi lapangan.",
                "Sebagian karyawan divisi lapangan tidak mengenakan kemeja dan tidak mengenakan dasi."
            ],
            k: 2,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Silogisme Kuantor Campuran</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Premis 1 (Universal Positif): Semua karyawan ➔ Pakai Kemeja.<br>
                    Premis 2 (Partikular Negatif): Sebagian karyawan lapangan ➔ Tidak Pakai Dasi.<br>
                    Berdasarkan hukum logika, "Semua + Sebagian = Sebagian". Karena premis 2 memiliki sifat negatif ("tidak"), maka kesimpulan harus memuat sifat negatif.<br>
                    Gabungannya: Sebagian karyawan (lapangan) mengenakan kemeja (karena aturan wajib "Semua" di premis 1) TAPI tidak mengenakan dasi.
                </p>
                <div class="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-yellow-900 mb-1 uppercase tracking-tight">🔎 Eliminasi Ekstrem:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Jika ada kalimat "Semua X adalah Y", maka tidak mungkin ada X yang bukan Y. Opsi E salah total karena menabrak aturan mutlak Premis 1 (menyebut ada karyawan lapangan yang tidak pakai kemeja). Opsi A salah karena memaksakan kata "Semua" pada subjek lapangan.
                    </p>
                </div>
            `
        },
        {
            cat: "TIU", sub: "Analitik (Pemetaan 3 Kriteria)",
            q: "<b>Penalaran Analitis:</b><br>Posisi parkir 5 mobil (Hitam, Biru, Merah, Putih, Kuning) diatur berjajar dari kiri ke kanan dengan aturan:<br>- Mobil Hitam berada di ujung paling kiri.<br>- Mobil Biru diparkir tepat di sebelah kanan mobil Hitam.<br>- Mobil Putih diapit persis oleh mobil Merah dan mobil Kuning.<br>- Mobil Merah tidak diparkir di ujung susunan.<br>Mobil apakah yang berada tepat di tengah susunan tersebut?",
            a: [
                "Mobil Biru",
                "Mobil Merah",
                "Mobil Putih",
                "Mobil Kuning",
                "Mobil Hitam"
            ],
            k: 1,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Analitik Posisi Horizontal</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Buat 5 slot parkir dari kiri ke kanan: [ 1 ] - [ 2 ] - [ 3 ] - [ 4 ] - [ 5 ]<br>
                    1. Hitam di ujung kiri ➔ <b>[Hitam] - [ _ ] - [ _ ] - [ _ ] - [ _ ]</b><br>
                    2. Biru di kanan Hitam ➔ <b>[Hitam] - [Biru] - [ _ ] - [ _ ] - [ _ ]</b><br>
                    3. Putih diapit Merah & Kuning. Polanya: [Merah-Putih-Kuning] atau [Kuning-Putih-Merah]. Paket 3 mobil ini harus masuk ke slot kosong (3, 4, 5).<br>
                    4. Syarat mutlak: Merah tidak boleh di ujung. Berarti Merah harus di posisi 3. Jika Merah di 5 (ujung kanan), syarat terlanggar.<br>
                    Susunan final: <b>[Hitam] - [Biru] - [Merah] - [Putih] - [Kuning]</b>. Posisi tengah (nomor 3) adalah <b>Merah</b>.
                </p>
            `
        },
        {
            cat: "TIU", sub: "Figural Ketidaksamaan",
            q: "<b>Figural (Odd One Out - CSS Matriks):</b><br>Manakah di antara lima objek berikut yang tidak mengikuti pola kelompok yang sama?<br><br>" +
               "<div class='flex gap-3 justify-center mb-6 mt-4'>" +
                   "<div class='w-14 h-14 bg-white border-2 border-gray-800 flex items-center justify-center relative shadow-sm'><div class='absolute top-1 left-1 w-2 h-2 bg-black rounded-full'></div><div class='absolute bottom-1 right-1 w-2 h-2 bg-black rounded-full'></div><span class='absolute -bottom-6 text-xs font-bold text-gray-500'>A</span></div>" +
                   "<div class='w-14 h-14 bg-white border-2 border-gray-800 flex items-center justify-center relative shadow-sm'><div class='absolute top-1 right-1 w-2 h-2 bg-black rounded-full'></div><div class='absolute bottom-1 left-1 w-2 h-2 bg-black rounded-full'></div><span class='absolute -bottom-6 text-xs font-bold text-gray-500'>B</span></div>" +
                   "<div class='w-14 h-14 bg-white border-2 border-gray-800 flex items-center justify-center relative shadow-sm'><div class='absolute top-1/2 left-1 -translate-y-1/2 w-2 h-2 bg-black rounded-full'></div><div class='absolute top-1/2 right-1 -translate-y-1/2 w-2 h-2 bg-black rounded-full'></div><span class='absolute -bottom-6 text-xs font-bold text-gray-500'>C</span></div>" +
                   "<div class='w-14 h-14 bg-white border-2 border-gray-800 flex items-center justify-center relative shadow-sm'><div class='absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full'></div><div class='absolute bottom-1 right-1 w-2 h-2 bg-black rounded-full'></div><span class='absolute -bottom-6 text-xs font-bold text-gray-500'>D</span></div>" +
                   "<div class='w-14 h-14 bg-white border-2 border-gray-800 flex items-center justify-center relative shadow-sm'><div class='absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full'></div><div class='absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black rounded-full'></div><span class='absolute -bottom-6 text-xs font-bold text-gray-500'>E</span></div>" +
               "</div><br>",
            a: [
                "Objek A",
                "Objek B",
                "Objek C",
                "Objek D",
                "Objek E"
            ],
            k: 3,
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Sumber: Ketidaksamaan Pola Geometri</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    Perhatikan konfigurasi dua titik hitam di dalam setiap kotak.<br>
                    Pada Objek A, B, C, dan E, kedua titik tersebut diletakkan secara <b>simetris</b> (saling berhadapan lurus melewati titik tengah kotak, baik secara diagonal, horizontal, maupun vertikal). Tarik garis lurus dari titik satu ke titik lainnya, garis tersebut pasti membelah kotak tepat di tengah.<br><br>
                    Namun pada <b>Objek D</b>, letak titiknya asimetris (satu di tengah atas, satu di sudut kanan bawah). Garis penghubungnya tidak membelah kotak menjadi dua bagian yang seimbang.
                </p>
                <div class="p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h5 class="text-xs font-bold text-red-900 mb-1 uppercase tracking-tight">🧠 Hack Visual Simetri:</h5>
                    <p class="text-[11px] text-gray-800 leading-relaxed">
                        Soal "Odd One Out" tanpa garis arah biasanya bertumpu pada hukum Keseimbangan Jarak (Simetri). Jika Anda menemukan satu bangun yang terasa berat sebelah atau melenceng sumbunya, itulah jawaban yang dicari.
                    </p>
                </div>
            `
        },
        {
            cat: "TKP", sub: "Pelayanan Publik",
            q: "<b>Pelayanan Publik:</b><br>Anda sedang bertugas di loket pendaftaran. Seorang warga datang dengan marah-marah karena merasa antreannya diserobot oleh orang lain, padahal sistem antrean sudah menggunakan mesin otomatis. Kondisi ruang tunggu saat itu sedang ramai. Tindakan yang paling tepat Anda lakukan adalah...",
            a: [
                "Mengingatkan warga tersebut dengan tegas bahwa antrean sudah diatur mesin, jadi tidak mungkin ada yang menyerobot.",
                "Meminta petugas keamanan untuk menenangkan warga tersebut agar tidak mengganggu pelayanan warga lain.",
                "Meminta maaf atas ketidaknyamanan tersebut, mendengarkan keluhannya sebentar, lalu mengecek nomor antreannya pada sistem untuk memastikan kebenarannya.",
                "Mengabaikan amarahnya dan langsung memintanya duduk kembali sampai nomornya dipanggil agar antrean lain tidak terhambat.",
                "Membawa warga tersebut ke ruangan khusus untuk ditenangkan sambil menjelaskan sistem antrean elektronik yang digunakan instansi."
            ],
            k: 2,
            s: [2, 3, 5, 1, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Menggabungkan empati (meminta maaf & mendengarkan) dengan tindakan taktis dan solutif (mengecek sistem). Ini meredam emosi tanpa menghentikan pelayanan terlalu lama.<br>
                    <b>Poin 4 (Opsi E):</b> Baik untuk meredam emosi, tetapi membawa ke ruangan khusus memakan waktu dan berpotensi menelantarkan loket Anda.<br>
                    <b>Poin 3 (Opsi B):</b> Melempar tanggung jawab ke pihak keamanan. Hanya fokus pada ketertiban, bukan penyelesaian masalah warga.<br>
                    <b>Poin 2 (Opsi A):</b> Terlalu kaku dan defensif. Membantah orang marah hanya akan memperpanjang konflik.<br>
                    <b>Poin 1 (Opsi D):</b> Cuek dan tidak empatik sama sekali. Pelanggaran berat dalam standar pelayanan prima.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Jejaring Kerja",
            q: "<b>Jejaring Kerja:</b><br>Instansi Anda baru saja melakukan mutasi besar-besaran. Anda ditempatkan di tim baru di mana sebagian besar anggotanya adalah pegawai senior yang cenderung bekerja dengan cara lama dan kurang terbuka terhadap ide-ide baru dari pegawai muda seperti Anda. Sikap Anda...",
            a: [
                "Menyesuaikan diri dengan cara kerja mereka agar diterima dalam tim dan menghindari konflik horizontal.",
                "Mengamati pola kerja mereka terlebih dahulu, lalu secara bertahap memberikan masukan inovatif pada momen yang tepat tanpa bermaksud menggurui.",
                "Fokus mengerjakan tugas individu sebaik mungkin sesuai SOP agar penilaian kinerja pribadi tetap aman.",
                "Meminta atasan untuk memindahkan saya ke tim lain yang lebih sefrekuensi dan dinamis.",
                "Langsung mempresentasikan cara kerja baru yang lebih efisien di rapat tim pertama untuk membuktikan kompetensi saya."
            ],
            k: 1,
            s: [2, 5, 3, 1, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Jejaring Kerja & Adaptasi</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Menunjukkan kecerdasan emosional. Ada proses adaptasi (mengamati), menghargai senioritas, namun tetap menjalankan fungsi sebagai agen perubahan (memberi masukan bertahap).<br>
                    <b>Poin 4 (Opsi E):</b> Niatnya baik (inovasi), namun eksekusinya terlalu agresif bagi lingkungan senior, rentan memicu resistensi dan merusak jejaring.<br>
                    <b>Poin 3 (Opsi C):</b> Cenderung individualis. Aman, tapi tidak memberikan kontribusi pada kemajuan tim.<br>
                    <b>Poin 2 (Opsi A):</b> Terlalu pasrah. Menghilangkan potensi inovasi demi kenyamanan semu.<br>
                    <b>Poin 1 (Opsi D):</b> Lari dari masalah dan tidak memiliki kemampuan adaptasi sama sekali.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Sosial Budaya",
            q: "<b>Sosial Budaya:</b><br>Anda ditugaskan di daerah pelosok yang memiliki kebudayaan yang sangat kental. Suatu hari, Anda diundang ke acara adat desa setempat yang menyajikan hidangan yang pantang Anda makan karena alasan keyakinan agama. Kepala desa mempersilakan Anda untuk mencicipinya sebagai bentuk penghormatan. Apa yang Anda lakukan?",
            a: [
                "Menolak dengan tegas namun sopan, menjelaskan bahwa agama saya melarang memakan hidangan tersebut.",
                "Menerima hidangan tersebut dan pura-pura memakannya agar kepala desa tidak tersinggung, lalu membuangnya diam-diam.",
                "Mengucapkan terima kasih atas penghormatannya, meminta maaf karena keyakinan melarangnya, namun memuji hidangan lain yang disajikan dan memakan hidangan lain tersebut.",
                "Meninggalkan acara adat tersebut secara diam-diam karena merasa tidak nyaman dengan situasi tersebut.",
                "Menjelaskan aturan keyakinan saya dan menyarankan kepala desa untuk menyediakan hidangan netral untuk tamu dari luar daerah ke depannya."
            ],
            k: 2,
            s: [4, 2, 5, 1, 3],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya & Toleransi</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Sangat diplomatis. Menolak tanpa menyakiti, mengedepankan komunikasi asertif, dan tetap menghargai tuan rumah dengan memakan hidangan yang halal/aman.<br>
                    <b>Poin 4 (Opsi A):</b> Benar secara prinsip dan sopan, namun kurang luwes secara sosial karena hanya berhenti pada penolakan.<br>
                    <b>Poin 3 (Opsi E):</b> Terkesan menggurui dan mendikte tuan rumah yang punya adat sendiri.<br>
                    <b>Poin 2 (Opsi B):</b> Tidak jujur dan tidak mencerminkan integritas, berisiko ketahuan dan memicu konflik lebih besar.<br>
                    <b>Poin 1 (Opsi D):</b> Sangat tidak sopan dan merusak hubungan sosial dengan masyarakat setempat.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
            q: "<b>Teknologi Informasi & Komunikasi (TIK):</b><br>Instansi tempat Anda bekerja baru saja meluncurkan aplikasi manajemen persuratan baru. Namun, server sering mengalami <i>downtime</i> dan UI/UX-nya membingungkan, sehingga pekerjaan justru menjadi lebih lambat dari sistem manual sebelumnya. Sikap Anda...",
            a: [
                "Tetap menggunakan sistem manual secara diam-diam agar target pekerjaan saya hari itu tetap tercapai tepat waktu.",
                "Menggunakan aplikasi tersebut sebisanya, sambil mengumpulkan catatan <i>error</i> dan keluhan untuk dilaporkan secara resmi ke tim IT/pengembang.",
                "Mengeluhkan ketidaksiapan sistem tersebut di grup WhatsApp kantor agar pimpinan tahu bahwa program ini belum layak pakai.",
                "Mencari tutorial penggunaan di internet dan memaksa diri menggunakan sistem baru meski memperlambat kinerja, karena itu perintah atasan.",
                "Berinisiatif membuat panduan sederhana (manual book) versi saya sendiri untuk dibagikan ke rekan kerja yang kesulitan."
            ],
            k: 1,
            s: [2, 5, 1, 3, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Penguasaan TIK & Inisiatif</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Adaptif dan solutif. Menggunakan fasilitas yang diwajibkan, namun memberikan <i>feedback</i> yang terstruktur agar sistem menjadi lebih baik.<br>
                    <b>Poin 4 (Opsi E):</b> Inisiatifnya sangat bagus dan kooperatif, namun akar masalahnya ada di *error* sistem, bukan sekadar panduan.<br>
                    <b>Poin 3 (Opsi D):</b> Menunjukkan kepatuhan, namun pasif terhadap masalah *downtime* yang terjadi.<br>
                    <b>Poin 2 (Opsi A):</b> Menolak perubahan dan melanggar instruksi peralihan sistem, meski alasannya demi target.<br>
                    <b>Poin 1 (Opsi C):</b> Provokatif dan tidak etis. Mengeluh di ranah informal tidak menyelesaikan masalah teknis.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Profesionalisme",
            q: "<b>Profesionalisme:</b><br>Anda adalah panitia pengadaan barang di instansi. Saudara kandung Anda yang memiliki perusahaan distributor alat tulis kantor (ATK) ikut serta dalam tender proyek instansi Anda. Saudara Anda menjanjikan komisi jika Anda bisa membantu meloloskan perusahaannya, mengingat perusahaannya juga memenuhi kualifikasi standar. Apa yang Anda lakukan?",
            a: [
                "Membantunya lolos karena perusahaannya toh sudah memenuhi kualifikasi standar, sehingga tidak merugikan instansi.",
                "Menolak tawaran komisi tersebut namun tetap membantunya sedikit karena merasa tidak enak hati sebagai saudara.",
                "Melaporkan saudara saya ke pihak berwajib atas tuduhan percobaan penyuapan kepada aparatur negara.",
                "Menolak tegas tawaran tersebut dan menyatakan konflik kepentingan <i>(conflict of interest)</i> kepada atasan, lalu mundur dari kepanitiaan tender terkait proyek tersebut.",
                "Menolak tawarannya dan memastikan proses tender berjalan profesional, namun tidak melaporkan status persaudaraan ini ke atasan agar tidak timbul kecurigaan."
            ],
            k: 3,
            s: [1, 2, 4, 5, 3],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme & Integritas</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi D):</b> Tindakan paling profesional. Mengatasi gratifikasi (menolak) dan mengelola konflik kepentingan secara institusional (melapor dan mundur) agar integritas pengadaan terjaga.<br>
                    <b>Poin 4 (Opsi C):</b> Sangat tegas dan berintegritas, namun pelaporan pidana untuk anggota keluarga mungkin terlalu ekstrem sebagai langkah pertama tanpa peringatan.<br>
                    <b>Poin 3 (Opsi E):</b> Menolak suap itu bagus, tetapi menyembunyikan fakta <i>conflict of interest</i> melanggar asas transparansi ASN.<br>
                    <b>Poin 2 (Opsi B):</b> Gagal mempertahankan integritas karena masih terpengaruh ikatan primordial (nepotisme terselubung).<br>
                    <b>Poin 1 (Opsi A):</b> Menerima suap dan melakukan KKN. Pelanggaran berat moral dan hukum.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Anti Radikalisme",
            q: "<b>Anti Radikalisme:</b><br>Anda mendapati seorang rekan kerja satu ruangan sering memutar ceramah keagamaan dengan volume pelan melalui gawainya saat jam kerja. Beberapa materi yang Anda dengar menarasikan kebencian terhadap ideologi negara dan mengkafirkan pemimpin pemerintahan secara ekstrem. Tindakan paling tepat yang Anda ambil adalah...",
            a: [
                "Menegurnya secara langsung dan menasihatinya bahwa paham tersebut salah dan berbahaya bagi persatuan negara.",
                "Membiarkannya saja karena itu adalah hak privasinya mendengarkan apapun di gawainya, selama tidak mengganggu pekerjaan secara langsung.",
                "Mengumpulkan bukti rekaman suara tersebut dan melaporkannya kepada pimpinan atau bagian kepegawaian (HRD) secara rahasia agar segera ditindaklanjuti.",
                "Menjauhi rekan kerja tersebut dan menghasut teman-teman sekantor untuk mengucilkannya agar ia merasa tidak nyaman.",
                "Berdebat dengannya di ruangan untuk membuktikan bahwa argumen dalam ceramah tersebut cacat logika."
            ],
            k: 2,
            s: [4, 1, 5, 2, 3],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Taktis, objektif, dan berwibawa. Radikalisme di lingkungan ASN adalah pelanggaran serius, penanganannya harus melalui saluran struktural/otoritas, bukan main hakim sendiri.<br>
                    <b>Poin 4 (Opsi A):</b> Punya inisiatif meluruskan penyimpangan, tapi menegur langsung orang yang sudah terpapar paham ekstrem seringkali memicu permusuhan frontal tanpa hasil.<br>
                    <b>Poin 3 (Opsi E):</b> Menguras energi. Berdebat dengan penganut radikalisme seringkali sia-sia dan menciptakan situasi kantor yang *toxic*.<br>
                    <b>Poin 2 (Opsi D):</b> Menghasut dan mengucilkan justru akan mendorong pelaku mencari "kelompok yang sepaham" di luar sana, memupuk bibit radikalnya.<br>
                    <b>Poin 1 (Opsi B):</b> Pembiaran terhadap ancaman ideologi negara adalah kelemahan fatal bagi seorang abdi negara.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Pelayanan Publik",
            q: "<b>Pelayanan Publik:</b><br>Waktu operasional loket pelayanan instansi Anda selesai pukul 15.00. Tepat pada pukul 15.05, ketika Anda sedang mematikan komputer, seorang warga lansia datang dari desa yang jauh untuk mengurus dokumen surat pindah yang sangat ia perlukan untuk pengobatan keesokan harinya. Sikap Anda...",
            a: [
                "Mengarahkan lansia tersebut untuk kembali besok pagi karena sistem di komputer pusat sudah dimatikan dan tidak bisa diakses.",
                "Meminta warga tersebut meninggalkan dokumennya dan berjanji akan memprosesnya paling awal besok pagi sebelum loket dibuka.",
                "Menyalakan kembali komputer Anda dan memproses dokumen tersebut hingga selesai karena pertimbangan jarak dan urgensi medis.",
                "Memarahi petugas <i>security</i> depan karena membiarkan warga masuk setelah jam operasional ditutup, lalu menolak melayani.",
                "Menjelaskan aturan jam kerja, namun menanyakan detail kebutuhannya untuk melihat apakah ada berkas manual yang bisa dibantu siapkan hari ini."
            ],
            k: 2,
            s: [2, 4, 5, 1, 3],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik (Empati Ekstrem)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Dalam TKP BKN, kondisi khusus (Lansia, Jarak Jauh, Urgensi Medis) *selalu* menabrak aturan jam kerja kaku. Pelayanan paripurna menuntut Anda <i>go the extra mile</i>.<br>
                    <b>Poin 4 (Opsi B):</b> Solusi jalan tengah yang baik dan kooperatif, setidaknya warga lansia itu tidak perlu bolak-balik jauh lagi keesokan harinya.<br>
                    <b>Poin 3 (Opsi E):</b> Berusaha membantu tapi masih terkunci pada formalitas.<br>
                    <b>Poin 2 (Opsi A):</b> Kaku birokrasi. Meskipun benar secara aturan, ini menghilangkan unsur empati kemanusiaan.<br>
                    <b>Poin 1 (Opsi D):</b> Melempar kesalahan, arogan, dan tidak memberikan solusi sama sekali.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Jejaring Kerja",
            q: "<b>Jejaring Kerja:</b><br>Anda dan rekan kerja Anda mengerjakan sebuah proyek presentasi bersama. Namun, saat di depan atasan, rekan Anda mempresentasikan seluruh hasilnya dan mengklaim ide-ide brilian di dalamnya sebagai idenya sendiri, tanpa menyebut nama Anda. Apa yang Anda lakukan?",
            a: [
                "Memotong presentasinya di depan atasan untuk mengklarifikasi bahwa ide tersebut adalah hasil pemikiran saya.",
                "Membiarkannya saja karena yang terpenting bagi saya adalah proyek tersebut disetujui oleh atasan.",
                "Menunggu hingga presentasi selesai, lalu berbicara berdua dengannya untuk meminta penjelasan dan menegurnya secara profesional.",
                "Melaporkan perilakunya kepada atasan secara tertulis setelah rapat selesai dengan melampirkan draf kerja asli sebagai bukti.",
                "Membalasnya di proyek selanjutnya dengan cara tidak melibatkannya dalam tugas-tugas penting."
            ],
            k: 2,
            s: [2, 3, 5, 4, 1],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Jejaring Kerja (Manajemen Konflik)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Mengedepankan kedewasaan emosional. Menegur rekan secara pribadi menjaga kehormatannya di depan umum, namun tetap menegakkan batas profesionalisme Anda.<br>
                    <b>Poin 4 (Opsi D):</b> Langkah taktis untuk melindungi hak cipta intelektual Anda, namun sedikit *passive-aggressive* karena melewati komunikasi langsung dengan rekan tersebut.<br>
                    <b>Poin 3 (Opsi B):</b> Terlalu pasif. Anda harus bisa membela kontribusi Anda sendiri demi perkembangan karir.<br>
                    <b>Poin 2 (Opsi A):</b> Respons reaktif yang tidak etis. Berdebat di depan pimpinan akan menjatuhkan nama baik Anda dan rekan Anda sekaligus.<br>
                    <b>Poin 1 (Opsi E):</b> Kekanak-kanakan dan bersifat dendam. Merusak jejaring kerja dalam jangka panjang.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
            q: "<b>Teknologi Informasi & Komunikasi (TIK):</b><br>Anda adalah admin server di sebuah dinas. Pada saat jam sibuk di mana masyarakat sedang banyak mengakses portal pendaftaran CPNS, server dinas Anda mengalami <i>crash</i> dan mati total. Pimpinan sedang rapat di luar kota. Apa tindakan tercepat Anda?",
            a: [
                "Menghubungi pimpinan terlebih dahulu untuk meminta izin melakukan <i>restart</i> server pusat dan perbaikan darurat.",
                "Membuat pengumuman di media sosial instansi bahwa sedang terjadi gangguan teknis sambil segera melakukan perbaikan teknis pada server.",
                "Segera melakukan identifikasi masalah teknis secara mandiri dan me-<i>reboot</i> sistem tanpa menunggu instruksi, karena ini adalah wilayah keahlian saya.",
                "Menunggu teknisi senior dari dinas provinsi turun tangan karena kewenangan saya terbatas hanya pada *maintenance* harian.",
                "Menutup akses website sementara hingga pimpinan kembali agar tidak terjadi <i>loss data</i> pada pelamar."
            ],
            k: 1,
            s: [3, 5, 4, 1, 2],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Penguasaan TIK & Manajemen Krisis</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Mengandung unsur penyelesaian teknis (memperbaiki server) sekaligus mengedepankan manajemen komunikasi publik (pengumuman di medsos) agar masyarakat tidak resah.<br>
                    <b>Poin 4 (Opsi C):</b> Sangat responsif dan inisiatif tinggi secara teknis, namun lupa memitigasi kebingungan masyarakat yang sedang mencoba mengakses portal.<br>
                    <b>Poin 3 (Opsi A):</b> Terlalu birokratis dalam kondisi gawat darurat (Krisis). Untuk hal teknis pada tupoksinya, staf teknis harus bisa ambil keputusan cepat.<br>
                    <b>Poin 2 (Opsi E):</b> Langkah defensif yang salah. Menutup total malah menambah kepanikan publik.<br>
                    <b>Poin 1 (Opsi D):</b> Lepas tangan. Tidak ada usaha untuk setidaknya mendiagnosis atau melakukan pertolongan pertama pada sistem.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Profesionalisme",
            q: "<b>Profesionalisme:</b><br>Hari ini beban kerja Anda sangat padat dan Anda harus mengejar target penyelesaian laporan sore ini. Tiba-tiba, atasan memanggil dan menugaskan Anda untuk mengoordinasikan acara perpisahan kepala dinas yang akan pensiun bulan depan. Tugas ini di luar <i>job description</i> Anda. Respons Anda?",
            a: [
                "Menolak secara halus dengan menunjukkan tumpukan dokumen yang harus saya selesaikan hari ini, dan menyarankan atasan menunjuk pegawai lain yang lebih luang.",
                "Menerima tugas tersebut, mengerjakannya di sela-sela waktu istirahat agar laporan utama saya tetap selesai tepat waktu.",
                "Menerima dengan senang hati dan segera fokus membentuk panitia, lalu menunda pembuatan laporan hingga besok karena acara kepala dinas lebih penting.",
                "Menerima tugas tersebut, namun meminta izin kepada atasan agar *deadline* laporan saya dilonggarkan karena bertambahnya beban tugas.",
                "Menerima tugas tersebut dan meminta rekan kerja saya yang lain untuk ikut patungan tenaga menyelesaikan laporan saya."
            ],
            k: 1,
            s: [3, 5, 1, 4, 2],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme (Manajemen Beban Kerja)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Ciri pegawai unggul. Menunjukkan kesediaan menerima tugas tambahan dari atasan (loyalitas) tanpa mengorbankan kewajiban utamanya (manajemen waktu/kompetensi).<br>
                    <b>Poin 4 (Opsi D):</b> Rasional dan asertif. Berani bernegosiasi batas waktu dengan atasan agar kedua tugas bisa selesai dengan standar kualitas yang baik.<br>
                    <b>Poin 3 (Opsi A):</b> Berani berkata tidak berdasarkan data (dokumen). Profesional, namun nilai loyalitas kepada institusi kurang maksimal.<br>
                    <b>Poin 2 (Opsi E):</b> Menambah beban orang lain untuk urusan *job desc* pribadi. Terkesan *bossy*.<br>
                    <b>Poin 1 (Opsi C):</b> Fatal. Meninggalkan tupoksi/laporan utama yang *deadline* hari ini demi acara *ceremonial* bulan depan adalah manajemen prioritas yang sangat buruk.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Sosial Budaya",
            q: "<b>Sosial Budaya:</b><br>Anda bekerja di lingkungan yang mayoritas pegawainya berasal dari suku yang sama dengan atasan, sementara Anda adalah pendatang. Suatu ketika, instansi mengadakan lomba antar divisi. Anda menyadari bahwa aturan lomba yang dibuat panitia sangat menguntungkan budaya dari mayoritas pegawai lokal dan menyulitkan divisi Anda yang beragam. Tindakan Anda...",
            a: [
                "Protes keras kepada panitia dan mengancam divisi saya tidak akan ikut berpartisipasi karena merasa ada diskriminasi.",
                "Menarik diri dari kepanitiaan atau perlombaan tersebut secara diam-diam untuk menghindari konflik.",
                "Mengikuti perlombaan seadanya saja sebagai bentuk formalitas agar tidak ditegur oleh atasan.",
                "Menemui panitia secara persuasif, memberikan masukan objektif agar aturan lomba dimodifikasi sedikit sehingga lebih inklusif bagi semua peserta.",
                "Menjadikan kendala budaya tersebut sebagai tantangan bagi divisi saya untuk tetap menang dan membuktikan bahwa pendatang juga bisa unggul."
            ],
            k: 3,
            s: [1, 2, 3, 5, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya (Inklusivitas)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi D):</b> Pendekatan komunikasi asertif. Memberikan masukan yang membangun (solutif) untuk menciptakan lingkungan yang inklusif tanpa memicu permusuhan.<br>
                    <b>Poin 4 (Opsi E):</b> Semangat kompetitifnya bagus dan positif, tetapi tidak menyelesaikan akar masalah struktural pada aturan kepanitiaan.<br>
                    <b>Poin 3 (Opsi C):</b> Pasif. Menerima ketidakadilan hanya demi keamanan posisi.<br>
                    <b>Poin 2 (Opsi B):</b> Lari dari masalah dan menunjukkan ketidakmampuan beradaptasi secara sosial.<br>
                    <b>Poin 1 (Opsi A):</b> Reaktif, provokatif, dan kekanak-kanakan. Merusak harmoni lingkungan kerja.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
            q: "<b>Teknologi Informasi & Komunikasi (TIK):</b><br>Rekan kerja Anda sedang cuti sakit. Ia menelepon Anda dan meminta tolong untuk mengisikan absensi kehadirannya secara <i>online</i> menggunakan <i>username</i> dan <i>password</i> miliknya, karena ia takut pemotongan tunjangan jika tidak absen. Ia memohon karena sedang butuh biaya berobat. Apa yang Anda lakukan?",
            a: [
                "Membantunya absen demi alasan kemanusiaan karena ia memang sedang benar-benar sakit dan butuh uang.",
                "Membantunya kali ini saja dan menasihatinya agar tidak mengulanginya lagi di masa depan.",
                "Menolak membantunya dan melaporkan permintaannya ke atasan agar ia diberikan sanksi disiplin.",
                "Menolak secara halus dengan alasan saya takut ketahuan oleh admin IT instansi.",
                "Menolak permintaannya karena melanggar integritas, lalu menyarankan dan membantunya mengurus surat izin/cuti sakit resmi ke bagian kepegawaian."
            ],
            k: 4,
            s: [1, 2, 4, 3, 5],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK & Integritas Data</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi E):</b> Menolak pelanggaran (manipulasi data digital) sekaligus memberikan solusi sesuai prosedur (cuti sakit resmi). Tegas tapi tetap memiliki empati.<br>
                    <b>Poin 4 (Opsi C):</b> Sangat berintegritas, tetapi kurang mengedepankan empati dan pembinaan terhadap rekan yang sedang kesulitan.<br>
                    <b>Poin 3 (Opsi D):</b> Menolak, tapi alasannya salah (takut ketahuan, bukan karena sadar itu salah). Ini mentalitas integritas semu.<br>
                    <b>Poin 2 (Opsi B):</b> Tetap melakukan *fraud* absensi meski hanya sekali. Tidak bisa ditoleransi dalam sistem ASN.<br>
                    <b>Poin 1 (Opsi A):</b> Melakukan manipulasi data absensi elektronik. Pelanggaran berat kode etik TIK dan disiplin.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Profesionalisme",
            q: "<b>Profesionalisme:</b><br>Anda baru saja menyelesaikan draf laporan keuangan tahunan yang sangat penting. Saat berkas sudah dicetak dan siap ditandatangani oleh atasan dalam 10 menit ke depan untuk rapat paripurna, Anda baru menyadari ada kesalahan ketik pada satu digit angka di halaman tengah yang bisa mengubah makna laporan secara minor. Tidak ada yang menyadari selain Anda. Sikap Anda?",
            a: [
                "Membiarkannya saja karena kesalahannya sangat minor dan belum tentu ada yang menyadarinya saat rapat.",
                "Menyampaikan kepada atasan setelah rapat selesai agar rapat paripurna tidak tertunda.",
                "Segera melaporkan kesalahan tersebut kepada atasan, meminta maaf, dan bergegas mencetak ulang halaman yang salah sebelum ditandatangani.",
                "Mencoret angka tersebut dengan pena dan menuliskan perbaikannya di atasnya agar lebih cepat.",
                "Mencetak ulang seluruh laporan secara diam-diam dan menukar dokumennya sebelum atasan masuk ruangan tanpa perlu memberitahu atasan."
            ],
            k: 2,
            s: [1, 2, 5, 3, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme (Tanggung Jawab)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Transparan, mengakui kesalahan, dan melakukan tindakan korektif cepat (mencetak ulang halaman yang salah). Ini menunjukkan akuntabilitas tingkat tinggi.<br>
                    <b>Poin 4 (Opsi E):</b> Solutif dan cepat, namun menyembunyikan kesalahan dari atasan mengurangi nilai transparansi komunikasi.<br>
                    <b>Poin 3 (Opsi D):</b> Cepat, tapi mencoret dokumen resmi keuangan dengan pena sangat tidak profesional dan tidak rapi.<br>
                    <b>Poin 2 (Opsi B):</b> Menunda perbaikan. Jika angka itu dibahas di rapat, institusi yang akan malu.<br>
                    <b>Poin 1 (Opsi A):</b> Lari dari tanggung jawab. Membiarkan kesalahan data masuk ke tingkat paripurna adalah kelemahan fatal seorang profesional.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Anti Radikalisme",
            q: "<b>Anti Radikalisme:</b><br>Saat upacara bendera memperingati Hari Kemerdekaan di kantor, Anda melihat seorang rekan kerja baru menolak melakukan sikap hormat kepada bendera Merah Putih dengan alasan hal tersebut bertentangan dengan prinsip teologinya. Sebagai ASN senior, tindakan Anda...",
            a: [
                "Menegurnya di tempat agar ia segera hormat, karena upacara adalah acara formal instansi.",
                "Membiarkannya karena keyakinan adalah hak asasi manusia yang dilindungi oleh konstitusi.",
                "Melaporkannya kepada pejabat pembina kepegawaian (PPK) atau atasan dengan menyertakan bukti observasi untuk ditindaklanjuti secara institusional.",
                "Menghampirinya setelah upacara dan menasihatinya panjang lebar tentang sejarah perjuangan pahlawan.",
                "Mengajaknya berdiskusi setelah upacara, mendengarkan alasannya, lalu memberikan pemahaman bahwa hormat bendera adalah bentuk cinta tanah air, bukan penyembahan."
            ],
            k: 4,
            s: [2, 1, 4, 3, 5],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme (Pembinaan Wawasan Kebangsaan)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi E):</b> Pendekatan preventif dan persuasif. Sebagai senior, Anda punya peran pembinaan. Meluruskan miskonsepsi (hormat = menyembah) dengan diskusi elegan jauh lebih efektif mengubah *mindset*.<br>
                    <b>Poin 4 (Opsi C):</b> Tindakan prosedural yang benar, namun melempar tanggung jawab pembinaan langsung. Cocok jika tahap persuasif (Opsi E) gagal.<br>
                    <b>Poin 3 (Opsi D):</b> Niatnya baik, tapi menceramahi searah seringkali tidak menyentuh akar teologi yang ia yakini.<br>
                    <b>Poin 2 (Opsi A):</b> Menegur di tengah upacara akan memicu keributan dan merusak kekhidmatan acara.<br>
                    <b>Poin 1 (Opsi B):</b> Pembiaran terhadap penolakan simbol negara oleh seorang ASN adalah bentuk pemakluman terhadap bibit ekstremisme.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Pelayanan Publik",
            q: "<b>Pelayanan Publik:</b><br>Anda bertugas di *front office* dinas kependudukan. Tiba-tiba aliran listrik padam dan UPS (penyimpan daya) rusak. Sistem antrean elektronik dan komputer mati total. Ruang tunggu sangat penuh, panas, dan masyarakat mulai marah karena mereka sudah mengantre sejak subuh. Apa yang harus Anda lakukan segera?",
            a: [
                "Bersembunyi di ruang staf belakang sampai listrik menyala kembali untuk menghindari amuk massa.",
                "Berdiri di depan, meminta maaf dengan pengeras suara portabel/manual, menjelaskan situasi teknis, dan membagikan nomor antrean manual agar ketertiban tetap terjaga.",
                "Meminta petugas keamanan untuk menenangkan massa dan menjaga pintu agar tidak ada yang merusak fasilitas.",
                "Mengumumkan bahwa pelayanan hari ini dihentikan dan meminta masyarakat pulang untuk kembali besok.",
                "Tetap duduk di meja loket dan melayani tanya jawab masyarakat secara manual sebatas kemampuan informasi yang saya ingat tanpa komputer."
            ],
            k: 1,
            s: [1, 5, 3, 2, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik (Kondisi Kedaruratan)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> *Proactive crisis management*. Mengambil kendali situasi, berkomunikasi langsung (empati), dan memberikan solusi konkret darurat (antrean manual) agar warga merasa waktunya tetap dihargai.<br>
                    <b>Poin 4 (Opsi E):</b> Cukup baik karena tetap melayani, tapi membiarkan kekacauan antrean terjadi di ruang tunggu.<br>
                    <b>Poin 3 (Opsi C):</b> Mengandalkan orang lain (keamanan). Hanya meredam gejala, tidak memberi solusi pelayanan.<br>
                    <b>Poin 2 (Opsi D):</b> Mengusir warga tanpa mencoba alternatif manual sangat mencederai pelayanan prima.<br>
                    <b>Poin 1 (Opsi A):</b> Pengecut dan lepas tanggung jawab.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Jejaring Kerja",
            q: "<b>Jejaring Kerja:</b><br>Dalam sebuah rapat tim lintas divisi untuk menentukan konsep kampanye program baru, ide yang Anda usulkan dikritik tajam oleh manajer dari divisi lain. Ia menganggap ide Anda terlalu mahal dan tidak realistis. Padahal Anda sudah menyiapkan data risetnya. Sikap Anda?",
            a: [
                "Diam saja dan menerima kritikan tersebut untuk menghindari debat panjang yang membuang waktu rapat.",
                "Menyerang balik dengan mencari kelemahan dari ide manajer tersebut agar posisi tawar saya seimbang.",
                "Tetap tenang, berterima kasih atas masukannya, lalu secara runtut menyajikan data riset yang telah saya buat untuk menunjukkan *Return of Investment* (ROI) dari ide tersebut.",
                "Mencari dukungan dari rekan divisi saya di ruang rapat tersebut untuk mem-<i>voting</i> agar ide saya tetap diterima.",
                "Menawarkan untuk merevisi ide tersebut dan memangkas anggarannya agar sesuai dengan keinginan manajer divisi lain tersebut."
            ],
            k: 2,
            s: [2, 1, 5, 3, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Jejaring Kerja (Kecerdasan Emosional & Negosiasi)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi C):</b> Menunjukkan kematangan emosi (tidak defensif) dan profesionalisme tinggi (menjawab keraguan dengan data, bukan otot/emosi).<br>
                    <b>Poin 4 (Opsi E):</b> Kompromistis. Bagus untuk menjaga hubungan, tapi Anda mengorbankan kualitas ide sebelum mempertahankan argumen logis Anda.<br>
                    <b>Poin 3 (Opsi D):</b> Memaksakan kehendak lewat adu suara (voting) tanpa menyelesaikan akar perdebatan (masalah anggaran).<br>
                    <b>Poin 2 (Opsi A):</b> Tidak punya pendirian dan gagal mempertahankan *value* kerja diri sendiri.<br>
                    <b>Poin 1 (Opsi B):</b> Reaktif, *toxic*, dan memicu konflik personal lintas divisi.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Sosial Budaya",
            q: "<b>Sosial Budaya:</b><br>Instansi Anda belum memiliki fasilitas jalur khusus kursi roda (ramp) yang memadai. Suatu hari, datang seorang warga penyandang disabilitas (pengguna kursi roda) yang kesulitan menaiki tangga untuk menuju loket pelayanan Anda di lantai dua. Sikap Anda yang paling mencerminkan ASN unggul adalah...",
            a: [
                "Segera turun ke lantai satu, melayani keperluannya di lobi bawah hingga tuntas, lalu mengusulkan ke pimpinan untuk segera membangun fasilitas aksesibilitas.",
                "Meminta bantuan petugas <i>security</i> dan *cleaning service* untuk menggotong kursi roda tersebut naik ke lantai dua.",
                "Meminta maaf dari atas balkon dan menyarankannya untuk menggunakan layanan *online* dari rumah saja.",
                "Menyelesaikan antrean warga yang ada di lantai dua terlebih dahulu, baru kemudian turun ke bawah untuk melayaninya jika waktu memungkinkan.",
                "Turun ke lantai satu untuk mengambil berkasnya, memprosesnya di atas, lalu turun lagi untuk memberikan dokumen yang sudah selesai."
            ],
            k: 0,
            s: [5, 3, 1, 2, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya (Pelayanan Kelompok Rentan)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi A):</b> Solusi komprehensif. Tindakan taktis (jemput bola melayani di bawah secara tuntas) dipadukan dengan tindakan strategis jangka panjang (mengusulkan perbaikan fasilitas ke atasan).<br>
                    <b>Poin 4 (Opsi E):</b> Responsif dan sangat membantu, tapi kurang tuntas dalam penyelesaian sistemik (hanya menjadi "kurir dadakan" tanpa memikirkan perbaikan fasilitas fisik ke depan).<br>
                    <b>Poin 3 (Opsi B):</b> Solutif sesaat, namun berisiko membahayakan fisik penyandang disabilitas tersebut (bisa jatuh saat digotong).<br>
                    <b>Poin 2 (Opsi D):</b> Menomorduakan kelompok rentan (disabilitas punya hak prioritas dalam standar pelayanan publik).<br>
                    <b>Poin 1 (Opsi C):</b> Diskriminatif dan tidak punya empati sama sekali.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
            q: "<b>Teknologi Informasi & Komunikasi (TIK):</b><br>Di grup WhatsApp kantor, atasan Anda sering membagikan tautan artikel berita yang judulnya provokatif. Setelah Anda cek silang (*cross-check*), berita tersebut terbukti sebagai hoaks (informasi palsu). Mayoritas anggota grup hanya membalas dengan stiker jempol atau kata 'Amin'. Tindakan Anda...",
            a: [
                "Ikut merespons dengan stiker jempol agar atasan senang dan saya dianggap bawahan yang loyal.",
                "Membalas pesan tersebut langsung di grup dengan melampirkan *link* klarifikasi dari situs anti-hoaks agar semua anggota grup tercerahkan.",
                "Mendiamkannya saja karena saya tidak ingin terlihat *sok* pintar atau memancing kemarahan atasan di grup.",
                "Menghubungi atasan secara pribadi (Japri), menyampaikan permohonan maaf sebelumnya, lalu memberikan *link* klarifikasi bahwa berita tersebut hoaks.",
                "Mengirimkan artikel edukasi tentang bahaya hoaks ke grup tanpa membalas langsung pesan atasan tersebut."
            ],
            k: 3,
            s: [1, 2, 3, 5, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK (Literasi Digital) & Profesionalisme</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi D):</b> Menunjukkan literasi digital yang kuat sekaligus etika birokrasi. Mengoreksi atasan melalui jalur pribadi (Japri) menjaga wibawa atasan di mata bawahan lain, sehingga beliau tidak merasa dipermalukan.<br>
                    <b>Poin 4 (Opsi E):</b> Cara halus (menyindir edukatif), tapi kurang efektif dan atasan mungkin tidak sadar bahwa *link* yang tadi ia bagikan salah.<br>
                    <b>Poin 3 (Opsi C):</b> Aman tapi apatis. Tidak membantu menghentikan rantai penyebaran hoaks di lingkungan ASN.<br>
                    <b>Poin 2 (Opsi B):</b> Benar secara fakta, salah secara etika pergaulan kantor. Mempermalukan atasan di forum publik/grup akan merusak hubungan kerja.<br>
                    <b>Poin 1 (Opsi A):</b> Turut serta memvalidasi hoaks karena mentalitas *Yes-Man*. Fatal.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Profesionalisme",
            q: "<b>Profesionalisme:</b><br>Anda memiliki keahlian spesifik di bidang analis data yang sangat langka di instansi Anda. Saat ini instansi sedang di tengah transisi reformasi birokrasi yang sangat membutuhkan keahlian Anda. Tiba-tiba, sebuah perusahaan multinasional menawari Anda posisi dengan gaji tiga kali lipat. Sikap Anda?",
            a: [
                "Langsung menerima tawaran tersebut dan segera mengajukan *resign*, karena ini adalah kesempatan emas untuk keluarga saya.",
                "Menolak tawaran tersebut mentah-mentah karena pengabdian kepada negara tidak bisa dinilai dengan uang.",
                "Menggunakan tawaran tersebut sebagai alat negosiasi kepada atasan agar gaji/tunjangan saya dinaikkan di instansi ini.",
                "Mempertimbangkan tawaran tersebut dengan matang, namun tetap memilih menyelesaikan proyek reformasi birokrasi di instansi saat ini secara tuntas sebagai bentuk integritas, sebelum mengambil keputusan karir lebih lanjut.",
                "Menerima tawaran swasta tersebut namun menawarkan diri menjadi konsultan lepas (freelance) bagi instansi agar pekerjaan tidak terbengkalai."
            ],
            k: 3,
            s: [2, 4, 1, 5, 3],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme (Komitmen Institusi)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi D):</b> Sangat rasional dan berintegritas. Memikirkan tawaran karir itu manusiawi (tidak munafik), namun menyelesaikan komitmen/tanggung jawab yang sedang berjalan (transisi instansi) menunjukkan level profesionalisme tertinggi.<br>
                    <b>Poin 4 (Opsi B):</b> Sangat idealis dan patriotik, namun dalam realita tes *assessment*, opsi yang terlampau utopis/heroik tanpa pertimbangan logis seringkali berada di poin 4.<br>
                    <b>Poin 3 (Opsi E):</b> Mencari jalan tengah (*win-win*), tapi fokus utamanya sudah terbelah ke pihak swasta.<br>
                    <b>Poin 2 (Opsi A):</b> Meninggalkan instansi secara mendadak di saat krisis membutuhkan keahlian Anda adalah bentuk lari dari tanggung jawab.<br>
                    <b>Poin 1 (Opsi C):</b> Oportunis dan memeras instansi sendiri. Tidak etis.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Anti Radikalisme",
            q: "<b>Anti Radikalisme:</b><br>Seorang teman masa kecil Anda yang sudah lama tidak bertemu tiba-tiba menghubungi Anda. Ia aktif mengajak Anda berdonasi rutin ke sebuah yayasan panti asuhan. Namun, setelah Anda amati profil yayasannya di media sosial, afiliasi dan tokoh-tokoh yayasan tersebut sering berafiliasi dengan organisasi terlarang yang menentang Pancasila. Tindakan Anda?",
            a: [
                "Memblokir kontaknya tanpa penjelasan karena takut terseret jaringan radikal.",
                "Menolak dengan halus beralasan saya sudah punya pos donasi sendiri, agar hubungan pertemanan tetap terjaga tanpa mendanai kegiatan mereka.",
                "Menasihatinya bahwa yayasan tersebut terindikasi radikal dan menolak memberikan donasi, serta melaporkan ke pihak berwajib jika ia terus memaksa.",
                "Mendonasikan sedikit uang sekadar untuk menghargai teman lama, tapi menolak jika diminta ikut acaranya.",
                "Menggali informasi lebih dalam darinya tentang yayasan tersebut untuk memastikan kecurigaan saya, jika terbukti berbahaya saya akan menolak dan memperingatkannya."
            ],
            k: 4,
            s: [2, 3, 4, 1, 5],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme (Kewaspadaan Dini)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi E):</b> Mengedepankan *analytical thinking* (kewaspadaan dini). Tidak menuduh sembarangan (tabayyun) tapi tetap siaga. Jika terbukti, memberikan peringatan kepada teman adalah langkah mitigasi yang tepat.<br>
                    <b>Poin 4 (Opsi C):</b> Tegas dan prosedural (lapor aparat), namun *jump to conclusion* sebelum menggali kebenaran niat si teman.<br>
                    <b>Poin 3 (Opsi B):</b> Aman untuk diri sendiri, namun apatis. Membiarkan teman tersebut terjerumus dalam pendanaan radikalisme tanpa mencoba memperingatkannya.<br>
                    <b>Poin 2 (Opsi A):</b> Terlalu paranoid dan memutus komunikasi tanpa ada itikad meluruskan.<br>
                    <b>Poin 1 (Opsi D):</b> Memberikan pendanaan (meski kecil) kepada kelompok terlarang. Ini adalah *blunder* terbesar dan tindak pidana terorisme secara tidak langsung.
                </p>
            `
        },
    {
        cat: "TKP", sub: "Anti Radikalisme",
        q: "<b>Anti Radikalisme:</b><br>Anda tergabung dalam grup WhatsApp divisi internal kantor. Belakangan ini, salah satu rekan kerja senior yang cukup disegani sering membagikan tautan artikel dan opini yang secara halus mendiskreditkan ideologi negara dan mempromosikan pandangan intoleran terhadap kelompok minoritas tertentu, dengan dalih diskusi keagamaan. Beberapa staf muda mulai terlihat terpengaruh. Sebagai seorang ASN, tindakan paling strategis yang harus Anda lakukan adalah...",
        a: [
            "Mengabaikannya karena itu hak kebebasan berpendapat di luar jam kerja, dan saya memilih untuk tetap fokus pada pencapaian target kinerja divisi saya.",
            "Mengingatkan beliau secara langsung di grup tersebut agar tidak membahas hal sensitif di luar urusan pekerjaan agar suasana grup tetap kondusif.",
            "Melaporkan tindakan tersebut ke saluran whistleblowing system instansi secara rahasia dengan menyertakan bukti tangkapan layar sebagai bentuk early warning.",
            "Menemui beliau secara empat mata dan memintanya dengan sopan untuk menghapus pesan tersebut karena berpotensi melanggar kode etik dan netralitas ASN.",
            "Segera keluar dari grup WhatsApp tersebut agar rekam jejak digital saya bersih dan tidak terpengaruh atau terbawa masalah hukum di kemudian hari."
        ],
        k: 2,
        s: [2, 3, 5, 4, 1],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme & Jejaring Kerja</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Melaporkan via *whistleblowing system* adalah tindakan paling tepat dan sistemik. Anda memitigasi risiko penyebaran paham radikal dengan instrumen resmi, melindungi identitas, dan memberi bukti konkret.<br>
                <b>Poin 4 (Opsi D):</b> Menegur empat mata menunjukkan keberanian moral, namun berisiko gagal karena faktor senioritas dan tidak ada mitigasi sistemik jika ia mengulanginya.<br>
                <b>Poin 3 (Opsi B):</b> Menegur di grup terbuka cukup reaktif, namun bisa memicu konflik horizontal yang merusak soliditas tim.<br>
                <b>Poin 2 (Opsi A):</b> *Blunder* apatis. Mengabaikan potensi radikalisme dengan dalih kebebasan berpendapat adalah kegagalan ASN dalam memegang teguh nilai Pancasila.<br>
                <b>Poin 1 (Opsi E):</b> *Blunder* fatal. Lari dari masalah (*escapism*) dan hanya mementingkan keselamatan diri sendiri tanpa ada upaya pencegahan terhadap ancaman di lingkungan kerja.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
        q: "<b>Teknologi Informasi dan Komunikasi:</b><br>Instansi Anda baru saja merilis portal layanan publik daring terbaru. Tepat pada hari terakhir batas waktu penyerahan berkas bantuan sosial, server portal tersebut mengalami kelumpuhan total akibat lonjakan trafik. Masyarakat mulai panik dan membanjiri akun media sosial instansi dengan keluhan. Anda adalah Penanggung Jawab (PIC) layanan informasi, namun tim IT sedang kesulitan dihubungi karena fokus memperbaiki server. Langkah Anda...",
        a: [
            "Segera membuat pengumuman resmi di media sosial mengenai gangguan teknis dan merilis tautan formulir pendaftaran darurat berbasis cloud agar pelayanan tetap beroperasi.",
            "Membalas keluhan masyarakat di media sosial secara acak, meminta mereka untuk bersabar karena server sedang down dan tim IT sedang menangani masalah tersebut.",
            "Terus mencoba menghubungi tim IT dan atasan sambil memantau perkembangan keluhan di media sosial, dan menahan diri memberikan pernyataan resmi sebelum ada instruksi.",
            "Menutup sementara kolom komentar dan interaksi media sosial untuk meredam kepanikan dan menjaga citra instansi hingga sistem kembali normal sepenuhnya.",
            "Mencatat semua data keluhan yang masuk untuk diinventarisasi dan melaporkannya kepada atasan keesokan harinya sebagai bahan evaluasi sistem."
        ],
        k: 0,
        s: [5, 4, 3, 1, 2],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK & Pelayanan Publik</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi A):</b> Tindakan sangat proaktif (*agile*). Menerapkan *digital literacy* dengan memanfaatkan *cloud system* sebagai *backup* mitigasi krisis, pelayanan tidak terhenti.<br>
                <b>Poin 4 (Opsi B):</b> Reaktif namun tetap komunikatif. Menunjukkan empati, meski tidak menyelesaikan masalah penyerahan berkas secara langsung.<br>
                <b>Poin 3 (Opsi C):</b> Terlalu kaku pada birokrasi (menunggu instruksi) di saat krisis yang membutuhkan keputusan cepat untuk meredam kemarahan publik.<br>
                <b>Poin 2 (Opsi E):</b> Lambat. Evaluasi memang penting, tapi tidak ada penanganan krisis (*crisis response*) yang diberikan saat publik sedang panik di hari H batas waktu.<br>
                <b>Poin 1 (Opsi D):</b> *Blunder* fatal. Menutup kolom komentar adalah tindakan anti-transparansi, mematikan fungsi pelayanan komunikasi, dan memicu eskalasi kemarahan masyarakat.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Profesionalisme",
        q: "<b>Profesionalisme:</b><br>Anda ditunjuk sebagai ketua panitia seleksi pengadaan vendor di instansi Anda. Salah satu vendor yang mengikuti lelang diketahui merupakan perusahaan milik kerabat jauh dari Kepala Instansi Anda. Sang Kepala Instansi sempat memanggil Anda secara personal dan memberi isyarat halus agar Anda 'memperhatikan dan mengawal' vendor tersebut. Setelah evaluasi, proposal vendor tersebut nyatanya berada di bawah standar kualitas yang ditetapkan. Sikap Anda...",
        a: [
            "Memberikan penilaian ketat sesuai matriks objektif yang telah disepakati dan mendokumentasikan setiap poin kelemahan secara rinci sebagai bukti jika terjadi intervensi lanjutan.",
            "Berkonsultasi dengan anggota panitia lelang lainnya untuk menyamakan persepsi, sehingga keputusan menggugurkan vendor tersebut merupakan keputusan kolektif, bukan individual.",
            "Melaporkan indikasi intervensi atasan ini kepada pihak inspektorat atau lembaga pengawas internal sebelum proses seleksi dilanjutkan ke tahap berikutnya.",
            "Menyesuaikan sedikit skor evaluasi vendor tersebut agar tidak terlihat terlalu buruk demi menjaga hubungan baik dengan atasan, namun tetap memastikan mereka kalah.",
            "Mengundurkan diri dari jabatan ketua panitia dengan alasan pribadi, karena merasa tidak nyaman dengan tekanan conflict of interest yang membahayakan karir Anda."
        ],
        k: 0,
        s: [5, 4, 3, 2, 1],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme & Integritas</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi A):</b> Menunjukkan integritas penuh. Berpegang pada matriks objektif dan melakukan dokumentasi defensif (pencatatan sistematis) untuk memitigasi risiko hukum dan intervensi otoritas di masa depan.<br>
                <b>Poin 4 (Opsi B):</b> Berkolaborasi dan menyebar risiko (*risk sharing*) secara kolektif kolegial, taktik yang baik namun sedikit menunjukkan keraguan personal mengambil sikap tegas.<br>
                <b>Poin 3 (Opsi C):</b> Terlalu prematur. Isyarat atasan masih berupa \"bahasa halus\", melaporkan segera ke inspektorat tanpa bukti intervensi paksa bisa menjadi bumerang birokrasi.<br>
                <b>Poin 2 (Opsi D):</b> *Blunder* kompromi. Memanipulasi nilai, meskipun vendor akhirnya kalah, tetap melanggar prinsip kejujuran dan profesionalisme tata kelola.<br>
                <b>Poin 1 (Opsi E):</b> *Blunder* fatal. Mengundurkan diri adalah bentuk lari dari tanggung jawab abdi negara. Tidak ada resolusi konflik, hanya penghindaran dari masalah.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Sosial Budaya",
        q: "<b>Sosial Budaya:</b><br>Anda bertugas di loket pelayanan publik garis depan. Seorang warga penyandang disabilitas rungu (tuli) datang untuk mengurus dokumen vital. Beliau kesulitan membaca gerak bibir akibat masker yang Anda gunakan, dan Anda tidak memiliki kemampuan bahasa isyarat. Sementara itu, antrean di belakang warga tersebut mulai memanjang dan beberapa orang mulai menggerutu karena proses layanan dirasa terlalu lama. Solusi terbaik yang Anda lakukan adalah...",
        a: [
            "Meninggalkan loket sebentar untuk mencari rekan kerja di ruangan lain yang mungkin memiliki kemampuan dasar bahasa isyarat agar komunikasi lebih cepat.",
            "Memanfaatkan aplikasi speech-to-text di gawai Anda atau mengetik instruksi di layar monitor yang diputar menghadap warga tersebut, sembari meminta maaf secara sopan kepada antrean di belakang.",
            "Menjelaskan perlahan dengan bahasa tubuh seadanya, serta memberikan brosur layanan sambil berharap beliau memahami alurnya secara mandiri.",
            "Meminta maaf dan memberikan kertas kosong agar warga tersebut bisa menuliskan keperluannya di kursi tunggu, sehingga Anda bisa melayani antrean berikutnya terlebih dahulu.",
            "Menyarankan warga tersebut untuk pulang dan kembali lagi besok dengan membawa anggota keluarga yang bisa bertindak sebagai penerjemah demi kelancaran administrasi."
        ],
        k: 1,
        s: [3, 5, 4, 2, 1],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya & Pelayanan Publik</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi B):</b> Tepat sasaran. Menunjukkan *digital literacy* tingkat tinggi untuk mengatasi hambatan sosial budaya (inklusi). Tetap melayani secara paripurna sekaligus mengelola manajemen ekspektasi antrean umum di belakang.<br>
                <b>Poin 4 (Opsi C):</b> Menunjukkan usaha nyata untuk tetap melayani secara mandiri meski alat komunikasinya terbatas.<br>
                <b>Poin 3 (Opsi A):</b> Mendelegasikan mencari bantuan itu baik, namun memakan waktu dan belum tentu ada rekan yang menguasai bahasa isyarat secara *standby*.<br>
                <b>Poin 2 (Opsi D):</b> *Blunder* pelayanan diskriminatif halus. Meminggirkan warga prioritas dari loket utama demi memuaskan antrean umum, melanggar prinsip layanan setara.<br>
                <b>Poin 1 (Opsi E):</b> *Blunder* fatal. Menolak melayani dan membebani warga rentan untuk mencari pendamping adalah pelanggaran serius terhadap hak pelayanan dasar.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Jejaring Kerja",
        q: "<b>Jejaring Kerja:</b><br>Anda adalah pimpinan proyek dari tim lintas divisi yang bekerja dengan sistem remote working (WFH). Terdapat satu anggota tim kunci yang selalu terlambat menyerahkan hasil pekerjaan. Saat dievaluasi, ia sering beralasan bahwa instruksi yang diberikan tertumpuk oleh obrolan lain di grup percakapan sehingga ia terlewat membaca batas waktu (deadline). Keterlambatannya mulai mengancam tenggat waktu proyek secara keseluruhan. Tindakan Anda...",
        a: [
            "Memberikan teguran keras di dalam grup koordinasi agar yang bersangkutan merasa mendapat sanksi sosial dan tidak mengulangi kebiasaan buruknya yang merugikan tim.",
            "Berinisiatif mengambil alih sisa tugas anggota tersebut untuk sementara waktu guna memastikan target penyelesaian proyek dari atasan tidak terancam gagal.",
            "Melakukan evaluasi one-on-one via rapat virtual untuk mencari akar masalah, lalu mengimplementasikan project management tools berbasis cloud dengan fitur penugasan dan pengingat terpusat.",
            "Menghubungi anggota tersebut secara pribadi via telepon setiap kali ada penugasan baru untuk memastikan ia memahami instruksi dan menyadari tenggat waktu yang diberikan.",
            "Membahas kendala ini secara umum dalam rapat evaluasi mingguan dan mengimbau seluruh anggota tim untuk lebih proaktif mengecek riwayat percakapan grup terkait tugas."
        ],
        k: 2,
        s: [1, 2, 5, 4, 3],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Jejaring Kerja & Orientasi pada Hasil</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Pendekatan *HOTS*. Pimpinan efektif tidak sekadar menegur, tapi menganalisa *root-cause* dan memberikan intervensi sistematis berupa pemanfaatan teknologi yang menambal kelemahan komunikasi grup chat biasa.<br>
                <b>Poin 4 (Opsi D):</b> Pendekatan interpersonal yang baik. Namun, ini memicu ketergantungan (*micromanagement*) yang melelahkan pimpinan dalam jangka panjang.<br>
                <b>Poin 3 (Opsi E):</b> Standar birokratis reguler. Himbauan pasif dalam rapat yang seringkali tidak menyelesaikan inti masalah hilangnya pesan penting di grup *chat*.<br>
                <b>Poin 2 (Opsi B):</b> *Blunder* manajerial. Mengambil alih tugas merusak pembagian beban kerja (*workload*) dan membenarkan ketidakdisiplinan anggota (*enabling bad behavior*).<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* fatal. Mempermalukan bawahan di forum terbuka adalah kepemimpinan toksik yang merusak mentalitas dan kekompakan jejaring kerja tim.
            </p>
        `
    },
        {
        cat: "TKP", sub: "Pelayanan Publik",
        q: "<b>Pelayanan Publik:</b><br>Instansi Anda baru saja menerapkan sistem antrean 100% daring (online) untuk mengurangi kerumunan. Seorang warga lanjut usia datang dari desa yang jauh tanpa mengambil nomor antrean karena tidak memiliki *smartphone* dan tidak memahami sistem baru tersebut. Kuota antrean hari itu di sistem sudah penuh, namun Anda melihat ada beberapa warga yang belum hadir sesuai jadwal. Tindakan Anda...",
        a: [
            "Meminta maaf dengan tegas dan menyuruh beliau pulang untuk meminta bantuan perangkat desanya mendaftarkan antrean *online* untuk hari esok sesuai prosedur.",
            "Menjelaskan prosedur baru tersebut dan memberikan nomor antrean manual prioritas (kebijakan khusus) dengan memanfaatkan slot warga yang mangkir, agar beliau tetap terlayani hari ini.",
            "Membantu mendaftarkan beliau menggunakan gawai pribadi Anda untuk antrean besok, dan memintanya untuk menginap di rumah kerabat terdekat.",
            "Melaporkan kelemahan sistem antrean *online* ini kepada pimpinan agar ke depannya disediakan kuota khusus untuk kelompok rentan (lansia/disabilitas).",
            "Menyarankan warga antrean lain untuk mengalah dan memberikan nomor antreannya kepada lansia tersebut karena alasan kemanusiaan."
        ],
        k: 1,
        s: [1, 5, 3, 4, 2],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik & Adaptabilitas</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi B):</b> Sangat *HOTS*. Menunjukkan pelayanan yang inklusif, adaptif, dan solutif. Anda tidak melanggar kuota sistem (memakai slot kosong) sekaligus berempati tinggi pada kelompok rentan tanpa membebani mereka.<br>
                <b>Poin 4 (Opsi D):</b> Pemikiran sistemik yang bagus (evaluasi kebijakan), namun ini solusi jangka panjang, tidak menyelesaikan masalah si lansia yang sudah ada di depan mata hari ini.<br>
                <b>Poin 3 (Opsi C):</b> Cukup membantu mendaftarkan, tapi tetap membebani warga untuk mencari tempat menginap/kembali esok hari padahal ada slot kosong hari ini.<br>
                <b>Poin 2 (Opsi E):</b> Melemparkan tanggung jawab pelayanan kepada masyarakat lain (memaksa warga antre mengalah) memicu konflik horizontal.<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* kaku birokrasi. Mengusir lansia rentan karena alasan administratif adalah kegagalan prinsip *Core Values* BerAKHLAK (Berorientasi Pelayanan).
            </p>
        `
    },
    {
        cat: "TKP", sub: "Jejaring Kerja",
        q: "<b>Jejaring Kerja:</b><br>Dalam tim kerja Anda, terdapat seorang ASN senior yang menolak menggunakan aplikasi e-Kinerja terbaru. Beliau berdalih aplikasi tersebut terlalu rumit dan memilih membuat laporan secara manual. Akibatnya, rekapitulasi kinerja tim selalu terhambat dan mendapat teguran dari pusat. Sebagai rekan kerja yang lebih muda dan paham teknologi, langkah Anda...",
        a: [
            "Melaporkan keengganan senior tersebut kepada atasan agar diberikan teguran resmi karena menghambat penilaian kinerja tim secara keseluruhan.",
            "Menawarkan diri untuk selalu menginputkan data kinerja beliau ke dalam aplikasi setiap bulannya agar target tim tercapai tanpa perlu berdebat.",
            "Mengajak beliau berdiskusi secara personal, mendengarkan kesulitannya, dan menawarkan pendampingan step-by-step setiap kali beliau akan mengisi e-Kinerja.",
            "Membahas masalah ini di grup koordinasi tim agar ada tekanan sosial dari rekan-rekan lain yang juga merasa dirugikan oleh keterlambatannya.",
            "Fokus pada pekerjaan dan pengisian e-Kinerja saya sendiri, karena urusan teknis rekan kerja lain bukanlah bagian dari deskripsi pekerjaan saya."
        ],
        k: 2,
        s: [3, 4, 5, 2, 1],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Jejaring Kerja & Harmonis</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Pendekatan kolaboratif dan menghargai (Harmonis). Anda menjadi agen perubahan (*agent of change*) dengan melakukan transfer pengetahuan (*mentoring*) tanpa menggurui, yang pada akhirnya memberdayakan senior tersebut secara mandiri.<br>
                <b>Poin 4 (Opsi B):</b> Solutif mengamankan target tim jangka pendek, namun menciptakan *bottleneck* baru (ketergantungan) dan tidak mendidik senior untuk adaptif.<br>
                <b>Poin 3 (Opsi A):</b> Ekskalasi ke atasan itu sah, namun menunjukkan Anda kurang proaktif menyelesaikan konflik/kendala di tingkat horizontal sesama rekan kerja.<br>
                <b>Poin 2 (Opsi D):</b> Mempermalukan/mengintimidasi senior lewat *peer-pressure* adalah komunikasi toksik yang merusak iklim kerja.<br>
                <b>Poin 1 (Opsi E):</b> *Blunder* apatis (egosentris). Tidak peduli pada masalah tim padahal dampaknya merugikan rapor instansi keseluruhan.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Sosial Budaya",
        q: "<b>Sosial Budaya:</b><br>Anda ditugaskan menyosialisasikan program kesehatan pemerintah di sebuah desa terpencil. Saat tiba, Anda mendapati masyarakat sangat resisten. Mereka menolak karena tokoh masyarakat setempat menyebarkan informasi tidak benar (*hoax*) bahwa program tersebut bertentangan dengan adat dan agama mereka. Rencana mitigasi Anda adalah...",
        a: [
            "Tetap mengumpulkan warga di balai desa dan memaparkan data medis serta landasan hukum untuk membantah pernyataan tokoh masyarakat tersebut secara logis.",
            "Melaporkan penyebaran hoax tersebut kepada aparat kepolisian terlebih dahulu agar masyarakat takut dan bersedia mengikuti program pemerintah.",
            "Membatalkan sementara sosialisasi umum, lalu melakukan pendekatan persuasif secara tertutup kepada tokoh masyarakat tersebut untuk meluruskan informasi.",
            "Meninggalkan desa tersebut dan melaporkan kepada atasan bahwa program gagal dilaksanakan karena adanya penolakan keras yang mengancam keselamatan.",
            "Menawarkan bantuan sembako atau insentif kepada warga yang bersedia datang ke sosialisasi agar mereka mengabaikan omongan tokoh masyarakat."
        ],
        k: 2,
        s: [3, 2, 5, 1, 4],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya & Komunikasi Persuasif</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Strategi paling taktis dalam budaya komunal. Anda mengidentifikasi bahwa kuncinya ada pada 'tokoh masyarakat' (*opinion leader*). Pendekatan persuasif ke tokoh sentral akan otomatis mengubah pandangan masyarakat di bawahnya tanpa perlu memicu konflik terbuka.<br>
                <b>Poin 4 (Opsi E):</b> Pendekatan transaksional (*insentif*). Bisa jalan, tapi tidak mengedukasi masyarakat tentang kebenaran program kesehatan itu sendiri dan berpotensi pemborosan.<br>
                <b>Poin 3 (Opsi A):</b> Logis tapi buta budaya. Membantah tokoh yang dihormati di depan warganya sendiri akan dianggap sebagai penghinaan (*face-loss*) dan memicu resistensi yang lebih keras.<br>
                <b>Poin 2 (Opsi B):</b> Menggunakan ancaman aparat penegak hukum (intimidatif) pada masyarakat akar rumput justru menghilangkan kepercayaan (*trust*) pada pemerintah.<br>
                <b>Poin 1 (Opsi D):</b> *Blunder* menyerah tanpa ada upaya penyelesaian hambatan (*zero effort*).
            </p>
        `
    },
    {
        cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
        q: "<b>Teknologi Informasi dan Komunikasi:</b><br>Sistem Pemerintahan Berbasis Elektronik (SPBE) di instansi Anda sangat ketat. Suatu siang, rekan kerja Anda panik karena akunnya terkunci (*lockout*). Ia meminta *password* akun Anda karena ia harus segera mencetak dokumen sangat rahasia untuk rapat penting Pimpinan dalam 10 menit. Jika tidak, Pimpinan akan marah besar pada divisi kalian. Keputusan Anda...",
        a: [
            "Memberikan *password* saya hanya untuk kali ini saja karena keadaannya sangat mendesak demi kelancaran rapat Pimpinan.",
            "Menolak dengan tegas memberikan *password* dan menyuruhnya segera menghubungi tim IT untuk mereset akunnya, risiko dimarahi pimpinan adalah tanggung jawabnya.",
            "Meminjamkan komputer saya dalam kondisi saya yang sudah *login*, mengawasinya mencetak dokumen tersebut, lalu segera *log out*.",
            "Saya sendiri yang akan membuka *file* tersebut, mencetaknya dari akun saya, dan menyerahkan dokumen fisiknya kepada rekan tersebut.",
            "Menegurnya karena ceroboh tidak menjaga akunnya dengan baik di saat genting, kemudian baru memikirkan cara membantunya."
        ],
        k: 3,
        s: [1, 3, 4, 5, 2],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK & Profesionalisme (Cyber Security)</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi D):</b> Menggabungkan keandalan (*agility*) kerja dengan kedisiplinan *cyber security*. Anda membantu mencetak dokumen (orientasi hasil) *tanpa* melanggar protokol keamanan akses akun Anda sedikitpun.<br>
                <b>Poin 4 (Opsi C):</b> Membantu dan mengawasi, namun mengizinkan orang lain mengoperasikan *device* yang *login* pakai akun kita tetap menyalahi prosedur IT standar (*shoulder surfing risk*).<br>
                <b>Poin 3 (Opsi B):</b> Aman secara IT, tapi terlalu kaku (*robot birokrasi*) dan membiarkan krisis terjadi di instansi padahal ada solusi sementara yang bisa ditawarkan.<br>
                <b>Poin 2 (Opsi E):</b> Mengedepankan emosi (marah) di saat krisis yang membutuhkan tindakan cepat. Buang-buang waktu.<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* fatal. Berbagi *password* (Credential Sharing) adalah dosa terbesar dalam protokol keamanan SPBE, apapun alasannya.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Profesionalisme",
        q: "<b>Profesionalisme:</b><br>Anda baru saja dipromosikan dan mendapatkan fasilitas mobil dinas yang cukup mewah. Menjelang libur panjang akhir pekan, istri/suami Anda meminta agar mobil tersebut digunakan untuk perjalanan pulang kampung keluarga. Pasangan Anda beralasan bahwa banyak pejabat lain yang diam-diam melakukan hal serupa dan tidak pernah ada sanksi tegas karena plat nomor bisa diganti plat hitam sementara. Sikap Anda...",
        a: [
            "Menuruti permintaan pasangan demi menjaga keharmonisan rumah tangga, dengan catatan saya akan menanggung sendiri biaya bensin dan perawatannya.",
            "Berdalih bahwa mobil tersebut sedang mengalami kerusakan mesin sehingga harus masuk bengkel, agar pasangan tidak memaksa lagi.",
            "Memberikan edukasi kepada pasangan dengan tegas namun lembut bahwa fasilitas negara diharamkan untuk kepentingan pribadi, apa pun alasannya dan tidak mempedulikan pejabat lain.",
            "Bertanya kepada atasan terlebih dahulu apakah ada toleransi kebijakan peminjaman kendaraan dinas untuk hari libur jika tidak ada kegiatan kantor.",
            "Menolak permintaan tersebut namun menjanjikan akan menyewa mobil lain yang setara mewahnya dengan biaya pribadi agar keluarga tetap senang."
        ],
        k: 2,
        s: [1, 3, 5, 2, 4],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme & Integritas Anti-Korupsi</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Integritas absolut. Menolak penyalahgunaan wewenang dan menularkan nilai integritas ke keluarga terdekat (edukasi), serta tidak terpengaruh *peer pressure* (pejabat lain).<br>
                <b>Poin 4 (Opsi E):</b> Menolak gratifikasi/penyalahgunaan fasilitas, dan memberikan kompensasi wajar dari kantong pribadi. Namun kurang ada elemen mengedukasi nilai anti-korupsi pada pasangan.<br>
                <b>Poin 3 (Opsi B):</b> Tujuannya benar (menolak), tapi caranya salah karena berbohong. ASN yang berintegritas berani jujur menyatakan aturan, bukan beralasan.<br>
                <b>Poin 2 (Opsi D):</b> Berkompromi dengan aturan. Aturan larangan penggunaan mobil dinas untuk pribadi sudah jelas, menanyakan toleransi kepada atasan menunjukkan kurangnya pemahaman etika dasar.<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* koruptif. Menggunakan fasilitas negara untuk pribadi (dan memalsukan plat) adalah bentuk korupsi dan gratifikasi, meskipun Anda membayar bensinnya sendiri.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Pelayanan Publik",
        q: "<b>Pelayanan Publik:</b><br>Sebuah video yang menampilkan bawahan Anda sedang berdebat keras dengan seorang warga di ruang pelayanan mendadak viral di media sosial. Netizen secara membabi buta menghujat instansi Anda. Setelah Anda investigasi melalui rekaman CCTV utuh, ternyata warga tersebut yang memicu keributan karena menolak mengikuti prosedur hukum dan mengeluarkan kata-kata kasar, sementara bawahan Anda hanya terpancing emosinya sesaat. Tindakan Anda sebagai pimpinan...",
        a: [
            "Menjatuhkan sanksi skorsing kepada bawahan tersebut untuk meredam kemarahan publik demi menyelamatkan citra instansi.",
            "Mengabaikan video viral tersebut hingga reda sendirinya, karena memberikan klarifikasi seringkali justru memperpanjang masalah (Streisand Effect).",
            "Membela bawahan Anda secara agresif di kolom komentar akun-akun gosip dengan menyatakan bahwa warga tersebut yang salah dan melanggar aturan.",
            "Memberikan teguran tertulis kepada bawahan karena kehilangan kontrol emosi, lalu merilis pernyataan maaf normatif kepada publik di akun resmi.",
            "Merilis klarifikasi resmi dan kronologi objektif (dengan bukti CCTV) secara santun di kanal resmi instansi, tanpa menyerang balik warga, serta tetap mengevaluasi bawahan."
        ],
        k: 4,
        s: [1, 3, 2, 4, 5],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik & Manajemen Krisis</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi E):</b> *HOTS Crisis Management*. Pimpinan yang tangguh berani mengedepankan transparansi objektif. Membela kebenaran staf dengan bukti (CCTV), mendinginkan suasana dengan bahasa santun, namun tetap mengevaluasi profesionalisme internal.<br>
                <b>Poin 4 (Opsi D):</b> Prosedural namun pasif. Hanya meminta maaf tanpa meluruskan fakta membuat instansi tetap dicap buruk dan menjatuhkan moral bawahan yang sebenarnya berada di posisi benar.<br>
                <b>Poin 3 (Opsi B):</b> *Apatis*. Pembiaran krisis yang merusak kepercayaan publik (*public trust*) dalam jangka panjang.<br>
                <b>Poin 2 (Opsi C):</b> Reaktif dan tidak profesional. Berdebat dengan *netizen* di akun gosip merendahkan marwah instansi pemerintah.<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* fatal (Pimpinan Toksik). Mengorbankan bawahan (*throwing under the bus*) yang pada dasarnya menjadi korban warga arogan, semata-mata demi *PR (Public Relations)* yang semu.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
        q: "<b>Teknologi Informasi dan Komunikasi:</b><br>Anda menerima email dengan subjek 'URGENT: Pembaruan Data Kepegawaian BKN 2026' yang mengarahkan Anda untuk mengklik tautan formulir eksternal. Email tersebut terlihat sangat meyakinkan dengan logo instansi, namun setelah Anda perhatikan, alamat pengirimnya menggunakan domain yang sedikit aneh (misal: admin-bkd@gmail.go-id.com). Jika tidak diisi hari ini, ancamannya adalah penundaan pencairan tunjangan. Tindakan Anda...",
        a: [
            "Membalas email tersebut untuk meminta konfirmasi apakah formulir ini benar-benar resmi dari pusat sebelum saya membagikannya ke rekan lain.",
            "Mengklik tautan tersebut hanya untuk melihat data apa saja yang diminta, namun saya tidak akan mengisinya sampai ada instruksi dari atasan.",
            "Segera mengisi data yang diminta karena ancaman penundaan tunjangan sangat merugikan kebutuhan finansial keluarga saya.",
            "Mengabaikan email tersebut dan menunggu surat edaran fisik atau pengumuman resmi di grup WhatsApp kantor.",
            "Tidak mengklik tautan apa pun, segera melaporkan email tersebut ke tim IT/Helpdesk instansi sebagai indikasi *phishing*, dan memperingatkan rekan kerja di grup divisi."
        ],
        k: 4,
        s: [3, 2, 1, 4, 5],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK & Literasi Digital (Cyber Security)</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi E):</b> Menggambarkan kompetensi *Smart ASN* dengan *cyber awareness* tinggi. Tidak sekadar mengamankan diri sendiri, tapi mengamankan jaringan instansi dengan melapor (mitigasi) dan memperingatkan orang lain (*early warning*).<br>
                <b>Poin 4 (Opsi D):</b> Aman untuk diri sendiri, namun pasif. Membiarkan ancaman *cyber* menyebar ke rekan kerja lain yang mungkin kurang literasi.<br>
                <b>Poin 3 (Opsi A):</b> Polos. Membalas email *phishing/scam* sama dengan mengonfirmasi bahwa alamat email Anda aktif, membuat Anda jadi target serangan lanjutan.<br>
                <b>Poin 2 (Opsi B):</b> *Blunder* teknis. Mengklik tautan asing bisa memicu unduhan *malware/ransomware* secara otomatis di latar belakang (*drive-by download*).<br>
                <b>Poin 1 (Opsi C):</b> *Blunder* fatal. Termakan *social engineering* (urgensi/ancaman) dan menyerahkan data pribadi/negara kepada pihak tidak bertanggung jawab.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Sosial Budaya",
        q: "<b>Sosial Budaya:</b><br>Ada seorang pegawai baru di divisi Anda yang berasal dari daerah dengan kebudayaan dan kepercayaan minoritas. Ia memiliki aturan pantangan makan (dietari) yang sangat ketat sesuai keyakinannya. Hal ini membuatnya selalu absen setiap kali divisi mengadakan makan siang bersama untuk *bonding*, sehingga ia mulai terlihat terisolasi secara sosial dari dinamika tim. Sikap Anda...",
        a: [
            "Menyarankan pegawai baru tersebut untuk beradaptasi dengan mayoritas dan sedikit melonggarkan aturannya sesekali agar tidak terkesan antisosial.",
            "Mengingatkan anggota tim lain agar memaklumi ketidakhadiran pegawai tersebut karena kita harus menghargai keberagaman beragama.",
            "Secara proaktif mengusulkan agar lokasi makan siang divisi selanjutnya dirotasi ke tempat yang memiliki menu aman untuk pantangan pegawai baru tersebut.",
            "Mendekatinya secara personal dan memintanya merekomendasikan tempat makan, sehingga tanggung jawab memilih lokasi ada padanya.",
            "Membiarkannya membawa bekal sendiri dari rumah dan memintanya tetap ikut duduk bersama di restoran meskipun ia tidak memesan makanan di sana."
        ],
        k: 2,
        s: [1, 3, 5, 4, 2],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya & Lingkungan Inklusif</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Solusi kepemimpinan yang inklusif (*HOTS*). Mengubah sistem/kebiasaan kelompok secara fleksibel untuk mengakomodasi minoritas, memastikan *bonding* tim terjadi tanpa melanggar prinsip siapa pun.<br>
                <b>Poin 4 (Opsi D):</b> Niatnya baik, namun membebani pegawai minoritas tersebut dengan tanggung jawab menyetir kelompok, yang bisa membuatnya merasa canggung.<br>
                <b>Poin 3 (Opsi B):</b> Toleran di permukaan, tapi membiarkan eksklusi sosial (isolasi) tetap terjadi secara sistemik di dalam tim.<br>
                <b>Poin 2 (Opsi E):</b> Menimbulkan kecanggungan sosial yang parah. Membawa bekal ke restoran luar seringkali melanggar aturan tempat makan dan membuatnya makin merasa diasingkan.<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* intoleransi. Memaksa seseorang melanggar keyakinannya demi asimilasi mayoritas adalah pelanggaran berat *Core Values* ASN (Harmonis & Kebinekaan).
            </p>
        `
    },
    {
        cat: "TKP", sub: "Anti Radikalisme",
        q: "<b>Anti Radikalisme:</b><br>Anda mendapati seorang staf junior yang sangat cerdas dan kinerja kerjanya luar biasa, belakangan ini sering menyukai (like) dan membagikan (share) konten-konten dari tokoh media sosial yang tidak terverifikasi. Konten tersebut secara halus menyebarkan narasi anti-pemerintah, mendelegitimasi konstitusi, dan memprovokasi kebencian pada kelompok tertentu. Sebagai atasannya, langkah Anda...",
        a: [
            "Mendokumentasikan aktivitas digitalnya dan melaporkannya ke komite kode etik instansi agar dilakukan pembinaan ideologi secara resmi dan profesional.",
            "Memanggilnya secara tertutup, mengkonfrontasi jejak digitalnya, dan memberikan teguran keras terkait sumpah netralitas serta loyalitas ASN.",
            "Membalas atau mengomentari postingannya dengan narasi pemerintah dan data yang benar, agar ia sadar bahwa instansi mengawasi aktivitasnya.",
            "Meminta rekan kerjanya yang lain untuk menjauhi staf tersebut agar pemikiran radikalnya tidak menyebar ke dalam ekosistem kantor.",
            "Mengabaikannya karena itu adalah akun media sosial pribadinya dan kinerjanya di kantor tetap objektif dan sangat memuaskan."
        ],
        k: 0,
        s: [5, 4, 2, 1, 3],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme & Loyalitas ASN</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi A):</b> Pendekatan manajerial terukur. Radikalisme digital adalah masalah ideologis serius. Melaporkan dengan bukti ke otoritas internal memastikan pembinaan yang terstruktur tanpa bias personal, sesuai nilai *Loyal*.<br>
                <b>Poin 4 (Opsi B):</b> Tegas dan langsung, namun berisiko membuat staf tersebut defensif, *playing victim*, dan mulai menyembunyikan jejak digitalnya (*private account*) tanpa mengubah ideologinya.<br>
                <b>Poin 3 (Opsi E):</b> Memisahkan kinerja dan ideologi adalah *blunder* laten. Kinerja bagus tidak membatalkan potensi ancaman ideologi radikal di tubuh birokrasi.<br>
                <b>Poin 2 (Opsi C):</b> Terlibat debat/perang komentar di ruang publik (*medsos*) adalah tindakan tidak elegan bagi seorang atasan dan menurunkan wibawa birokrasi.<br>
                <b>Poin 1 (Opsi D):</b> *Blunder* kepemimpinan (toksik). Melakukan pengucilan/pembunuhan karakter secara diam-diam tanpa ada proses pembinaan sama sekali.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Profesionalisme",
        q: "<b>Profesionalisme:</b><br>Sebagai petugas perizinan, Anda melayani seorang *influencer* lokal (Selebgram) yang mengurus izin usahanya. Anda memprosesnya sesuai SOP tanpa perlakuan khusus. Namun keesokan harinya, *influencer* tersebut membuat video ulasan yang sangat memuji pelayanan Anda di akunnya yang memiliki jutaan pengikut. Di akhir video, ia sengaja 'menandai' (*tag*) akun media sosial bisnis sampingan pribadi Anda, sehingga bisnis Anda mendadak kebanjiran pembeli. Tindakan Anda...",
        a: [
            "Mensyukuri hal tersebut sebagai rezeki tak terduga (organik), toh saya tidak pernah meminta hal tersebut dan saya melayaninya sesuai standar prosedur.",
            "Segera me-repost ulasan tersebut di akun bisnis saya untuk memaksimalkan momentum promosi gratis, mumpung tidak ada uang gratifikasi yang terlibat.",
            "Mengucapkan terima kasih secara profesional, namun dengan tegas memintanya untuk menghapus tag akun bisnis saya dan mengarahkannya untuk men-tag akun instansi resmi saja.",
            "Melaporkan kejadian ini kepada Unit Pengendalian Gratifikasi (UPG) di instansi sebagai bentuk transparansi, sambil tetap membiarkan video tersebut tayang.",
            "Menghubunginya dan menawarkan bantuan jalur prioritas jika di kemudian hari ia atau keluarganya membutuhkan perizinan lagi sebagai balasan budi."
        ],
        k: 2,
        s: [3, 2, 5, 4, 1],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme & Konflik Kepentingan (CoI)</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Integritas absolut level *HOTS*. Menyadari bahwa promosi bisnis pribadi adalah bentuk 'gratifikasi tidak langsung' (*indirect gratification*). Meminta *take down tag* menunjukkan batas tegas antara jabatan publik dan keuntungan privat.<br>
                <b>Poin 4 (Opsi D):</b> Prosedural (melapor UPG), namun pasif secara moral karena membiarkan diri tetap menikmati keuntungan (pembeli baru) dari konflik kepentingan tersebut.<br>
                <b>Poin 3 (Opsi A):</b> Rasionalisasi yang salah. Berlindung di balik kata 'tidak meminta', padahal ASN dilarang keras menerima keuntungan komersial akibat dari posisi/jabatannya.<br>
                <b>Poin 2 (Opsi B):</b> *Aji mumpung*. Memanfaatkan *privilege* layanan publik untuk mengomersialisasi bisnis pribadi, jelas melanggar etika profesionalisme.<br>
                <b>Poin 1 (Opsi E):</b> *Blunder* fatal. Berubah menjadi perilaku koruptif tulen (Korupsi, Kolusi, dan Nepotisme) dengan memperdagangkan pengaruh jalur prioritas.
            </p>
        `
    },
        {
            cat: "TKP", sub: "Anti Radikalisme",
            q: "<b>Anti Radikalisme:</b><br>Sebagai kepala sub-bagian, Anda mendeteksi perubahan drastis pada staf terbaik Anda. Ia menjadi tertutup, sering menyendiri, dan mengunggah konten yang mengandung kebencian terhadap kelompok tertentu dengan dalih 'pemurnian ajaran'. Langkah strategis Anda?",
            a: [
                "Memberikan teguran keras secara resmi karena aktivitas media sosialnya sudah melanggar kode etik ASN.",
                "Melakukan pendekatan personal, mendengarkan kegelisahannya, dan memberikan perspektif moderat tanpa menghakimi.",
                "Memindahkan staf tersebut ke unit kerja yang tidak bersentuhan dengan masyarakat agar pahamnya tidak menyebar.",
                "Membiarkannya selama kinerjanya di kantor masih memenuhi target dan tidak mengganggu rekan kerja lain secara langsung.",
                "Melaporkan indikasi perubahan perilaku tersebut secara tertulis kepada unit intelijen internal untuk dilakukan profiling."
            ],
            k: 1,
            s: [3, 5, 2, 1, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-red-100 text-red-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme (Pencegahan & Pembinaan)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Strategi <i>soft approach</i>. Sebagai atasan langsung, Anda adalah benteng pertama. Pendekatan personal bertujuan untuk <i>early warning</i> dan deradikalisasi mandiri sebelum terpapar lebih jauh.<br>
                    <b>Poin 4 (Opsi E):</b> Langkah prosedural yang tepat jika Anda merasa tidak memiliki kompetensi untuk membujuknya. Melibatkan unit profesional (intelijen/etik) menunjukkan kewaspadaan organisasi.<br>
                    <b>Poin 3 (Opsi A):</b> Bersifat reaktif dan administratif. Teguran keras tanpa memahami akar masalah justru bisa membuat staf tersebut merasa makin terasing (ter-marginalkan) dan mempercepat radikalisasi.<br>
                    <b>Poin 2 (Opsi C):</b> Langkah pengecut. Memindahkan masalah ke unit lain (<i>shifting the problem</i>) tanpa menyelesaikan inti radikalismenya.<br>
                    <b>Poin 1 (Opsi D):</b> Sikap permisif yang fatal. Radikalisme bukan soal kinerja, tapi soal ancaman ideologi negara. Membiarkannya adalah pembiaran terhadap benih terorisme di dalam birokrasi.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Teknologi Informasi & Komunikasi",
            q: "<b>TIK:</b><br>Instansi Anda bermigrasi ke sistem data terpusat. Anda menemukan rekan kerja sering berbagi kata sandi akses database melalui grup chat pribadi dengan alasan mempercepat koordinasi saat ada rekan yang cuti. Sebagai penanggung jawab data, tindakan Anda?",
            a: [
                "Menegur mereka di dalam grup chat agar semua orang tahu bahwa itu tindakan yang melanggar keamanan siber.",
                "Mengusulkan kepada pimpinan untuk mengadakan pelatihan keamanan siber (security awareness) bagi seluruh pegawai.",
                "Membiarkan praktik tersebut karena memang terbukti mempercepat alur kerja saat keadaan darurat atau urgen.",
                "Menonaktifkan sementara akun yang terdeteksi berbagi sandi dan mewajibkan mereka mengikuti edukasi ulang prosedur keamanan.",
                "Mengusulkan penerapan Multi-Factor Authentication (MFA) dan memperketat kebijakan tata kelola akses data secara tertulis."
            ],
            k: 4,
            s: [2, 3, 1, 4, 5],
            pembahasan: `
                <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK (Keamanan Informasi)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi E):</b> Solusi sistemik dan berkelanjutan. Mengatasi kelemahan manusia (berbagi sandi) dengan teknologi (MFA/2FA) adalah standar tertinggi manajemen keamanan data.<br>
                    <b>Poin 4 (Opsi D):</b> Tindakan korektif yang tegas. Memberikan efek jera pada pelaku sekaligus memastikan mereka memahami risiko sebelum akun dibuka kembali.<br>
                    <b>Poin 3 (Opsi B):</b> Langkah edukatif jangka panjang, namun tidak menyelesaikan ancaman keamanan yang sedang berlangsung saat ini.<br>
                    <b>Poin 2 (Opsi A):</b> Kurang profesional. Menegur di ruang publik bisa merusak hubungan kerja tanpa menjamin keamanan sistem akan membaik.<br>
                    <b>Poin 1 (Opsi C):</b> <i>Worst practice</i>. Menukar keamanan data dengan 'kenyamanan kerja' adalah pelanggaran berat dalam tata kelola TIK pemerintah.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Pelayanan Publik",
            q: "<b>Pelayanan Publik:</b><br>Seorang penyandang disabilitas (tuli) datang ke loket Anda saat petugas khusus bahasa isyarat sedang tidak di tempat. Antrean sangat panjang dan warga mulai tidak sabar. Apa tindakan proaktif Anda?",
            a: [
                "Meminta warga tersebut menunggu sampai petugas khusus kembali agar tidak ada kesalahan informasi.",
                "Memanfaatkan fitur <i>live transcribe</i> di ponsel untuk berkomunikasi atau menggunakan media tulis secara sabar dan efisien.",
                "Meminta bantuan warga lain di dalam antrean untuk mencoba menerjemahkan apa yang dimaksud.",
                "Menyarankan warga tersebut pulang dan kembali lagi esok hari saat petugas khusus dipastikan ada di tempat.",
                "Melayani semampunya dengan bahasa isyarat dasar meski Anda sadar banyak poin penting yang terlewat."
            ],
            k: 1,
            s: [3, 5, 2, 1, 4],
            pembahasan: `
                <div class="mb-3"><span class="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik (Inklusivitas & Inovasi)</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Menunjukkan <i>digital literacy</i> dan empati tinggi. Anda tidak menyerah pada keterbatasan fisik/staf dan menggunakan teknologi sebagai jembatan pelayanan.<br>
                    <b>Poin 4 (Opsi E):</b> Menunjukkan kemauan melayani yang kuat, namun kualitas informasi berisiko rendah karena keterbatasan kemampuan bahasa isyarat Anda.<br>
                    <b>Poin 3 (Opsi A):</b> Patuh pada prosedur tapi minim inisiatif. Warga dipaksa membuang waktu hanya karena sistem Anda yang tidak fleksibel.<br>
                    <b>Poin 2 (Opsi C):</b> Melanggar privasi pengguna layanan. Melibatkan pihak ketiga (warga lain) untuk urusan dokumen negara tidaklah etis.<br>
                    <b>Poin 1 (Opsi D):</b> Kegagalan total pelayanan. Menolak melayani warga dengan kebutuhan khusus adalah bentuk diskriminasi nyata.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Jejaring Kerja",
            q: "<b>Jejaring Kerja:</b><br>Tim Anda bekerja secara jarak jauh (remote). Terjadi miskomunikasi kronis terkait pembagian tugas yang menyebabkan pekerjaan tumpang tindih dan target divisi meleset. Sebagai koordinator, langkah Anda?",
            a: [
                "Mewajibkan semua tim kembali bekerja dari kantor (WFO) agar pengawasan bisa dilakukan secara ketat.",
                "Mengintegrasikan platform manajemen tugas (seperti Trello atau Jira) agar status pekerjaan tiap individu transparan bagi semua anggota tim.",
                "Menegur anggota tim yang pekerjaannya tumpang tindih dan meminta mereka lebih rajin berkoordinasi sendiri.",
                "Menambah frekuensi rapat koordinasi via Zoom menjadi setiap pagi dan sore untuk memastikan progres.",
                "Mengambil alih sisa pekerjaan yang belum selesai untuk Anda kerjakan sendiri agar target divisi tercapai."
            ],
            k: 1,
            s: [3, 5, 2, 1, 1],
            pembahasan: `
                <div class="mb-3"><span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Koordinasi Kerja & Efisiensi TIK</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Solusi modern dan strategis. Transparansi melalui <i>tools</i> digital menghilangkan ego sektoral dan memperjelas <i>accountability</i> tanpa perlu pengawasan fisik berlebihan.<br>
                    <b>Poin 4 (Opsi A):</b> Solusi jangka pendek yang efektif namun tidak menyelesaikan masalah sistem koordinasi digitalnya. Cenderung kaku terhadap perubahan zaman.<br>
                    <b>Poin 3 (Opsi C):</b> Melempar tanggung jawab. Sebagai koordinator, Anda yang bertugas menciptakan sistem, bukan hanya menyalahkan individu.<br>
                    <b>Poin 2 (Opsi D):</b> <i>Micromanagement</i>. Rapat berlebihan (Zoom fatigue) justru menurunkan produktivitas dan moral tim dalam bekerja jarak jauh.<br>
                    <b>Poin 1 (Opsi E):</b> <i>Hero complex</i>. Anda gagal sebagai pemimpin karena tidak mampu menggerakkan tim dan justru menciptakan <i>bottleneck</i> pada diri sendiri.
                </p>
            `
        },
        {
            cat: "TKP", sub: "Profesionalisme",
            q: "<b>Profesionalisme:</b><br>Anda staf keuangan. Sahabat karib Anda meminta bantuan untuk mempercepat pencairan dana proyek perusahaannya karena ia sedang terlilit hutang besar. Ia menjanjikan komisi 5%. Bagaimana sikap Anda?",
            a: [
                "Membantunya karena alasan kemanusiaan tapi menolak komisi tersebut agar tetap bersih.",
                "Menolak tegas dan menjelaskan bahwa proses pencairan dana harus mengikuti antrean prosedur yang sah bagi semua pihak.",
                "Melaporkan tindakan sahabat Anda tersebut ke bagian pengawasan internal karena upaya penyuapan.",
                "Menyarankannya menghubungi atasan Anda saja agar Anda tidak terlibat konflik kepentingan secara langsung.",
                "Menolak permintaannya namun membantu memberikan solusi lain seperti mencarikan pinjaman pribadi yang legal."
            ],
            k: 1,
            s: [2, 5, 4, 1, 3],
            pembahasan: `
                <div class="mb-3"><span class="bg-amber-100 text-amber-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Integritas & Profesionalisme</span></div>
                <p class="text-sm text-gray-700 text-justify mb-3">
                    <b>Poin 5 (Opsi B):</b> Standar integritas tertinggi. Profesionalisme berarti menjaga keadilan sistem (<i>fairness</i>) tanpa terpengaruh kedekatan personal atau imbalan materi.<br>
                    <b>Poin 4 (Opsi C):</b> Langkah tegas untuk melindungi instansi dari praktik KKN. Namun, dalam konteks sosial, edukasi (Opsi B) adalah langkah pertama sebelum tindakan hukum (lapor).<br>
                    <b>Poin 3 (Opsi E):</b> Menjaga integritas kantor tapi tetap menunjukkan empati sebagai teman di luar urusan pekerjaan.<br>
                    <b>Poin 2 (Opsi A):</b> <i>Conflict of interest</i>. Meskipun tidak menerima uang, mendahulukan antrean tetap merupakan bentuk penyalahgunaan wewenang.<br>
                    <b>Poin 1 (Opsi D):</b> Indikasi kolusi. Melempar bola ke atasan justru menunjukkan Anda tidak berani menolak praktik ilegal secara langsung.
                </p>
            `
        },
        {
        cat: "TKP", sub: "Teknologi Informasi dan Komunikasi",
        q: "<b>Teknologi Informasi dan Komunikasi:</b><br>Anda memergoki seorang staf junior menggunakan platform AI Generatif publik (seperti ChatGPT) untuk menyusun draf kebijakan strategis instansi. Staf tersebut dengan polosnya menyalin dan menempelkan (copy-paste) data internal yang bersifat rahasia ke dalam kolom *prompt* AI tersebut agar hasilnya lebih akurat. Kinerjanya memang menjadi sangat cepat, namun hal ini memiliki risiko fatal. Tindakan Anda...",
        a: [
            "Membiarkannya karena penggunaan AI adalah bentuk adaptasi teknologi di era digital yang memang dituntut oleh pemerintah untuk percepatan birokrasi.",
            "Mengingatkannya untuk menyensor nama instansi saja di masa depan, namun tetap mengizinkan penggunaan AI karena terbukti mempercepat pekerjaannya.",
            "Segera menghentikannya, mengedukasi tentang risiko kebocoran data rahasia negara di *server* publik, dan mewajibkannya menghapus riwayat *prompt* tersebut.",
            "Memberikan teguran keras dan memintanya untuk kembali mengetik manual seluruh dokumen dari awal sebagai bentuk hukuman agar ia jera.",
            "Memuji inisiatif dan efisiensinya di depan tim, namun secara pribadi memintanya untuk lebih berhati-hati dalam memilah data yang diunggah."
        ],
        k: 2,
        s: [1, 3, 5, 4, 2],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: TIK & Literasi Digital (Data Privacy)</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Pendekatan *HOTS* dalam mitigasi *cyber security*. Anda memahami bahwa AI publik menyimpan data pengguna. Menghentikan, mengedukasi privasi data, dan melakukan mitigasi (menghapus riwayat) adalah langkah *Smart ASN* yang sangat proaktif.<br>
                <b>Poin 4 (Opsi D):</b> Tegas dan prosedural (mengutamakan keamanan manual), namun anti-teknologi dan tidak memberikan solusi kerja cerdas di masa depan.<br>
                <b>Poin 3 (Opsi B):</b> Solusi setengah matang. Menyensor nama instansi tidak menjamin substansi data rahasia aman dari *machine learning* publik.<br>
                <b>Poin 2 (Opsi E):</b> *Blunder* kepemimpinan. Memuji tindakan yang melanggar protokol keamanan data akan menjadi preseden buruk bagi tim (mewajarkan pelanggaran).<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* fatal. Mengatasnamakan adaptasi digital tapi mengorbankan keamanan data negara (buta literasi digital keamanan).
            </p>
        `
    },
    {
        cat: "TKP", sub: "Pelayanan Publik",
        q: "<b>Pelayanan Publik:</b><br>Sebuah akun anonim di platform X (Twitter) membuat utas (*thread*) yang mengeluhkan rumitnya persyaratan di instansi Anda. Utas tersebut viral dan memicu *cancel culture* dari netizen yang menghujat secara membabi buta. Setelah dicek, keluhan warga tersebut sebenarnya terjadi karena ia tidak membaca regulasi baru yang sudah disederhanakan bulan lalu. Langkah strategis Anda sebagai tim Humas...",
        a: [
            "Membalas utas tersebut dengan ancaman pelaporan pencemaran nama baik menggunakan UU ITE karena menyebarkan disinformasi yang merugikan instansi.",
            "Membalas langsung utas tersebut dengan menyertakan tautan regulasi baru dan meminta pembuat utas untuk membaca aturan sebelum protes.",
            "Berkoordinasi dengan pimpinan untuk merilis infografis yang simpatik dan mudah dipahami terkait regulasi baru di semua kanal resmi, tanpa menyerang pembuat utas.",
            "Mengunci sementara akun media sosial instansi (*private*) hingga amarah netizen mereda dengan sendirinya.",
            "Mencari identitas asli pembuat utas dan mengundangnya secara tertutup ke kantor untuk mediasi agar ia mau menghapus postingannya."
        ],
        k: 2,
        s: [1, 4, 5, 2, 3],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Pelayanan Publik & Manajemen Opini Publik</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi C):</b> Strategi Humas tingkat tinggi (*Crisis Management*). Merespons krisis dengan komunikasi visual (infografis) yang simpatik. Mengedukasi publik tanpa mempermalukan warga yang salah paham, sehingga citra instansi menjadi elegan dan profesional.<br>
                <b>Poin 4 (Opsi B):</b> Taktik respons cepat yang faktual, namun berisiko memicu perdebatan balasan dari netizen karena terkesan reaktif/defensif.<br>
                <b>Poin 3 (Opsi E):</b> Mediasi itu baik, namun memakan waktu dan tidak menyelesaikan opini publik yang terlanjur terbentuk di ruang maya.<br>
                <b>Poin 2 (Opsi D):</b> Lari dari krisis (*escapism*). Menutup akun sama dengan membenarkan tuduhan dan menghilangkan fungsi pelayanan informasi.<br>
                <b>Poin 1 (Opsi A):</b> *Blunder* arogansi birokrasi. Menggunakan UU ITE untuk membungkam keluhan publik adalah gaya kuno yang akan semakin menghancurkan kepercayaan masyarakat.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Anti Radikalisme",
        q: "<b>Anti Radikalisme:</b><br>Anda memperhatikan beberapa pegawai di kantor sering membentuk kelompok diskusi eksklusif di jam istirahat. Belakangan, mereka mulai mengajak para CPNS baru untuk bergabung. Anda mendengar selentingan bahwa dalam diskusi tersebut, mereka menanamkan doktrin untuk tidak perlu mengikuti upacara bendera dan menolak hormat pada simbol negara dengan alasan keyakinan kelompok mereka. Sikap Anda...",
        a: [
            "Mendebat ketua kelompok diskusi tersebut di depan anggota lainnya agar mereka sadar bahwa pemahaman mereka keliru dan bertentangan dengan Pancasila.",
            "Berpura-pura ikut bergabung dalam kelompok diskusi tersebut untuk mencari tahu lebih dalam, meskipun saya tidak setuju dengan pemahaman mereka.",
            "Mendekati para CPNS baru secara personal dan memperingatkan mereka secara halus agar menjaga jarak dari kelompok tersebut demi karir mereka.",
            "Membiarkan kelompok tersebut selama mereka tidak melakukan tindakan kekerasan fisik dan tetap menyelesaikan tugas kantor dengan baik.",
            "Mengumpulkan bukti aktivitas mereka dan melaporkannya secara rahasia kepada atasan dan unit kepegawaian untuk segera dilakukan mitigasi dan pembinaan ideologi."
        ],
        k: 4,
        s: [3, 1, 4, 2, 5],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Anti Radikalisme & Loyalitas Negara</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi E):</b> Tindakan sistematis dan terukur. Ekstremisme eksklusif yang menolak simbol negara adalah bibit radikalisme. Melaporkan ke otoritas berwenang menjamin adanya tindakan preventif (*early warning system*) sebelum menyebar luas.<br>
                <b>Poin 4 (Opsi C):</b> Melakukan proteksi terhadap junior (CPNS), namun gagal menyelesaikan akar masalah karena kelompok eksklusif tersebut tetap dibiarkan beroperasi bebas di lingkungan kantor.<br>
                <b>Poin 3 (Opsi A):</b> Konfrontasi langsung bisa memicu konflik terbuka dan biasanya membuat kelompok radikal semakin tertutup dan militan.<br>
                <b>Poin 2 (Opsi D):</b> *Blunder* pembiaran. Menunggu hingga ada kekerasan fisik berarti Anda gagal melakukan deteksi dini terhadap ancaman ideologi.<br>
                <b>Poin 1 (Opsi B):</b> *Blunder* fatal. Berpura-pura bergabung tanpa mandat intelijen resmi justru bisa membuat Anda dituduh sebagai bagian dari jaringan tersebut jika ada audit internal.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Profesionalisme",
        q: "<b>Profesionalisme:</b><br>Instansi Anda menerapkan sistem kerja *hybrid* (WFO dan WFH). Salah satu anggota tim Anda sering menyalahgunakan jadwal WFH-nya untuk mengerjakan proyek sampingan (*freelance*) demi penghasilan tambahan. Akibatnya, ia sering terlambat merespons pesan darurat kantor dan absen dalam rapat koordinasi dadakan. Jika Anda adalah ketua tim tersebut, tindakan Anda...",
        a: [
            "Mengevaluasi rekam jejak kinerjanya, memanggilnya, dan memberikan peringatan tertulis bahwa fleksibilitas WFH bukan berarti bebas melakukan pekerjaan lain di jam dinas.",
            "Mengajaknya *ngopi* di luar kantor dan memintanya sebagai teman agar lebih pandai menyeimbangkan waktu antara proyek sampingan dan tugas kantor.",
            "Mulai mencari proyek sampingan juga untuk diri saya sendiri, karena sistem pengawasan WFH di kantor ternyata memang lemah dan bisa dimanfaatkan.",
            "Mencabut hak WFH anggota tersebut secara sepihak dan mewajibkannya untuk masuk kantor (WFO) setiap hari tanpa terkecuali.",
            "Menutupi absensinya saat rapat agar ia tidak dimarahi pimpinan, sambil berharap ia segera sadar dan memperbaiki kedisiplinannya."
        ],
        k: 0,
        s: [5, 3, 1, 4, 2],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Profesionalisme & Etika Kerja</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi A):</b> Kepemimpinan yang objektif dan berintegritas. Memisahkan masalah personal dan profesional, menggunakan data evaluasi, dan menegakkan aturan kedisiplinan (SOP) secara formal untuk mencegah normalisasi penyalahgunaan jam kerja.<br>
                <b>Poin 4 (Opsi D):</b> Tegas menghentikan pelanggaran, namun terkesan otoriter karena mengambil keputusan sepihak tanpa proses teguran/evaluasi terlebih dahulu.<br>
                <b>Poin 3 (Opsi B):</b> Pendekatan informal terlalu lemah. Mewajarkan proyek sampingan di jam kerja (*conflict of interest*) selama bisa 'diseimbangkan' adalah etika birokrasi yang salah.<br>
                <b>Poin 2 (Opsi E):</b> Menjadi *enabler* (memfasilitasi kebiasaan buruk bawahan) dengan menutupi kesalahannya. Merugikan kinerja tim secara makro.<br>
                <b>Poin 1 (Opsi C):</b> *Blunder* integritas terburuk. Ikut-ikutan melanggar aturan hanya karena sistem pengawasannya lemah.
            </p>
        `
    },
    {
        cat: "TKP", sub: "Sosial Budaya",
        q: "<b>Sosial Budaya:</b><br>Anda dipromosikan menjadi manajer muda di sebuah divisi. Banyak bawahan Anda yang usianya jauh lebih senior (*Boomers/Gen X*). Mereka merasa tidak dihormati dan moral kerjanya menurun karena gaya komunikasi Anda yang sering mendelegasikan tugas via pesan singkat WhatsApp tanpa ada obrolan basa-basi terlebih dahulu, berbeda dengan manajer sebelumnya yang sering mengumpulkan mereka untuk diskusi panjang. Solusi Anda...",
        a: [
            "Mengabaikan keluhan mereka. Sebagai bawahan, mereka harus belajar beradaptasi dengan gaya kepemimpinan masa kini yang serba cepat dan digital.",
            "Mengumpulkan mereka dalam rapat resmi, menjelaskan efisiensi komunikasi digital, dan meminta mereka meninggalkan budaya birokrasi lama yang membuang waktu.",
            "Meminta bantuan pihak HRD untuk memutasi staf senior tersebut dan menggantinya dengan staf muda (Gen Z/Milenial) agar ritme kerja selaras.",
            "Beradaptasi dengan mengkombinasikan efisiensi pesan digital untuk tugas harian, dan rutin mengadakan briefing tatap muka untuk menjaga ikatan emosional dan penghormatan.",
            "Meminta maaf dan mengubah gaya kepemimpinan saya 100% kembali ke gaya manajer lama agar mereka senang dan suasana kantor harmonis kembali."
        ],
        k: 3,
        s: [2, 4, 1, 5, 3],
        pembahasan: `
            <div class="mb-3"><span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Aspek: Sosial Budaya & Mengelola Keragaman</span></div>
            <p class="text-sm text-gray-700 text-justify mb-3">
                <b>Poin 5 (Opsi D):</b> Solusi *Win-Win* yang adaptif (*HOTS*). Mengelola *gap* generasi dengan cerdas. Anda tetap menjaga efisiensi teknologi, sekaligus mengakomodasi kebutuhan sosial budaya senior yang menghargai komunikasi interpersonal langsung (menjaga harmoni).<br>
                <b>Poin 4 (Opsi B):</b> Logis dan efisien, namun pendekatannya satu arah (otoriter halus) yang berpotensi melukai harga diri pegawai senior.<br>
                <b>Poin 3 (Opsi E):</b> Mengalah demi keharmonisan semu. Menghilangkan efisiensi kerja demi menyenangkan perasaan bawahan adalah kemunduran birokrasi.<br>
                <b>Poin 2 (Opsi A):</b> Kaku dan minim empati. Memaksa bawahan beradaptasi tanpa ada *bridging* (jembatan) kultural akan memicu boikot pasif dan sabotase kinerja.<br>
                <b>Poin 1 (Opsi C):</b> *Blunder* kepemimpinan (Eskapis). Menyingkirkan keberagaman usia dari tim alih-alih mengelolanya, menunjukkan ketidakmampuan manajerial tingkat dasar.
            </p>
        `
    }
    ];

    // --- FR 2020-2021 (Isu Radikalisme) ---
    'FR 2020-2021' [
        { 
            cat: "TKP", sub: "Sosial Budaya (Anti-Radikalisme)", 
            q: "Rekan kerja Anda sering memposting ujaran kebencian di media sosial pribadinya. Padahal ia adalah ASN. Sikap Anda?", 
            a: ["Mengingatkannya secara personal agar lebih bijak", "Melaporkan ke atasan langsung beserta bukti", "Menulis komentar balasan untuk mendebatnya", "Membiarkannya karena itu akun pribadi", "Mengucilkannya dari pergaulan kantor"], 
            k: 0,
            pembahasan: `
                <strong>Poin 5: A (Mengingatkan personal)</strong><br>
                <strong>Poin 4: B (Lapor atasan)</strong><br><br>
                Langkah pertama adalah <em>persuasif</em> (mengingatkan) untuk menjaga hubungan kerja. Jika sudah mengancam keamanan/tidak mempan, baru lapor (B).
            `
        },
        { 
            cat: "TWK", sub: "Pilar Negara", 
            q: "Membantu korban bencana alam tanpa memandang suku dan agama adalah pengamalan Pancasila sila ke...", 
            a: ["Sila Pertama", "Sila Kedua", "Sila Ketiga", "Sila Keempat", "Sila Kelima"], 
            k: 1,
            pembahasan: `
                <strong>Jawaban: B (Sila Kedua)</strong><br><br>
                Kata kunci: <strong>Gemar melakukan kegiatan kemanusiaan</strong>. Ini adalah butir Sila ke-2 (Rantai Emas).
            `
        }
];

// ============================================================
// 3. WADAH UTAMA (BANK SOAL FINAL)
// ============================================================
const BANK_SOAL = {
    // A. MODE BELAJAR (FR)
    'FR 2019 - 2020': FR_DATA_2019,
    'FR 2020 - 2021': [], // Slot Kosong
    'FR 2023 - 2024': [], // Slot Kosong

    // B. MODE TRYOUT (PREDIKSI 2026)
    // Nanti akan diisi otomatis oleh script di bawah
    'Tryout SKD - Paket A': [],
    'Tryout SKD - Paket B': [],
    'Tryout SKD - Paket C': []
};

// ============================================================
// 4. AUTO-CONVERTER (BIAR LOGIC HTML TIDAK ERROR)
// ============================================================
// Fungsi ini otomatis mengubah format data RAW_TRYOUT_110 (id, type, text) 
// menjadi format yang dimengerti mesin (cat, q, a, k)
(function initDatabase() {
    console.log("System: Mengonversi data Tryout HOTS...");
    
    const hotsData = RAW_TRYOUT_110.map(item => ({
        cat: item.type, // TWK, TIU, TKP
        sub: "Prediksi HOTS 2026",
        q: item.text,
        a: item.options,
        k: item.key, // Kunci (0-4)
        s: item.points || null, // Poin TKP [1,2,3,4,5]
        pembahasan: "Pembahasan lengkap tersedia di menu Evaluasi Akhir."
    }));

    // Masukkan ke Paket Tryout
    BANK_SOAL['Tryout SKD - Paket A'] = hotsData;
    
    // Paket B & C kita acak urutannya biar beda dikit (sebagai variasi)
    BANK_SOAL['Tryout SKD - Paket B'] = [...hotsData].sort(() => Math.random() - 0.5);
    BANK_SOAL['Tryout SKD - Paket C'] = [...hotsData].sort(() => Math.random() - 0.5);
    
    console.log("System: Database siap! Total Soal Tryout: " + hotsData.length);
})();

// ============================================================
// 5. DATABASE PENDUKUNG (MATERI & TIPS)
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