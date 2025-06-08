function array1(arr){
    return arr.length;
}

function array2(arr1, arr2){
    let fullarr = arr1.concat(arr2);
    return fullarr;
}

function array3(arr3, val1){
    arr3.push(val1);
    return arr3;
}

function array4(arr4){
    let lastElement = arr4.pop();
    return lastElement;
}

function array5(arr5){
    let sum = 0;
    for(let i = 0; i < arr5.length; i++){
        sum += arr5[i];
    }
    return sum;
}

function array6(arr6){
    let newarr = [];

    for(let i = 0; i < arr6.length; i++){
        if(i % 2 != 0){
            newarr.push(arr6[i]);
        }
    }

    return newarr;
}

function array7(arr7){
    newarr2 = [];
    for(let i = 0; i < arr7.length; i++){
        newarr2.push(arr7[i].length);
    }

    return newarr2;
}
