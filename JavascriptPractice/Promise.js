
// const myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('The promise it executed')
//         let data = {name: 'sonali',id:1}
//         resolve(data);
//     },500)
// })

// myPromise.then((data)=>{
//     console.log(data)
//     return {
//         ...data,dept:'CS',sal:'7L'
//     }
// }).then(res=>{
//     console.log('res',res)
// })
// .catch((err)=>{
//     console.log(err.message)
// }).finally(()=>{
//     console.log('ok1')
// });

// const myPromise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let isSuccess = true
//         resolve(isSuccess)
//         console.log('execute promise 2')
//     },1000)
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.message)
// }).finally(()=>{
//     console.log('ok2')
// })


// const myPromise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        reject('Execute promise3')
//     })
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.message)
// }).finally(()=>{
//     console.log('ok3')
// })

// const promise1 = new Promise((resolved,rejected)=>{
//     let isSuccess = false
//     let data = {name:'sonali',id:1}
//     if(isSuccess){
//         resolved(data)
//     }else{
//         rejected('It is rejected')
//     }
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err.message)
// })

// const promise2 = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         console.log('resolved in 500 sec')
//     },500)
// })

// const promise3 = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         console.log('resolved in 1000sec')
//     },1000)
// })

// const promise4 = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         resolved('resolved without time')
//     })
// })
// Promise.all([promise1,promise2,promise3,promise4])
// .then((data)=>{
//     console.log('resolved successfully',data)
// }).catch((err)=>{
//     console.log(err.message)
// })

//Promise.all([promises]) - Waits for all promises to resolve — or rejects if any promise rejects.
const userAPI = "https://jsonplaceholder.typicode.com/users/1";
const postsAPI = "https://jsonplaceholder.typicode.com/posts?userId=1";
const commentsAPI = "https://jsonplaceholder.typicode.com/comments?postId=1";

// Promise.all([
//     fetch(userAPI).then((res)=>res.json()),
//     fetch(postsAPI).then(res=>res.json()),
//     fetch(commentsAPI).then(res=>res.json())
// ])
// .then((user,post,comments)=>{
//     console.log('user=>',user)
//     console.log('post=>',post)
//     console.log('comment=>',comments)
// }).catch((err)=>{
//     console.log(' Error fetching data',err)
// }).finally(()=>{
//     console.log('final')
// })

// Promise.allSettled([]) - wait for the all promise if any promise are rejected it gives the result
// Promise.allSettled([
//     fetch(userAPI).then(res=>res.json()),
//     fetch(postsAPI).then(res=>res.json()),
//     fetch(commentsAPI).then(res=>res.json())])
// .then(([user,post,comments])=>{
//     console.log('user',user)
//     console.log('post',post)
//     console.log('comments',comments)
// })
// .catch((err)=>{
//     console.log('error occured',err)
// }).finally(()=>{
//     console.log('final')
// })

//Promise.race() Returns the first promise that settles (whether it fulfills or rejects).

const fast = new Promise(resolve => setTimeout(() => resolve("⚡ Fast"), 4000));
const slow = new Promise(resolve => setTimeout(() => resolve("🐢 Slow"), 3000));
const fail = new Promise((_, reject) => setTimeout(() => reject("💥 Failed"), 2000));

Promise.race([fast, slow, fail])
  .then(result => console.log("Winner:", result))
  .catch(error => console.error("Error:", error));


//   Promise.any([promises])- Returns the first fulfilled promise (ignores rejections).
// Rejects only if all promises reject.

const p1 = Promise.resolve(()=>
    setTimeout(()=>{
        console.log('time')

    },2000)
)
const p2 = Promise.resolve("Win");
const p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3]).then(console.log(p1,p2,p3));