const {isBalanced, getOpposite} = require("./index");

describe("tests for balanced brackets", () => {
  it("test for 4 balanced brackets", () => {
    const res = isBalanced("{()}");
    expect(res).toEqual("YES");
  });

  it("test for 6 balanced brackets", () => {
    const res = isBalanced('{[()]}');
    expect(res).toEqual("YES");
  });

  it("test for 6 unbalanced brackets", () => {
    const res = isBalanced('{[(])}');
    expect(res).toEqual("NO");
  });

  it("test for 12 unbalanced brackets", () => {
    const res = isBalanced('}][}}(}][))]');
    expect(res).toEqual("NO");
  });

  it("test for 14 balanced brackets", () => {
    const res = isBalanced('({}([][]))[]()');
    expect(res).toEqual("YES");
  });

  it("test for 16 balanced brackets", () => {
    const res = isBalanced('{{[[(())]]}}');
    expect(res).toEqual("YES");
  });

  it("test for 17 balanced brackets", () => {
    const res = isBalanced("{)[](}]}]}))}(())(");
    expect(res).toEqual("NO");
  });

})


describe ("generateLevel tests", () => {
  it("gets opposite of square bracket", () => {
    const level = getOpposite("}"); 
    expect(level).toStrictEqual("{");
  });

  it("gets opposite of bracket", () => {
    const level = getOpposite("]"); 
    expect(level).toStrictEqual("[");
  });

  it("gets opposite of parenthesis", () => {
    const level = getOpposite(")"); 
    expect(level).toBe("(");
  });
})