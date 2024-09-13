import React from "react";
import { useParams } from "react-router-dom";

function Form() {
  const { formId } = useParams();
  return (
    <div>
      <h1>Form {formId}</h1>
    </div>
  );
}

export default Form;
