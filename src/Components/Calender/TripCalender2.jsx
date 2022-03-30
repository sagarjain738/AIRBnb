import { addDays } from "date-fns";
import { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { Box } from "@chakra-ui/react";
import DefinedRange from "react-date-range/dist/components/DefinedRange";
import { useSelector, useDispatch } from "react-redux";
import { addStartDate, addEndDate } from "../GlobalStatesRedux/action";

export default function DatePicker() {
  const { startDate, endDate } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  useEffect(() => {
    dispatch(addStartDate(state[0].startDate));
    dispatch(addEndDate(state[0].endDate));
  }, [state]);

  return (
    <Box
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
