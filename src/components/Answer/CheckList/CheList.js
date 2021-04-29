
import React from "react";
import "../Basetech/Basetech.css";
import { Form } from 'react-bootstrap';


const ChekList = () => {
  return (

    <div className="basetech_container">
      <Form>
        {['checkbox', 'radio'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />

            <Form.Check
              disabled
              type={type}
              label={`disabled ${type}`}
              id={`disabled-default-${type}`}
            />
          </div>
        ))}
      </Form>
    </div>

  );
};
export default ChekList;
