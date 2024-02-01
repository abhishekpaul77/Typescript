//Abstract classes are 

abstract class Takephoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){}

    abstract getSepia():void

    getReelTime():number{
        //After heavy calculation
        return 7
    }
}

class Instagram extends Takephoto{
    constructor(
        public cameraMode:string,
        public filter:string,
        public burst:number
    ){
        super(cameraMode,filter, burst);
    }

    //Abstract functions must be implemented
    getSepia(): void {
        console.log("Sepia filter is used")
    }

    //This function may or may not be used
    // getReelTime(): number {
    //     let duration=0;
    //     console.log("perform reel time calculation")
    //     return duration
    // }
}