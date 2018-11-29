(function (global) {
    const _items = Symbol();

    // 字典，以键值对的形式的元素组成的集合，并且元素唯一
    // 字典也被称为映射
    class Dictionary {
        constructor() {
            this[_items] = {};
        }
        set(key, value) {
            this[_items][key] = value;
        }
        delete(key) {
            if (this.has(key)) {
                delete this[_items][key];
                return true;
            }
            return false;
        }
        has(key) {
            return this[_items].hasOwnProperty(key);
        }
        get(key) {
            return this.has(key) ? this[_items][key] : void 0;
        }
        clear() {
            this[_items] = {};
        }
        size() {
            return this.keys().length;
        }
        keys() {
            return Object.keys(this[_items]);
        }
        values() {
            return this.keys().map(key => this[_items][key]);
        }
        getItems() {
            return this[_items];
        }
    }

    // 散列表，HashMap类，也叫HashTable类，它是Dictionary类的一种散列表实现方式
    // 散列算法的作用是尽可能快的在数据结构中找到一个值。
    const _loseloseHashCode = Symbol();
    class HashTable {
        constructor() {
            this[_items] = [];
            this[_loseloseHashCode] = (key) => {
                let hash = 0;
                for (let i in key) {
                    hash += key.charCodeAt(i);
                }
                return hash % 37;
            }
        }
        // 向散列表中增加一个新项
        put(key, value) {
            const position = this[_loseloseHashCode](key);
            console.log(position + ':' + value);
            this[_items][position] = value;
        }
        // 删除一个项
        remove(key) {
            this[_items][this[_loseloseHashCode](key)] = undefined; 
        }
        // 根据键值返回检索到的值
        get(key) {
            return this[_items][this[_loseloseHashCode](key)];
        }
    }

    global.Dictionary = Dictionary;
    global.HashTable = HashTable;
})(window)