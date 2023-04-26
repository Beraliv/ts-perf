const isDefined = <Type>(value: Type): value is Type & {} => Boolean(value);

export { isDefined };
