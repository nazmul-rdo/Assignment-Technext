import ReactNiceAvatar, { AvatarFullConfig, genConfig } from "react-nice-avatar";

export default function Avatar({ user }) {
  console.log(user);
  console.log(user.hair.color);

  const genderValue = (gender) => {
    if (gender === "male") {
      return "man";
    } else if (gender === "female") {
      return "woman";
    }
    return ""; 
  };

  const config = {
    sex: genderValue(user.gender),
    faceColor: "#F9C9B6",
    eyeColor: user.eyeColor,
    hairColor: "black",
    hairStyle: user.hair.type,
    bgColor: "#506af44d"
  };

  const myConfig = genConfig(config);

  return (
    <div className="App">
      <ReactNiceAvatar
        style={{ width: "12rem", height: "12rem" }}
        {...myConfig}
      />
    </div>
  );
}