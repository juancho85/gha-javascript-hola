const core = require('@actions/core');
try {
  const nombre = core.getInput('nombre');
  core.notice(`Nos has pasado este nombre ${nombre}`);
  core.setOutput("saludo", `Buenos días, ${nombre}`);
} catch (error) {
  core.setFailed(error.message);
}

