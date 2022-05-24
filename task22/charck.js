function check() {
    let str = document.getElementById("string").value;
    let cha = document.getElementById("char").value;

    let exists = false;
    for (let i = 2; i <= 4; i++) {
        if (str[i] == cha) {
            exists = true;
            break;
        }
    }
    if (exists == true) {
        document.getElementById("demo").innerHTML = "yes the character " + cha + " does exist within the second and fourth position of the given string";
    }
    else {
        document.getElementById("demo").innerHTML = "no the character " + cha + " does not exist within the second and fourth position of the given string";
    }



}