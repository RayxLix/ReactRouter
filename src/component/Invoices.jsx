import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { invoices } from "../data/invoices";

function Invoices(props) {
  return (
    <>
      <h2>This is my Invoices page 👻👻👻👻👻👻</h2>
      <Link to="new">Create new invoices</Link>
      <div style={{ display: "flex" }}>
        <nav style={{ padding: "1rem", borderRight: "1px solid" }}>
          {invoices.map((invoice) => (
            <NavLink
              to={`${invoice.id}`}
              key={invoice.id}
              style={{
                display: "block",
                textDecoration: "none",
                margin: "1rem"
              }}
              className={({ isActive }) =>
                isActive ? "active-invoice" : undefined
              }
            >
              {invoice.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default Invoices;
