declare module "*.module.scss" {
  const styles: { [key: string]: string };
  export default styles;
}

declare module "*.svg" {
  const value: any;
  export = value;
}
