import * as abis from "./contract-abi.js";

// const getClient = async () => {
//   const INFURA_RPC_URL = process.env.REACT_APP_INFURA_RPC_URL;
//   const web3 = new Web3(INFURA_RPC_URL);
//   return web3;
// };

// 1. GetCurrentBlockNumber
export const getCurrentBlockNumber = async (provider) => {
  const blockNumber = await provider.eth.getBlockNumber();
  return String(blockNumber);
};

// 2. GetBlockData
export const getBlockData = async (provider, blockNumber) => {
  const block = await provider.eth.getBlock(blockNumber);

  // const length = block.transactions.length;
  // const transactions = [];
  // for (let i = 0; i < length; i++) {
  //   const transaction = await provider.eth.getTransactionFromBlock(blockNumber, i);
  //   transactions.push(transaction);
  // }

  // const jsonString = JSON.stringify(block.response, (key, value) =>
  //   typeof value === "bigint" ? value.toString() : value
  // );

  return block;
};

// 3. GetTransactionReceipt
export const getTransactionReceipt = async (provider, transactionHash) => {
  const receipt = await provider.eth.getTransactionReceipt(transactionHash);
  console.log(receipt);

  return receipt;
};

// example tx : 0x5ff892c3806d5682ff9ab170e3ef5f47da4b71320315acd1fd07287e0ed1d46a
export const decodeLogs = async (provider, receipt) => {
  // receipt의 log들을 하나씩 분석
  for (let idx = 0; idx < receipt.logs.length; idx++) {
    if (receipt.logs[idx].topics.length <= 0) {
      continue;
    }
    // log의 첫번째 topics값이 funcOrderFulfilled일 경우,
    if (
      receipt.logs[idx].topics[0].toUpperCase() ===
      abis.funcOrderFulfilled.toUpperCase()
    ) {
      // event객체 생성, 첫번째인자
      let event = await provider.eth.abi.decodeLog(
        abis.abiOrderFulfilled,
        receipt.logs[idx].data,
        receipt.logs[idx].topics.slice(1)
      );
      // todo
      const eventOffer = event.offer;
      const offerer = event.offerer;
      const recipient = event.recipient;
      const zone = event.zone;

      return event;
    }
  }
};

const parseBigint = (data) =>
  JSON.stringify(data, (key, value) =>
    typeof value === "bigint" ? value.toString() : value
  );
