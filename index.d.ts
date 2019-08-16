declare module '@jchancehud/parallel-promise' {
  export default function<T>(
    count: number,
    iteratorFn: (i: number) => Promise<T>,
    limit?: number
  ): Promise<T[]>
}
