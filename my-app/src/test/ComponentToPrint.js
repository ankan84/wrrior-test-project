import React from "react";
import MainContent from "../templetes/temp-9/MainContent";
export const ComponentToPrint = React.forwardRef((props, ref) => {
    return (
      <div ref={ref} >
        <MainContent></MainContent>
      </div>
    );
  });