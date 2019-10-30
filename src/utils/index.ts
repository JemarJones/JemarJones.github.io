export const format = (string: string): string => {
  console.log(string);
  return string
    .replace(/\n\n/g, '<br><br>') // Replace double newline with a double br.
    .replace(/  +/g, ''); // Replace multiwhitespace with single.
};

export enum KeyCode {
  // Add as needed
  ENTER = 'Enter',
  ESCAPE = 'Escape',
}
