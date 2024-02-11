import ReactNiceAvatar, {genConfig } from "react-nice-avatar";

export default function Avatar({ user }) {

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
    eyeColor: user.eyeColor,
    bgColor: "#506af44d"
  };

  const myConfig = genConfig(config);

  return (

      <ReactNiceAvatar
        style={{ width: "12rem", height: "12rem" }}
        {...myConfig}
      />

  );
}