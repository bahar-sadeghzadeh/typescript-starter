type Shapes =
  | {
      kind: "circle";
      radius: number;
    }
  | {
      kind: "square";
      sideLength: number;
    };

type Omitted = Exclude<Shapes, { kind: "circle" }>;
