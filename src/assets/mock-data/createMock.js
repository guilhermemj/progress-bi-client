const getRandomInt = (min = 0, max = 1) => (
	min + Math.floor(Math.random() * ((max - min) + 1))
);

const createUniqueId = () => {
	let id = 0;

	return () => id++;
};

/* eslint-disable prefer-spread */
const getRandomString = () => (
	Array.apply(null, { length: getRandomInt(5, 20) })
		.map(() => String.fromCharCode(getRandomInt(97, 97 + 25)))
		.join('')
);
/* eslint-enable prefer-spread */

const modelTypeMap = {
	UniqueNumber: createUniqueId(),
	Number: () => getRandomInt(0, 99),
	String: () => getRandomString(),
};

// TODO: Try to implement tail recursion
const createMockItem = (model) => {
	const mockItem = {};

	Object.entries(model).forEach(([key, value]) => {
		// TODO: handle arrays
		if (typeof value === 'object') {
			mockItem[key] = createMockItem(value);
		}

		if (value in modelTypeMap) {
			mockItem[key] = modelTypeMap[value]();
		}
	});

	return mockItem;
};

/* eslint-disable prefer-spread */
const createMock = (model, size = 0) => (
	Array.apply(null, { length: size })
		.map(() => createMockItem(model))
);
/* eslint-enable prefer-spread */

export default createMock;
