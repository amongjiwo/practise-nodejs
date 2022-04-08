const fs = require("fs");
const os = require("os");

function osInfo(data) {
    fs.writeFileSync("./info.json", JSON.stringify(data));
}

osInfo({
    name: os.hostname(),
    platform: os.platform(),
    architecture: os.arch(),
    release: os.release(),
});