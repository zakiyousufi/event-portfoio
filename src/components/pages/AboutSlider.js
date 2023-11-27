import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    content: `<h4>Mission:</h4>
    <p>
      The mission of YouthIGFA is “to empower Afghan youth in shaping the future of the Internet
      through meaningful participation and inclusion in governance decisions.”
    </p>`,
  },
  {
    id: 2,
    content: `<h4>Vision:</h4>
    <p>
      YouthIGFA envisions “a youth-powered digital transformation for Afghanistan.”
    </p>`,
  },
  {
    id: 3,
    content: `<h4>Goals:</h4>
    <p>
      YouthIGFA ensures this through working towards realization the following goals:
      <ol>
        <li className="mt-4">
          <strong>Youth Participation:</strong> Ensure that Afghan youth voices resonate in all significant
          Internet-related decision-making spaces within Afghanistan and in the region.
          Empower them not just to participate but to actively influence discussions and
          outcomes.
        </li>
        <li className="mt-4">
          <strong>Youth Recognition:</strong> Highlight and celebrate young achievers who have made
          significant contributions to Afghanistan's digital landscape through various YouthIGFA
          recognition mechanisms, e.g. an annual award program.
        </li>
        <li className="mt-4">
          <strong>Youth Leadership:</strong> Cultivate a new generation of youth leaders who will champion
          Internet-related issues within the country and represent Afghan youth on global
          platforms. These leaders will also mentor and guide future YouthIGFA participants.
        </li>
        <li className="mt-4">
          <strong>Partnership for Youth Empowerment:</strong> Establish collaborations with international
          organizations, governmental bodies, NGOs, and private sector entities to create
          diverse opportunities for Afghan youth. These opportunities should include
          internships, mentorship programs, and job placements within the digital sector.
        </li>
      </ol>
    </p>`,
  },
  {
    id: 4,
    content: `<h4>Values:</h4>
    <p>
      The core values underpin our approach to the YouthIGFA’s mission and goals, emphasizing
      the importance of inclusivity, empowerment, collaboration, and youth-centricity in its work.
      <ol>
        <li className="mt-4">
          Inclusivity: Ensuring the participation and representation of all Afghan youth,
          especially those often marginalized.
        </li>
        <li className="mt-4">
          Empowerment: Equipping Afghan youth with the knowledge and skills necessary to
          navigate the digital realm and make informed decisions.
        </li>
        <li className="mt-4">
          Collaboration: Building strong partnerships and alliances across sectors to amplify
          youth voices in Internet governance.
        </li>
        <li className="mt-4">
          Youth-Centrism: Prioritizing the unique needs, perspectives, and opportunities of
          young Afghans in the digital domain.
        </li>
      </ol>
    </p>`,
  },
];

const AboutSlider = () => {
  return (
    <Swiper
      className="h-100 w-100"
      navigation={true}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutSlider;