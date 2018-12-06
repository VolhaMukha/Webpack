

function Parent() {
    Object.defineProperty(this,"toString",{
        value: function() { return "Sorter"; }
    });
    Object.defineProperty(this, "valueOf", {
        value: function() {return this.arr.length; }
    });
}

Object.defineProperty(Parent, "valueOf", {
    enumerable: false,
});

class Sorter extends Parent{
    constructor (arr) {
        super();
        this.arr = arr;
    }

    add(elem) {
        //this.arr = [...this.arr, elem];
        this.arr.push(elem);
        return this.arr.length;
    }

    length() {
        return this.arr.length;
    }

    sort() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr.length - i; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    [this.arr[j], this.arr[j + 1]] = [this.arr[j + 1], this.arr[j]];
                }
            }
        }
        return this.arr;
    }

    map(callbackFunc) {
        let new_arr = [];
        for (let i=0; i < this.arr.length; i++) {
            new_arr.push(callbackFunc(this.arr[i]));
        }
        return new_arr;
    }

    filter(callbackFunc) {
        let filter_arr = [];
        for (let arr_el of this.arr) {
            if ( callbackFunc(arr_el) ) {
                filter_arr.push(arr_el);
            }
        }
        return filter_arr;
    }

    pushArray(addArr) {
        return this.arr.push(...addArr);
    }
}

class Fibonacci extends Sorter{
    getArr () {
        var arrCurrent = this.arr,
            newarr =[];

        function isSquare(n) {
            return n > 0 && Math.sqrt(n) % 1 === 0;
        };

        function isFibonacci(num) {
            return isSquare(5 * num * num + 4) ||
                isSquare(5 * num * num - 4);
        }
        function getFibonacci(arr, newarr) {
            if (arr.length == 0) {
                return true;
            }
            if (isFibonacci(arr[0])) {
                newarr.push(arr[0]);
            };
            arrCurrent.splice(0, 1);
            getFibonacci(arrCurrent, newarr);
            return true;
        }
        getFibonacci(arrCurrent,newarr);
        return newarr;
    }
}

const getList = function () {
    let array = null;
    const promise = fetch('https://jsonplaceholder.typicode.com/todos');

    promise
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            array = data;
            for (const item of array) {
                newArr.arr.push(item.title);
            }
            appendOL(newArr);
        })
        .catch(function (e) {
            alert(e.toString());
        });
}

// n = 0 (Left List), n = 1 (Right List)
function appendOL(obj){
    const list = document.getElementsByTagName("ol")[0];
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li');

    for (const item of obj.arr) {
        const cloneLi = li.cloneNode();
        cloneLi.innerText = item;
        fragment.appendChild(cloneLi);
        //cloneLi.addEventListener("click", clickLi, false);
    }
    list.appendChild(fragment);
};

let baseArr = new Sorter (['pen', 'book', '123', 10, true]);
let newArr = new Sorter([]);
getList();

/*const elem1 = 7, elem2 = 'chair';

console.log(`Add method. Length of array after add element: ${baseArr.add(elem1)}`);
console.log(`Add method. Length of array after add element: ${baseArr.add(elem2)}`);

console.log(`Length of array:  ${baseArr.length()}`);

console.log(`Sort method. Sort_arr: ${baseArr.sort()}`);

let myFunc = x => x+1;
let map_arr = baseArr.map(myFunc);
console.log(`Map method. New_arr: ${map_arr}`);

let filter_arr = baseArr.filter(elem => elem.length > 3);
console.log(`Filter method. Filter_arr: ${filter_arr}`);

let addArray = [3,16,'new'];
baseArr.pushArray(addArray);
console.log(`Push method. Arr: ${baseArr}`);

//Parent
console.log(baseArr.toString());
console.log(baseArr.valueOf());

//Fibonacci
let p = new Fibonacci([5,1,0,67,1,13,0,69,34]);
let arrFibo = p.getArr();
console.log(`From fibonacci sequince: ${arrFibo}`);*/




