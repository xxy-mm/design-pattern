import type { Command } from './Command.interface'
import type { Light } from './Light.class'

export class LightOnCommand implements Command {
  constructor(public light: Light) {}

  execute() {
    this.light.on()
  }

  undo() {
    this.light.off()
  }
}
