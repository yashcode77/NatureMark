import React from "react";
import TextImageComponent from "../components/TextImageComponent";
import data from "./data.json";

const AboutUs = () => {
  return (
    <div className="m-16 mx-auto mt-36 w-9/12 flex flex-col ">
      <h1 className="my-10 text-center text-3xl max-sm:text-2xl max-md:xl:">
        About NatureMark Systems
      </h1>
      <div className="flex flex-col gap-y-6">
        {data.sections.map((section, index) => (
          <TextImageComponent
            key={index}
            text={section.text}
            image={section.image}
            imageFirst={index % 2 === 0} // Alternate between image first and text first
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
