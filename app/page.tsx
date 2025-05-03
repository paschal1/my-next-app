// app/page.tsx or pages/index.js
import '../styles/globals.css';

export default function Home() {
  return (
    <>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-teal-400 text-xl font-bold">D-Starite</h1>
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-teal-300">Home</a></li>
              <li><a href="#" className="hover:text-teal-300">About</a></li>
              <li><a href="#" className="hover:text-teal-300">Services</a></li>
              <li><a href="#" className="hover:text-teal-300">Academy</a></li>
              <li><a href="#" className="hover:text-teal-300">Contact</a></li>
            </ul>
            <a href="#" className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Get Started</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Empowering Growth Through Innovation</h2>
          <p className="text-lg mb-6">We build software, train talents, and transform businesses.</p>
          <a href="#" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded">Learn More</a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
          <p className="text-gray-700 max-w-2xl">D-Starite Technologies is a forward-thinking tech company focused on empowering businesses and individuals through technology, training, and innovation.</p>
        </div>
      </section>

      <section className="bg-teal-50 py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">Software Development</div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">Tech Academy</div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">IT Consulting</div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
          <p className="mb-6">Reach out and let's build something great together.</p>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded text-white">Contact Us</a>
        </div>
      </section>

      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2025 D-Starite Technologies. All rights reserved.</p>
      </footer>
    </>
  );
}
