'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function KambingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSound = () => {
    // Visual feedback only (no audio file error)
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
    
    // Uncomment when audio file ready:
    // if (audioRef.current) {
    //   audioRef.current.play().catch(console.error);
    // }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hidden Audio Element (disabled for now to avoid error) */}
      {/* <audio ref={audioRef} src="/sounds/kambing.mp3" preload="auto" /> */}

      {/* Sticky Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-700 hover:text-amber-600 transition-colors font-medium"
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
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 animate-fadeIn">
          {/* Header dengan Sound Button - UPDATED */}
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 sm:px-8 py-6 text-white">
            <div className="flex items-center justify-between">
              <div className="animate-slideIn">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">KAMBING</h1>
                <p className="text-lg sm:text-xl italic opacity-90">Capra aegagrus hircus</p>
              </div>
              
              {/* Emoji dan Sound Button - Side by Side - NEW LAYOUT */}
              <div className="flex items-center gap-3">
                {/* Sound Button - di sebelah kiri */}
                <button
                  onClick={playSound}
                  className={`bg-white text-amber-600 rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300 flex-shrink-0 ${isPlaying ? 'animate-pulse ring-4 ring-white/40' : ''}`}
                  title="🔊 Dengar suara kambing"
                  aria-label="Play goat sound"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {/* Animated Goat Emoji - di sebelah kanan */}
                <div className="text-6xl sm:text-7xl animate-float">🐐</div>
              </div>
            </div>
          </div>

          {/* Gambar Kambing - Background Putih Bersih */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-white">
            <Image
              src="/images/kambing.png"
              alt="Kambing - Capra aegagrus hircus"
              fill
              className="object-contain p-4 animate-slideUp"
              priority
            />
          </div>
        </div>

        {/* Stats Cards - 4 Kolom Responsive */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn" style={{animationDelay: '0.1s'}}>
            <div className="text-4xl mb-3">🥛</div>
            <div className="text-2xl sm:text-3xl font-bold text-blue-600">1-3 L</div>
            <div className="text-sm text-gray-600 mt-1">Susu/Hari</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="text-4xl mb-3">🌡️</div>
            <div className="text-2xl sm:text-3xl font-bold text-green-600">15-30°C</div>
            <div className="text-sm text-gray-600 mt-1">Suhu Ideal</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn" style={{animationDelay: '0.3s'}}>
            <div className="text-4xl mb-3">⏱️</div>
            <div className="text-2xl sm:text-3xl font-bold text-purple-600">5 Bulan</div>
            <div className="text-sm text-gray-600 mt-1">Masa Bunting</div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn" style={{animationDelay: '0.4s'}}>
            <div className="text-4xl mb-3">💪</div>
            <div className="text-2xl sm:text-3xl font-bold text-amber-600">30-90 kg</div>
            <div className="text-sm text-gray-600 mt-1">Berat Dewasa</div>
          </div>
        </div>

        {/* Main Grid - 2 Kolom di Desktop, 1 Kolom di Mobile */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Sidebar Kiri */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Klasifikasi Ilmiah */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fadeIn" style={{animationDelay: '0.5s'}}>
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
                  <span className="font-bold text-gray-900 bg-indigo-50 px-3 py-1 rounded-lg">Capra</span>
                </div>
              </div>
            </div>

            {/* Habitat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fadeIn" style={{animationDelay: '0.6s'}}>
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
                    <span>Pegunungan dan dataran tinggi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Kandang dengan ventilasi baik</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Suhu optimal 15-30°C</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✓</span>
                    <span>Area kering dan tidak lembab</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Manfaat */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fadeIn" style={{animationDelay: '0.7s'}}>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-4">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <span className="mr-2">🎁</span>
                  Manfaat Kambing
                </h2>
              </div>
              <div className="p-5 space-y-3">
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 hover:shadow-md transition-shadow">
                  <div className="font-bold text-sm text-gray-800 mb-1">🍖 Daging</div>
                  <div className="text-xs text-gray-600">Sumber protein rendah lemak</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 hover:shadow-md transition-shadow">
                  <div className="font-bold text-sm text-gray-800 mb-1">🥛 Susu</div>
                  <div className="text-xs text-gray-600">Kaya nutrisi, mudah dicerna</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 hover:shadow-md transition-shadow">
                  <div className="font-bold text-sm text-gray-800 mb-1">🧥 Kulit</div>
                  <div className="text-xs text-gray-600">Bahan tas, sepatu, jaket</div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 hover:shadow-md transition-shadow">
                  <div className="font-bold text-sm text-gray-800 mb-1">💩 Kotoran</div>
                  <div className="text-xs text-gray-600">Pupuk organik berkualitas</div>
                </div>
              </div>
            </div>

          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tentang Kambing */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center mb-5 pb-4 border-b-2 border-amber-400">
                <span className="text-3xl mr-3">📖</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tentang Kambing</h2>
              </div>
              <div className="prose prose-sm sm:prose-base max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong className="text-amber-600">Kambing</strong> (<em>Capra aegagrus hircus</em>) adalah <strong>hewan ternak herbivora</strong> yang berasal dari <strong>Asia Barat dan Asia Tengah</strong>. Kambing telah didomestikasi sejak ribuan tahun lalu dan menjadi salah satu hewan ternak penting di dunia.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kambing memiliki kemampuan adaptasi yang sangat baik. Mereka bisa hidup di berbagai kondisi lingkungan, mulai dari dataran rendah hingga pegunungan tinggi. <strong>Kambing suka makan rumput dan daun-daunan</strong>, serta memiliki sistem pencernaan yang efisien untuk memproses makanan berserat.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Kambing dikenal sebagai hewan yang <strong>pintar, lincah, dan suka memanjat</strong>. Mereka memiliki suara khas "embe" yang mudah dikenali. Kambing bisa dimanfaatkan <strong>daging, susu, dan kotoran</strong> untuk berbagai keperluan ekonomi.
                </p>
              </div>
            </div>

            {/* Karakteristik */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.9s'}}>
              <div className="flex items-center mb-5 pb-4 border-b-2 border-blue-400">
                <span className="text-3xl mr-3">🔍</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Karakteristik</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200 hover:border-blue-400 transition-colors">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">👁️</span>
                    <h3 className="font-bold text-gray-800">Ciri Fisik</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Memiliki tanduk melengkung</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Jenggot khas di dagu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Kaki ramping dengan kuku terbelah</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Bulu pendek hingga panjang</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200 hover:border-purple-400 transition-colors">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-2">🧠</span>
                    <h3 className="font-bold text-gray-800">Perilaku</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Hidup berkelompok (sosial)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Aktif mencari makan siang hari</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Pintar dan mudah beradaptasi</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Suka memanjat tempat tinggi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pakan */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '1s'}}>
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">🌾</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Pakan & Nutrisi</h2>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border-2 border-green-300 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">🌿</div>
                  <h4 className="font-bold text-gray-800 mb-2">Hijauan</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Rumput segar</li>
                    <li>Daun-daunan</li>
                    <li>Jerami</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 border-2 border-yellow-300 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">🌽</div>
                  <h4 className="font-bold text-gray-800 mb-2">Konsentrat</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Jagung</li>
                    <li>Dedak</li>
                    <li>Ampas tahu</li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border-2 border-blue-300 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl mb-2">🧂</div>
                  <h4 className="font-bold text-gray-800 mb-2">Mineral</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Garam</li>
                    <li>Kalsium</li>
                    <li>Vitamin</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                <p className="text-sm text-gray-700">
                  <strong className="text-blue-700">💡 Tips Pemberian Pakan:</strong> Berikan hijauan 2-3 kg per hari dan konsentrat 0.5-1 kg. Pastikan air bersih tersedia 24 jam. Kambing minum 3-5 liter air per hari.
                </p>
              </div>
            </div>

            {/* Reproduksi */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '1.1s'}}>
              <div className="flex items-center mb-5 pb-4 border-b-2 border-pink-400">
                <span className="text-3xl mr-3">👶</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Reproduksi</h2>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-pink-50 rounded-xl p-5 border-2 border-pink-200 hover:shadow-lg transition-shadow">
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
                      <span>Masa bunting: 5 bulan (150 hari)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Lahir: 1-3 anak per kelahiran</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      <span>Bisa melahirkan 2x dalam setahun</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center">
                    <span className="text-2xl mr-2">🍼</span>
                    Perawatan Anak
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Menyusui hingga 3-4 bulan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Mulai makan rumput 2 minggu</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Pisahkan dari induk 3-4 bulan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Berat lahir: 2-4 kg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Fakta Seru */}
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl shadow-lg p-6 sm:p-8 text-white animate-fadeIn" style={{animationDelay: '1.2s'}}>
              <div className="text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">✨ FAKTA SERU ✨</h2>
                <p className="text-white/90">Tahukah kamu tentang kambing?</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30 hover:bg-white/30 transition-all">
                  <div className="text-4xl mb-3 text-center">🎯</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Pemanjat Ulung!</h3>
                  <p className="text-sm text-white/90 text-center">
                    Kambing pintar memanjat dan punya suara <strong className="text-yellow-300">"embe"</strong> yang khas. Mereka bisa memanjat pohon dan tebing curam!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30 hover:bg-white/30 transition-all">
                  <div className="text-4xl mb-3 text-center">👁️</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Mata 360°</h3>
                  <p className="text-sm text-white/90 text-center">
                    Pupil mata kambing <strong className="text-yellow-300">berbentuk horizontal</strong> sehingga bisa melihat hampir 360 derajat!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30 hover:bg-white/30 transition-all">
                  <div className="text-4xl mb-3 text-center">🍽️</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Pemakan Selektif</h3>
                  <p className="text-sm text-white/90 text-center">
                    Kambing sangat <strong className="text-yellow-300">pemilih makanan</strong>, mereka tidak akan makan rumput yang kotor atau basah!
                  </p>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border border-white/30 hover:bg-white/30 transition-all">
                  <div className="text-4xl mb-3 text-center">🧠</div>
                  <h3 className="font-bold text-lg mb-2 text-center">Hewan Cerdas</h3>
                  <p className="text-sm text-white/90 text-center">
                    Kambing bisa <strong className="text-yellow-300">memecahkan masalah</strong> dan mengingat cara keluar dari kandang yang rumit!
                  </p>
                </div>
              </div>
            </div>

            {/* Tips Perawatan */}
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '1.3s'}}>
              <div className="flex items-center mb-5 pb-4 border-b-2 border-green-400">
                <span className="text-3xl mr-3">💚</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Tips Perawatan</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🧹</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kebersihan Kandang</h4>
                    <p className="text-sm text-gray-600">Bersihkan kandang setiap hari, ganti alas tidur 1-2 minggu</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌿</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Pakan Berkualitas</h4>
                    <p className="text-sm text-gray-600">Berikan hijauan segar dan konsentrat 2-3 kali sehari</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💧</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Air Bersih</h4>
                    <p className="text-sm text-gray-600">Sediakan air bersih 24 jam, ganti 2-3x sehari</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">💉</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Vaksinasi & Obat Cacing</h4>
                    <p className="text-sm text-gray-600">Vaksinasi 6 bulan sekali, obat cacing 3 bulan sekali</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">✂️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Potong Kuku</h4>
                    <p className="text-sm text-gray-600">Potong kuku secara rutin setiap 2-3 bulan</p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-green-50 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="bg-green-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <span className="text-xl">🌡️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Kontrol Kesehatan</h4>
                    <p className="text-sm text-gray-600">Cek kondisi fisik setiap hari, suhu tubuh normal 38-40°C</p>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 bg-red-50 border-l-4 border-red-500 rounded-lg p-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-bold text-red-800 mb-2 text-sm">Tanda Kambing Sakit:</h4>
                    <p className="text-xs text-red-700">Nafsu makan turun, bulu kusam, diare, hidung berlendir, demam tinggi, lemas tidak mau berdiri. Segera hubungi dokter hewan!</p>
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
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
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