import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-gray-700">
      <div className="container mx-auto py-12 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Information */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Funiro.</h1>
            <p className="text-gray-600 mt-3">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900">Quick Links</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/">
                  <span className="hover:text-yellow-600 cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <span className="hover:text-yellow-600 cursor-pointer">Shop</span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span className="hover:text-yellow-600 cursor-pointer">Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-yellow-600 cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900">Support</h2>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="hover:text-yellow-600">Payment Options</a></li>
              <li><a href="#" className="hover:text-yellow-600">Returns</a></li>
              <li><a href="#" className="hover:text-yellow-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h2 className="font-semibold text-lg text-gray-900">Newsletter</h2>
            <form className="mt-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:ring-yellow-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-5 py-2 rounded-r-md hover:bg-yellow-600"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-yellow-600">
                <FaFacebookF size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-yellow-600">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-yellow-600">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Secure Payment & Trust Section (Text-based) */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 font-semibold">Secure Payment Methods:</p>
          <p className="text-gray-600 mt-2">
            Visa, MasterCard, PayPal, American Express, Apple Pay, Google Pay
          </p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// abc