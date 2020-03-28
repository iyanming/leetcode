/**
 * 方法一
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) { 
                return [i,j];
            }
        }
    }
};
/**
 * 方法二 耗时比方法一长
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let resultArr = [];
    nums.forEach((item,i) => {
        nums.forEach((numItem,index) => {
            // i<index是为了不重复
            if(i < index && item + numItem == target) { 
                resultArr.push(i,index);
            }
        });
    });
    return resultArr;
};