export type Styles = {
  article: string;
  container: string;
  content: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
