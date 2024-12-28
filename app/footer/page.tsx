import React from "react";
import Image from "next/image";

const Footer: React.FC = () =>
{
    return (
            <div>
              <footer className="bg-gray-100 py-12">
                <div className="container mx-auto px-6 md:px-12">
                  {/* Top Section */}
                  <div className="flex flex-col items-center space-y-6">
                    <h2 className="text-xl font-bold">Bandage</h2>
        
                    {/* Social Media Links */}
                    <div className="flex space-x-4">
                      <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                      <Image src="/instagram.png" alt="Instagram" width={24} height={24} />
                      <Image src="/twitter (1).png" alt="Twitter" width={24} height={24} />
                    </div>
                  </div>
        
                  {/* Middle Section */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
                    {/* Links Columns */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Company Info</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Carrier</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Terms & Conditions</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Privacy Policy</a></li>
                      </ul>
                    </div>
        
                    {/* More Links */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                      <ul className="space-y-2">
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">FAQ</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Shipping</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Returns</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-gray-800">Payment Options</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              
    
        <div className="text-center p-4 bg-blue-600 text-white">
            @ 2024 Bandage, All rights reserved.
        </div>

        </footer>
        </div>
    );
};
export default Footer;