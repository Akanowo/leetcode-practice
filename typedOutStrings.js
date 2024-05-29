/**
 *
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function typedOutStrings(s, t) {
	let sPointer = s.length - 1; // 3
	let tPointer = t.length - 1; // 5
	let sHashStepsLeft = 0; // 1
	let tHashStepsLeft = 0; // 1

	// abc#d   abzz##d

	while (sPointer >= 0 && tPointer >= 0) {
		console.table({ sPointer, tPointer, sHashStepsLeft, tHashStepsLeft });
		// compare if there are no more characters for both pointers to skip
		if (sHashStepsLeft === 0 && tHashStepsLeft === 0) {
			console.log(s[sPointer], t[tPointer]);
			if (s[sPointer] !== t[tPointer]) return false;
		}
		// check if the character at both pointers is a #
		if (s[sPointer] === '#') {
			sHashStepsLeft += 2;
			sPointer--;
		}

		if (t[tPointer] === '#') {
			tHashStepsLeft += 2;
			tPointer--;
		}

		if (sHashStepsLeft > 0) {
			sHashStepsLeft--;
		} else {
			tPointer--;
		}

		if (tHashStepsLeft > 0) {
			tHashStepsLeft--;
		} else {
			console.log('decrementing s...');
			sPointer--;
		}
	}

	// const modifiedS = modifyString(s);
	// const modifiedT = modifyString(t);

	// console.log(modifiedS, modifiedT);
	// if (modifiedS.length !== modifiedT.length) return false;

	// for (let i = 0; i < modifiedS.length; i++) {
	// 	if (modifiedS[i] !== modifiedT[i]) return false;
	// }

	return true;
}

/**
 *
 * @param {string} S
 * @returns {string[]}
 */
function modifyString(string) {
	const finalArr = [];
	// loop over S
	for (let i = 0; i < string.length; i++) {
		if (string[i] === '#') {
			finalArr.pop();
			continue;
		}
		finalArr.push(string[i]);
	}
	return finalArr;
}

console.log(typedOutStrings('abc#d', 'abzz##d'));

// abbdjc##mk  ffj#t#hj

// check whether the value at the pointers equal an #
// move both pointers if none of their values equal an #
