import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 flex justify-center">
      <div className="w-full max-w-lg mx-auto">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <img src="/path-to-home-icon" alt="home" className="h-8 w-8" />
            <nav className="flex space-x-4">
              <button className="text-gray-400 hover:text-white">🔍</button>
              <button className="text-gray-400 hover:text-white">📂</button>
              <button className="text-gray-400 hover:text-white">🔒</button>
              <button className="text-gray-400 hover:text-white">⚙️</button>
            </nav>
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded">Hire Me</button>
        </header>

        {/* Profile Section */}
        <section className="my-8 bg-gray-800 rounded p-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img src="/path-to-profile-avatar" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">I'm Brian Do</h1>
              <p className="text-sm text-gray-400">Product designer from Jakarta, ID.</p>
              <p className="text-sm text-gray-400">Currently designing at Rectangle.</p>
              <div className="mt-2 flex space-x-4">
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Hire Me</button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded">Copy Email</button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="my-8 bg-gray-800 rounded p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Projects</h2>
            <button className="text-sm text-gray-400 hover:text-white">View All</button>
          </div>
          <div className="mt-4 space-y-4">
            <div className="p-4 bg-gray-700 rounded flex items-center justify-between">
              <div>
                <h3 className="font-bold">Morva Labs</h3>
                <p className="text-sm text-gray-400">Visual design, Branding</p>
              </div>
            </div>
            <div className="p-4 bg-gray-700 rounded flex items-center justify-between">
              <div>
                <h3 className="font-bold">Rectangle</h3>
                <p className="text-sm text-gray-400">Product design, Icon design</p>
              </div>
            </div>
            <div className="p-4 bg-gray-700 rounded flex items-center justify-between">
              <div>
                <h3 className="font-bold">Simply</h3>
                <p className="text-sm text-gray-400">Landing page, Illustration design</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="my-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2023 Subtle Folio — Framer Template by Brian Do
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
