var minimumLengthEncoding = function(words) {
    // 反转字符串
    let revWords = words.map(item => item.split("").reverse().join(""));
    // 排序
    revWords.sort();
    // 结果 计数
    let result = 0;
    revWords.forEach((item,i) => {
        // 下一个字符里开头不是本字符
        if(i+1 < revWords.length && revWords[i+1].indexOf(item) == 0){
            return;
        }
        // 加1是因为有#号
        result += item.length + 1;
    });
    return result;
};