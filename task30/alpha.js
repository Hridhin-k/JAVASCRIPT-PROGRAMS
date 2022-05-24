function encry() {
    let str = document.getElementById("string").value;
    //let str1 = str.split();
    // console.log(str1);
    let newstr = "";
    const ar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j <= 26; j++) {
            if (str[i] == ar[j]) {
                newstr = newstr + ar[j + 1]

            }

        }
    }
    document.getElementById("demo").innerHTML = newstr;
}