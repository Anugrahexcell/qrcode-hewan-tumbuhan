// app/cabai/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function CabaiPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-700 hover:text-red-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section dengan Gambar Besar */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-orange-600 px-6 sm:px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">CABAI</h1>
                <p className="text-lg sm:text-xl italic opacity-90">Capsicum annuum</p>
              </div>
              <div className="text-6xl sm:text-7xl">🌶️</div>
            </div>
          </div>

          {/* Gambar Cabai - Background Putih Bersih */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white">
            <Image
              src="/images/cabai.png"
              alt="Cabai - Capsicum annuum"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Stats Cards - 4 Kolom Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌱</div>
            <div className="text-2xl sm:text-3xl font-bold text-red-600">75-90</div>
            <div className="text-sm text-gray-600 mt-1">Hari Panen</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌡️</div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-600">20-30°C</div>
            <div className="text-sm text-gray-600 mt-1">Suhu Ideal</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🔥</div>
            <div className="text-2xl sm:text-3xl font-bold text-rose-600">Capsaicin</div>
            <div className="text-sm text-gray-600 mt-1">Zat Pedas</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💊</div>
            <div className="text-2xl sm:text-3xl font-bold text-yellow-600">Vit C</div>
            <div className="text-sm text-gray-600 mt-1">Tinggi Antioksidan</div>
          </div>
        </div>

        {/* Main Grid - 2 Kolom di Desktop, 1 Kolom di Mobile */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar Kiri */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Klasifikasi Ilmiah */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🔬</span>
                  Klasifikasi Ilmiah
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-center text-sm py-2">
                  <span className="text-gray-800 font-medium">Kingdom</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Plantae</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Divisi</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Magnoliophyta</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Kelas</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Magnoliopsida</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Ordo</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Solanales</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Famili</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Solanaceae</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Genus</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Capsicum</span>
                </div>
              </div>
            </div>

            {/* Habitat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🌍</span>
                  Habitat & Lingkungan
                </h2>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✓</span>
                    <span>Dataran rendah hingga 1400 mdpl</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✓</span>
                    <span>Suhu optimal 20-30°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✓</span>
                    <span>Daerah panas & terkena sinar matahari</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✓</span>
                    <span>Tanah gembur, subur, pH 6-7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-0.5">✓</span>
                    <span>Drainase baik, tidak tergenang</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manfaat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🎁</span>
                  Manfaat Cabai
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🍳 Bumbu Masakan</div>
                  <div className="text-xs text-gray-600">Memberikan rasa pedas & aroma khas</div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">💊 Sumber Vitamin</div>
                  <div className="text-xs text-gray-600">Tinggi vitamin C & antioksidan</div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🔥 Metabolisme Tubuh</div>
                  <div className="text-xs text-gray-600">Membantu pembakaran kalori</div>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">❤️ Kesehatan Jantung</div>
                  <div className="text-xs text-gray-600">Menurunkan kolesterol & tekanan darah</div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Cabai */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-red-400">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tentang Cabai</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-red-600">Cabai</strong> (<em>Capsicum annuum</em>) adalah <strong>tanaman yang menghasilkan buah pedas</strong> dan berasal dari <strong>Amerika Tengah dan Selatan</strong>. Cabai telah menjadi bumbu penting dalam masakan di seluruh dunia, terutama di Asia.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Cabai tumbuh di daerah panas & terkena sinar matahari.</strong> Tanaman cabai memiliki batang tegak, daun hijau, dan bunga putih kecil. Buah cabai bervariasi dalam ukuran, bentuk, dan tingkat kepedasan, dari yang manis hingga sangat pedas.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Cabai bermanfaat sebagai bumbu masakan & vitamin.</strong> Rasa pedas cabai berasal dari senyawa capsaicin yang memiliki banyak manfaat kesehatan. <strong>Cabai adalah tanaman yang menghasilkan buah pedas</strong> dan menjadi salah satu komoditas pertanian penting.
                </p>
              </div>
            </div>

            {/* Karakteristik */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-orange-400">
                <span className="text-3xl mr-3">🔍</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Karakteristik</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🌿</span>
                    <h3 className="font-bold text-gray-800">Ciri Fisik</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Batang tegak, tinggi 50-100 cm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Daun hijau berbentuk lonjong</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Bunga putih kecil, tumbuh tunggal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">•</span>
                      <span>Buah hijau, merah, kuning, atau oranye</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🌱</span>
                    <h3 className="font-bold text-gray-800">Pertumbuhan</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Berkecambah 5-10 hari</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Berbunga 5-6 minggu setelah tanam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Panen 75-90 hari setelah tanam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span>Produktif selama 6-12 bulan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nutrisi */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-yellow-400">
                <span className="text-3xl mr-3">🥗</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Kandungan Nutrisi</h2>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Per 100 gram cabai merah segar mengandung:</strong>
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300">
                  <h4 className="font-bold text-gray-800 mb-3">💪 Nutrisi Utama</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Kalori</span>
                      <strong>40 kcal</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Air</span>
                      <strong>88%</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Protein</span>
                      <strong>1.9 g</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Karbohidrat</span>
                      <strong>9.5 g</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Serat</span>
                      <strong>1.5 g</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-4 border-2 border-orange-300">
                  <h4 className="font-bold text-gray-800 mb-3">🌟 Vitamin & Mineral</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Vitamin C</span>
                      <strong>144 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Vitamin A</span>
                      <strong>952 IU</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Vitamin B6</span>
                      <strong>0.5 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Kalium</span>
                      <strong>322 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Capsaicin</span>
                      <strong>Tinggi</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cara Budidaya */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">🌱</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Cara Budidaya</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">1️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Persemaian Benih</h4>
                      <p className="text-sm text-gray-700">Semai benih di polybag kecil atau tray. Siram rutin, jaga kelembaban. Pindah tanam saat bibit berumur 3-4 minggu.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">2️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Persiapan Lahan</h4>
                      <p className="text-sm text-gray-700">Gemburkan tanah, campur dengan pupuk kandang. Buat bedengan tinggi 30-40 cm, lebar 1 meter. Jarak tanam 50x60 cm.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">3️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Perawatan Tanaman</h4>
                      <p className="text-sm text-gray-700">Siram teratur pagi/sore, beri ajir/penyangga. Pupuk NPK setiap 2 minggu. Pangkas tunas air. Kontrol hama & penyakit.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">4️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Pemanenan</h4>
                      <p className="text-sm text-gray-700">Panen 75-90 hari setelah tanam. Petik saat cabai sudah merah penuh (untuk cabai merah) atau hijau tua. Panen setiap 2-3 hari.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fakta Seru */}
            <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">✨ FAKTA SERU ✨</h2>
                <p className="text-white/90">Tahukah kamu tentang cabai?</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🌎</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Dari Amerika</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Cabai berasal dari Amerika Tengah dan Selatan</strong> dan dibawa ke Asia oleh pedagang Portugis pada abad ke-16!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🔥</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Rasa Pedas Capsaicin</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Rasa pedas cabai berasal dari zat capsaicin!</strong> Semakin tinggi kandungan capsaicin, semakin pedas cabainya.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">💊</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Kaya Vitamin C</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Cabai memiliki vitamin C lebih tinggi dari jeruk!</strong> Bahkan lebih tinggi 2x lipat per gram-nya.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🌈</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Banyak Warna</h3>
                  <p className="text-sm text-white/90 text-center">
                    Cabai ada dalam berbagai warna: <strong className="text-yellow-300">hijau, merah, kuning, oranye, ungu, bahkan hitam!</strong> Warna menunjukkan tingkat kematangan.
                  </p>
                </div>
              </div>
            </div>

            {/* Tips Perawatan */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-red-400">
                <span className="text-3xl mr-3">💚</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tips Budidaya Sukses</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="bg-red-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">☀️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Sinar Matahari Penuh</h4>
                    <p className="text-sm text-gray-600">Cabai butuh 8-10 jam sinar matahari langsung untuk buah maksimal</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="bg-red-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Penyiraman Teratur</h4>
                    <p className="text-sm text-gray-600">Siram pagi/sore, jaga kelembaban tapi jangan tergenang</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="bg-red-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pemangkasan</h4>
                    <p className="text-sm text-gray-600">Pangkas tunas air dan daun tua agar energi fokus ke buah</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="bg-red-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🪴</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pupuk Berimbang</h4>
                    <p className="text-sm text-gray-600">Gunakan pupuk NPK 15-15-15 setiap 2 minggu sekali</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="bg-red-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🐛</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kontrol Hama</h4>
                    <p className="text-sm text-gray-600">Waspadai thrips, kutu daun, dan ulat. Semprot pestisida organik</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="bg-red-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Ajir/Penyangga</h4>
                    <p className="text-sm text-gray-600">Pasang ajir agar batang tidak patah saat berbuah banyak</p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-2 text-sm">Masalah Umum:</h4>
                    <p className="text-xs text-yellow-700">Daun keriting (virus), buah rontok (kurang air/panas berlebih), busuk akar (terlalu lembab), layu (fusarium). Pencegahan lebih baik dari pengobatan!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link 
            href="/"
            className="inline-flex items-center bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

      </div>
    </div>
  );
}