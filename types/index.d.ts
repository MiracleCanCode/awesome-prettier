type TrailingComma = "none" | "es5" | "all";
type ArrowParens = "avoid" | "always";

declare module "awesome-prettier" {
  const config: {
    semi: boolean;
    singleQuote: boolean;
    trailingComma: TrailingComma;
    printWidth: number;
    tabWidth: number;
    useTabs: boolean;
    bracketSpacing: boolean;
    arrowParens: ArrowParens;
    jsxSingleQuote: boolean;
  };
  export default config;
}
