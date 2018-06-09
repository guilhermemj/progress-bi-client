const getRandomInt = (min = 0, max = 1) => (
	min + Math.floor(Math.random() * ((max - min) + 1))
);

const getNextUnique = () => {
	let id = 0;

	return () => id++;
};

const modelTypeMap = {
	UniqueNumber: getNextUnique(),
	Number: () => getRandomInt(0, 99),
	String: () => 'batata',
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
