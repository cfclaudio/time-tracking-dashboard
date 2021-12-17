import { fonts, fontWeights, text } from "./typography";

export default {
  fonts,
  fontWeights,
  text,
  radii: {
    time: 15,
  },
  colors: {
    text: "#fff",
    background: "#0E1323",
    primary: "#5747EA",
    work: "#FF8B64",
    play: "#55C2E6",
    study: "#FF5E7D",
    exercise: "#4BCF82",
    social: "#7335D2",
    selfCare: "#F1C75B",
  },
  cards: {
    time: {
      bg: "#1C204B",
      borderRadius: "time",
      padding: "2em",
      width: "100%",
      position: "absolute",
      top: 40,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
    },
    timeBackground: {
      borderRadius: "time",
      width: "100%",
      height: 160,
      overflow: "hidden",
      position: "relative",
    },
  },
};
