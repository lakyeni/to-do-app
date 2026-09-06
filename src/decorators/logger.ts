export function LogAdd(
  originalMethod: (item: any) => void,
  _context: ClassMethodDecoratorContext
) {
  return function (this: unknown, item: any): void {
    console.log("Todo hozzáadása:", item);

    originalMethod.call(this, item);
  };
}