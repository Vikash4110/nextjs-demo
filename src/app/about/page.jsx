// pages/about.js
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaBrain } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiJavascript, SiNextdotjs } from 'react-icons/si';

const Page = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact className="text-5xl text-blue-600" /> },
    { name: 'MERN Stack', icon: <SiJavascript className="text-5xl text-yellow-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-5xl text-black" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl text-sky-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-green-600" /> },
    { name: 'Express.js', icon: <SiExpress className="text-5xl text-gray-800" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-green-600" /> },
    { name: 'Python', icon: <FaPython className="text-5xl text-blue-500" /> },
    { name: 'Machine Learning', icon: <FaBrain className="text-5xl text-orange-600" /> },
    { name: 'Data Structures & Algorithms', icon: <FaDatabase className="text-5xl text-gray-700" /> }
  ];

  const experience = [
    {
      role: 'Full-Stack Developer Intern',
      company: 'SkillifyMe',
      duration: 'Ongoing',
      description: 'Worked on building a dashboard using Devias Kit and Material-UI (MUI), implemented Firebase authentication and storage, and developed a certificate generator with backend integration.'
    },
    {
      role: 'AI/ML Intern',
      company: 'HopinMinds',
      duration: 'July 2024 - August 2024',
      description: 'Worked on various AI/ML projects including Heart Disease Prediction, Dogs vs. Cats model, Titanic Death Prediction, and Software Developer Salary Prediction.'
    }
  ];

  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">About Me</h1>
        
        {/* Skills Section */}
        <section className="mb-12 p-8 bg-blue-600 text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                {skill.icon}
                <span className="text-lg text-gray-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

     
        {/* Work Experience Section */}
        <section className="mb-12 p-8 bg-yellow-600 text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 p-6 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-gray-800">{exp.role} at <span className="text-blue-500">{exp.company}</span></h3>
              <p className="text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-lg text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>
           {/* Aim and Vision Section */}
           <section className="mb-12 p-8 bg-green-600 text-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Aim and Vision</h2>
          <p className="text-lg">
            My aim is to become a successful Software Engineer, contributing to innovative technological advancements. I am passionate about creating impactful solutions and continually improving my skills in both frontend and backend technologies.
          </p>
        </section>
        hello 

      </div>
    </div>
  );
};

export default Page;
