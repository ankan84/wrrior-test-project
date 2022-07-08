import React from "react";

import Pdf from "react-to-pdf";
import MainContent_9 from "../templetes/temp-9/MainContent_9";
import MainContent_10 from "../templetes/temp-10/MainContent_10";
import MainContent_11 from "../templetes/temp-11/MainContent_11";
import MainContent_12 from "../templetes/temp-12/MainContent_12";
import MainContent_13 from '../templetes/temp-13/MainContent_13';
import MainContent_14 from "../templetes/temp-14/MainContent_14";
import MainContent_15 from "../templetes/temp-15/MainContent_15";
import MainContent_16 from "../templetes/temp-16/MainContent_16";
const ref = React.createRef();

function ReactToPdf() {

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div  className="pdf-size" ref={ref} >
          <MainContent_16></MainContent_16>
      </div>
    </div>
  );
}

export default ReactToPdf;


