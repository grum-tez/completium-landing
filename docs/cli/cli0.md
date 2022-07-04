---
id: cli0
title: Getting Started
sidebar_label: Getting Started
slug: /cli
hide_title: true
---
import DappButton from '../DappButton';
import DappFigure from '../DappFigure';
import Link from '@docusaurus/Link';

<DappFigure img='cli.svg' width='30%'/>

`$completium-cli` is a command line interface to interact (orginate, call, ...) with smart contracts on the <Link to='/docs/dapp-tools/tezos'>Tezos</Link> blockchain.

The list of available commands is displayed with:

```bash
completium-cli help
```

## Install

It is distributed as a npm [package](https://www.npmjs.com/package/@completium/completium-cli). Install it with the following command:

```bash
npm i @completium/completium-cli -g
```

Once installed, run the `init` command:

```bash
completium-cli init
```

:::info
Run `completium-cli init` every time a new version of Completium CLI is installed.
:::




