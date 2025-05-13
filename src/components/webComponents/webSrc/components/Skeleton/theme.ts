interface ByolSkeletonTheme {
  base: string
  animation: string
  line: string
}

export const skeletonTheme: ByolSkeletonTheme = {
  base: 'w-full',
  animation: 'animate-pulse',
  line: 'w-full bg-metal-100 dark:bg-metal-800 rounded-xl',
}
