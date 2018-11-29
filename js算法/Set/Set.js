(function (global) {
    // 集合是由一组无序且唯一的项组成的。
    const _items = Symbol('Set items');

    class SetLike {
        constructor () {
            this[_items] = {};
        }
        // 添加
        add(value) {
            if (!this.has(value)) {
                this[_items][value] = value;
                return true;
            }
            return false;
        }
        // 移除
        delete(value) {
            if (this.has(value)) {
                delete this[_items][value];
                return true;
            }
            return false;
        }
        // 包含
        has(value) {
            return this[_items].hasOwnProperty(value);
        }
        // 清除
        clear() {
            this[_items] = {};
        }
        // 长度
        size() {
            return this.values().length;
        }
        // 返回包含所有项的数组
        values() {
            return Object.keys(this[_items]).map(key => this[_items][key]);
        }

        // 并集操作
        // 并集，即包含两个集合中所有元素的新集合
        union(otherSet) {
            const unionSet = new SetLike();

            let values = this.values();
            for (let i in values) {
                unionSet.add(values[i]);
            }
            values = otherSet.values();
            for (let i in values) {
                unionSet.add(values[i]);
            }
            return unionSet;
        }

        // 交集操作
        // 交集，即包含两个集合中所有相同元素的新集合
        intersection(otherSet) {
            const intersectionSet = new SetLike();
            let values = this.values();
            for(let i in values) {
                if (otherSet.has(values[i])) {
                    intersectionSet.add(values[i]);
                }
            }
            return intersectionSet;
        }

        // 差集操作
        // A集合和B集合的差集，数学表示为A-B，即存在于A集合并且不存在于B集合的元素的集合。
        difference(otherSet) {
            const differenceSet = new SetLike();
            let values = this.values();
            for (let i in values) {
                if (!otherSet.has(values[i])) {
                    differenceSet.add(values[i]);
                }
            }
            return differenceSet;
        }

        // 子集操作
        // 如果A集合的所有元素都存在于B集合中，则称A集合是B集合的子集
        subset(otherSet) {
            if (this.size() > otherSet.size()) {
                return false;
            } else {
                let values = this.values();
                for (let i in values) {
                    if (!otherSet.has(values[i])) {
                        return false;
                    }
                }
                return true;
            }
        }
    }

    global.SetLike = SetLike;
})(window)