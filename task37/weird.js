function weird() {
    let s1 = document.getElementById("string").value;
    let s2 = document.getElementById("string2").value;
    let st1 = s1.substring(1, s1.length);
    let st2 = s2.substring(1, s2.length);
    let newstr = st1 + st2;
    document.getElementById("demo").innerHTML = newstr;
}