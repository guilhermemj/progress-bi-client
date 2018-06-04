const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getRandomInt = (min = 0, max = 1) => (
	min + Math.floor(Math.random() * ((max - min) + 1))
);

const getRandomElement = array => array[getRandomInt(0, array.length - 1)];

export default {
	getRandomInt,
	getRandomElement,
	sleep,
};
