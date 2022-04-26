export type Styles = {
  box: string;
  content: string;
  isMe: string;
  message: string;
  profile: string;
  'time-area': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
