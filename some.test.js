describe("foo", function() {
  it("passes", function() {
    expect("a").toBe("a");
  });
  
  it("fails", function() {
    expect("b").toBe("b");
    expect("c").toBe("d");
    expect("d").toBe("c");
  });
 
  it("fails II", function() {
    expect(1).toBe(2);
  });
});
