import React from "react";
import SideImage from "../../../assets/About-Snippet.JPG";

const AboutSnippet = () => {
  return (
    <div className="about-snippet d-flex justify-content-between mt-5">
      <div className="divider d-flex flex-column">
        <h2 className="mt-5 mb-4">About Snippet</h2>
        <p>
          Youth Internet Governance Forum Afghanistan (YouthIGFA) is a dynamic youth-driven
          initiative, fostering leadership and empowerment in Afghanistan's digital landscape. Our
          journey began at the inaugural National IGF Afghanistan in 2017, and since then, we've
          been championing the voices of Afghan youth in Internet governance.
          <br />
          <a className="link" href="#about">Read more about our story</a>
        </p>
      </div>
        <img className="w-50 ml-2 side-image"
          src={SideImage} alt="YouthIGFA" />
    </div>
  );
}
// https://youthi-gfa-af.vercel.app/
export default AboutSnippet;