import { addDays } from "date-fns";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Flex, Box } from "@chakra-ui/react";
import DefinedRange from "react-date-range/dist/components/DefinedRange";
import { useSelector, useDispatch } from "react-redux";

export default function DatePicker({ index, display }) {
  const { startDate, endDate } = useSelector((store) => store);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  console.log(state);

  return (
    <Box
      display={display}
      zIndex={index}
      style={{ position: "absolute" }}
      width="800px"
      height="50vh"
      margin="auto"
      left="-14rem"
      top="6rem"
      borderLeft="30px"
      transition="0.4s"
    >
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={false}
        moveRangeOnFirstSelection={false}
        showDateDisplay={false}
        months={2}
        showMonthAndYearPickers={false}
        showMonthArrow={true}
        // retainEndDateOnFirstSelection={false}
        // showDateDisplay={false}
        // showPreview={false}
        // editableDateInputs={false}
        // dragSelectionEnabled={false}
        // preventSnapRefocus={false}
        ranges={state}
        direction="horizontal"
        editableDateInputs={true}
      />
    </Box>
  );
}
