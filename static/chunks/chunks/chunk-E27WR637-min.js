var f = Object.create;
var d = Object.defineProperty;
var g = Object.getOwnPropertyDescriptor;
var h = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf,
  j = Object.prototype.hasOwnProperty;
var k = (a) => d(a, "__esModule", { value: !0 });
var m = (a, b) => () => (b || a((b = { exports: {} }).exports, b), b.exports);
var l = (a, b, e) => {
    if ((b && typeof b == "object") || typeof b == "function")
      for (let c of h(b))
        !j.call(a, c) &&
          c !== "default" &&
          d(a, c, {
            get: () => b[c],
            enumerable: !(e = g(b, c)) || e.enumerable,
          });
    return a;
  },
  n = (a) =>
    l(
      k(
        d(
          a != null ? f(i(a)) : {},
          "default",
          a && a.__esModule && "default" in a
            ? { get: () => a.default, enumerable: !0 }
            : { value: a, enumerable: !0 }
        )
      ),
      a
    );
export { m as a, n as b };
