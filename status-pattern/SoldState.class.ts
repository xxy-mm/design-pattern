import type { GumballMachine } from './GumballMachine.class'
import type { State } from './State.interface'
import { messages } from './errors'

export class SoldState implements State {
  constructor(public gumballMachine: GumballMachine) {}
  insertQuarter() {
    console.log('selling, please wait...')
    throw new Error(messages.selling)
  }
  ejectQuarter() {
    console.log('already sold, can not refund')
    throw new Error(messages.selling)
  }
  turnCrank() {
    console.log('selling, you can not turn crank twice')
    throw new Error(messages.selling)
  }
  dispense() {
    this.gumballMachine.releaseBall()
    if (this.gumballMachine.getCount() > 0) {
      this.gumballMachine.setState(this.gumballMachine.getNoQuarterState())
    } else {
      console.log('Oops, out of gumballs!')

      this.gumballMachine.setState(this.gumballMachine.getSoldOutState())
    }
  }
}
