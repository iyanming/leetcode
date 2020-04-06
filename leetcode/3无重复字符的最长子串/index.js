/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strSet = new Map();
    let maxLen = 0;
    let left = 0;
    let right = 0;
    let strArr = s.split('');
    strArr.forEach((item,i,arr) => {
        if(strSet.has(arr[right]) && strSet.get(s[right]) >= left) {
            maxLen = Math.max(right - left , maxLen); 
            left = strSet.get(s[right]) + 1;
        }
        strSet.set(s[right],right);
        right += 1;
    });
    maxLen = Math.max(right - left , maxLen);
    return maxLen;
};
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");