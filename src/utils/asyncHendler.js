

const asyncHendler  = (requesthendler)=>{
    (req,res,next) =>{
        Promise.resolve(requesthendler(req,res,next)).catch((err)=> next(err))
    }

}

export{asyncHendler}

// const asyncHendler = (fn) => async  (req,res,next )=>{
//     try {
//         await fn (req,res,next)
        
//     } catch (err) {
//         res.status(err.code || 5000).json({
//             sueccess:false,
//             massage:err.massage
//         })
       
        
//     }
// }