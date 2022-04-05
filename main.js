const fs = require("fs");
const os = require("os");

function osInfo(data) {
    fs.writeFileSync("./info.json", JSON.stringify(data));
}

osInfo({
    Name: os.hostname(),
    Platform: os.platform(),
    Architecture: os.arch(),
    Release: os.release(),
});