import React from 'react';
import SideImage from '../../assets/speakers.jpg';
import Adli from '../../assets/adli-wahid.JPG';
import Anja from '../../assets/anja.JPG';
import Utmankil from '../../assets/utmakhil.jpg';
import Omar from '../../assets/ansari.JPG';

const data = [
  {
    id:1,
    name: 'Adli Wahid ',
    bio:'Senior Internet Security Specialist, APNIC',
    img: Adli
  },
  {
    id:2,
    name: 'Anja Gengo',
    bio:'UN Secretariat for (IGF)',
    img: Anja
  },
  {
    id:3,
    name: 'Mohibullah Utmankhil',
    bio:'AFNOG Coordinator',
    img: Utmankil
  },
  {
    id:4,
    name: 'Omar Ansari',
    bio:'APNIC Foundation',
    img: Omar
  },
];

const Speakers = () => {
  const width = 'width: 50%;';
  return (
    <div className='d-flex flex-column align-items-center vh-100'>
      <h2 className="mt-4">Speakers</h2>
      <div className="about-snippet pl-5 d-flex justify-content-between">
        <div className="divider pl-4 d-flex flex-column w-100">
          <p>
            <br />
            Our speakers are the voices that inspire and ignite. At YouthIGFA, we take immense pride in
            presenting a diverse lineup of speakers – individuals who not only lead in their respective
            fields of Internet governance and technology but also resonate deeply with the aspirations of
            our youth. Their journeys, insights, and foresights serve as guiding and inspiring young
            minds towards a digitally empowered Afghanistan. Dive in to discover the luminaries gracing
            our event this year.
          </p>
          <div className='d-flex'>
            {data.map((speaker) => {
              return (
                <div className="d-flex flex-column align-items-center mt-4 w-50" key={speaker.id}>
                  <img className="w-75" src={speaker.img} alt="speaker" />
                  <h6>{speaker.name}</h6>
                  <p className='small text-center'>
                    {speaker.bio}</p>
                </div>
              ); 
            })}
          </div>
        </div>
        <div className="w-50">
          <img className="ml-2 side-image" src={SideImage} alt="YouthIGFA" />
        </div>
      </div>
    </div>
  );
};

export default Speakers;
