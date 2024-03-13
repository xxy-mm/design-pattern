import type { Command } from './Command.interface'
import { NoCommand } from './NoCommand.class'

export class RemoteControl {
  onCommands: Command[] = []
  offCommands: Command[] = []
  undoCommands: Command[] = []

  public constructor(public commandsLimit = 10, public undoLimit = 10) {
    for (let i = 0; i < commandsLimit; i++) {
      this.onCommands.push(new NoCommand())
      this.offCommands.push(new NoCommand())
    }
  }
  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand
    this.offCommands[slot] = offCommand
  }

  pressOnButton(slot: number) {
    this.onCommands[slot].execute()
    this.addUndoCommands(this.onCommands[slot])
  }

  pressOffButton(slot: number) {
    this.offCommands[slot].execute()
    this.addUndoCommands(this.offCommands[slot])
  }

  pressUndoButton() {
    this.undoCommands.pop()?.undo()
  }

  private addUndoCommands(command: Command) {
    this.undoCommands.push(command)
    if (this.undoCommands.length > this.undoLimit) {
      this.undoCommands = this.undoCommands.slice(-this.undoLimit)
    }
  }
}
