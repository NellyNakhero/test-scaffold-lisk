// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";

// // Replace with actual USDC address for l2 lisk sepolia
//   const USDC_ADDRESS = "0x0E82fDDAd51cc3ac12b69761C45bBCB9A2Bf3C83";

// const deployBaseFlowImplementation: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   const { deployer } = await hre.getNamedAccounts();
//   const { deploy } = hre.deployments;

//   console.log("Deploying BaseFlowImplementation with deployer:", deployer);

//   const result = await deploy("BaseFlowImplementation", {
//     from: deployer,
//     args: [USDC_ADDRESS],
//     log: true,
//     autoMine: true, // optional, useful for local networks
//   });

//   const flowCoreContract = await hre.ethers.getContract<Contract>("BaseFlowImplementation");
//   console.log("✅ BaseFlowImplementation deployed at:", flowCoreContract.address);
// };

// export default deployBaseFlowImplementation;

// deployBaseFlowImplementation.tags = ["FlowCore"];

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const USDC_ADDRESS = "0x0E82fDDAd51cc3ac12b69761C45bBCB9A2Bf3C83";

const deployBaseFlowImplementation: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying BaseFlowImplementation with deployer:", deployer);

  const deployment = await deploy("BaseFlowImplementation", {
    from: deployer,
    args: [USDC_ADDRESS], // Constructor args: USDC token address
    log: true,
    autoMine: true, // For local testing to speed up deployment
  });

  console.log("BaseFlowImplementation deployed at:", deployment.address);
};

export default deployBaseFlowImplementation;
deployBaseFlowImplementation.tags = ["BaseFlowImplementation"];
