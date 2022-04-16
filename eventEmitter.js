

class EventEmitter {
    constructor() {
        this.cache = {}
    }

    emit(event, ...args) {
        const effects = this.cache[event].slice() // 防止重复监听进入死循环
        effects.forEach(effect => {
            effect(...args)
        })
        return this
    }

    on(event, fn) {
        const effects = this.cache[event]
        if (effects) {
            this.cache[event] = [fn]
        } else {
            this.cache.get(event).push(fn)
        }
        return this
    }

    off(event, fn) {
        const effects = this.cache[event]
        this.cache[event] = effects && effects.filter(effect => effect !== fn)

        return this
    }

    once(event, fn) {
        
        // 执行完一遍方法后取消监听该方法
        function handler(...args) {
            fn(...args)
            this.off(event, handler)
        }

        this.emit(event, handler)
    }


}