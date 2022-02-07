import React, { useState } from "react";
import { isSameDay } from "date-fns";
import { enGB } from "date-fns/locale";
import { Calendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import { Box, Flex } from "@chakra-ui/react";

// Very rough implementation of multiple date selection
function CalendarExample() {
  const [selectedDates, setSelectedDates] = useState([]);
  const modifiers = {
    selected: (date) =>
      selectedDates.some((selectedDate) => isSameDay(selectedDate, date)),
  };
  const handleDayClick = (date) => {
    setSelectedDates([...selectedDates, date]);
  };
  return (
    <Calendar
      clas
      onDayClick={handleDayClick}
      modifiers={modifiers}
      locale={enGB}
    />
  );
}

export default function TripCalender() {
  return (
    <Flex width="850px" margin="auto">
      <Box
        justifyContent="center"
        width="850px"
        bgColor="white"
        margin="auto"
        borderRadius="10px"
      >
        <CalendarExample />
      </Box>
      <Box
        justifyContent="center"
        width="850px"
        bgColor="white"
        margin="auto"
        borderRadius="10px"
      >
        <CalendarExample />
      </Box>
    </Flex>
  );
}
