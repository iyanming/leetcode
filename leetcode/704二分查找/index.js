/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let begin = 0;
    let end = nums.length - 1;
    let middle;
    while(begin <= end) {
        middle = parseInt(begin + (end - begin)/2);
        if(nums[middle] == target) {
            return middle;
        }else if(nums[middle] < target) {
            begin = middle + 1;
        }else{
            end = middle - 1;
        }
    }
    return -1;
};