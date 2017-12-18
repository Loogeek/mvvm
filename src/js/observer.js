var data = {name: 'old'}
observer(data)
data.name = 'new'

function observer(data) {
    if (!data || typeof data !== 'object') return

    Object.keys(data).forEach(function(key) {
        defineObserver(data, key, data[key])
    })
}

function defineObserver(data, key, val) {
    observer(val)
    Object.defineProperty(data, key, {
        configurable: false,
        enumerable: true,
        get: function() {
            return val
        },
        set: function(newVal) {
            console.log('data changed', val, '-->', newVal)
            val = newVal
        }
    })
}