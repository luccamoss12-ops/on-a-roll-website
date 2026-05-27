export default function OnARollWebsite() {
  return (
    <div className="min-h-screen bg-orange-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">On A Roll</h1>
          <p className="text-2xl mb-8">Fresh Rolls • Burgers • Snacks • Good Vibes</p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition-transform">
            Order Now
          </button>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1974"
          alt="Burger"
          className="rounded-3xl shadow-2xl object-cover h-[400px] w-full"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6 text-orange-600">About Us</h2>
          <p className="text-lg leading-relaxed mb-4">
            At On A Roll, we serve delicious comfort food made fresh every day. Whether you're craving a loaded burger, crispy chips, fresh rolls, or a quick snack, we’ve got you covered.
          </p>
          <p className="text-lg leading-relaxed">
            Located in Glen Iris, we’re all about quality food, friendly service, and a chill local vibe.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-orange-600">Popular Menu</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Classic Burger',
                price: '$12',
                img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999'
              },
              {
                title: 'Loaded Fries',
                price: '$9',
                img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1974'
              },
              {
                title: 'Fresh Roll Combo',
                price: '$11',
                img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-3xl overflow-hidden shadow-xl hover:scale-105 transition-transform"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-orange-600 font-semibold text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-6 bg-orange-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-orange-700">What People Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Best local burgers I’ve had in ages.',
              'Super friendly staff and amazing chips.',
              'Fresh food, fast service, and great prices.'
            ].map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg">
                <p className="text-lg italic">“{review}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-600">Visit Us</h2>
        <p className="text-xl mb-2">Glen Iris, Melbourne, Australia</p>
        <p className="text-lg text-gray-600 mb-8">Open Daily • Fresh Food All Day</p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-orange-600 transition">
            Call Now
          </button>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:bg-yellow-500 transition">
            Get Directions
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 On A Roll — Made with 🍔 in Glen Iris</p>
      </footer>
    </div>
  );
}
