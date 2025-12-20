export async function delay<T>(promise: Promise<T>, duration: number): Promise<T> {
  await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return promise;
}
