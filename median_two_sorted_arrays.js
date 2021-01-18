var findMedianSortedArrays = function(nums1, nums2) {
  let result = merge(nums1,nums2);
  if(result.length % 2 !== 0){
   return result[Math.floor(result.length/2)];
  }
  else{
      let val1 = result[(result.length)/2 - 1];
      let val2 = result[result.length/2];
      return (val1 + val2)/2;
  }
};
function merge(l1,l2){
    var t =[];
    while(l1.length && l2.length){
         if(l1[0] < l2[0]){
             t.push(l1.shift());
         }
         else{
             t.push(l2.shift());
         }
    }
    while(l1.length){
        t.push(l1.shift());
    }
    while(l2.length){
       t.push(l2.shift()); 
    }
    return t;
}
