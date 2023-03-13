function sum(a, b) {
	if (typeof a !== number) {
		return a;
	}
	return a + b;
};

module.exports = sum;

