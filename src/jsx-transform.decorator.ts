import { isValidElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const JsxTransform = () =>
  function (
    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ): void {
    // In fact, we don' care about the shape (or typesafety) of the descriptor value.
    // eslint-disable-next-line @typescript-eslint/ban-types
    const innerFunc = descriptor.value as Function;
    descriptor.value = function (...args: unknown[]) {
      const innerResult = innerFunc.apply(this, args);

      return isValidElement(innerResult)
        ? renderToStaticMarkup(innerResult)
        : innerResult;
    };
  };
