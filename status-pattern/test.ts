import { strict as assert } from 'node:assert'
import { beforeEach, describe, it } from 'node:test'
import { GumballMachine } from './GumballMachine.class'
import { HasQuarterState } from './HasQuarterState.class'
import { NoQuarterState } from './NoQuarterState.class'
import { SoldOutState } from './SoldOutState.class'
import { messages } from './errors'

describe('GumballMachine', (t) => {
  describe('init', () => {
    it('initiate with correct value when count is not 0', () => {
      const machine = new GumballMachine(1)
      assert.strictEqual(machine.getCount(), 1)
      assert(machine.getState() instanceof NoQuarterState)
    })
    it('initiate with correct value when count is 0 or not provided', () => {
      const machine = new GumballMachine()
      assert.strictEqual(machine.getCount(), 0)
      assert(machine.getState() instanceof SoldOutState)
    })
  })

  describe('SoldState', () => {
    let machine: GumballMachine
    beforeEach(() => {
      machine = new GumballMachine(1)
      machine.setState(machine.getSoldState())
    })
    it('throws selling error when insert quarter', () => {
      assert.throws(() => machine.insertQuarter(), {
        message: messages.selling,
      })
    })
    it('throws selling error when eject quarter', () => {
      assert.throws(() => machine.ejectQuarter(), {
        message: messages.selling,
      })
    })
    it('throws selling error when turn crank', () => {
      assert.throws(() => machine.turnCrank(), {
        message: messages.selling,
      })
    })
  })

  describe('SoldOutState', () => {
    let machine: GumballMachine
    beforeEach(() => {
      machine = new GumballMachine()
    })
    it('throws sold out error when insert quarter', () => {
      assert.throws(() => machine.insertQuarter(), {
        message: messages.sold_out,
      })
    })
    it('throws sold out error when eject quarter', () => {
      assert.throws(() => machine.ejectQuarter(), {
        message: messages.sold_out,
      })
    })
    it('throws sold out error when turn crank', () => {
      assert.throws(() => machine.turnCrank(), {
        message: messages.sold_out,
      })
    })
  })

  describe('NoQuarterState', () => {
    let machine: GumballMachine
    beforeEach(() => {
      machine = new GumballMachine(1)
    })
    it('throws no_quarter error when ejectQuarter', () => {
      assert.throws(() => machine.ejectQuarter(), {
        message: messages.no_quarter,
      })
    })
    it('throws no_quarter error when turn crank', () => {
      const count = machine.getCount()
      assert.throws(() => machine.turnCrank(), {
        message: messages.no_quarter,
      })
      assert.strictEqual(machine.getCount(), count)
    })

    it('changes to HasQuarterState when quarter inserted', () => {
      machine.insertQuarter()
      assert(machine.getState() instanceof HasQuarterState)
    })
  })

  describe('HasQuarterState', () => {
    let machine: GumballMachine
    beforeEach(() => {
      machine = new GumballMachine(1)
      machine.insertQuarter()
    })
    it('should in HasQuarterState', () => {
      assert(machine.getState() instanceof HasQuarterState)
    })

    it('throws error when insertQuarter', () => {
      assert.throws(() => machine.insertQuarter(), {
        message: messages.already_inserted_quarter,
      })
    })
    it('changes to NoQuarterState when ejectQuarter', () => {
      machine.ejectQuarter()
      assert(machine.getState() instanceof NoQuarterState)
    })
    it('changes to NoQuarterState when turn crank and the machine is not sold out', () => {
      machine.addGumballs(1)
      machine.turnCrank()
      // the machine's turn crank will call state.turnCrank and state.dispense in sequence
      assert(machine.getState() instanceof NoQuarterState)
    })
    it('changes to SoldOutState when turn crank and the machine is sold out', () => {
      machine.turnCrank()
      // the machine's turn crank will call state.turnCrank and state.dispense in sequence
      assert(machine.getState() instanceof SoldOutState)
    })
  })
})
