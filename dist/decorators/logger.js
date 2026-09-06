export function LogAdd(originalMethod, _context) {
    return function (item) {
        console.log("Todo hozzáadása:", item);
        originalMethod.call(this, item);
    };
}
//# sourceMappingURL=logger.js.map