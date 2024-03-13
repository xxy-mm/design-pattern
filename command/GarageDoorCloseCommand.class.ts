import type { Command } from './Command.interface'
import type { GarageDoor } from './GarageDoor.class'

export class GarageDoorCloseCommand implements Command {
  constructor(public garageDoor: GarageDoor) {}

  execute() {
    this.garageDoor.down()
  }
  undo() {
    this.garageDoor.up()
  }
}
