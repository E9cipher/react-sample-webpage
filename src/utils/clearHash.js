/**
 * Clears hashes in the url after a specified timer
 * @param {number} delay the delay specified in ms
 */
export const clearHash = (delay) => {
    const executeClear = () => {
        const url = new URL(window.location.href);
        url.hash = "";
        window.history.replaceState(null, "", url.toString());
    }
    !delay ? executeClear() : setTimeout(executeClear, delay)

};