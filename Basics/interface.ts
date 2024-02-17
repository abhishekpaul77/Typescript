interface User{
    readonly _id:number,
    email:string,
    userId:number,
    googleId?:number,
    // startTrial:()=>string//One way of declaring method
    startTrial():string,
    getCoupon(couponName:string, value:number):number
}

const paul:User={_id:69,email:"abc@.com",userId:69,
    startTrial(){
        return "Trial started"
    },
    getCoupon(coupon="Discount", val=10) {
        return 10
    },
    githubId:96
}

paul.email="paul@.com"

//Reopening of interface
interface User{
    githubId:number
}

//Inheritance
interface admin extends User{
    adminRole: "Head" | "Editor" | "Design"
}

const paulAdmin:admin={_id:69,email:"abc@.com",userId:69,
    startTrial(){
        return "Trial started"
    },
    getCoupon(coupon="Discount", val=10) {
        return 10
    },
    githubId:96,
    adminRole:"Head",
}


export{}