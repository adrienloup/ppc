export function getPower(
  droneConsumption: number,
  clipFactoryConsumption: number,
  powerProduction: number,
  powerStorage: number
) {
  const totalConsumption = droneConsumption + clipFactoryConsumption;
  const totalAvailable = powerProduction + powerStorage;
  if (powerProduction > totalConsumption) {
    // @TODO storage
    return false;
  }
  return (
    totalConsumption > totalAvailable || droneConsumption > totalAvailable || clipFactoryConsumption > totalAvailable
  );
}
