import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Overview</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Tutorials</li>
              <li>Pricing</li>
              <li>Releases</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-600">
              <li>About us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>News</li>
              <li>Media kit</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Events</li>
              <li>Help centre</li>
              <li>Tutorials</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Use cases</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Startups</li>
              <li>Enterprise</li>
              <li>Government</li>
              <li>SaaS centre</li>
              <li>Marketplaces</li>
              <li>Ecommerce</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Social</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>GitHub</li>
              <li>Dribbble</li>
              <li>AngelList</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center border-t pt-6 text-gray-600">
          <div className="flex items-center">
            <Image
              src={logo}
              width={1000}
              height={1000}
              alt="Logo"
              className=" w-48"
            />
          </div>
          <p>&copy; 2077 Untitled UI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
