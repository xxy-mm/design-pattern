import type { GumballMachine } from './GumballMachine.class'
import type { State } from './State.interface'
import { messages } from './errors'

export class SoldOutState implements State {
  constructor(public gumballMachine: GumballMachine) {}
  insertQuarter() {
    console.log('the machine is sold out')
    throw new Error(messages.sold_out)
  }
  ejectQuarter() {
    console.log('sold out, you have not inserted a quarter')
    throw new Error(messages.sold_out)
  }
  turnCrank() {
    console.log('you turned, but the machine is sold out')
    throw new Error(messages.sold_out)
  }
  dispense() {
    console.log('can not dispense, sold out')
    throw new Error(messages.sold_out)
  }
}
