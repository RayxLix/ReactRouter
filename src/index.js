import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoices from "./component/Invoices";
import Expenses from "./component/Expenses";
import NotFound404 from "./component/NotFound404";
import Invoice from "./component/Invoice";
import IndexRouteInvoices from "./component/IndexRuoteInvoices";
import NewInvoice from "./component/NewInvoice";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<IndexRouteInvoices />} />
            <Route path="new" element={<NewInvoice />}></Route>
            <Route path=":invoiceId" element={<Invoice />} />
            <Route path="new" element={<NewInvoice />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />

          {/* 404 */}
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
