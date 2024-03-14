import type { GumballMachine } from './GumballMachine.class'
import type { State } from './State.interface'
import { messages } from './errors'

export class NoQuarterState implements State {
  constructor(public gumballMachine: GumballMachine) {}
  insertQuarter() {
    console.log('you inserted a quarter')
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState())
  }
  ejectQuarter() {
    console.log(messages.no_quarter)
    throw new Error(messages.no_quarter)
  }
  turnCrank() {
    console.log('you turned, but there is no quarter')
    throw new Error(messages.no_quarter)
  }
  dispense() {
    console.log('you need pay first')
    throw new Error(messages.no_quarter)
  }
}
