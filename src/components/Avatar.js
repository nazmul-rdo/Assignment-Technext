import { useState } from "react";
import ReactNiceAvatar, {
    AvatarFullConfig,
    genConfig
  } from "react-nice-avatar";
  // import "./styles.css";
  
  export default function Avatar({user}) {
    console.log(user);
    console.log(user.hair.color)


    

    const config: AvatarFullConfig = {
      sex: "woman",
      faceColor: "#F9C9B6",
    //   earSize: "small",
    //   eyeStyle: "smile",
      eyeColor: user.eyeColor,
    //   noseStyle: "short",
    //   mouthStyle: "peace",
    //   shirtStyle: "polo",
    //   glassesStyle: "none",
      hairColor: "black",
      hairStyle: user.hair.type,
    //   hatStyle: "none",
    //   hatColor: "#F48150",
    //   eyeBrowStyle: "up",
    //   shirtColor: "#FC909F",
      "bgColor": "#506AF4"
    };
  
    const myConfig = genConfig(config);
  
    return (
      <div className="App">
        <ReactNiceAvatar
          style={{ width: "20rem", height: "20rem" }}
          {...myConfig}
        />
      </div>
    );
  }
  