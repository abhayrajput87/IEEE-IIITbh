import React from 'react';
import rambilas from '../../assets/speakers/rambilas.jpg'
import linga from '../../assets/speakers/linga.jpg'
import sanjib from '../../assets/speakers/sanjib.jpg'
import sudhir from '../../assets/speakers/sudhir.jpg'



const keynoteSpeakers = [
  {
    name: 'Prof. Ram Bilas Pachori, IIT Indore',
    link: 'https://www.iiti.ac.in/people/~pachori/', // Replace with actual URLs of the links
    photo: rambilas,
  },
  {
    name: 'Prof. Sanjib Kumar Panda, National University of Singapore',
    link: 'https://www.ece.nus.edu.sg/emdl/profhome.html',
    photo: sanjib,
  },
  {
    name: 'Prof. Linga Reddy Cenkeramaddi, University of Agder, Norway',
    link: 'https://www.uia.no/english/about-uia/employees/lingac/',
    photo: linga,
  },
  {
    name: 'Dr. Sudhir Dixit, Basic Internet Foundation (Norway),University of Oulu, Finland',
    link: 'https://www.comsoc.org/sudhir-dixit',
    photo: sudhir,
  },
];

const KeynoteSpeakersSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl underline text-green-600 font-bold mb-8">Keynote Speakers</h2>
        <div className="grid grid-cols-1 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {keynoteSpeakers.map((speaker, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6">
              <img
                className="w-48 h-48 mx-auto rounded-full mb-4"
                src={speaker.photo}
                alt={speaker.name}
              />
              <h3 className="text-sm text-black font-semibold mb-2">{speaker.name}</h3>
              <a
                href={speaker.link}
                className="text-blue-500 underline hover:text-blue-700 font-medium"
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakersSection;
