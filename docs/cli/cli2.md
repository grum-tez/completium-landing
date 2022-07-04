---
id: cli2
title: Account
sidebar_label: Account
slug: /cli/account
---
import Link from '@docusaurus/Link';

Interacting with a contract requires a Tezos account to sign the transactions. An account is identified by an account address starting by `tz1`, like for example `tz1h4CiqWxNe4UxSpkwXy617RM6DaK6NU76P`.

`$completium-cli` provides a convenient account management system to register, list and switch account. Each account is associated with an alias.

## Import account

### Faucet

When working with the test network, you need *fake* currencies to interact and test the contracts. There exists a [faucet](/docs/dapp-tools/faucet#create-a-test-account) from which you can download a faucet file to generate a test account from.

<DappButton url="https://faucet.tzalpha.net/" txt="open faucet"/>

Once the faucet file (a `.json` file) downloaded, the following command generates the account from it:

```bash
completium-cli import faucet <FAUCET_FILE> as <ACCOUNT_ALIAS>
```

### Private key

```bash
completium-cli import privatekey <PRIVATE_KEY> as <ACCOUNT_ALIAS>
```

## Generate account

```bash
completium-cli generate account as <ACCOUNT_ALIAS> [--force]
```

## Show current account

The following command displays the account `$completium-cli` is currently using:

```
completium-cli show account
```

## Switch account

```
completium-cli switch account
```

## Set account

```
completium-cli set account <ACCOUNT_ALIAS>
```

## Transfer

The following command transfers tez from one account to another:

```
completium-cli transfer <AMOUNT>(tz|utz) from <ACCOUNT_ALIAS> to <ACCOUNT_ALIAS|ACCOUNT_ADDRESS>
```

For example:

```bash
$ completium-cli transfer 5.2tz from bob to alice
```

## Remove account

```
completium-cli remove account <ACCOUNT_ALIAS>
```