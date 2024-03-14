import { HasQuarterState } from './HasQuarterState.class'
import { NoQuarterState } from './NoQuarterState.class'
import { SoldOutState } from './SoldOutState.class'
import { SoldState } from './SoldState.class'
import type { State } from './State.interface'

export class GumballMachine {
  soldOutState: State
  soldState: State
  noQuarterState: State
  hasQuarterState: State

  private state: State
  private count = 0

  constructor(count?: number) {
    this.soldOutState = new SoldOutState(this)
    this.soldState = new SoldState(this)
    this.noQuarterState = new NoQuarterState(this)
    this.hasQuarterState = new HasQuarterState(this)
    if (count && count > 0) {
      this.state = this.noQuarterState
      this.count = count
    } else {
      this.state = this.soldOutState
    }
  }

  insertQuarter() {
    this.state.insertQuarter()
  }

  ejectQuarter() {
    this.state.ejectQuarter()
  }

  turnCrank() {
    this.state.turnCrank()
    this.state.dispense()
  }

  releaseBall() {
    console.log('A gumball com rolling out the slot...')
    if (this.count !== 0) {
      this.count -= 1
    }
  }

  getState() {
    return this.state
  }
  setState(state: State) {
    this.state = state
  }

  getSoldOutState(): State {
    return this.soldOutState
  }

  getSoldState(): State {
    return this.soldState
  }

  getNoQuarterState(): State {
    return this.noQuarterState
  }

  getHasQuarterState(): State {
    return this.hasQuarterState
  }

  public getCount(): number {
    return this.count
  }

  public addGumballs(count: number) {
    this.count += count
  }
}
