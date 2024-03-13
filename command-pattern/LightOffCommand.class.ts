import type { Command } from './Command.interface'
import type { Light } from './Light.class'

export class LightOffCommand implements Command {
  constructor(public light: Light) {}

  execute() {
    this.light.off()
  }

  undo() {
    this.light.on()
  }
}
