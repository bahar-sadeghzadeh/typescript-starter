////When we want to have the autocomplete and any other arbitrary type values

// type IconSize = "sm" | "xs" | Omit<string, "sm" | "xs">;
type IconSize = LooseAutocomplete<"sm" | "xs">;

type LooseAutocomplete<T extends string> = T | Omit<string, T>;

interface IconProps {
  size: IconSize;
}

const Icon = (props: IconProps) => {
  return props;
};

const Comp1 = () => {
  Icon({ size: "sm" });
  Icon({ size: "someting" });
};
