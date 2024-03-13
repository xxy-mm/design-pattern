# Command Pattern

## null object is a design pattern, too

```ts
class NoCommand implements Command {
  execute() {
    // do nothing
    // so we don't have to use if else
    // e.g: we can avoid following code
    //  if (command != null) {...}
  }
}
```
