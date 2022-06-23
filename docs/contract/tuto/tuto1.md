---
id: tuto1
title: Hello Tezos world
sidebar_label: 1. Hello Tezos world
slug: /contract/tuto/archetype-hello
hide_title: true
---
import Link from '@docusaurus/Link';


## Welcome!

In this first exercise, the storage is a single string value, initialised to `""`; the unique entry point is called to set the value:

```archetype {6} title="1-hello.arl"
archetype hello

variable str : string = ""

entry main () {
  str := "Hello Tezos world!"
}
```

:::info
Do not forget to save the file with Ctrl+s (or Cmd+s)
:::

Use the `:=` operator to assign value to storage variable.

### Deploy

Change directory to the `tutorial` directory:

```
cd tutorial
```

The following <Link to='/docs/cli'>Completium CLI</Link> command deploys the contract (in [mockup](https://completium.com/docs/cli/network#mockup) mode here):

```
completium-cli deploy 1-hello.arl
```

### Check storage

Check that storage is an *empty string* (initial value of `str` value)

```
completium-cli show storage 1-hello
```

### Call entry point

Call the entry point `main`:

```
completium-cli call 1-hello --entry main
```

### View contract

Check that storage is now `"Hello Tezos world!"`

```
completium-cli show storage 1-hello
```

### Next

Click "Next: Executions conditions" below.