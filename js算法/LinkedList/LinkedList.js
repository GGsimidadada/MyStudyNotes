(function (global) {
    const _length = Symbol('LinkedList length');
    const _head = Symbol('The start piont');
    const _tail = Symbol('The last point');

    // 表示要加入的项
    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
        }
    }
    // 链表类
    class LinkedList {
        constructor() {
            this[_length] = 0;
            this[_head] = null;
        }
        append(element) {
            const node = new Node(element);
            let current;

            if (this[_head] === null) {
                this[_head] = node;
            } else {
                current = this[_head];

                // 找到链表的最后一项
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this[_length]++;
        }
        insert(position, element) {
            if (position >= 0 && position <= this[_length]) {
                const node = new Node(element);
                let current = this[_head],
                    previous, index = 0;
                if (position === 0) {
                    node.next = current;
                    this[_head] = node;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    node.next = current;
                    previous.next = node;
                }
                this[_length]++;
                return true;
            } else {
                return false;
            }
        }
        removeAt(position) {
            if (position >= 0 && position < this[_length]) {
                let current = this[_head],
                    previous, index = 0;
                if (position === 0) {
                    this[_head] = current.next;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                }
                this[_length]--;
                return current.element;
            } else {
                return null;
            }
        }
        remove(element) {
            // 直接通过indexOf方法获取元素的index，然后使用已经实现的removeAt方法移除该元素
            // 这样的好处是重用代码，便于维护，而且removeAt方法可以检查边界约束
            let index = this.indexOf(element);
            return this.removeAt(index);
        }
        indexOf(element) {
            let current = this[_head],
                num = 0;
            while (current) {
                if (current.element === element) {
                    return num;
                }
                current = current.next;
                num++;
            }
            return -1;
        }
        isEmpty() {
            return this[_length] === 0;
        }
        size() {
            return this[_length];
        }
        getHead() {
            return this[_head].element;
        }
        toString() {
            let current = this[_head],
                str = '';
            while (current) {
                str += current.element + (current.next ? ',' : '');
                current = current.next;
            }
            return str;
        }
        print() {
            console.log(this.toString());
        }
    }

    // 表示要加入的双向链表的项
    class DoubleNode {
        constructor(element) {
            this.element = element;
            this.next = null;
            this.prev = null;
        }
    }
    // 双向链表类
    class DoubleLinkedList {
        constructor() {
            this[_head] = null;
            this[_length] = 0;
            this[_tail] = null;
        }
        insert(position, element) {
            // 检查越界值
            if (position >= 0 && position <= this[_length]) {
                let node = new DoubleNode(element);
                let current = this[_head], previous, index = 0;
                if (position === 0) {
                    if (!this[_head]) {
                        this[_head] = node;
                        this[_tail] = node;
                    } else {
                        // node的下一项指向当前head
                        node.next = current;
                        // 将node的下一项的prev指向node
                        current.prev = node;
                        this[_head] = node;
                    }
                } else if (position === this[_length]) {
                    current = this[_tail];
                    current.next = node;
                    node.prev = current;
                    this[_tail] = node;
                } else {
                    while(index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = node;
                    node.prev = previous;
                    node.next = current;
                    current.prev = node;
                }
                this[_length]++;
                return true;
            } else {
                return false;
            }
        }
        removeAt(position) {
            if (position >=0 && position < this[_length]) {
                let current = this[_head], previous, index = 0;
                if (position === 0) {
                    this[_head] = current.next;
                    if (this[_length] === 1) {
                        // 如果只有一项，则head已经为null，所以只要改变tail为null
                        this[_tail] = null;
                    } else {
                        // 如果不止一项，则当前head的prev指向的是之前的head，所以要重置为null
                        this[_head].prev = null;
                    }
                } else if (position === this[_length] - 1) {
                    current = this[_tail].prev;
                    current.next = null;
                    this[_tail] = current;
                } else {
                    while(index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    previous.next = current.next;
                    current.next.prev = previous;
                }
                this[_length]--;
                return current.element;
            } else {
                return null;
            }
        }
    }

    window.LinkedList = LinkedList;
    window.DoubleLinkedList = DoubleLinkedList;
})(window)