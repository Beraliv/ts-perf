import { ts } from "ts-morph";
import { IPatchedTypeChecker } from "../Interfaces/IPatchedTypeChecker.js";

/**
 * Patch ts.TypeChecker['getInstantiationCount'] as it's private
 */

const patchTypeChecker = (typeChecker: ts.TypeChecker) =>
  typeChecker as IPatchedTypeChecker;

export { patchTypeChecker };
