// app/ayam/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function AyamPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-700 hover:text-orange-600 transition-colors font-medium"
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
          <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 sm:px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">AYAM</h1>
                <p className="text-lg sm:text-xl italic opacity-90">Gallus gallus domesticus</p>
              </div>
              <div className="text-6xl sm:text-7xl">🐔</div>
            </div>
          </div>

          {/* Gambar Ayam - Full Width & Responsive */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gradient-to-b from-sky-200 to-green-100">
            <Image
              src="/images/ayam.png"
              alt="Ayam - Gallus gallus domesticus"
              fill
              className="object-contain p-4"
              priority
            />
          </div>
        </div>

        {/* Stats Cards - 4 Kolom Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🥚</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">200-300</div>
            <div className="text-sm text-gray-600 mt-1">Telur/Tahun</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">🌡️</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-600">20-30°C</div>
            <div className="text-sm text-gray-600 mt-1">Suhu Ideal</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">⏱️</div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">21 Hari</div>
            <div className="text-sm text-gray-600 mt-1">Masa Inkubasi</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-3">💪</div>
            <div className="text-2xl sm:text-3xl font-bold text-orange-600">2-3 kg</div>
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
            <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Aves</span>
            </div>
            <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
            <span className="text-gray-800 font-medium">Ordo</span>
            <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Galliformes</span>
            </div>
            <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
            <span className="text-gray-800 font-medium">Famili</span>
            <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Phasianidae</span>
            </div>
            <div className="flex justify-between items-center text-sm border-t border-gray-200 py-2">
            <span className="text-gray-800 font-medium">Genus</span>
            <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Gallus</span>
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
                    <span>Kandang dengan ventilasi baik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Suhu optimal 20-30°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Area kering dan bersih</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Pencahayaan alami cukup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Ruang gerak 0.5-1 m² per ekor</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manfaat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🎁</span>
                  Manfaat Ayam
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🍗 Daging</div>
                  <div className="text-xs text-gray-600">Sumber protein hewani berkualitas</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🥚 Telur</div>
                  <div className="text-xs text-gray-600">Protein lengkap dengan nutrisi essensial</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">🪶 Bulu</div>
                  <div className="text-xs text-gray-600">Bahan kerajinan dan industri</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                  <div className="font-bold text-sm text-gray-800 mb-1">💩 Kotoran</div>
                  <div className="text-xs text-gray-600">Pupuk organik berkualitas tinggi</div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Ayam */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              <div className="flex items-center mb-5 pb-4 border-b-2 border-orange-400">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tentang Ayam</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-orange-600">Ayam</strong> (<em>Gallus gallus domesticus</em>) adalah <strong>hewan ternak unggas</strong> yang paling banyak dipelihara di seluruh dunia. Ayam merupakan hasil domestikasi dari ayam hutan merah yang berasal dari <strong>Asia Tenggara</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sebagai <strong>hewan omnivora</strong>, ayam memakan berbagai jenis makanan seperti biji-bijian, jagung, dedak, sayuran hijau, dan serangga kecil. Kemampuan adaptasi ayam yang tinggi membuat mereka dapat dipelihara di berbagai kondisi iklim.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ayam memiliki peran ekonomi sangat penting sebagai penyedia protein hewani berupa <strong>daging dan telur</strong>. Selain itu, kotoran ayam juga dimanfaatkan sebagai pupuk organik yang kaya nitrogen.
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
                      <span>Jengger dan pial merah cerah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Paruh keras dan runcing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Sayap untuk terbang pendek</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>4 jari kaki dengan cakar tajam</span>
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
                      <span>Aktif di pagi dan siang hari</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Hidup berkelompok (sosial)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Berkokok menandai wilayah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Bisa mengenali ratusan wajah</span>
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
                <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300 text-center">
                  <div className="text-3xl mb-2">🌽</div>
                  <h4 className="font-bold text-gray-800 mb-2">Karbohidrat</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Jagung</li>
                    <li>Beras/Dedak</li>
                    <li>Gandum</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300 text-center">
                  <div className="text-3xl mb-2">🥬</div>
                  <h4 className="font-bold text-gray-800 mb-2">Vitamin</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Sayuran hijau</li>
                    <li>Wortel</li>
                    <li>Kangkung</li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border-2 border-red-300 text-center">
                  <div className="text-3xl mb-2">🐛</div>
                  <h4 className="font-bold text-gray-800 mb-2">Protein</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Serangga kecil</li>
                    <li>Cacing tanah</li>
                    <li>Kedelai</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-700">💡 Tips:</strong> Berikan pakan 2-3 kali sehari (100-150g per ekor). Pastikan air bersih selalu tersedia.
                </p>
              </div>
            </div>

            {/* Fakta Seru */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-lg p-6 sm:p-8 text-white">
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">✨ FAKTA SERU ✨</h2>
                <p className="text-white/90">Tahukah kamu tentang ayam?</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🧠</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Ayam Pintar!</h3>
                  <p className="text-sm text-white/90 text-center">
                    Ayam bisa mengenali ratusan wajah dan dapat menghitung hingga 5!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">👁️</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Penglihatan Tajam</h3>
                  <p className="text-sm text-white/90 text-center">
                    Ayam bisa melihat warna lebih banyak dari manusia, termasuk sinar UV!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">🌍</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Populasi Terbanyak</h3>
                  <p className="text-sm text-white/90 text-center">
                    Ada lebih dari 25 miliar ayam di seluruh dunia!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30">
                  <div className="text-4xl mb-3 text-center">💤</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Bermimpi</h3>
                  <p className="text-sm text-white/90 text-center">
                    Ayam mengalami fase REM saat tidur, artinya mereka bermimpi!
                  </p>
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
                    <p className="text-sm text-gray-600">Bersihkan minimal 2x seminggu</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🍚</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pakan Bergizi</h4>
                    <p className="text-sm text-gray-600">Berikan 2-3 kali sehari</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Air Bersih</h4>
                    <p className="text-sm text-gray-600">Ganti air setiap hari</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💉</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Vaksinasi</h4>
                    <p className="text-sm text-gray-600">Lakukan sesuai jadwal</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Isolasi Sakit</h4>
                    <p className="text-sm text-gray-600">Pisahkan segera jika sakit</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kontrol Suhu</h4>
                    <p className="text-sm text-gray-600">Jaga 20-30°C</p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-bold text-red-800 mb-2 text-sm">Tanda Ayam Sakit:</h4>
                    <p className="text-xs text-red-700">Nafsu makan menurun, bulu kusam, diare, lesu, sesak napas. Segera hubungi dokter hewan!</p>
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
            className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
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