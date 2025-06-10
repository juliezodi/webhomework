import React, { useState } from "react";

// Define an array of student objects. Each object has three properties:
// 'name' (the student's name), 'level' (academic level), and 'averageScore' (their average score).
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

// Define the StudentTable functional component that renders the table and the filter.
const StudentTable: React.FC = () => {
  // useState declares a state variable 'selectedLevel' and an updater function.
  // It will hold the current filter value; initially "All Levels" meaning no filtering.
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  // This event handler is invoked when the dropdown selection changes.
  // It receives an event and updates the 'selectedLevel' state with the new value.
  const handleLevelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.target.value);
  };

  // Based on the selected level, filter the students array.
  // If "All Levels" is selected, return the full array.
  // Otherwise, convert the selected string into a number and filter accordingly.
  const filteredStudents =
    selectedLevel === "All Levels"
      ? students
      : students.filter(student => student.level === Number(selectedLevel));

  // ------------------------------
  // Define inline styles using JavaScript objects.
  // These styles are used to ensure that the content is nice and centered with a light pink theme.

  // Style for the outer container of the StudentTable.
  const containerStyle: React.CSSProperties = {
    display: "flex",                // Enable Flexbox layout.
    flexDirection: "column",        // Arrange children vertically.
    alignItems: "center",           // Center children horizontally.
    justifyContent: "center",       // Center children vertically.
    backgroundColor: "#ffebf0",      // Light pink background, matching the overall theme.
    padding: "20px",                // Padding around the content for spacing.
    borderRadius: "8px",            // Rounded corners for visual appeal.
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)", // A subtle shadow for depth.
    width: "90%",                   // Use 90% of the available width.
    maxWidth: "800px"               // Limit the maximum width to 800px.
  };

  // Style for the main heading (title) of the table.
  const headingStyle: React.CSSProperties = {
    textAlign: "center",            // Center the heading text.
    color: "#333",                  // Dark grey color for the text.
    marginBottom: "20px",           // Space below the heading.
    fontSize: "28px"                // Font size for the heading.
  };

  // Style for the container that holds the filter label and dropdown.
  const filterRowStyle: React.CSSProperties = {
    display: "flex",                // Use flex display to arrange label and select side by side.
    alignItems: "center",           // Vertically center them.
    marginBottom: "20px"            // Add space below the row.
  };

  // Style for the filter label ("Filter by Level:").
  const labelStyle: React.CSSProperties = {
    marginRight: "10px",            // Add space to the right of the label.
    fontWeight: "bold",             // Make the label text bold.
    color: "#333"                   // Set text color to dark grey.
  };

  // Style for the select dropdown element.
  const selectStyle: React.CSSProperties = {
    padding: "6px 12px",            // Padding inside the dropdown for a better click/tap area.
    borderRadius: "4px",            // Rounded corners for the dropdown.
    border: "1px solid #ccc",       // A light border to define the dropdown's boundaries.
    color: "#333",                  // Dark text color for readability.
    backgroundColor: "#fff"         // White background for contrast.
  };

  // Style for the table element that contains the student data.
  const tableStyle: React.CSSProperties = {
    width: "100%",                  // Make the table take up the full width of its container.
    borderCollapse: "collapse",     // Collapse the borders into a single border.
    margin: "0 auto"                // Auto margins horizontally center the table.
  };

  // Style for the header cells of the table (the `<th>` elements).
  const thStyle: React.CSSProperties = {
    backgroundColor: "#bb00dd",     // Blue background for the header to stand out.
    color: "#fff",                  // White text for contrast with the blue background.
    padding: "10px",                // Padding inside header cells for spacing.
    border: "4px solid #d0f"        // Light border around header cells.
  };

  // Style for the data cells of the table (the `<td>` elements).
  const tdStyle: React.CSSProperties = {
    padding: "10px",                // Padding within each cell for clearer separation.
    border: "2px solid #b0d",       // A thin border around cells to clearly define cell boundaries.
    color: "#333",                  // Dark grey text to ensure high visibility.
    textAlign: "center"             // Center the text within table cells.
  };

  // ------------------------------
  // Return the JSX for this component.
  // The JSX describes the structure and content of the student table UI.
  return (
    // The outer container div uses containerStyle to center and format the content.
    <div style={containerStyle}>
      {/* Display the main heading of the Student Table */}
      <h2 style={headingStyle}>Students Overview</h2>
      
      {/* Filter Row: Contains a label and a select dropdown for filtering by academic level */}
      <div style={filterRowStyle}>
        {/* Label for the filter dropdown */}
        <label htmlFor="levelFilter" style={labelStyle}>
          Filter by Level:
        </label>
        {/* The select dropdown is a controlled component tied to the selectedLevel state */}
        <select
          id="levelFilter"
          value={selectedLevel}             // Display the current state as the selected value.
          onChange={handleLevelChange}      // Update the state whenever the user selects a different option.
          style={selectStyle}               // Apply styling for visual consistency.
        >
          {/* Options available in the dropdown */}
          <option value="All Levels">All Levels</option>
          <option value="1">Level 1</option>
          <option value="2">Level 2</option>
          <option value="3">Level 3</option>
        </select>
      </div>
      
      {/* Table element to display the student data */}
      <table style={tableStyle}>
        {/* Table header */}
        <thead>
          <tr>
            {/* The header cells below use thStyle for consistent header formatting */}
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Level</th>
            <th style={thStyle}>Average Score</th>
          </tr>
        </thead>
        {/* Table body: lists each student in a separate row */}
        <tbody>
          {/* Loop through each student in filteredStudents using map */}
          {filteredStudents.map((student, index) => (
            // Each row gets a unique key using the array index (can be replaced with a unique ID if available)
            <tr key={index}>
              {/* Display student name */}
              <td style={tdStyle}>{student.name}</td>
              {/* Display student level */}
              <td style={tdStyle}>{student.level}</td>
              {/* Display student average score */}
              <td style={tdStyle}>{student.averageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Export the component so it can be imported and used in App.tsx
export default StudentTable;
