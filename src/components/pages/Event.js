import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaInfoCircle, FaCameraRetro,  FaBook } from "react-icons/fa";
import { AiFillSchedule } from "react-icons/ai";
import { TbMicrophone2 } from "react-icons/tb";
import { SiGoogleforms } from "react-icons/si";
import Event23 from "../../assets/UCE2023.jpg";
import Event24 from "../../assets/UCE2024.jpg";
import Event19 from "../../assets/PE19.jpg";
const Event = () => {
  return (
    <div className="d-flex flex-column home pl-5 pr-5 pt-4">
        <div className="pl-4">
        <h4 className="title mb-4 w-100 text-center">Events</h4>
        <p>
          Every year, YouthIGFA's event is where young Afghans from diverse backgrounds come
          together to discuss and shape digital futures. Diversity is paramount, with a special focus on
          inclusivity, encompassing women, different ethnic and religious groups, as well as individuals
          with disabilities. YouthIGFA values grassroots involvement, ensuring that the broader
          community actively contributes to shaping discussions.
        </p>
        <div className="d-flex justify-content-start align-items-start flex-column">
        <h5 className="">Upcoming Events: The Digital Pulse Awaits</h5>
          <div className="d-flex justify-content-between">
            <div className="divider d-flex flex-column">
              <h6 className="pl-3 mt-3 mb-3 title">2nd YouthIGF Afghanistan 2023</h6>
              <p className="pl-4">
                <p>
                  <FaCalendarAlt className="mr-3" />
                  December  4,  2023
                </p>
                <p>
                  <FaMapMarkerAlt className="mr-3" />
                  Online
                </p>
                <p>
                  <FaInfoCircle className="mr-3" />
                  Dive into pressing issues of Internet governance with Afghan youth at the
                  forefront. This year's event emphasizes the importance of youth recognition,
                  participation, and leadership in the Internet governance and rapidly digitalizing world.
                </p>
                <p>
                  <AiFillSchedule className="mr-3" />
                  (To be released soon.)
                </p>
                <p>
                  <TbMicrophone2 className="mr-3" />
                  Esteemed figures from the digital realm and shining stars from our Afghan
                  youth community.
                </p>
                <p>
                  <SiGoogleforms className="mr-3" />
                  Join us in our quest to shape a brighter digital future for
                  Afghanistan. 
                  <br />
                  <br />
                  <a className="btn-main" target="_blank" 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeEl3XvEyCvaC6lxHE0C_9ezKsxoDJCyosA1u77G8f_CtQEGw/viewform?fbclid=IwAR070gnae54zWEHKepP0IMHG9DPcwCb_SCpct6lJHi-REEVYZ92u3yyk8p8"
                  >Join Now</a>
                </p>
              </p>
            </div>
            <img className="w-50 ml-2 mt-5 side-image"
            src={Event23} alt="YouthIGFA" />
          </div>
          <div className="d-flex justify-content-between pt-4">
            <img className="w-50 ml-2 mt-5 side-image"
            src={Event24} alt="YouthIGFA" />
            <div className="divider d-flex flex-column pt-5">
              <h6 className="pl-3 mt-3 mb-3 title">3rd YouthIGF Afghanistan 2024</h6>
              <p className="pl-4">
                <p>
                  <FaCalendarAlt className="mr-3" />
                  May 4, 2024
                </p>
                <p>
                  <FaMapMarkerAlt className="mr-3" />
                  Online
                </p>
                <p>
                  <FaInfoCircle className="mr-3" />
                  Taking the dialogue a notch higher, this edition is geared towards fostering
                  innovation, understanding emerging technological trends, and building pathways for
                  Afghan youth in the future digital world. Dive in as we explore the next phases of
                  Internet governance, emphasizing youth-led innovations and strategies for the digital
                  era.
                </p>
                <p>
                  <AiFillSchedule className="mr-3" />
                  (Await the revelation.)
                </p>
                <p>
                  <TbMicrophone2 className="mr-3" />
                  A dynamic mix of global tech enthusiasts and young Afghan visionaries
                  ready to shape the future.
                </p>
                <p>
                  <SiGoogleforms className="mr-3" />
                  Embark on this next chapter with us, making waves in the digital
                  expanse of Afghanistan.
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div className="divider d-flex flex-column justify-content-center">
            <h5 className="">Past Events: Our Digital Chronicles</h5>
            <h6 className="pl-3 mt-3 mb-3 title">1st YouthIGF Afghanistan 2019</h6>
            <p className="pl-4">
              <p>
                <h6>Summary:</h6>
                The inaugural event, where the flame of youth-led Internet dialogue was
                lit. Engaging discussions, vibrant participation, and a unanimous call for a more
                inclusive digital Afghanistan marked the day.
              </p>
              <p>
                <FaCameraRetro className="mr-3" />
                <a className="link" target="_blank" href="#">Photos & Videos</a>
              </p>
              <p>
                <FaBook className="mr-3" />
                <a className="link" target="_blank" href="#">Resources</a>
              </p>
            </p>
          </div>
          <img className="w-50 ml-2 mt-5 mb-5 side-image" src={Event19} alt="YouthIGFA" />
        </div>
      </div>
    </div>
  );
}

export default Event;