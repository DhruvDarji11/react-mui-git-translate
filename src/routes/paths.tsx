function path(root: string, sublink: string): string {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/";
const ROOT_MAIN = "/main";
const ROOT_PRODUCTS = "/products";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  main: ROOT_MAIN,
  login: path(ROOTS_AUTH, "login"),
  products: ROOT_PRODUCTS,
};
export const PATH_DASHBOARD = {
  root: "/",
};
