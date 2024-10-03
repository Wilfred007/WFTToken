// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const WFTTOKEN = buildModule("WFTTOKEN", (m) => {

  const WFTTOKEN = m.contract("WFTTOKEN");

  return { WFTTOKEN };
});

export default WFTTOKEN;
