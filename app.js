

let nums1 = [1,2,3,0,0,0]
let nums2 = [2,5,6]


for (let i=5; i>=0; i--){
    
    for (let j=2; j>=0; j-- ){
        nums1[i] = nums2[j]; 
        
        if ( nums2[j] > nums1[i] ){
           
           break;
        }

    }

}


// Output: [1,2,2,3,5,6]



// nums1.splice(3,3);


// for(let i= 0; i<=2; i++){
//  nums1.push(nums2[i]);
// }

// nums1.sort()

// console.log(nums1);