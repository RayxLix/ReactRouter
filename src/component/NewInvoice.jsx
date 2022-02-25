import React from "react";

function NewInvoice(props) {
  return (
    <form>
      <input type="text" placeholder="Make a new invoice"></input>
      <button type="submit" style={{ display: "block", marginTop: "20px" }}>
        Submit
      </button>
    </form>
  );
}

export default NewInvoice;
