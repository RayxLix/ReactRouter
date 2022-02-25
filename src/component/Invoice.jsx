import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { invoices } from "../data/invoices";

function Invoice(props) {
  const params = useParams();
  const navigate = useNavigate();

  const invoice = invoices.find((invoice) => {
    return invoice.id.toString() === params.invoiceId;
  });
  console.log(invoice);
  useEffect(() => {
    if (!invoice) navigate("..");
  }, [invoice]);

  return (
    <div>
      Invoice #{invoice?.id} for {invoice?.name}
    </div>
  );
}

export default Invoice;
