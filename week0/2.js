var arr = ['a', 'b'];
    const obj = {
    a: 1,
    b: 2
};
var arr2 = ['c']
    const obj2 = {
    a: 1,
    b: 2,
    c: 3
};
    console.log('1: ', Object.keys(arr));
        console.log('2: ', Object.keys(arr2))
    console.log(obj);
        console.log(obj2)

{
    const array = [1, 2, 3]
        const input1 = 'array'.split('');
    const input2 = ['array'.split('')];
        console.log('3:',input1.length);
    console.log('3.1:',input2.length)
};


{
const array = ['A', 'B', 'A', 'C', 'B'];
    let unique = [...new Set(array)];
console.log('4:',unique);
};
{
        const array1 = ['A', 'B', 'F', 'C', 'B'];
    const array2 = ['A', 'D', 'E', 'D', 'F'];
        let unique = [...new Set(array1.concat(array2))];
    console.log('5',unique);
};

{
    //console.log('6: ', yourFuncName([10, null, -12, false, undefined, '', 0, 234]));
};
{
   // function getRandomItem(arr)
   // const randomIndex = Math.floor(Math.random() * arr.length);
   // const item = arr[randomIndex];
   // return item;
   // const array = [10, 22, 'Super', null, undefined, 0, false, 111]
   // const result = getRandomItem(array);
   // console.log('7:', result);
};
{
    //int[] array=[11, 21, 13, 88, 2, 4, 77];
    //arrays.sort(array)
    //System.out.printf("8: %s",
     //   Arrays.toString(arr));
}