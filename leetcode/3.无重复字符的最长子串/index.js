/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strSet = new Set();
    let maxLen = 1;
    let strArr = s.split('');
    strArr.forEach((item,i,arr) => {
        if(item !== arr[i + 1]) {
            strSet.add(item);
        }else{
            maxLen = strSet.size;
            strSet.clear();
        }
    });
    console.log(maxLen);
    return maxLen;
};
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");