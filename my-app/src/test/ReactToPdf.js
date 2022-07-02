import React from "react";

import Pdf from "react-to-pdf";
import MainContent from "../templetes/temp-9/MainContent";
const ref = React.createRef();

function ReactToPdf() {

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div  className="pdf-size" ref={ref} >
    
      <MainContent></MainContent>
      </div>
    </div>
  );
}

export default ReactToPdf;


