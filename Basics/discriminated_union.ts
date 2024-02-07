interface Circle {
  kind: "Circle";
  radius: number;
}
interface Rectangle {
  kind: "Rectangle";
  width: number;
  length: number;
}

interface Square {
  kind: "Square";
  side: number;
}

type Shape = Circle | Rectangle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind === "Circle") {
    return Math.PI ** shape.radius;
  } else if (shape.kind === "Rectangle") {
    return "It is rectangle";
  } else {
    return "It is square";
  }
}

const getArea = (shape: Shape) => {
  switch (shape.kind) {
    case "Circle":
      return Math.PI * shape.radius ** 2;
    case "Rectangle":
      return shape.length * shape.width;
    case "Square":
      return shape.side ** 2;
    default:
      const defaulShape: never = shape;
      return defaulShape;
  }
};
