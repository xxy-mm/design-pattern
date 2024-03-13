import type { Command } from './Command.interface'

export class NoCommand implements Command {
  execute() {
    // do nothing
  }
  undo() {
    // do nothing
  }
}
