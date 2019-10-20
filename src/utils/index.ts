export const dedent = (string: string): string => {
  return string.replace(/  +/g, '');
};

export enum Key {
  // Add as needed
  ENTER = 'Enter',
  ESCAPE = 'Escape',
}
