export async function fallback<P>(promise: Promise<P>, duration: number) {
  await new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return await promise;
}
