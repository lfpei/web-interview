/**
给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。

示例 1：
输入：s = "Hello World"
输出：5
解释：最后一个单词是“World”，长度为 5。
示例 2：
输入：s = "   fly me   to   the moon  "
输出：4
解释：最后一个单词是“moon”，长度为 4。
示例 3：
输入：s = "luffy is still joyboy"
输出：6
解释：最后一个单词是长度为 6 的“joyboy”
*/
function getMaxLenString(str) {
	let subStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== " ") {
			if (str[i - 1] === " " || i === 0) {
				subStr = str[i];
			} else {
				subStr += str[i];
			}
		}
	}
	return subStr.length;
}

console.log(getMaxLenString("luffy is still joyboy"));
