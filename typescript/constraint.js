function longest(a, b) {
    return a.length >= b.length ? a : b;
}
console.log('longest("apple","banana") ', longest("apple", "banana"));
console.log('longest ([1],[2]) ', longest([1], [2, 3]));
