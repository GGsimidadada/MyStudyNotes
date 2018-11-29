(function () {
    let _items = Symbol();
    
    class Stack {
        constructor() {
            this[_items] = [];
        }
        push(elem) {
            this[_items].push(elem);
        }
        pop() {
            return this[_items].pop();
        }
        peek() {
            return this[_items][this[items].length - 1];
        }
        isEmpty() {
            return this[_items].length === 0;
        }
        clear() {
            this[_items] = [];
        }
        print() {
            console.log(this[_items].toString());
        }
    }

    window.Stack = Stack;
})(window)