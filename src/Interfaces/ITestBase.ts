import { TAnyFunction } from "../Types/TAnyFunction";

interface ITestBase<TFunction extends TAnyFunction> {
  description: string;
  only?: boolean;
  skip?: boolean;
  parameters: Parameters<TFunction>;
  expected: ReturnType<TFunction>;
}

export type { ITestBase };
