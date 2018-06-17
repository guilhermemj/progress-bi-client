/* eslint-disable import/prefer-default-export */
export const getRandomInt = (min = 0, max = 1) => (
	min + Math.floor(Math.random() * ((max - min) + 1))
);

export const repeat = (fn, times = 0) => {
	if (times < 0) {
		return;
	}

	for (let count = 0; count < times; count += 1) {
		fn(count);
	}
};

export const sortBy = (factor) => {
	const getSortingFactor = (typeof factor === 'function' ?
		factor :
		item => item[factor]
	);

	return (itemA, itemB) => (getSortingFactor(itemA) > getSortingFactor(itemB) ? 1 : -1);
};

export default {
	getRandomInt,
	repeat,
	sortBy,
};
