import { Program } from "ts-morph";
import { patchTypeChecker } from "./patchTypeChecker";

// TODO: calculate it without ts-morph
const getInstantiations = (project: Program): number => {
  const patchedTypeChecker = patchTypeChecker(
    project.getTypeChecker().compilerObject
  );

  // TODO: validate `emitOnlyDtsFiles: true` can be used as only type information is needed
  // TODO: consider incremental emission if not available out of the box

  // Emit all files in the project to memory and ignore result of emissions

  const _result = project.emitToMemory({ emitOnlyDtsFiles: false });

  return patchedTypeChecker.getInstantiationCount();
};

export { getInstantiations };
