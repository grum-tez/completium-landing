---
id: nonfungible6
title: Contract Origination
sidebar_label: Contract Origination
slug: /dapp-nonfungible/origination
---

import DappButton from '../DappButton';
import DappFigure from '../DappFigure';
import Link from '@docusaurus/Link';

The smart contract is written in <a href='https://archetype-lang.org/'>Archetype</a> language. Go to the <Link to="">Smart contract</Link> section for a detailed presentation.

In VSCode, open the <Link to="/docs/dapp-tools/gitpod#open-terminal">terminal</Link> and enter the following command line to originate (deploy) the smart contract is:

```bash
completium-cli deploy ./contract/nonfungible.arl --named nonfungible
```

The <Link to="/docs/cli/contract#deploy--originate">originate command</Link> triggers two operations:
* the contract compilation to Michelson with archetype compiler
* the Michelson contract origination with Tezos client

The contract may then be referred to as `nonfungible` in future interactions.

If you are using the preset <Link to="/docs/dapp-tools/gitpod">Gitpod</Link> environement, note that <Link to="/docs/cli">completium-cli</Link> is pre-installed with the <Link to="/docs/dapp-tools/faucet#admin-account">admin</Link> account. See this section for more information.

The address of the newly originated contract is visible with this command:

```bash
completium-cli show contract nonfungible
```

A smart contract address starts with `KT1`. In the situation above, the new contract's address is `KT1Hefg7wL4dfW3PGFQCN9B7CnBycLZm6utp`.

You may got to <Link to="/docs/dapp-tools/bcd">Better call dev</Link> contract explorer to check it:

<DappButton url="https://better-call.dev/" txt="go to better call dev"/>

The new contract address needs to be set in the DApp's `src/settings.js` file, like for example:

```js
export const contractAddress = "KT1Hefg7wL4dfW3PGFQCN9B7CnBycLZm6utp"
```
