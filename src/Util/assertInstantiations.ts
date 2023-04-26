import { todo } from "./todo.js";
import { Project, ts } from "ts-morph";
import { TAssertionStatus } from "../Types/TAssertionStatus.js";
import { IInstantiationsOptions } from "../Interfaces/IInstantiationsOptions.js";
import { TStatement } from "../Types/TStatement.js";

function assertInstantiations(
  statementDependency: TStatement,
  expected: number,
  options?: IInstantiationsOptions
): TAssertionStatus {
  // 0. resolve typescript lib

  const typescriptDependency = todo<string>([
    options?.typescriptVersion ?? "default TS version",
  ]);

  // 1. create ts-morph Project
  // TODO: add caching as separate improvement

  const projectDependency = todo<Project>([typescriptDependency]);

  // 2. find expression for an assertion
  // TODO: make sure number of instantiations does NOT include node instantiations

  const expressionDependency = todo<ts.CallExpression>([
    projectDependency,
    statementDependency,
  ]);

  // 3. Extract actual number of instantiations

  const actual = todo<number>([expressionDependency]);

  // 4. Do assertion

  const equal = expected === actual;

  (equal ? console.log : console.error)(
    `${equal ? "🟢" : "🔴"} Expected instantiations to equal to ${expected}${
      equal ? "" : ` but got ${actual}`
    }`
  );

  // 5. Return assertion status

  return equal ? "success" : "failure";
}

export { assertInstantiations };
