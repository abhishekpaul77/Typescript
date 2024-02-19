interface TakePhoto{
    cameraMode:string,
    filter:string,
    burst:number
}

interface story{
    uploadStory():void
}

class Instagram implements TakePhoto,story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ){}

    uploadStory(): void {
        console.log("Story uploaded");
    }
}


class YouTube implements TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public videos:string
    ){}
}