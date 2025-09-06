//Day 3 class task 1 function, array and for loop

//1. print the numbers from 1 to 100 with the interval of 10
for (let i=0; i<=100; i=i+10){
console.log(i);
}

//2. print the number from 10 to 1
for (let i=10; i>=1; i--){
    console.log(i);
}

//3. print the multiple of 2 until 10
for (let i=1; i<=5; i++){
    console.log(i*2);
}

//4. print the number from 100 to 1 with the difference of 10.
for(let i=100; i>=1; i=i-10){
    console.log(i);
}

/*write a function to print the eligible, Not eligble voters separately from the list
of array [18,17,16,15,10,8,7,9,35,40,86,75,0]. Note: print invalid if the voter age is 0.*/

function voterEligibility(arr) {
    let eligiblevoters = [];
    let noteligiblevoters = [];
    let invalidates = [];

    for (let i= 0; i< arr.length; i++){
        if (arr[i]>=18){
            eligiblevoters.push(arr[i]);
        }
        else if (arr[i]===0){
            invalidates.push(arr[i]);
        }
        else{
            noteligiblevoters.push(arr[i]);
        }
    }
     return {
        eligiblevoters: eligiblevoters,
        noteligiblevoters: noteligiblevoters,
        invalidates: invalidates
     };
}
     console.log(voterEligibility([18,17,16,15,10,8,7,9,35,40,86,75,0]));