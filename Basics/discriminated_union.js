function getTrueShape(shape) {
    if (shape.kind === "Circle") {
        return Math.pow(Math.PI, shape.radius);
    }
    else if (shape.kind === "Rectangle") {
        return "It is rectangle";
    }
    else {
        return "It is square";
    }
}
var getArea = function (shape) {
    switch (shape.kind) {
        case "Circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "Rectangle":
            return shape.length * shape.width;
        case "Square":
            return Math.pow(shape.side, 2);
        default:
            var defaulShape = shape;
            return defaulShape;
    }
};
