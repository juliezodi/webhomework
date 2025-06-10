// Import the React library to build React components.
import React from "react";
// Import ReactDOM to render the React components into the DOM.
import ReactDOM from "react-dom/client";
// Import our top-level App component.
import App from "./App";

// The document.getElementById("root") retrieves the div from index.html
// The exclamation mark (!) indicates we are sure the element exists.
const rootElement = document.getElementById("root")!;

// Create a root for our React application using ReactDOM.createRoot.
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root element. The <React.StrictMode>
// wrapper helps with highlighting potential issues in the application.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
