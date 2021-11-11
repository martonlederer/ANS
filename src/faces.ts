export interface StateInterface {
  users: []; // TODO
  availableLabels: Record<string, number>;
  balances: { [address: string]: number };
  supportedUrlTypes: string[];
  deposits: []; // TODO
  withdrawals: []; // TODO
  totalProfitSharing: number;
  invocations: string[];
  foreignCalls: ForeignCallInterface[];
}

export interface ActionInterface {
  input: any;
  caller: string;
}

export interface ForeignCallInterface {
  txID: string;
  contract: string;
  input: InvocationInterface;
}

export interface InvocationInterface {
  function: string;
  [key: string | number]: any;
}
