import { Connector } from "@web3-react/types";
import { Connection } from "../connections/IConnection";
import { getConnection } from "../connections/utils";
import { useEffect } from "react";
import { networkConnection } from "../connections/network";
import { injectedConnection } from "../connections/metaMask";

export const connect = async (connector: Connector) => {
  try {
    if (connector.connectEagerly) {
      await connector.connectEagerly();
    } else {
      await connector.activate();
    }
  } catch (error) {
    console.debug(`web3-react eager connection error: ${error}`);
  }
};

export default function useEagerlyConnect() {
  let selectedConnection: Connection | undefined;
  /*   if (selectedWallet) {
    try {
      selectedConnection = getConnection(selectedWallet);
    } catch {
      dispatch(updateSelectedWallet({ wallet: undefined }));
    }
  } */

  useEffect(() => {
    connect(injectedConnection.connector);
    connect(networkConnection.connector);

    if (selectedConnection) {
      connect(selectedConnection.connector);
    } // The dependency list is empty so this is only run once on mount
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
