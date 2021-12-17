import React from "react";
import PropTypes from "prop-types";
import { Card, Heading, Text, IconButton, Image, Box } from "theme-ui";

const TimeCard = ({ title, current, previous, color, icon }) => {
  return (
    <Box className="time-card" sx={{ position: "relative", my: "4em" }}>
      <Card variant="timeBackground" bg={color}>
        <Image
          src={icon}
          sx={{ position: "absolute", right: 15, top: "-8px" }}
        />
      </Card>

      <Card variant="time">
        <Heading variant="time.heading">{title}</Heading>
        <IconButton variant="icon" sx={{ justifySelf: "end" }}>
          <Image src="icon-ellipsis.svg" />
        </IconButton>
        <Text variant="time.current">{current}hrs</Text>
        <Text sx={{ textAlign: "right" }} variant="time.previous">
          Last Week - {previous}hrs
        </Text>
      </Card>
    </Box>
  );
};

TimeCard.propTypes = {
  color: PropTypes.string.isRequired,
  current: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  previous: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TimeCard;
