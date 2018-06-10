/* eslint-disable prefer-spread */
const getRandomInt = (min = 0, max = 1) => (
	min + Math.floor(Math.random() * ((max - min) + 1))
);

const createUniqueId = () => {
	let id = 0;

	return () => id++;
};

const getRandomString = () => (
	Array.apply(null, { length: getRandomInt(5, 20) })
		.map(() => String.fromCharCode(getRandomInt(97, 97 + 25)))
		.join('')
);

const modelTypeMap = {
	UniqueNumber: createUniqueId(),
	Number: () => getRandomInt(0, 99),
	String: () => getRandomString(),
};

// TODO: Try to implement tail recursion
const createMockItem = (model) => {
	const mockItem = {};

	Object.entries(model).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			mockItem[key] = (
				Array.apply(null, { length: getRandomInt(0, 15) })
					.map(() => createMockItem(value[0]))
			);
		} else if (typeof value === 'object') {
			mockItem[key] = createMockItem(value);
		} else if (value in modelTypeMap) {
			mockItem[key] = modelTypeMap[value]();
		}
	});

	return mockItem;
};

const createMock = (model, size = 0) => (
	Array.apply(null, { length: size })
		.map(() => createMockItem(model))
);

export default createMock;
