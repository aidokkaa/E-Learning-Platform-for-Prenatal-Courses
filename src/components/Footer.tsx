import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-[#EAD9CE] bg-[#FFFDFB] py-16 mt-20">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Логотип */}
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-serif italic text-[#412B1A] mb-4 block">
            EduPreg
          </Link>
          <p className="text-[#6E5949] text-sm font-light leading-relaxed">
            Professional education for your journey into motherhood.
          </p>
        </div>

        {/* Ссылки */}
        <div>
          <h3 className="font-medium mb-6 text-sm text-[#412B1A]">Platform</h3>
          <ul className="space-y-4 text-sm font-light text-[#6E5949]">
            <li><Link href="/courses" className="hover:text-[#412B1A] transition">All Courses</Link></li>
            <li><Link href="/faq" className="hover:text-[#412B1A] transition">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-6 text-sm text-[#412B1A]">Support</h3>
          <ul className="space-y-4 text-sm font-light text-[#6E5949]">
            <li><Link href="/about" className="hover:text-[#412B1A] transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-[#412B1A] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Подписка (в тон сайта) */}
        <div>
          <h3 className="font-medium mb-6 text-sm text-[#412B1A]">Stay Updated</h3>
          <input 
            type="email" 
            placeholder="Your email" 
            className="w-full bg-white border border-[#EAD9CE] rounded-full px-4 py-2.5 text-sm mb-4 focus:outline-none focus:border-[#412B1A] transition"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-[#EAD9CE] text-sm text-[#6E5949] font-light text-center">
        © {new Date().getFullYear()} EduPreg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;