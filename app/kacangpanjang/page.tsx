// app/kacang-panjang/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function KacangPanjangPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-700 hover:text-green-600 transition-colors font-medium"
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
          <div className="bg-gradient-to-r from-green-600 to-lime-600 px-6 sm:px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">KACANG PANJANG</h1>
                <p className="text-lg sm:text-xl italic opacity-90">Vigna unguiculata</p>
              </div>
              <div className="text-6xl sm:text-7xl">🫛</div>
            </div>
          </div>

          {/* Gambar Kacang Panjang - Background Putih Bersih */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white">
            <Image
              src="/images/kacang-panjang.png"
              alt="Kacang Panjang - Vigna unguiculata"
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
            <div className="text-2xl sm:text-3xl font-bold text-green-600">45-60</div>
            <div className="text-sm text-gray-600 mt-1">Hari Panen</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌡️</div>
            <div className="text-2xl sm:text-3xl font-bold text-lime-600">25-35°C</div>
            <div className="text-sm text-gray-600 mt-1">Suhu Ideal</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📏</div>
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600">30-100 cm</div>
            <div className="text-sm text-gray-600 mt-1">Panjang Polong</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💚</div>
            <div className="text-2xl sm:text-3xl font-bold text-teal-600">Protein</div>
            <div className="text-sm text-gray-600 mt-1">Tinggi Nutrisi</div>
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
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Fabales</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Famili</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Fabaceae</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Genus</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Vigna</span>
                </div>
              </div>
            </div>

            {/* Habitat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-lime-500 to-green-600 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🌍</span>
                  Habitat & Lingkungan
                </h2>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Wilayah Asia tropis & subtropis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Dataran rendah hingga 1500 mdpl</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Daerah beriklim hangat 25-35°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Tanah gembur, subur, pH 5.5-6.5</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Paparan sinar matahari penuh</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manfaat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🎁</span>
                  Manfaat Kacang Panjang
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">💊 Sumber Vitamin & Serat</div>
                  <div className="text-xs text-gray-600">Tinggi vitamin A, C, K, dan serat</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">💪 Protein Nabati</div>
                  <div className="text-xs text-gray-600">Sumber protein untuk vegetarian</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">❤️ Kesehatan Jantung</div>
                  <div className="text-xs text-gray-600">Menurunkan kolesterol & tekanan darah</div>
                </div>
                <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🩺 Pencernaan Sehat</div>
                  <div className="text-xs text-gray-600">Serat tinggi membantu pencernaan</div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Kacang Panjang */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tentang Kacang Panjang</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-green-600">Kacang panjang</strong> (<em>Vigna unguiculata</em>) adalah <strong>tanaman merambat dengan buah panjang</strong> yang berasal dari <strong>wilayah Asia tropis</strong>. Kacang panjang telah menjadi sayuran penting dalam kuliner Asia, terutama masakan Indonesia, Thailand, dan China.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Kacang panjang tumbuh di daerah beriklim hangat.</strong> Tanaman ini memiliki batang merambat yang bisa mencapai panjang 2-4 meter. Bunga kacang panjang berwarna ungu atau putih, dan menghasilkan polong panjang yang bisa mencapai 30-100 cm.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Kacang panjang sebagai sumber vitamin dan serat.</strong> Sayuran ini kaya akan protein nabati, vitamin A, C, K, dan mineral seperti zat besi dan kalsium. Kacang panjang bisa dimakan saat masih muda dan renyah, dimasak dengan cara ditumis, direbus, atau dijadikan sayur.
                </p>
              </div>
            </div>

            {/* Karakteristik */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-lime-400">
                <span className="text-3xl mr-3">🔍</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Karakteristik</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-lime-50 rounded-xl p-4 border border-lime-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🌿</span>
                    <h3 className="font-bold text-gray-800">Ciri Fisik</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-lime-500 mr-2">•</span>
                      <span>Batang merambat, panjang 2-4 meter</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-500 mr-2">•</span>
                      <span>Daun majemuk, 3 helai per tangkai</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-500 mr-2">•</span>
                      <span>Bunga ungu atau putih, berkelompok</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-lime-500 mr-2">•</span>
                      <span>Polong panjang 30-100 cm, hijau</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🌱</span>
                    <h3 className="font-bold text-gray-800">Pertumbuhan</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Berkecambah 4-7 hari</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Berbunga 5-6 minggu setelah tanam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Panen 45-60 hari setelah tanam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      <span>Produktif selama 2-3 bulan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nutrisi */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-emerald-400">
                <span className="text-3xl mr-3">🥗</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Kandungan Nutrisi</h2>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Per 100 gram kacang panjang segar mengandung:</strong>
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                  <h4 className="font-bold text-gray-800 mb-3">💪 Nutrisi Utama</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Kalori</span>
                      <strong>47 kcal</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Air</span>
                      <strong>88%</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Protein</span>
                      <strong>2.8 g</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Karbohidrat</span>
                      <strong>8.0 g</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Serat</span>
                      <strong>3.6 g</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-lime-50 rounded-xl p-4 border-2 border-lime-300">
                  <h4 className="font-bold text-gray-800 mb-3">🌟 Vitamin & Mineral</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Vitamin A</span>
                      <strong>865 IU</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Vitamin C</span>
                      <strong>18.8 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Vitamin K</span>
                      <strong>43 mcg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Zat Besi</span>
                      <strong>1.0 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Kalsium</span>
                      <strong>50 mg</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cara Budidaya */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-teal-400">
                <span className="text-3xl mr-3">🌱</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Cara Budidaya</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">1️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Persiapan Lahan</h4>
                      <p className="text-sm text-gray-700">Gemburkan tanah, campur dengan pupuk kandang atau kompos. Buat bedengan lebar 1 meter, tinggi 30 cm. Jarak tanam 30-40 cm.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">2️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Penanaman Benih</h4>
                      <p className="text-sm text-gray-700">Tanam benih langsung ke lahan, kedalaman 2-3 cm. Siram secara teratur. Benih akan berkecambah dalam 4-7 hari.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">3️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Perawatan Tanaman</h4>
                      <p className="text-sm text-gray-700">Pasang ajir/rambatan setinggi 2 meter. Siram pagi/sore. Pupuk susulan NPK setiap 2 minggu. Bersihkan gulma secara rutin.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 rounded-xl p-5 border-l-4 border-teal-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">4️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Pemanenan</h4>
                      <p className="text-sm text-gray-700">Panen 45-60 hari setelah tanam. Petik polong saat masih muda, panjang 40-50 cm, masih renyah. Panen setiap 2-3 hari sekali.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fakta Seru */}
            <div className="bg-gradient-to-br from-green-600 to-lime-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">✨ FAKTA SERU ✨</h2>
                <p className="text-white/90">Tahukah kamu tentang kacang panjang?</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🌏</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Dari Asia Tropis</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Kacang panjang berasal dari wilayah Asia tropis</strong> dan telah dibudidayakan ribuan tahun di Asia Tenggara!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">📏</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Tumbuh Sangat Panjang</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Kacang panjang dapat tumbuh lebih dari 30 cm</strong>, bahkan ada yang mencapai 1 meter panjangnya!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🍃</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Pupuk Alami</h3>
                  <p className="text-sm text-white/90 text-center">
                    Akar kacang panjang dapat <strong className="text-yellow-300">mengikat nitrogen dari udara</strong> ke tanah, menyuburkan tanah secara alami!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">💪</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Protein Nabati</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Sumber protein nabati yang baik</strong> untuk vegetarian dan vegan. Kaya vitamin & mineral!
                  </p>
                </div>
              </div>
            </div>

            {/* Tips Perawatan */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">💚</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tips Budidaya Sukses</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">☀️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Sinar Matahari Cukup</h4>
                    <p className="text-sm text-gray-600">Butuh 6-8 jam sinar matahari langsung untuk pertumbuhan optimal</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Penyiraman Teratur</h4>
                    <p className="text-sm text-gray-600">Siram 1-2x sehari, jaga kelembaban tanah konsisten</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Ajir/Rambatan</h4>
                    <p className="text-sm text-gray-600">Pasang ajir setinggi 2 meter agar tanaman merambat dengan baik</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🪴</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pupuk Organik</h4>
                    <p className="text-sm text-gray-600">Berikan pupuk kompos atau NPK setiap 2 minggu sekali</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🐛</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kontrol Hama</h4>
                    <p className="text-sm text-gray-600">Waspadai kutu daun, ulat polong. Semprot pestisida organik</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">✂️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Panen Tepat Waktu</h4>
                    <p className="text-sm text-gray-600">Panen saat polong masih muda dan renyah, jangan terlalu tua</p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-2 text-sm">Masalah Umum:</h4>
                    <p className="text-xs text-yellow-700">Daun menguning (kekurangan nitrogen), polong kerdil (kurang air), bercak daun (penyakit jamur), ulat polong. Lakukan pencegahan dengan perawatan yang tepat!</p>
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
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-lime-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
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