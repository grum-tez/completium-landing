---
id: template3
title: FA 2
sidebar_label: FA 2
slug: /templates/nft
---
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

This contract follows the Financial Asset 2 (FA 2) <a href='https://gitlab.com/tzip/tzip/-/blob/master/proposals/tzip-12/tzip-12.md'>TZIP 12</a> specification for non-fungible token on Tezos.

:::info
The version presented below is a simple minimal version. A full-featured version (with mint, burn, feeless transfer, royalties, ...) is available [here](https://archetype-lang.org/docs/templates/fa2).
:::

## API

FA 2 introduces the concept of *operator*, which is an account that can transfer a token on behalf of the owner. The delegation is done by the owner with the `update_operators` entrypoint.

### Storage

| Name | Type | Description |
| -- | -- | -- |
| `token` | `collection` | Token data, like price. |
| `ledger` | `collection` | Association between token id and its owner. |
| `operator` | `collection` | Delegation data: which operator can transfer which token owned by which owner? |
| `token_metadata` | `collection` | Token metadata. |

### Entrypoints

| Name | Parameters | Description  |
| -- | -- | -- |
| `update_operators` | `upl` | `upl` is a list of delegation data (named `operator_param` with token, owner and operator), either to add or remove an operator to a token and owner. It fails if the *caller* is not the declared owner in `upl`.  |
| `transfer` | `txs` | Transfers token ownerships specified in `txs`, a list of `transfer_param` (from, to, token). If *caller* is not the token owner, it must be declared in `operator` to be able to transfer, otherwise it fails. |
| `balance_of` | `requests` | Returns the list a token balance for each token id in `requests`. |

## Originate


Deploy the contract from <a href='https://archetype-lang.org/'>Archetype</a> code below with the following <Link to='/docs/cli'>Completium CLI</Link> example command:

```
completium-cli deploy nft.arl
```

## Code

<Tabs
  defaultValue="archetype"
  values={[
    { label: 'Archetype', value: 'archetype', },
  ]}>

<TabItem value="archetype">

```archetype nft
archetype fa2_basic

asset ledger identified by ltoken to big_map {
  ltoken     : nat;
  lowner     : address;
}

asset operator identified by oaddr otoken oowner {
  oaddr       : address;
  otoken      : nat;
  oowner      : address;
}

record operator_param {
  opp_owner    : address;
  opp_operator : address;
  opp_token_id : nat
} as ((owner, (operator, token_id)))

record operator_param {
  opp_owner    : address;
  opp_operator : address;
  opp_token_id : nat
} as ((owner, (operator, token_id)))

enum update_op =
| add_operator<operator_param>
| remove_operator<operator_param>

entry update_operators (upl : list<update_op>) {
  require { fa2_r1 : is_not_paused() }
  effect {
    for up in upl do
      match up with
      | add_operator(param) ->
        do_require(param.opp_owner = caller , CALLER_NOT_OWNER);
        operator.put({ param.opp_operator; param.opp_token_id; param.opp_owner })
      | remove_operator(param) ->
        do_require(param.opp_owner = caller , CALLER_NOT_OWNER);
        operator.remove((param.opp_operator, param.opp_token_id, param.opp_owner))
      end;
    done;
  }
}

record transfer_destination {
  to_dest           : address;
  token_id_dest     : nat;
  token_amount_dest : nat
} as ((to_, (token_id, amount)))

record transfer_item {
  from_: address;
  txs: list<transfer_destination>;
}

entry %transfer (itxs : list<transfer_item>) {
  for tx in itxs do
    for td in tx.txs do begin
      if caller <> tx.from_ then begin
        (* check operator *)
        do_require(operator.contains((caller,td.token_id_dest,tx.from_)),"FA2_NOT_OPERATOR");
      end;
      (* set token ownership *)
      ledger.add_update(td.token_id_dest,{ lowner = td.to_dest });
    end done;
  done
}

record balance_of_request {
  bo_owner : address;
  btoken_id : nat;
} as ((owner, token_id))

record balance_of_response {
  request : balance_of_request;
  balance_ : nat;
} as ((request, balance))

getter balance_of (requests : list<balance_of_request>) : list<balance_of_response> {
  return map(requests, br -> {
    request = br;
    balance_ = (ledger[br.btoken_id] ? (the.lowner = br.bo_owner ? 1 : 0) : 0)
  })
}
```

</TabItem>

</Tabs>