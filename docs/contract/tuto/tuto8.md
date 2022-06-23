---
id: tuto8
title: Call another Contract
sidebar_label: 8. Call a contract
slug: /contract/tuto/archetype-callcontr
hide_title: true
---
import DappFigure from '../../DappFigure';
import Link from '@docusaurus/Link';

## Call a contract

Archetype provides a high-level instruction to call another contract.

```archetype title="8-1-contract_called.arl"
archetype contract_called

variable n : nat = 0

entry set_n(p : nat) {
  n := p
}
```

The *caller* contract uses the `transfer` instruction to call the `get_n` entry point. The address of the called contract is passed as parameter:

```archetype {10} title="8-2-contract_caller.arl"
archetype contract_caller

variable r : nat = 42

entry set_n(addr : address) {
  transfer 0tz to addr call set_n<nat>(r)
}
```

A detailed presentation of the `transfer` instruction may be found <a href='https://archetype-lang.org/docs/reference/instructions/operation#transfer' target='_blank'>here</a>.

### Deploy

The following <Link to='/docs/cli'>Completium CLI</Link> commands deploy the contract on the Tezos network:

```
completium-cli deploy 8-1-contract_called.arl
```

```
completium-cli deploy 8-2-contract_caller.arl
```

### Call caller's entry point

The following command calls the unique entry point:

```
completium-cli call 8-2-contract_caller --entry set_n --arg "{\"addr\": \"`completium-cli show address 8-1-contract_called`\"}"
```

### Check called contract's storage

Check that called contract storage is now `42`:

```
completium-cli show storage 8-1-contract_called
```