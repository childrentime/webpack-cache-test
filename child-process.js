const process = require("child_process");

process.execSync("npm run dev", {
  stdio: "inherit",
});
