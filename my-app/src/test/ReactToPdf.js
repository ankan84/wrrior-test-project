import React from "react";

import Pdf from "react-to-pdf";
import MainContent_9 from "../templetes/temp-9/MainContent_9";
import MainContent_10 from "../templetes/temp-10/MainContent_10";
import MainContent_11 from "../templetes/temp-11/MainContent_11";
const ref = React.createRef();

function ReactToPdf() {

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div  className="pdf-size" ref={ref} >
          <MainContent_11></MainContent_11>
      </div>
    </div>
  );
}

export default ReactToPdf;


