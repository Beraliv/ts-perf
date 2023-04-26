import { IInstantiationsOptions } from "./Interfaces/IInstantiationsOptions.js";
import { TStatement } from "./Types/TStatement.js";
import { assertInstantiations } from "./Util/assertInstantiations.js";

const assert = (statement: TStatement) => ({
  toHaveInstantiations: (expected: number, options?: IInstantiationsOptions) =>
    assertInstantiations(statement, expected, options),
});

export { assert };
