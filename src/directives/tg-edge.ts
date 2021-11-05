export type EdgeOptions = 'cover' | 'inset' | 'content';
// Default Value
const DEFAULT: EdgeOptions = 'cover';

export function get(value?: EdgeOptions) {
  // only supports cover / inset for now
  if (!value || !['cover', 'inset', 'content'].includes(value)) {
    value = DEFAULT;
  }

  return value;
}
