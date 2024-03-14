export class GumballMachine {
  private state = GumballMachineState.SOLD_OUT
  private count = 0
  constructor()
  constructor(count: number)
  constructor(count?: number) {
    if (count && count > 0) {
      this.state = GumballMachineState.NO_QUARTER
      this.count = count
    }
  }

  insertQuarter() {
    switch (this.state) {
      case GumballMachineState.HAS_QUARTER:
        console.log('already has quarter')
        break
      case GumballMachineState.SOLD:
        console.log('please wait, we are already giving you a gumball')
        break
      case GumballMachineState.SOLD_OUT:
        console.log('you can not insert quarter, the machine is sold out')
        break
      case GumballMachineState.NO_QUARTER:
        console.log('you insert a quarter')

        this.state = GumballMachineState.HAS_QUARTER
      default:
        break
    }
  }

  ejectQuarter() {
    switch (this.state) {
      case GumballMachineState.HAS_QUARTER:
        console.log('Quarter returned')
        this.state = GumballMachineState.NO_QUARTER
        break
      case GumballMachineState.NO_QUARTER:
        console.log('no quarter to eject')
        break
      case GumballMachineState.SOLD:
        console.log('already sold, can not refund')
        break
      case GumballMachineState.SOLD_OUT:
        console.log('sold out')
        break
      default:
        break
    }
  }

  turnCrank() {
    switch (this.state) {
      case GumballMachineState.HAS_QUARTER:
        console.log('you turned...')
        this.state = GumballMachineState.SOLD
        this.dispense()
        break
      case GumballMachineState.NO_QUARTER:
        console.log('insertQuarter first')
        break
      case GumballMachineState.SOLD:
        console.log('already sold, please wait')
        break
      case GumballMachineState.SOLD_OUT:
        console.log('sold out')
        break
      default:
        break
    }
  }
  dispense() {
    switch (this.state) {
      case GumballMachineState.SOLD:
        console.log('dispense gumball')

        this.count -= 1
        this.state =
          this.count > 0
            ? GumballMachineState.NO_QUARTER
            : GumballMachineState.SOLD_OUT
        break

      default:
        console.log('can not dispense, current state: ', this.state)
        break
    }
  }

  toString() {
    return 123
  }
}

export enum GumballMachineState {
  SOLD_OUT = 'sold out',
  NO_QUARTER = 'no quarter',
  HAS_QUARTER = 'has quarter',
  SOLD = 'sold',
}
