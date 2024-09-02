// components/HeroSection.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      {/* Left Side - Text */}
      <div className="lg:w-1/2 text-center lg:text-left p-4 lg:p-8">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
        Hi There! 👋🏻
        <br /><br />
        I am Vikash Bharal
        </h1>
        <br />
        <p className="text-lg lg:text-xl text-white mb-6 leading-relaxed">
        Full-Stack Dev Intern @SkillifyMe | 🎓 C.S.E '26 @ I.K.G P.T.U |🚀 GDSC IKGPTU Core Team Member | MERN Stack Developer |⚛️ React.js + Node.js | Python & AI/ML Explorer |🧠DSA in C++ | ✍️Passionate Blogger        </p>
        <Link href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold">
            Connect
        </Link>
      </div>
      {/* Right Side - Image */}
      <div className="lg:w-1/2 p-4 lg:p-8">
        <Image
          src="/developer.svg" // Replace with the actual path to your image
          alt="Vikash"
          width={500} // Adjust width as needed
          height={500} // Adjust height as needed
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
