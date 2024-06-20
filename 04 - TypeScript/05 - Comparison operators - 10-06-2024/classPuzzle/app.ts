function isLonger(str1:string, str2:string):string{
    try {
        if(str1.length > str2.length){
            return str1;
        }
        else if(str2.length > str1.length){
            return str2;
        }
        else{
            return "Even";
        }
        // return str1.length > str2.length ? str1 : str1.length == str2.length ? "Even" : str2;
    } catch (error) {
        console.error(error);
        return "Some Error Occurred";
    }
}


console.log(isLonger("Tal","Roni"));
console.log(isLonger("Yossi","Tal"));
console.log(isLonger("Tal","Shimon"));
console.log(isLonger("Tal","TAL"));

