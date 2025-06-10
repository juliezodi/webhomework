import React from "react";
import StudentTable from "./StudentTable";

// App component is our main container that wraps the entire application.
function App() {
  // Define inline CSS styles for the outer container.
  // These styles use Flexbox to center the content horizontally and vertically.
  const appStyle: React.CSSProperties = {
    display: "flex",                  // Enables flexbox on this container.
    justifyContent: "center",         // Centers the content horizontally.
    alignItems: "center",             // Centers the content vertically.
    minHeight: "100vh",               // Ensures the container takes at least the full viewport height.
    backgroundColor: "#ffebf0"         // Sets a light pink color as the background.
  };

  return (
    // Apply the appStyle to the div wrapping the StudentTable.
    <div style={appStyle}>
      {/* Render the StudentTable component here */}
      <StudentTable />
    </div>
  );
}

export default App;
