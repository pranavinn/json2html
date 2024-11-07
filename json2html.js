// json2html.js
export default function json2html(data) {
    // Extract unique column headers from all objects
    const columns = [...new Set(data.flatMap(Object.keys))];
  
    // Start the HTML table with data-user attribute
    let html = '<table data-user="pranavinagarapu03@gmail.com">';
  
    // Create the header row
    html += "<thead><tr>";
    columns.forEach(col => {
      html += `<th>${col}</th>`;
    });
    html += "</tr></thead>";
  
    // Create the body rows
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      columns.forEach(col => {
        html += `<td>${row[col] || ""}</td>`; // Add empty cell if key is missing
      });
      html += "</tr>";
    });
    html += "</tbody></table>";
  
    return html;
  }
  