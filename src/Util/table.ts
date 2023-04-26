import { describe, it } from "vitest";
import type { ITestBase } from "../Interfaces/ITestBase.js";
import { TAnyFunction } from "../Types/TAnyFunction.js";

const table = <
  TTest extends ITestBase<TFunction>,
  TFunction extends TAnyFunction
>(
  fn: TFunction,
  tests: TTest[],
  callback: (test: TTest) => void
) =>
  describe(fn.name, () => {
    tests.forEach((test) => {
      const runTest = test.only ? it.only : test.skip ? it.skip : it;

      let description = test.description;

      for (let index = 0; index < test.parameters.length; index++) {
        const parameter = test.parameters[index];

        const indexRegExp = new RegExp(`\\$${index}`, "g");

        description = description.replace(
          indexRegExp,
          JSON.stringify(parameter)
        );
      }

      runTest(description, () => {
        callback(test);
      });
    });
  });

export { table };
