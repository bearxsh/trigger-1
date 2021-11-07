export type EdgeOptions = 'cover' | 'inset' | 'content' | 'matrix';
// Default Value
const DEFAULT: EdgeOptions = 'cover';

export function get(value?: EdgeOptions) {
  // only supports cover / inset for now
  if (!value || !['cover', 'inset', 'content', 'matrix'].includes(value)) {
    value = DEFAULT;
  }

  return value;
}
