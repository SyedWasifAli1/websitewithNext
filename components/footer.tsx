// components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-indigo-400">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  