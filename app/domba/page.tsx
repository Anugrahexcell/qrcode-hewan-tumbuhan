// app/domba/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function DombaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-700 hover:text-gray-600 transition-colors font-medium"
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
          <div className="bg-gradient-to-r from-gray-400 to-gray-600 px-6 sm:px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">DOMBA</h1>
                <p className="text-lg sm:text-xl italic opacity-90">Ovis aries</p>
              </div>
              <div className="text-6xl sm:text-7xl">🐑</div>
            </div>
          </div>

          {/* Gambar Domba - Background Putih Bersih */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white">
            <Image
              src="/images/domba.png"
              alt="Domba - Ovis aries"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Stats Cards - 4 Kolom Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🧶</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">3-5 kg</div>
            <div className="text-sm text-gray-600 mt-1">Wol/Tahun</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌡️</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-600">10-25°C</div>
            <div className="text-sm text-gray-600 mt-1">Suhu Ideal</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">⏱️</div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">5 Bulan</div>
            <div className="text-sm text-gray-600 mt-1">Masa Bunting</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💪</div>
            <div className="text-2xl sm:text-3xl font-bold text-gray-600">40-100 kg</div>
            <div className="text-sm text-gray-600 mt-1">Berat Dewasa</div>
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
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Animalia</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Filum</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Chordata</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Kelas</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Mammalia</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Ordo</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Artiodactyla</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Famili</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Bovidae</span>
                </div>
                <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
                  <span className="text-gray-800 font-medium">Genus</span>
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Ovis</span>
                </div>
              </div>
            </div>

            {/* Habitat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🏡</span>
                  Habitat & Lingkungan
                </h2>
              </div>
              <div className="p-5">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Padang rumput terbuka</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Daerah dataran tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Kandang kering dan bersih</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Suhu optimal 10-25°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Area dengan ventilasi baik</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manfaat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-gray-500 to-gray-700 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🎁</span>
                  Manfaat Domba
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🍖 Daging</div>
                  <div className="text-xs text-gray-600">Sumber protein berkualitas tinggi</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🧶 Wol/Bulu</div>
                  <div className="text-xs text-gray-600">Bahan pakaian, karpet, selimut</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🥛 Susu</div>
                  <div className="text-xs text-gray-600">Nutrisi tinggi, bisa diolah keju</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🧥 Kulit</div>
                  <div className="text-xs text-gray-600">Bahan jaket, tas, sepatu kulit</div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Domba */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-gray-400">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tentang Domba</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-gray-600">Domba</strong> (<em>Ovis aries</em>) adalah <strong>hewan ternak herbivora</strong> yang berasal dari <strong>Asia Barat dan Asia Tengah</strong>. Domba telah didomestikasi sejak ribuan tahun lalu dan menjadi salah satu hewan ternak penting untuk produksi wol, daging, dan susu.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Domba memiliki karakter yang <strong>jinak, mudah dipelihara, dan hidup berkelompok</strong>. Mereka dikenal dengan bulunya yang tebal dan lembut. <strong>Domba suka makan rumput dan daun-daunan</strong>, serta memiliki sistem pencernaan ruminansia yang efisien.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Salah satu keunikan domba adalah <strong>bulu domba dapat dipotong tanpa melukai tubuhnya</strong>. Proses pencukuran bulu (shearing) dilakukan secara rutin untuk menjaga kesehatan domba dan menghasilkan wol berkualitas. Domba bisa dimanfaatkan <strong>daging, wol, dan kotoran</strong>.
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
                    <span className="text-2xl mr-2">👁️</span>
                    <h3 className="font-bold text-gray-800">Ciri Fisik</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Bulu tebal dan keriting (wol)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Kaki pendek dan kuat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Ekor pendek berbulu tebal</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Tanduk melengkung (pada jenis tertentu)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🧠</span>
                    <h3 className="font-bold text-gray-800">Perilaku</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Sangat sosial, hidup berkelompok</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Jinak dan mudah diatur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Aktif merumput di pagi dan sore</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Mengikuti domba pemimpin (leader)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pakan */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">🌾</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Pakan & Nutrisi</h2>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300 text-center">
                  <div className="text-3xl mb-2">🌿</div>
                  <h4 className="font-bold text-gray-800 mb-2">Hijauan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Rumput segar</li>
                    <li>Jerami</li>
                    <li>Daun-daunan</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300 text-center">
                  <div className="text-3xl mb-2">🌽</div>
                  <h4 className="font-bold text-gray-800 mb-2">Konsentrat</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Jagung</li>
                    <li>Dedak padi</li>
                    <li>Bungkil kelapa</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300 text-center">
                  <div className="text-3xl mb-2">🧂</div>
                  <h4 className="font-bold text-gray-800 mb-2">Mineral</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Garam mineral</li>
                    <li>Kalsium</li>
                    <li>Fosfor</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-700">💡 Tips Pemberian Pakan:</strong> Berikan rumput 3-4 kg per hari dan konsentrat 0.5-1 kg. Domba membutuhkan air bersih 4-6 liter per hari. Pastikan pakan hijauan berkualitas baik.
                </p>
              </div>
            </div>

            {/* Reproduksi */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-pink-400">
                <span className="text-3xl mr-3">👶</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Reproduksi</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-pink-50 rounded-xl p-5 border-2 border-pink-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                    <span className="text-2xl mr-2">📅</span>
                    Siklus Reproduksi
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Dewasa kelamin: 6-8 bulan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Masa bunting: 5 bulan (147-150 hari)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Lahir: 1-2 anak per kelahiran</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Bisa melahirkan 1x per tahun</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                    <span className="text-2xl mr-2">🍼</span>
                    Perawatan Anak
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Menyusui hingga 3 bulan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Mulai makan rumput 2-3 minggu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Disapih pada usia 2-3 bulan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Berat lahir: 3-5 kg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fakta Seru */}
            <div className="bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">✨ FAKTA SERU ✨</h2>
                <p className="text-white/90">Tahukah kamu tentang domba?</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🧶</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Produsen Wol</h3>
                  <p className="text-sm text-white/90 text-center">
                    <strong className="text-yellow-300">Bulu domba dapat dipotong tanpa melukainya</strong> dan tumbuh kembali! Satu domba bisa menghasilkan 3-5 kg wol per tahun.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">👥</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Hewan Sosial</h3>
                  <p className="text-sm text-white/90 text-center">
                    Domba sangat <strong className="text-yellow-300">takut sendirian</strong>! Mereka selalu ingin dekat dengan kawanannya untuk merasa aman.
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🧠</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Ingatan Kuat</h3>
                  <p className="text-sm text-white/90 text-center">
                    Domba bisa <strong className="text-yellow-300">mengingat wajah</strong> manusia dan domba lain hingga bertahun-tahun!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">👁️</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Penglihatan Luas</h3>
                  <p className="text-sm text-white/90 text-center">
                    Dengan mata di samping kepala, domba bisa melihat <strong className="text-yellow-300">hampir 300 derajat</strong> tanpa menoleh!
                  </p>
                </div>
              </div>
            </div>

            {/* Perawatan Wol */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-indigo-400">
                <span className="text-3xl mr-3">✂️</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Perawatan Wol/Bulu</h2>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Bulu domba perlu dicukur secara rutin untuk menjaga kesehatannya.</strong> Proses pencukuran (shearing) dilakukan 1-2 kali per tahun, biasanya menjelang musim panas.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="text-xl mr-2">📅</span>
                      Jadwal Cukur
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cukur 1-2 kali per tahun</li>
                      <li>• Waktu terbaik: awal musim panas</li>
                      <li>• Hindari musim hujan/dingin</li>
                    </ul>
                  </div>

                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-200">
                    <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                      <span className="text-xl mr-2">✅</span>
                      Manfaat Cukur
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Mencegah panas berlebih</li>
                      <li>• Menghindari parasit</li>
                      <li>• Menjaga kebersihan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips Perawatan */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">💚</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tips Perawatan</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🧹</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kebersihan Kandang</h4>
                    <p className="text-sm text-gray-600">Bersihkan kandang setiap hari, jaga agar tetap kering</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pakan Bergizi</h4>
                    <p className="text-sm text-gray-600">Berikan rumput segar dan konsentrat secara rutin</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Air Bersih</h4>
                    <p className="text-sm text-gray-600">Sediakan air bersih 24 jam, ganti 2x sehari</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">✂️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Cukur Bulu Rutin</h4>
                    <p className="text-sm text-gray-600">Cukur bulu 1-2 kali per tahun, hindari musim dingin</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💉</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Vaksinasi</h4>
                    <p className="text-sm text-gray-600">Vaksinasi rutin dan obat cacing setiap 3-6 bulan</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🦶</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Potong Kuku</h4>
                    <p className="text-sm text-gray-600">Potong kuku kaki setiap 2-3 bulan sekali</p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-bold text-red-800 mb-2 text-sm">Tanda Domba Sakit:</h4>
                    <p className="text-xs text-red-700">Nafsu makan menurun, bulu kusam dan rontok, lemas, diare, hidung kering, demam. Pisahkan dari kawanan dan hubungi dokter hewan segera!</p>
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
            className="inline-flex items-center bg-gradient-to-r from-gray-500 to-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
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