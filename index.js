const { exportVariable, setFailed } = require("@actions/core");
const { readFileSync } = require("fs");

try {
  const context = JSON.parse(readFileSync(process.env.GITHUB_EVENT_PATH));
  const branch = context.pull_request.head.ref;
  exportVariable("SOURCE_BRANCH", branch);
} catch (err) {
  setFailed(err.message);
}
