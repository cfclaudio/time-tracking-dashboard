import React from "react";
import PropTypes from "prop-types";
import { Card, Heading, Text, IconButton, Image } from "theme-ui";

const TimeCard = ({ title, current, previous }) => {
  return (
    <Card
      variant="time"
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
      }}
    >
      <Heading variant="time.heading">{title}</Heading>
      <IconButton variant="icon" sx={{ justifySelf: "end" }}>
        <Image src="icon-ellipsis.svg" />
      </IconButton>
      <Text variant="time.current">{current}hrs</Text>
      <Text sx={{ textAlign: "right" }} variant="time.previous">
        Last Week - {previous}hrs
      </Text>
    </Card>
  );
};

TimeCard.propTypes = {
  current: PropTypes.number.isRequired,
  previous: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default TimeCard;
