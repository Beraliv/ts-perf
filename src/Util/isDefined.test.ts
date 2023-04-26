import { expect } from "vitest";
import { isDefined } from "./isDefined.js";
import { ITestBase } from "../Interfaces/ITestBase.js";
import { table } from "./table.js";

const FALSY_DESCRIPTION = `returns false for falsy value "$0"`;
const TRUTHY_DESCRIPTION = `returns true for truthy value "$0"`;

const testCases: ITestBase<typeof isDefined>[] = [
  {
    description: FALSY_DESCRIPTION,
    parameters: [false],
    expected: false,
  },
  {
    description: FALSY_DESCRIPTION,
    parameters: [NaN],
    expected: false,
  },
  {
    description: FALSY_DESCRIPTION,
    parameters: [0],
    expected: false,
  },
  {
    description: FALSY_DESCRIPTION,
    parameters: [""],
    expected: false,
  },
  {
    description: FALSY_DESCRIPTION,
    parameters: [null],
    expected: false,
  },
  {
    description: FALSY_DESCRIPTION,
    parameters: [undefined],
    expected: false,
  },
  {
    description: TRUTHY_DESCRIPTION,
    parameters: [true],
    expected: true,
  },
  {
    description: TRUTHY_DESCRIPTION,
    parameters: [1],
    expected: true,
  },
  {
    description: TRUTHY_DESCRIPTION,
    parameters: ["hello"],
    expected: true,
  },
  {
    description: FALSY_DESCRIPTION,
    parameters: [{ a: 1 }],
    expected: true,
  },
];

table(isDefined, testCases, (testCase) => {
  const actual = isDefined(...testCase.parameters);

  expect(actual).toEqual(testCase.expected);
});
