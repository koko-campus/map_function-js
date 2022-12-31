const map = (fx, [x, ...rest]) => x === undefined
	? [] : [fx(x), ...map(fx, rest)]
;

/* ********** 使い方 ********** */
const numbers = [1, 2, 3, 4, 5];

console.log(map(n => n * 2, numbers)); // 要素を2倍
// -> Array(5) [ 2, 4, 6, 8, 10 ]

console.log(map(n => n ** 2, numbers)); // 要素を2乗
// -> Array(5) [ 1, 4, 9, 16, 25 ]
