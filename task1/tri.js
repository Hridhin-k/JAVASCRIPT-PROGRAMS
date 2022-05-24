function f1() {
    let a = 5;
    let b = 6;
    let c = 7;
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("area of the triangle is " + area);
}
f1(); //invoking the function
