
const ethers = require('ethers');
console.log("Start");
const provider = new ethers.providers.JsonRpcProvider()
provider.getCode("0x7a16ff8270133f063aab6c9977183d9e72835428").then(console.log);