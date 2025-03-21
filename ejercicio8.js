const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function vengadores(stringList) {

    let palabrita = '';
    for (let i = 0; i < stringList.length; i++) {
        if (stringList[i].length > palabrita.length) {
            palabrita = stringList[i];
        }
    }
    return palabrita;
}
console.log(vengadores(avengers)); 