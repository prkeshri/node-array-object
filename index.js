/**
 * @description Converts an object into an array while preserving keys in 'keys' property
 * @param {Object} o 
 * @returns Array
 */
function o2a(o) {
    const a = Object.values(o);
    Object.defineProperty(a, 'KEYS', {
        enumerable: false,
        value: Object.keys(o)
    });
    return a;
}

/**
 * @description Converts an array into an object. If the object was converted into array using above method, it will read keys from the keys property
 * @param {Array} a 
 * @returns Object
 */
function a2o(a, keys1) {
    const o = {},
        keys = keys1 || a.KEYS || {};
    a.forEach((v, i) => {
        o[keys[i] ?? i] = v;
    });
    return o;
}

/**
 * @description Patches a function so it can be called (always async) with first argument as object instead of an array
 * @param {string} [key] The patch name 
 */
 function patch(key = '$o') {
    Function.prototype[key] = async function() {
        const args = [].slice.call(arguments);
        args[0] = o2a(args[0]);
        let result = await this.apply(undefined, args);
        result = a2o(result, args[0].KEYS);
        return result;
    }
}

/**
 * @description Useful to call the function (sync) with 1st arguments as object instead of array
 * @param {Callback} cb 
 * @param  {...any} args 
 * @returns Promise<Result>
 */
async function call(cb, ...args) {
    args[0] = o2a(args[0]);
    let result = cb.apply(undefined, args);
    result = a2o(result, args[0].KEYS);
    return result;
}

/**
 * @description Useful to call the function (async) with 1st arguments as object instead of array
 * @param {Callback} cb 
 * @param  {...any} args 
 * @returns Result
 */
async function callAsync(cb, ...args) {
    args[0] = o2a(args[0]);
    let result = await cb.apply(undefined, args);
    result = a2o(result, args[0].KEYS);
    return result;
}

module.exports = exports = {
    a2o,
    o2a,
    patch,
    call,
    callAsync
};