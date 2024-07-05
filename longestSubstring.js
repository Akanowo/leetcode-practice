const lengthOfLongestSubstring = function (s) {
	let pointer1 = 0,
		pointer2 = 0;
	let maxSubStr = 0;

	if (!s) return 0;
	if (s.length === 1) return 1;

	let set = new Set();

	while (true) {
		if (!s[pointer2]) {
			break;
		}

		let char = s[pointer2];
		if (set.has(char)) {
			maxSubStr = Math.max(maxSubStr, set.size);
			set = new Set();
			pointer1++;
			char = s[pointer1];
			pointer2 = pointer1;
		}

		set.add(char);
		maxSubStr = Math.max(maxSubStr, set.size);
		pointer2++;
	}
	return maxSubStr;
};

console.log(lengthOfLongestSubstring('abcabbdcadc'));
