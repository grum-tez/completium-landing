---
id: tuto6
title: State Machine
sidebar_label: 6. State Machine
slug: /dapp-tools/tutorials/archetype-statem
---

import DappFigure from '../../DappFigure';
import Link from '@docusaurus/Link';

It is possible to design the smart contract as a state machine which is convenient for ease of read.

## Code

In this example, the machine has 4 states and 3 transitions as illustrated in the shcema below:

<DappFigure img='tuto_statem.svg' width='60%'/>

Transitions have conditions:
* goes in InProgress state if balance is greater than 3tz
* complete if internal `value` is strictly greater than 1 (requires calls to `inc_value`)

```archetype
archetype state_machine

states =
| Created initial
| InProgress
| Interrupted
| Completed

variable value : nat = 0

entry inc_value () {
  value += 1
}

transition init () {
  from Created to InProgress
  when { transferred > 3tz }
  with effect { () /* nothing */}
}

transition complete () {
  from InProgress to Completed
  when { value > 1 }
  with effect { transfer balance to caller }
}

transition interrupt () {
  from InProgress to Interrupted
  with effect { transfer (50% * balance) to caller }
}
```

Each transition is a contract entry point.

## Deploy

The following <Link to='/docs/dapp-tools/completium-cli'>Completium CLI</Link> command deploys the contract on the Tezos network:

```
completium-cli deploy 6-state_machine.arl
```

## Call entry points

The goal here is to set the state machines to `Completed` state. Use the following commands to transit the machine:

```
completium-cli call 6-state_machine.arl
```


```
completium-cli call 6-state_machine.arl
```


```
completium-cli call 6-state_machine.arl
```