describe("foo", function() {
  it("passes", function() {
    expect("a").toBe("a");
  });
  
  it("fails", function() {
    expect("b").toBe("c");
  });
});
