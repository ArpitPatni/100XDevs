const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

// Endpoint to list all files in the ./files/ directory
app.get("/files", (req, res) => {
  const directoryPath = path.join(__dirname, "files");

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to scan directory" });
    }

    res.status(200).json(files);
  });
});

app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "files", filename);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).send("File not found");
      }
      return res.status(500).json({ error: "Error reading file" });
    }

    res.status(200).send(data);
  });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).send("Not Found");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
