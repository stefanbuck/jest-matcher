describe("foo", function() {
  it("passes", function() {
    expect("a").toBe("a");
  });
  
  it("fails", function() {
    expect("b").toBe("c");
  });

  it("fails number", function() {
    expect(1).toBe(3);
  });
});
