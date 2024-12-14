// Import the required modules
const express = require("express");
const fs = require("fs");
const path = require("path");

// Initialize the Express app
const app = express();

// Define a route to serve the text file
app.get("/*", (req, res) => {
  const fileName = "example.txt";
  const filePath = path.join(__dirname, fileName);

  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found in the current directory.");
  }

  // Send the file
  res.download(filePath, (err) => {
    if (err) {
      console.error("Error sending the file:", err);
      res.status(500).send("An error occurred while sending the file.");
    }
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
