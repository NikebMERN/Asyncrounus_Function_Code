// Using Asynchromus
const Asynchromus=(ab, cd, callback)=>{
console.log(ab +" " + cd);
console.log(callback);
}

// Ordered or Callback hell callback function

const callmeorder=() =>{
setTimeout(()=>{
        console.log("Preparing ingerdiants");
    setTimeout(()=>{
            console.log("Get water with ice");
        setTimeout(() =>{
                console.log("Choping the fruit");
            setTimeout(()=>{
                    console.log("Start the machine");
                setTimeout(()=>{
                        console.log("Strawbary add to the Ice cream");
                    setTimeout(()=>{
                            console.log("Ice cream placed on the cup");
                        setTimeout(()=>{
                            console.log("Giving to customer and say thank you come again");
                        }, 1000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 3000)
    }, 1000)   
}, 2000)
}

Asynchromus("Product", "start", callmeorder());

// Unordered Callback function
const callmeunorder=() =>{
    setTimeout(()=>{
        console.log("Preparing ingerdiants");
    }, 2000);
    setTimeout(()=>{
        console.log("Get water with ice");
    }, 1000)
    setTimeout(()=>{
        console.log("Choping the fruit");
    }, 3000)
    setTimeout(() => {
        console.log("Start the machine");
    }, 1000);
    setTimeout(() => {
        console.log("Strawbary add to the Ice cream");
    }, 1000);
    setTimeout(() => {
        console.log("Ice cream placed on the cup");
    }, 2000);
    setTimeout(() => {
        console.log("Giving to customer and say thank you come again");
    }, 1000);
}

// Asynchromus("Product", "start", callmeunorder());

// Promises

// const understanding=new Promise((resolve, reject) => {
//         resolve("When sucssecful");
//         reject("When error");  
// })

// console.log(understanding);

// Declearing full filled promise
// const promiseone = new Promise((resolve, reject) => {
//     let Condition=true;

//     if(Condition){
//         resolve("This condition is sucssecfully applied");
//     }else{
//         reject("Sorry there is error in this condition");
//     }
// });

// Consuming the promise using then method

// promiseone.then((value)=>{
//     console.log("hi");
//     console.log(value);
// },(error)=>console.log(error)
// );

// console.log(promiseone);

/////  creating promisetwo  ////

// let iswork =true;
// let isin =true;

// const promisetwo = (time, work, start = true) => {
//     return new Promise((resolve, reject) => {
//         if(iswork && isin && start){
//             setTimeout(() =>{
//                 resolve(work());
//             }, time)
//         }else{
//             reject(console.log("Sorry, the data you inserted is not applied"))
//         }
//     });
// }

// promisetwo(2000, ()=> console.log("Preparing ingerdiants"))
// .then(()=>{
//     return promisetwo(1000,()=>console.log("Get water with ice"));
// })
// .then(()=>{
//     return promisetwo(3000, ()=> console.log("Choping the fruit"))
// })
// .then(()=>{
//     return promisetwo(1000, ()=>console.log("Start the machine"), false)
// })
// .catch(()=>{
//       // consuming the promise by catch
//     console.log("You can, Turn on the Genarator")
// })
// .then(()=>{
//     return promisetwo(1000, ()=>console.log("Strawbary add to the Ice cream"), false)
// })
// .catch(()=>{
//      // consuming the promise by catch
//     console.log( "Oh, Add fuel to the genarator")
// })
// .then(()=>{
//     return promisetwo(2000, ()=>console.log("Ice cream placed on the cup"))
// })
// .then(()=>{
//     return promisetwo(1000, ()=> console.log("Giving to customer and say thank you come again"))
// })
// .catch(()=>{
//     // consuming the promise by catch
//     console.log("customer left")
// })
// .finally(()=>{
//      // consuming the promise by finally
//     console.log("End of the day")
// })

// Asynchromus("preparing", "working", promisetwo);


//////// Async-Await
// let isgood = true;

// function promisethree(milisecond) {
//     return new Promise((resolve, reject) => {
//         if(isgood){
//             setTimeout(resolve, milisecond);
//         }else{
//             reject("Sorry can't acsses");
//         }
//     })
// }

// async function prothree () {
//     try {
//         await promisethree(2000);
//         console.log("Preparing ingerdiants");

//         await promisethree(1000);
//         console.log("Get water with ice");

//         await promisethree(3000);
//         console.log("Choping the fruit");

//         await promisethree(1000);
//         console.log("Start the machine");

//         await promisethree(1000);
//         console.log("Strawbary add to the Ice cream");

//         await promisethree(2000);
//         console.log("Ice cream placed on the cup");

//         await promisethree(1000);
//         console.log("Giving to customer and say thank you come again");
//     } catch (error) {
//         console.log(error);
//     }
// }

// prothree()

// async function data() {
//     const got = await fetch('sampleURL');
//     console.log(await got.json());
//     }

// data();