// pages/about.js
import React from 'react';

const Page = () => {
  const skills = [
    'React.js',
    'MERN Stack',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Python',
    'Machine Learning',
    'Data Structures & Algorithms'
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
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">About Me</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white bg-blue-600 p-4 rounded-lg mb-6">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-lg text-gray-700 hover:text-blue-500 transition-colors duration-300">{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white bg-green-600 p-4 rounded-lg mb-6">Aim and Vision</h2>
          <p className="text-lg text-gray-800">
            My aim is to become a successful Software Engineer, contributing to innovative technological advancements. I am passionate about creating impactful solutions and continually improving my skills in both frontend and backend technologies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-white bg-yellow-600 p-4 rounded-lg mb-6">Work Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="mb-6 p-6 border rounded-lg shadow-md bg-gray-50">
              <h3 className="text-2xl font-semibold text-gray-800">{exp.role} at <span className="text-blue-500">{exp.company}</span></h3>
              <p className="text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-lg text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Page;
