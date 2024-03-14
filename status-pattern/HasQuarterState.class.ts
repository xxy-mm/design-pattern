import type { GumballMachine } from './GumballMachine.class'
import type { State } from './State.interface'
import { messages } from './errors'

export class HasQuarterState implements State {
  constructor(public gumballMachine: GumballMachine) {}
  insertQuarter() {
    console.log(messages.already_inserted_quarter)
    throw new Error(messages.already_inserted_quarter)
  }
  ejectQuarter() {
    console.log('quarter returned')
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
  }
  turnCrank() {
    console.log('you turned')
    this.gumballMachine.setState(this.gumballMachine.getSoldState())
  }
  dispense() {
    console.log(messages.crank_not_turned)
    throw new Error(messages.crank_not_turned)
  }
}
