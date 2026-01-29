// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  const animals = [
    { id: 'ayam', nama: 'Ayam', icon: '🐔', color: 'from-orange-400 to-red-400', latin: 'Gallus gallus domesticus' },
    { id: 'kambing', nama: 'Kambing', icon: '🐐', color: 'from-amber-400 to-orange-400', latin: 'Capra aegagrus hircus' },
    { id: 'domba', nama: 'Domba', icon: '🐑', color: 'from-gray-300 to-white', latin: 'Ovis aries' },
  ];

  const plants = [
    { id: 'mentimun', nama: 'Mentimun', icon: '🥒', color: 'from-green-400 to-emerald-500', latin: 'Cucumis sativus' },
    { id: 'cabai', nama: 'Cabai', icon: '🌶️', color: 'from-red-500 to-rose-600', latin: 'Capsicum annuum' },
    { id: 'kacangpanjang', nama: 'Kacang Panjang', icon: '🫛', color: 'from-lime-400 to-green-500', latin: 'Vigna unguiculata' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-green-50 to-yellow-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            🌾 Ensiklopedia Hewan & Tumbuhan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Scan QR Code untuk informasi lengkap tentang hewan ternak dan tanaman sayuran
          </p>
        </header>

        {/* Hewan Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-3">🐾</span>
            <h2 className="text-4xl font-bold text-gray-800">Hewan Ternak</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                href={`/${animal.id}`}
                className="group transform transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${animal.color} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl`}>
                  <div className="p-8 text-center">
                    <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform">
                      {animal.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {animal.nama}
                    </h3>
                    <p className="text-white/90 text-sm italic mb-4">
                      {animal.latin}
                    </p>
                    <div className="inline-flex items-center text-white font-semibold">
                      <span>Lihat Detail</span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Tumbuhan Section */}
        <section>
          <div className="flex items-center mb-8">
            <span className="text-4xl mr-3">🌱</span>
            <h2 className="text-4xl font-bold text-gray-800">Tanaman Sayuran</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((plant) => (
              <Link
                key={plant.id}
                href={`/${plant.id}`}
                className="group transform transition-all duration-300 hover:scale-105"
              >
                <div className={`bg-gradient-to-br ${plant.color} rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl`}>
                  <div className="p-8 text-center">
                    <div className="text-8xl mb-4 transform group-hover:scale-110 transition-transform">
                      {plant.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {plant.nama}
                    </h3>
                    <p className="text-white/90 text-sm italic mb-4">
                      {plant.latin}
                    </p>
                    <div className="inline-flex items-center text-white font-semibold">
                      <span>Lihat Detail</span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center mt-20 pb-8">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <p className="text-gray-700 text-lg">
              📱 <strong>Scan QR Code</strong> untuk akses cepat ke informasi lengkap!
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}