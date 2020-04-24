describe("foo", function() {
  it("passes", function() {
    expect("a").toBe("a");
  });
  
  it("fails", function() {
    expect("a").toBe("b");
  });
});
