interface MainType {
  name: string;
  age: number;
}

type NestedType = MainType & {
  isDeveloper: boolean;
};

///Helper type
type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

type idk = Prettify<NestedType>;
