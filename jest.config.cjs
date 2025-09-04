module.exports = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(t|j)sx?$': 'babel-jest',
	},
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
};
