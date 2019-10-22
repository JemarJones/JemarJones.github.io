export const dedent = (string: string): string => {
  return string.replace(/  +/g, '');
};

export enum KeyCode {
  // Add as needed
  ENTER = 'Enter',
  ESCAPE = 'Escape',
}
