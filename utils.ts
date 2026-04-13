/** Used by shadcn `button`; install `clsx` + `tailwind-merge` for full Tailwind class merging. */
export function cn(
  ...inputs: Array<string | number | false | null | undefined>
): string {
  return inputs.filter(Boolean).join(" ");
}
