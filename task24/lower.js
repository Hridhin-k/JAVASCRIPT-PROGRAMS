function lower() {
    let str = document.getElementById("string").value;
    let ln = str.length;
    if (ln > 2) {


        let st1 = str.slice(0, 3)
        let st2 = str.slice(3, ln);
        //console.log(st1);
        // console.log(st2);
        newst1 = st1.toLowerCase();
        let newstring = newst1 + st2;
        document.getElementById("demo").innerHTML = newstring;
        // console.log(newstring);
    }
    else {
        newstring = str.toUpperCase();
        document.getElementById("demo").innerHTML = newstring;
    }
}