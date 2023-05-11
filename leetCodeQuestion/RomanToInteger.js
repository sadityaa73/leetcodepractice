// WAP To Convert Roman Numerals To Intergers;
function demo(s) {
    const MapToConvertRomanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
    
    let output = 0;
    if(regex.test(s)=== true){
    for (let i = 0; i < s.length; i++) {
        const currentValue = MapToConvertRomanToInt[s[i]];
        const nextValue = MapToConvertRomanToInt[s[i + 1]];
        if (nextValue && currentValue < nextValue) {
            output -= currentValue;
        } else {
            output += currentValue;
        }
    }
}else{
    console.log("please enter valid roman numerals");
    return false;
}
    console.log("printing output",output);
    return output;

}

