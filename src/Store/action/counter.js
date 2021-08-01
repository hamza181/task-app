import * as constant from "../constant/counter";

export function increment() {
  return {
    type: constant.increment,
  };
}

export function decrement() {
  return {
    type: constant.decrement,
  };
}
