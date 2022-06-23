---
id: template11
title: Escrow
sidebar_label: Escrow
slug: /templates/escrow
---
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introduction

The escrow smart contract establishes a decentralized purchase process between the seller and buyer. The principle is that the price amount is escrowed in the smart contract and released when the purchased item is received by buyer.

The critical point of the process is that it requires actions from the buyer and the seller to complete the process:
* if the seller does not send the item, buyer's fund are locked in the escrow
* if the buyer does not complete the process, even if the item is received, then the seller does not reveive payment

In order to motivate both the seller and the buyer to execute the process, the basic idea is that they fund the escrow with *security deposits* that are transferred back only if the process is complete. In the escrow presented here, security deposits are a proportion of the price of the item.

## API

### Storage

| Name | Type | Description |
| -- | -- | -- |
| `seller` | `address` | Seller's address. |
| `buyer` | `address` | Buyer's address. |
| `taxcollecter` | `address` | Tax collector's address. |
| `price` | `tez` | Amount of transaction. |
| `taxrate` | `rational`| Tax rate applied to `price` |
| `securityrate` | `rational` | Security rate applied to `price` for security deposit. |
| `_state` | `states` | Escrow state, one of `Create`, `Aborted`, `Funded`, `Completed` |
### Entrypoints

| Name | Parameters | Description |
| -- | -- | -- |
| `abort` | | `buyer` and `seller` can abort escrow in `Created` state. |
| `buyer_fund` | | Called by `buyer` to provide transfer price, security deposit and taxes |
| `seller_fund` | | Called by `seller` to provide transfer security deposit. |
| `complete` | | Called by `buyer` when purchased item is received. This transfers:<ul><li>item price and security deposit to `seller`</li><li>security deposit to `buyer`</li><li>tax to `taxcollector`</li></ul> |

## Code

<Tabs
  defaultValue="archetype"
  values={[
    { label: 'Archetype', value: 'archetype', },
    { label: 'Michelson', value: 'michelson', },
  ]}>

<TabItem value="archetype">

```archetype title="escrow.arl"
archetype escrow(
  seller       : address,
  buyer        : address,
  taxcollector : address,
  price        : tez,
  taxrate      : rational,
  securityrate : rational,
)

/* states */
states =
 | Aborted
 | BuyerFundRequired initial
 | SellerFundRequired
 | Funded
 | Completed

transition abort () {
  called by buyer or seller
  from BuyerFundRequired to Aborted
}

transition buyer_fund () {
  called by buyer
  require {
    r1: transferred >= (1 + taxrate + securityrate) * price otherwise "NOT_ENOUGH_FUND"
  }
  from BuyerFundRequired to SellerFundRequired
}

transition seller_fund () {
  called by seller
  require {
    r2: transferred >= securityrate * price otherwise "NOT_ENOUGH_FUND"
  }
  from SellerFundRequired to Funded
}

transition complete () {
  called by buyer
  from Funded to Completed
  with effect {
    transfer ((1 + securityrate) * price) to seller;
    transfer (securityrate * price)       to buyer;
    if taxrate > 0 then
      transfer (taxrate * price)          to taxcollector;
  }
}
```

</TabItem>

</Tabs>