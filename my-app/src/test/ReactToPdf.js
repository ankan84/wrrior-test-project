import React from "react";

import Pdf from "react-to-pdf";
import MainContent from "../templetes/temp-9/MainContent";
import Templete9 from "../templetes/temp-9/Templete9";
const ref = React.createRef();

function ReactToPdf() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div  ref={ref} >
      {/* <MainContent></MainContent> */}
      </div>
    </div>
  );
}

export default ReactToPdf;


