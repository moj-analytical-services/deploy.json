const path = require('path');
const program = require("commander");
const ajv = require("ajv");
const superagent = require("superagent");
const packageSpec = require("../package.json");

program
  .version(packageSpec.version)
  .option(
    "-f, --deploy-file <path>",
    "path of file (deploy.json) to validate against the jsonschema",
    "./deploy.json"
  )
  .option(
    "-p, --pass-if-no-schema-for-version <bool>",
    "Allow validation to pass if there is no schema defined for version of deploy.json",
    true
  )
  .parse(process.argv);

function readDeploy(deployPath) {
  let deploy;
  try {
    deploy = require(deployPath);
  } catch (e) {
    console.log(`schema file not found: ${e}`);
    process.exit(1);
  }
  return deploy;
}

async function getSchemaForVersion(version) {
  try {
    const response = await superagent.get(`https://cdn.jsdelivr.net/gh/moj-analytical-services/deploy.json@${version}/deploy.schema.json`)
    return response.body
  } catch (e) {
    if (e.response.statusType !== 2) {
      // not 2xx response
      console.log(e.response.text);
      process.exit(program.passIfNoSchemaForVersion ? 0 : 1)
    }
  }

}

async function main() {
  const deploy = readDeploy(path.join('..', program.deployFile));
  const jsonSchema = await getSchemaForVersion(deploy['mojanalytics-deploy']);
  console.log("Checking deploy.json:");
  console.dir(deploy);
  console.log("conforms to schema:");
  console.dir(jsonSchema);

  const validator = new ajv();
  const isValid = validator.validate(jsonSchema, deploy);
  if (!isValid) {
    console.dir(validator.errors);
    console.error("deploy.json didn't match schema");
  }
  process.exit(isValid ? 0 : 1 );
}

if (!module.parent) {
  main();
}
