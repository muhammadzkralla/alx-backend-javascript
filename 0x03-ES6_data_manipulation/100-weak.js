const weakMap = new WeakMap();

export { weakMap };

export function queryAPI(endpoint) {
    // Check if the weakMap already has an entry for the endpoint
    if (!weakMap.has(endpoint)) {
        // If not, set the initial count to 1
        weakMap.set(endpoint, 1);
    } else {
        // If yes, increment the count
        const count = weakMap.get(endpoint) + 1;
        weakMap.set(endpoint, count);
    }

    // Check if the count is greater than or equal to 5
    if (weakMap.get(endpoint) >= 5) {
        // If yes, throw an error
        throw new Error('Endpoint load is high');
    }
}
