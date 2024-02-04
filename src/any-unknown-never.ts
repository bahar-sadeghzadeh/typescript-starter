declare function tomorrow(d: Date): Date;

let val_any: any = 1;

val_any++;
val_any.toUpperCase();
val_any.map(val_any);
val_any.foobar = 2;
tomorrow(val_any);

////////////////////////////////////

let val_unknown: unknown = 1;

// val_unknown++;
if (typeof val_unknown === "number") {
  val_unknown++;
}
// val_unknown.toUpperCase();
if (typeof val_unknown === "string") {
  val_unknown.toUpperCase();
}
// val_unknown.map(val_unknown);
if (Array.isArray(val_unknown)) {
  val_unknown.map(val_unknown);
}
// val_unknown.foobar = 2;
if (
  val_unknown &&
  typeof val_unknown === "object" &&
  "foobar" in val_unknown &&
  typeof (val_unknown as any).foobar === "number"
) {
  val_unknown.foobar = 2;
}
// tomorrow(val_unknown);
if (val_unknown instanceof Date) {
  tomorrow(val_unknown);
}

/////////////////////////////////////////
///never
type A = number & string;
type B = boolean & null;

///
type User = "standard" | "admin";

function login(user: User) {
  switch (user) {
    case "standard":
      return true;
    case "admin":
      return true;
    default:
      const _unreachable: never = user;
      throw "wrong use type";
  }
}
