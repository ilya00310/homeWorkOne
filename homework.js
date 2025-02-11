// 1)
 const workingObjectOne = {};
 const workingObjectTwo = Object.create({}, {});
 const workingObjectThree = Object.assign({}, {})

// 2)
const innerObject = {};
const middleArray = [1,2,3,innerObject ];
const workingObject = {
    a:middleArray 
 }
 const copy = Object.assign({}, workingObject)
 const copyTwo = {...workingObject};
 const copyThree = JSON.parse(JSON.stringify(workingObject))

 // 3)
function makeCounter () {
    let count = 0;
    return function () {
        return count++
    }
}

const makeCounterTwo = function () {
    let count = 0;
    return function () {
        return count++
    }
}

const makeCounterThree = () => {
    let count = 0;
    return function () {
        return count++
    }
}

const makeCounterFour = function newMake() {
    let count = 0;
    return function () {
        return count++
    }
}
