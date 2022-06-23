---
id: contract2
title: Programming language
sidebar_label: Programming language
slug: /contract/programming-language
hide_title: true
---
import DappFigure from '../DappFigure';
import DappButton from '../DappButton';
import Link from '@docusaurus/Link';

## Michelson

Michelson is the default language to write smart contracts on the <Link to='/docs/dapp-tools/tezos'>Tezos</Link> blockchain. You can find the language reference <a href='https://tezos.gitlab.io/michelson-reference/'>here</a>.

Michelson is a <a href='https://en.wikipedia.org/wiki/Stack_machine#:~:text=In%20computer%20science%2C%20computer%20engineering,buffer%2C%20known%20as%20a%20stack%2C' target='_blank'>stack machine</a> language. Here is an example of a Michelson contract deployed on the mainnet:

```css
parameter (pair (option %admin (list address))
                (pair (string %oldhash) (string %newhash)));
storage (pair (list %admin address) (string %hash));
code { { UNPAIR ;
         UNPAIR ;
         DIP { UNPAIR @oldhash @newhash } ;
         DIP { DIP { DIP { UNPAIR @storedadmin @storedhash } } } } ;
       SWAP ;
       { DIP { DIP { DIP { SWAP } } } } ;
       { DIP { DIP { SWAP } } } ;
       DIP { SWAP } ;
       { DIP { DIP { DIP { SWAP } } } } ;
       { DIP { DIP { SWAP ; DUP ; DIP { SWAP } } } } ;
       ASSERT_CMPEQ ;
       SENDER ;
       SWAP ;
       { DIP { DIP { PUSH @admin bool False } } } ;
       ITER { DIP { DUP } ; CMPEQ ; SWAP ; DIP { OR @admin } } ;
       DROP ;
       ASSERT ;
       IF_NONE {} { DIP { DROP } } ;
       NIL operation ;
       { DIP { PAIR %admin %hash } ; PAIR %op } }
```

The contract is available at the address [KT1Gbu1Gm2U47Pmq9VP7ZMy3ZLKecodquAh4](https://better-call.dev/mainnet/KT1Gbu1Gm2U47Pmq9VP7ZMy3ZLKecodquAh4/code)

## Register languages

A smart contract is a public object. As such it is required to convey confidence in the business process it implements. It is then suggested to use register languages which make the code easier to read, write and <Link to='/docs/dapp-tools/tezos#formal-verification'>verify</Link>.

Several register languages are available and listed <a href='https://tezos.com/developer-portal/#2-write-a-smart-contract'>here</a>. They compile contracts to Michelson.


