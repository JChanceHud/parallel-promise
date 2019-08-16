declare module '@jchancehud/parallel-promise' {
  export default function(
    count: number,
    iteratorFn: (i: number) => boolean | Promise<any>,
    limit: number
  ): Promise<any[]>
}
