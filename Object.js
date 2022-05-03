let objectTest = {
    data: 'data value',
    name: 'name1',
    test: "test",
}
console.log("first", objectTest.data);
console.log("second", objectTest['name']);
objectTest.test2 = "new test 2";
console.log(objectTest);

objectTest['test3'] = "new test 3";

console.log(objectTest);

let arrayOfData = ['newArr1', 'newArr2', 'newArr3', 'newArr4', 'newArr5'];
console.log(arrayOfData[2]);

arrayOfData.forEach((value, key) => {
    objectTest[value] = `hello world ${key}`;
})
console.log(objectTest);

let objectTestArray = [
    {
        data: 'data value 1',
        name: 'name1',
        test: "test",
    },
    {
        data: 'data value 2',
        name: 'name2',
        test: "test 2",
    }
]
objectTestArray[0].newData1 = "newData1"
objectTestArray[0]["newData1"] = "newData2"

console.log(objectTestArray);