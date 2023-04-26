import { ts } from "ts-morph";

interface IPatchedTypeChecker extends ts.TypeChecker {
  getInstantiationCount: () => number;
}

export type { IPatchedTypeChecker };
