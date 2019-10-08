import { runCommand } from './importjs';

export default { fix };

function fix(pathToFile, overwrite) {
  const executor = importer =>
    importer.fixImports();

  return runCommand(executor, pathToFile, { overwrite });
}
