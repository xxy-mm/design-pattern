import { GarageDoor } from './GarageDoor.class'
import { GarageDoorCloseCommand } from './GarageDoorCloseCommand.class'
import { GarageDoorOpenCommand } from './GarageDoorOpenCommand.class'
import { Light } from './Light.class'
import { LightOffCommand } from './LightOffCommand.class'
import { LightOnCommand } from './LightOnCommand.class'
import { RemoteControl } from './RemoteControl.class'

const remoteControl = new RemoteControl()

const light = new Light()
const garageDoor = new GarageDoor()

const lightOnCommand = new LightOnCommand(light)
const lightOffCommand = new LightOffCommand(light)
const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor)
const garageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor)

remoteControl.setCommand(1, lightOnCommand, lightOffCommand)
remoteControl.setCommand(2, garageDoorOpenCommand, garageDoorCloseCommand)

remoteControl.pressOnButton(1)
remoteControl.pressOffButton(1)

remoteControl.pressOnButton(2)
remoteControl.pressOffButton(2)

remoteControl.pressUndoButton()
remoteControl.pressUndoButton()
remoteControl.pressUndoButton()
remoteControl.pressUndoButton()
remoteControl.pressUndoButton()
