import * as abi from "./contract-abi.js";

// 트랜잭션 데이터 가공 ( 임시 )
export function parseReceipt(res) {
  let result = "";
  const from = res.from;
  const to = res.to;
  const contractAddress = res.contractAddress;
  const logs = res.logs;
  const logsLength = logs.length;

  // navigator.clipboard.writeText(JSON.stringify(res));

  result += "[from] : " + from + "\n";
  result += "[to] : " + to + "\n";
  result += "[contractAddress] : " + contractAddress + "\n";
  result += "[logs] length : " + logsLength + "\n";

  let log = "";
  for (let i = 0; i < logsLength; i++) {
    const topicLength = logs[i].topics.length;
    log += "----------------------------------------------------------\n\n";
    log += "[log " + i + "]\n";
    log += "address : " + logs[i].address + "\n";
    log += "data : " + logs[i].data + "\n\n";

    for (let j = 0; j < topicLength; j++) {
      if (logs[i].topics[j] === abi.funcTransfer) {
        log += "[topic " + j + "][Transfer] \n" + logs[i].topics[j] + "\n";
      } else if (logs[i].topics[j] === abi.orderFullfilled) {
        log +=
          "[topic " + j + "][orderFullfilled] \n" + logs[i].topics[j] + "\n";
      } else {
        log += "[topic " + j + "]\n" + logs[i].topics[j] + "\n";
      }
    }
  }
  result += "\n" + log;
  return result;
}
