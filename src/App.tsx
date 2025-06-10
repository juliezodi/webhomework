import React from "react";
import StudentTable from "./StudentTable";

function App() {
 
  const appStyle: React.CSSProperties = {
    display: "flex",                 
    justifyContent: "center",         
    alignItems: "center",            
    minHeight: "100vh",               
    backgroundColor: "#ffebf0"         
  };

  return (
    
    <div style={appStyle}>
      <StudentTable />
    </div>
  );
}

export default App;
