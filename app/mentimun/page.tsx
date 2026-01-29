// app/mentimun/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function MentimunPage() {
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
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 sm:px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">MENTIMUN</h1>
                <p className="text-lg sm:text-xl italic opacity-90">Cucumis sativus</p>
              </div>
              <div className="text-6xl sm:text-7xl">🥒</div>
            </div>
          </div>

          {/* Gambar Mentimun - Background Putih Bersih - UPDATED FILENAME */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white">
            <Image
              src="/images/mentimun1.png"
              alt="Mentimun - Cucumis sativus"
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
            <div className="text-2xl sm:text-3xl font-bold text-green-600">50-70</div>
            <div className="text-sm text-gray-600 mt-1">Hari Panen</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌡️</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">20-30°C</div>
            <div className="text-sm text-gray-600 mt-1">Suhu Ideal</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💧</div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-600">95%</div>
            <div className="text-sm text-gray-600 mt-1">Kandungan Air</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">📏</div>
            <div className="text-2xl sm:text-3xl font-bold text-lime-600">15-25 cm</div>
            <div className="text-sm text-gray-600 mt-1">Panjang Buah</div>
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
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Cucurbitales</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Famili</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Cucurbitaceae</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Genus</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Cucumis</span>
                </div>
              </div>
            </div>

            {/* Habitat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-lime-500 to-green-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🌍</span>
                  Habitat & Lingkungan
                </h2>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Dataran rendah hingga ketinggian 1000 mdpl</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Suhu optimal 20-30°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Tanah gembur, subur, pH 6-7</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Paparan sinar matahari penuh</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Drainase tanah yang baik</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manfaat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🎁</span>
                  Manfaat Mentimun
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">💧 Hidrasi Tubuh</div>
                  <div className="text-xs text-gray-600">Kandungan air 95%, menyegarkan</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🌟 Kesehatan Kulit</div>
                  <div className="text-xs text-gray-600">Vitamin C untuk kulit sehat</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">⚖️ Menurunkan Berat Badan</div>
                  <div className="text-xs text-gray-600">Rendah kalori, tinggi serat</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🩺 Kesehatan Jantung</div>
                  <div className="text-xs text-gray-600">Mengandung kalium dan magnesium</div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Mentimun */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tentang Mentimun</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-green-600">Mentimun</strong> (<em>Cucumis sativus</em>) adalah <strong>tanaman sayuran merambat</strong> yang berasal dari <strong>Asia Selatan</strong>. Mentimun telah dibudidayakan selama ribuan tahun dan menjadi salah satu sayuran paling populer di dunia.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Mentimun tumbuh merambat dan suka sinar matahari.</strong> Tanaman ini memiliki sulur yang membantu mereka memanjat dan merambat di permukaan. Buah mentimun memiliki kulit hijau yang halus atau berbintik-bintik, dengan daging buah yang renyah dan berair.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Mentimun banyak mengandung air dan terasa segar</strong>, menjadikannya sangat cocok untuk dikonsumsi saat cuaca panas. Mentimun bisa dimakan langsung tanpa dimasak, dijadikan salad, acar, atau jus. Kandungan airnya yang tinggi (hingga 95%) membuatnya sangat baik untuk hidrasi tubuh.
                </p>
              </div>
            </div>

            {/* Karakteristik */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-blue-400">
                <span className="text-3xl mr-3">🔍</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Karakteristik</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🌿</span>
                    <h3 className="font-bold text-gray-800">Ciri Fisik</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Batang merambat dengan sulur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Daun lebar berbentuk hati</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Buah silindris panjang 15-25 cm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Kulit hijau, halus atau berbintik</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🌱</span>
                    <h3 className="font-bold text-gray-800">Pertumbuhan</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Berkecambah 3-7 hari</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Berbunga 4-5 minggu setelah tanam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Panen 50-70 hari setelah tanam</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Tumbuh cepat di musim panas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nutrisi */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-orange-400">
                <span className="text-3xl mr-3">🥗</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Kandungan Nutrisi</h2>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-700 text-sm mb-4">
                  <strong>Per 100 gram mentimun segar mengandung:</strong>
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300">
                  <h4 className="font-bold text-gray-800 mb-3">💪 Nutrisi Utama</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Kalori</span>
                      <strong>15 kcal</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Air</span>
                      <strong>95%</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Protein</span>
                      <strong>0.6 g</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Karbohidrat</span>
                      <strong>3.6 g</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Serat</span>
                      <strong>0.5 g</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300">
                  <h4 className="font-bold text-gray-800 mb-3">🌟 Vitamin & Mineral</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex justify-between">
                      <span>Vitamin C</span>
                      <strong>2.8 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Vitamin K</span>
                      <strong>16.4 mcg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Kalium</span>
                      <strong>147 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Magnesium</span>
                      <strong>13 mg</strong>
                    </li>
                    <li className="flex justify-between border-t pt-2">
                      <span>Antioksidan</span>
                      <strong>Tinggi</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cara Budidaya */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-lime-400">
                <span className="text-3xl mr-3">🌱</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Cara Budidaya</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-lime-50 rounded-xl p-5 border-l-4 border-lime-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">1️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Persiapan Lahan</h4>
                      <p className="text-sm text-gray-700">Gemburkan tanah, campur dengan kompos atau pupuk kandang. Buat bedengan dengan lebar 1-1.2 meter, tinggi 30 cm.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-xl p-5 border-l-4 border-lime-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">2️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Penanaman Benih</h4>
                      <p className="text-sm text-gray-700">Tanam benih sedalam 1-2 cm, jarak tanam 40-50 cm. Siram secara teratur. Benih akan berkecambah dalam 3-7 hari.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-xl p-5 border-l-4 border-lime-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">3️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Perawatan Tanaman</h4>
                      <p className="text-sm text-gray-700">Siram setiap pagi/sore, beri ajir atau rambatan. Pupuk setiap 2 minggu sekali. Bersihkan gulma secara rutin.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-lime-50 rounded-xl p-5 border-l-4 border-lime-500">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">4️⃣</span>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">Pemanenan</h4>
                      <p className="text-sm text-gray-700">Panen setelah 50-70 hari. Petik buah yang sudah ukuran ideal (15-25 cm), masih hijau segar. Panen pagi/sore hari.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fakta Seru */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">✨ FAKTA SERU ✨</h2>
                <p className="text-white/90">Tahukah kamu tentang mentimun?</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🌍</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Berasal dari Asia Selatan</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Mentimun berasal dari Asia Selatan</strong> dan telah dibudidayakan lebih dari 3000 tahun!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">💪</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Membantu Menyegarkan</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Mentimun bisa membantu menyegarkan tubuh</strong> karena 95% kandungannya adalah air!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🥗</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Bisa Dimakan Langsung</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Mentimun bisa dimakan langsung tanpa dimasak</strong>, cocok untuk salad atau jus segar!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🧊</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Lebih Dingin dari Udara</h3>
                  <p className="text-sm text-white/90 text-center">
                    Suhu dalam mentimun bisa <strong className="text-yellow-300">20°F lebih dingin</strong> dari suhu luar. Makanya segar!
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
                    <h4 className="font-bold text-gray-800 mb-1">Sinar Matahari Penuh</h4>
                    <p className="text-sm text-gray-600">Mentimun butuh 6-8 jam sinar matahari langsung setiap hari</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Penyiraman Teratur</h4>
                    <p className="text-sm text-gray-600">Siram 1-2x sehari, jaga tanah tetap lembab tapi tidak tergenang</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🪴</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pupuk Organik</h4>
                    <p className="text-sm text-gray-600">Berikan pupuk kompos atau kandang setiap 2 minggu</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Ajir/Rambatan</h4>
                    <p className="text-sm text-gray-600">Pasang ajir agar tanaman merambat dengan baik dan buah tidak busuk</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🐛</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kontrol Hama</h4>
                    <p className="text-sm text-gray-600">Cek rutin, semprot pestisida organik jika ada kutu atau ulat</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">✂️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Panen Tepat Waktu</h4>
                    <p className="text-sm text-gray-600">Panen saat ukuran ideal, jangan terlalu tua agar tidak pahit</p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-bold text-yellow-800 mb-2 text-sm">Masalah Umum:</h4>
                    <p className="text-xs text-yellow-700">Daun menguning (kekurangan nutrisi), buah pahit (kurang air), busuk buah (terlalu lembab), kutu daun. Atasi dengan perawatan yang tepat!</p>
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
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
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