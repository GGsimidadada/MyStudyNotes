(function () {
    // 队列是遵循FIFO（先进先出）原则的一组有序的项。
    const _items = Symbol();
    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    // 声明一个Queue类
    class PriorityQueue {
        constructor() {
            this[_items] = [];
        }
        // 根据优先级添加新项
        enqueue(elem, prio) {
            const queueElement = new QueueElement(elem, prio);

            let added = false;
            for (let i = 0; i < this[_items].length; i++) {
                if (queueElement.priority < this[_items][i].priority) {
                    this[_items].splice(i, 0, queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this[_items].push(queueElement);
            }
        }
        // 从队首移除项
        dequeue() {
            return this[_items].shift();
        }
        // 查看队列头元素
        front() {
            return this[_items][0];
        }
        isEmpty() {
            return this[_items].length === 0;
        }
        size() {
            return this[_items].length;
        }
        clear() {
            this[_items] = [];
        }
        print() {
            for (let i = 0; i < this[_items].length; i++) {
                console.log(this[_items][i].element.toString() + ' - ' + this[_items][i].priority.toString());
            }
        }
    }

    window.PriorityQueue = PriorityQueue;
})(window);