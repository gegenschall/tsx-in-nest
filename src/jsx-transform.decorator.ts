/* eslint-disable */
import { isValidElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const JsxTransform = () =>
  function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor): void {
    const innerFunc = descriptor.value as Function;
    descriptor.value = function (...args: unknown[]) {
      const innerResult = innerFunc.apply(this, args);

      return isValidElement(innerResult) ? renderToStaticMarkup(innerResult) : innerResult;
    };
  };
