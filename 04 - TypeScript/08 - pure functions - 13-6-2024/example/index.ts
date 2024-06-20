function maxNumber(nums:number[]): number {
    let maxNumber=nums[0]

    for (let i=0; i<nums.length;i++) {
    if (maxNumber<nums[i]){
        maxNumber=nums[i];
    }
}
    return maxNumber;
}

function max(a:number,b:number,c:number,d:number) {
    return maxNumber([a,b,c,d]);
}
console.log (max(1,2,3,1000))
