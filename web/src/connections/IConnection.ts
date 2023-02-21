import { Web3ReactHooks } from "@web3-react/core";
import { Connector } from "@web3-react/types";

export interface Connection {
  connector: Connector;
  hooks: Web3ReactHooks;
  type: ConnectionType;
  priority: number;
}

export enum ConnectionType {
  INJECTED = "INJECTED",
  NETWORK = "NETWORK",
}
