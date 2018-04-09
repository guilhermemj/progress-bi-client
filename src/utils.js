/* eslint-disable import/prefer-default-export */
export const isCurrentURl = (url) => {
	if (url === '#') {
		return false;
	}

	const link = document.createElement('a');

	link.href = url;

	if (link.host !== location.host) {
		return false;
	}

	return location.pathname === link.pathname;
};
