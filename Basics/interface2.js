var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    Instagram.prototype.uploadStory = function () {
        console.log("Story uploaded");
    };
    return Instagram;
}());
var YouTube = /** @class */ (function () {
    function YouTube(cameraMode, filter, burst, videos) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.videos = videos;
    }
    return YouTube;
}());
