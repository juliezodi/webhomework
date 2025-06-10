import React, { useState } from "react";

const students = [
  { name: "Aiden Carter", level: 1, averageScore: 88 },
  { name: "Bella Thompson", level: 2, averageScore: 91 },
  { name: "Caleb Johnson", level: 3, averageScore: 84 },
  { name: "Daisy Nguyen", level: 3, averageScore: 93 },
  { name: "Ethan Wright", level: 1, averageScore: 76 },
  { name: "Fiona Lopez", level: 3, averageScore: 89 },
  { name: "Gavin Smith", level: 2, averageScore: 82 },
  { name: "Hannah Patel", level: 3, averageScore: 95 },
  { name: "Isaac Chen", level: 1, averageScore: 79 },
  { name: "Jasmine Rivera", level: 2, averageScore: 87 }
];


const StudentTable: React.FC = () => {
  
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value);
  };

  const filteredStudents =
    selectedLevel === "All Levels"
      ? students
      : students.filter(student => student.level === Number(selectedLevel));

  const containerStyle: React.CSSProperties = {
    display: "flex",                
    flexDirection: "column",     
    alignItems: "center",          
    justifyContent: "center",       
    backgroundColor: "#ffebf0",      
    padding: "20px",                
    borderRadius: "8px",         
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    width: "90%",                  
    maxWidth: "800px"            
  };

  const headingStyle: React.CSSProperties = {
    textAlign: "center",           
    color: "#333",                  
    marginBottom: "20px",          
    fontSize: "28px"               
  };

  const filterRowStyle: React.CSSProperties = {
    display: "flex",               
    alignItems: "center",           
    marginBottom: "20px"         
  };

  const labelStyle: React.CSSProperties = {
    marginRight: "10px",           
    fontWeight: "bold",          
    color: "#333"                   
  };

  
  const selectStyle: React.CSSProperties = {
    padding: "6px 12px",           
    borderRadius: "4px",            
    border: "1px solid #ccc",     
    color: "#333",                  
    backgroundColor: "#fff"     
  };

  const tableStyle: React.CSSProperties = {
    width: "100%",                
    borderCollapse: "collapse",     
    margin: "0 auto"              
  };


  const thStyle: React.CSSProperties = {
    backgroundColor: "#bb00dd",     
    color: "#fff",         
    padding: "10px",            
    border: "4px solid #d0f"        
  };


  const tdStyle: React.CSSProperties = {
    padding: "10px",           
    border: "2px solid #b0d",     
    color: "#333",                  
    textAlign: "center"           
  };

  
  return (
  
    <div style={containerStyle}>
      <h2 style={headingStyle}>Students Overview</h2>
      <div style={filterRowStyle}>
        <label htmlFor="levelFilter" style={labelStyle}>
          Filter by Level:
        </label>
        <select
          id="levelFilter"
          value={selectedLevel}             
          onChange={handleLevelChange}     
          style={selectStyle}              
        >
          <option value="All Levels">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>
      
  
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Level</th>
            <th style={thStyle}>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td style={tdStyle}>{student.name}</td>
              <td style={tdStyle}>{student.level}</td>
              <td style={tdStyle}>{student.averageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default StudentTable;
