// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const animals = [
    {
      id: 'ayam',
      name: 'Ayam',
      scientificName: 'Gallus gallus domesticus',
      image: '/images/ayam.png',
      icon: '🐔',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'kambing',
      name: 'Kambing',
      scientificName: 'Capra aegagrus hircus',
      image: '/images/kambing.png',
      icon: '🐐',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'domba',
      name: 'Domba',
      scientificName: 'Ovis aries',
      image: '/images/domba.png',
      icon: '🐑',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  const plants = [
    {
      id: 'mentimun',
      name: 'Mentimun',
      scientificName: 'Cucumis sativus',
      image: '/images/mentimun1.png',
      icon: '🥒',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'cabai',
      name: 'Cabai',
      scientificName: 'Capsicum annuum',
      image: '/images/cabai.png',
      icon: '🌶️',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'kacangpanjang',
      name: 'Kacang Panjang',
      scientificName: 'Vigna unguiculata',
      image: '/images/kacang-panjang.png',
      icon: '🫛',
      color: 'from-green-600 to-lime-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <span className="text-5xl mr-4">🌾</span>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Ensiklopedia Hewan & Tumbuhan
              </h1>
              <p className="text-gray-600 mt-2">
                Scan QR Code untuk informasi lengkap tentang hewan ternak dan tanaman sayuran
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hewan Ternak */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-3">🐾</span>
            <h2 className="text-3xl font-bold text-gray-800">Hewan Ternak</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                href={`/${animal.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${animal.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 text-6xl opacity-20">
                    {animal.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 relative z-10">{animal.name}</h3>
                  <p className="text-sm opacity-90 italic relative z-10">{animal.scientificName}</p>
                </div>
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                    Lihat Detail →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tanaman Sayuran */}
        <section>
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-3">🌱</span>
            <h2 className="text-3xl font-bold text-gray-800">Tanaman Sayuran</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plants.map((plant) => (
              <Link
                key={plant.id}
                href={`/${plant.id}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${plant.color} p-6 text-white relative`}>
                  <div className="absolute top-4 right-4 text-6xl opacity-20">
                    {plant.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-1 relative z-10">{plant.name}</h3>
                  <p className="text-sm opacity-90 italic relative z-10">{plant.scientificName}</p>
                </div>
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white">
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all">
                    Lihat Detail →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 pb-8">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <p className="text-gray-700 text-lg mb-2">
              📱 <strong>Scan QR Code</strong> untuk akses cepat!
            </p>
            <p className="text-gray-500 text-sm">
              Website Edukasi Hewan & Tumbuhan
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}