/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const accelerationInKM = acceleration * 12960; // converts acceleration from m/s^2 to km/h^2
const time = 3600; // seconds (1 hour)
const timeHr = time / 3600; // converts s to hr
const distance = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)
const fuelBurnRateHr = fuelBurnRate * 3600; // converts kg/s to kg/hr


const newDistance = distance + (velocity * timeHr) //calcultes new distance
const remainingFuel = fuel - (fuelBurnRateHr * timeHr) //calculates remaining fuel
const newVelocity = calcNewVel(accelerationInKM, velocity, timeHr) //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVel(velocity, accelerationInKM, timeHr) { 
  return velocity + (accelerationInKM*timeHr)
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);






