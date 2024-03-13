import type { Command } from './Command.interface'
import type { GarageDoor } from './GarageDoor.class'

export class GarageDoorOpenCommand implements Command {
  constructor(public garageDoor: GarageDoor) {}

  execute() {
    this.garageDoor.up()
  }

  undo() {
    this.garageDoor.down()
  }
}
