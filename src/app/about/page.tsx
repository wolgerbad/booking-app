export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-200 mb-6">
          About Us
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
          Discover the story behind our commitment to creating unforgettable
          experiences
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Image and Text Section 1 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/image%20bucket/Gemini_Generated_Image_vk27j0vk27j0vk27.png"
              alt="Luxury accommodation"
              className="w-full h-auto shadow-2xl object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-200">
              Our Mission
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in creating spaces where luxury meets comfort, and
              every moment becomes a cherished memory. Our mission is to provide
              exceptional hospitality that goes beyond expectations.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From the moment you arrive, we strive to make your stay
              unforgettable with attention to detail and personalized service
              that makes you feel at home.
            </p>
          </div>
        </section>

        {/* Image and Text Section 2 */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-200">
              What We Offer
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience the perfect blend of modern amenities and natural
              beauty. Our properties are carefully designed to provide the
              ultimate relaxation and adventure experience.
            </p>
            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span>Premium accommodations with world-class amenities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span>Stunning locations surrounded by natural beauty</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span>Personalized service tailored to your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-yellow-500 mt-1">✓</span>
                <span>Unforgettable experiences and memories</span>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://rjmixcltcmxukccddxxt.supabase.co/storage/v1/object/public/image%20bucket/Gemini_Generated_Image_69i7ke69i7ke69i7.png"
              alt="Beautiful scenery"
              className="w-full h-auto  shadow-2xl object-cover"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 border-t border-gray-700">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-200 mb-6">
            Ready to Experience Paradise?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us and discover the perfect blend of luxury, comfort, and
            natural beauty.
          </p>
          <a
            href="/rooms"
            className="inline-block px-8 py-4 bg-yellow-600 hover:bg-yellow-700 text-lg font-medium text-gray-800 transition-colors"
          >
            Explore Our Rooms
          </a>
        </section>
      </div>
    </div>
  );
}
