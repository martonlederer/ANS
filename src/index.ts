import { StateInterface, ActionInterface } from "./faces";

export async function handle(state: StateInterface, action: ActionInterface) {
  switch (action.input.function) {
    default:
      throw new ContractError(`Invalid function: "${action.input.function}"`);
  }
}
