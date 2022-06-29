import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print-advanced';

import { ComponentToPrint } from './ComponentToPrint';

const Example = () => {

  const componentRef = useRef();

  return (
    <div>
     <ComponentToPrint ref={componentRef} />
      <ReactToPrint
      
        content={() => componentRef.current}
        trigger={() => <button>Print this out!</button>}
      />
     
    </div>
  );
};

export default Example