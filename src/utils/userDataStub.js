export const user = {
  name: "John Doe",
  email: "johndoe@gmail.com",
};

export function generateRandomAddress() {
  const streets = ["Main St", "Oak St", "Pine St", "Maple St", "Cedar St"];
  const cities = [
    "Springfield",
    "Riverside",
    "Franklin",
    "Greenville",
    "Clinton",
  ];
  const states = ["CA", "TX", "FL", "NY", "NV"];
  const zipCodes = () => Math.floor(10000 + Math.random() * 90000).toString();

  const street = streets[Math.floor(Math.random() * streets.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  const state = states[Math.floor(Math.random() * states.length)];
  const zipCode = zipCodes();

  return `${street}, ${city}, ${state}, ${zipCode}`;
}

export function generateRandomAddresses(count) {
  const addresses = [];
  for (let i = 0; i < count; i++) {
    addresses.push(generateRandomAddress());
  }
  return addresses;
}

