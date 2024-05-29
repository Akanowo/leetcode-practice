/**
  QUESTION:
  You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

 

Example 1:

Input: s1 = "bank", s2 = "kanb"
Output: true
Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:

Input: s1 = "attack", s2 = "defend"
Output: false
Explanation: It is impossible to make them equal with one string swap.
Example 3:

Input: s1 = "kelb", s2 = "kelb"
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.
 

Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.
 */

/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function Solution(str1, str2) {
	// kebab
	// keabb

	if (str1 === str2) return true;

	let i = 0;
	let j = i + 1;

	while (i !== j) {
		if (i === str2.length - 1) {
			break;
		}

		if (j === str2.length) {
			i++;
			j = i + 1;
		}

		let charI = str2[i];
		let charJ = str2[j];
		if (!charJ) {
			break;
		}
		let swappedString = str2.split('');
		swappedString[i] = charJ;
		swappedString[j] = charI;

		if (swappedString.join('') === str1) {
			return true;
		}

		j++;
	}

	return false;
}

console.log(Solution('bank', 'kanb'));
