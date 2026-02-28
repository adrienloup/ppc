export async function delay<P>(promise: Promise<P>, duration: number): Promise<P> {
  await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return promise;
}
