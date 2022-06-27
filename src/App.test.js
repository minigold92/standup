import { render, screen } from "@testing-library/react";
import App from "./App";
import ReactDOM from "react-dom/client";
import React from "react";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
it("renders without chrashing", () => {
  const root = ReactDOM.createRoot(document.createElement("div"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
