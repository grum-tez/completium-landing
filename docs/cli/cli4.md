---
id: cli4
title: JS library
sidebar_label: JS library
slug: /cli/jslibrary
---
import Link from '@docusaurus/Link';

`$completium-cli` also comes as a Javascript library to implement test scenarios.

It provides a subset of commands as programming functions. The benefit is that you can use endpoints and accounts already configured with the CLI, which simplifies the writing of scenarios.

An example of test scenario is available <Link to='/docs/contract/test-scenario#example'>here</Link>.

## API

### `deploy` / `originate`

```js
const { deploy } = require('@completium/completium-cli')
```

Example:
```js
const [mycontract, op] = await deploy('./mycontract.arl', {
  as: 'admin',
  parameters: {
    n: 0,
    s: 'hello'
  }
});
```

`mycontract` is the contract object to call entrypoints (see below).<p/>
`op` is the operation object from which to retrieve operation costs for example.

The second argument object may have the following entries:

| Entry | JS type | Description |
| -- | -- | -- |
| `as` | `string` | Deploys with specified account. Default account is the one returned by command `completium-cli show account`. |
| `name` | `string` | Names deployed contract with specified logical name. Logical name is used to refer to contract when calling or displaying contract. |
| `parameters` | `object` | Specifies archetype parameter values (only with archetype contract) |
| `amount` | `string` | Amount of XTZ to sent when deploying contract.  |
| `metadata-storage`| `string` | Adds metadata to contract from json file (only with archetype contract). |
| `metadata-uri`| `string` | Adds metadata to contract from uri (only with archetype contract). |
| `init`| `string` | Overwrites contract initial storage with Michelson value. |
| `test` | `bool` | Generates entrypoint `_set_now` to set `now` value (only with archetype contract, to be used only on testnet) |

### `call`

Suppose the `escrow.arl` has several entrypoints among wich the `deposit` entrypoint.

```js
const { deploy } = require('@completium/completium-cli');
const [escrow, op] = await deploy('./escrow.arl');
const op = await escrow.deposit({ amount: '50tz', as: 'admin' });
```

The parameter object may have the following entries:

| Entry | JS type | Description |
| -- | -- | -- |
| `as` | `string` | Deploys with specified account. Default account is the one returned by command `completium-cli show account`. |
| `arg` | `object` | Specifies entrypoints parameter values (see example below). |
| `arg-michelson` | `string`| Specifies entrypoints parameter values in Michelson format. |
| `amount` | `string` | Amount of XTZ to sent when calling contract.  |

For example, if `mycontract.arl` defines a (non-unique) entry point `payback`:

```archetype
entry payback (i : int, n : nat) {
  // ...
}
```

The command to call the entry is:

```js
const { deploy, call } = require('@completium/completium-cli');
const [contract, op] = await deploy('./contract.arl');
const op = await contract.payback({ arg : { i : -5, n : 8 },  as: 'admin' });
```

This <Link to="/docs/cli/contract#argument">Argument</Link> section presents examples of values for each type.

### `transfer`

```js
const { transfer } = require('@completium/completium-cli')
```

Example:
```js
await transfer('alice', 'bob', '5tz');
```

### `getBalance`
```js
const { getBalance } = require('@completium/completium-cli')
```

Example:
```js
const balance_alice = await getBalance('alice');
console.log(balance_alice.toNumber());
```

`balance_alice` is a <Link to="https://www.npmjs.com/package/bignumber.js">big number</Link>.

### `getStorage`

```js
const { getStorage } = require('@completium/completium-cli')
```

Example:
```js
const storage = await getStorage('escrow');
```

### `getContract`

```js
const { getContract } = require('@completium/completium-cli')
```

Example:
```js
const escrow = await getContract('escrow');
```

### `setAccount`

```js
const { setAccount } = require('@completium/completium-cli')
```

Example:
```js
await setAccount('alice');
```

Set default account.

### `setEndpoint`
```js
const { setEndpoint } = require('@completium/completium-cli')
```

Example:
```js
await setEndpoint('https://testnet-tezos.giganode.io');
```

Set the endpoint rpc.
:::info
Note that endpoint must be registered in completium.
:::

### `getAddress`
```js
const { getAddress } = require('@completium/completium-cli')
```

Example:
```js
const pkh_alice = await getAddress('alice');
console.log(pkh_alice); // "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb"
const addr_escrow = await getAddress('escrow');
console.log(addr_escrow); // "KT1Tt4d4Hq2wA6ZAo54KrSXtHnKsPZArixu2"
```

### `getAccount`

Returns the account object from account alias or address. The account object has the following fields:
* `name` : account alias
* `pkh` : public key hash ("tz1...")
* `pubk` : public key ("edpk...")

```js
const { getAccount } = require('@completium/completium-cli')
```

Example:
```js
const alice = await getAccount('alice');
console.log(alice.name); // "alice"
console.log(alice.pkh); // "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb"
```

### `pack`

Packs simple literal values (int, string).

```js
const { pack } = require('@completium/completium-cli')
```

Example:
```js
  const valueInt = 42;
  const packedInt = pack(valueInt);
  console.log(packedInt); // "05002a"
  const valueString = "archetype";
  const packedString = pack(valueString);
  console.log(packedString); // "050100000009617263686574797065"
  const valueByte = "0x01abff";
  const packedByte = pack(valueByte);
  console.log(packedByte); // "050a0000000301abff"
```

Returns a string which represents the packed value.

### `packTyped`

Packs Micheline JSON object. The object's Michelson JSON type is required as second argument.

```js
const { packTyped } = require('@completium/completium-cli')
```

Example:
```js
  const value = {"int": 42};
  const type = {"prim": "int"};
  const packedValue = packTyped(value, type);
  console.log(packedValue); // "05002a"
```

Returns a string, which represents the packed value from michelson objects.

### `blake2b`
```js
const { blake2b } = require('@completium/completium-cli')
```

Example:
```js
  const value = "archetype";
  const packed = pack(value);
  const hash = blake2b(packed);
  console.log(hash); // "7835e68df26e5f2c75a13fb03dd9a84a1d1f88729d4e26259793d1071a450168"
```
Returns a string.

### `keccak`
```js
const { keccak } = require('@completium/completium-cli')
```

Example:
```js
  const value = "archetype";
  const packed = pack(value);
  const hash = keccak(packed);
  console.log(hash); // "3350e998289574faa196b4677e8f77fc74d67937e9059b987f69b542ef6587a0"
```
Returns a string.

### `sign`

Signs packed data. Returns an object with the following fields:
* `bytes`
* `sig`
* `prefixSig`
* `sbytes`

see [here](https://tezostaquito.io/docs/signing/)

```js
const { sign } = require('@completium/completium-cli')
```

Example:
```js
  const packed = packTyped(data, datatype);
  const signed = await sign(packed, { as: myaccounttz1 });
  console.log(signed.prefixSig); // prints "edsig..."
```

### `exprMichelineToJson`

Converts Micheline expression to JSON object.

```js
const { exprMichelineToJson } = require('@completium/completium-cli')
```

Example:
```js
  const a = exprMichelineToJson('(Pair 0 "archetype")');
  console.log(JSON.stringify(a)) // {"prim":"Pair","args":[{"int":"0"},{"string":"archetype"}]}
```

### `jsonMichelineToExpr`

Converts Micheline JSON object to Micheline expression.

```js
const { jsonMichelineToExpr } = require('@completium/completium-cli')
```

Example:
```js
  const b = jsonMichelineToExpr({prim:"Pair",args:[{int:"0"},{string:"archetype"}]});
  console.log(b); // '(Pair 0 "archetype")'
```

### `setQuiet`

Expects boolean to turn on or off information traces.

```js
setQuiet = require('@completium/completium-cli')
```

### `checkBalanceDelta`

Checks the delta of an account's balance. Arguments are:
* account address
* expected balance delta (balance after - balance before)
* operation(s)

Throws exception if actual delta is different from expected delta.

```js
const { checkBalanceDelta } = require('@completium/completium-cli')
```

Example:
```js
  await checkBalanceDelta(account.pkh, -50, async () => {
    // call contract
  })
```

It is possible to pass an explicit function to decide:
```js
  await checkBalanceDelta(account.pkh, d => { return (d == -50) }, async () => {
    // call contract
  })
```

### `getValueFromBigMap`

```js
const { getValueFromBigMap } = require('@completium/completium-cli')
```

Example:
```js
  const tbm = await getContract('test_big_map');
  const storage = await tbm.getStorage();
  const res = await getValueFromBigMap(storage, {"string" : "archetype"}, {prim : "string"});
  console.log(JSON.stringify(res)); // {"int":"123"}
```

```archetype
archetype test_big_map

variable n : big_map<string, nat> = [("archetype", 123)]

entry empty () {
  ()
}
```

### `expectToThrow`

Throws an exception if the argument operation does not throw an exception

```js
const { expectToThrow } = require('@completium/completium-cli')
```

```js
  await expectToThrow( async () => {
    // execute something
  })
```

Example:

In mockup mode, it is possible to check the error message: for example the following expects the call to fail with "InvalidCaller":
```js
  await expectToThrow( async () => {
    // execute something
  }, '"InvalidCaller"')
```

### `setMockupNow`

In [mockup mode](network#mockup), it is possible to set the value of the [`now`](https://docs.archetype-lang.org/archetype-language/dates-durations#now) contract constant with `setMockupNow`.

For example:

```javascript
const now = Date.now() / 1000
setMockupNow(now)
```

:::warning
Do not forget to divide `Date.now()` by `1000` to work with timestamps in *seconds*.
:::

### `runGetter`

Calls [TZIP4-view](https://tzip.tezosagora.org/proposal/tzip-4/#view-entrypoints) (aka. Archetype `getter`).

For example, consider the following *getter*:
```archetype
getter get_count(k : address) : nat {
  return (if count.contains(k) then count[k] else 0)
}
```

Call `get_count` with `runGetter`:

```js
const count = await runGetter("get_count", c, { argMichelson: `"${$pkh}"`, as : pkh})
console.log(count.int)
```
where:
* `c` is the completium contract object providing the TZIP4-view/getter
* `pkh` is the address calling the entrypoint `get_count`

Returns Micheline (Michelson JSON) object.


## Accessing Archetype assets

[Archetype](https://archetype-lang.org/) provides a neat way to manage collections of [assets](https://docs.archetype-lang.org/archetype-language/data-model#asset) with a rich API. For example the following declaration creates a collection of `car` records in the contract.

```archetype
asset car identified by vin {
  vin    : string;
  color  : Color;
  year   : nat;
  model  : string;
  manufacturer : string
}
```

### `get`

In a JS test script, the `get` method is used to retrieve a data from its key.

In the `car` asset example:

```javascript
let storage = await mycontract.getStorage()
let mycar = storage.car.get("1G1AF1F57A7192174")
console.log(Json.stringify(0, null, 2))
```

An example output would be:
```json
{
  "color": "0",
  "year": "2018",
  "model": "Zoe",
  "manufacturer": "Renault"
}
```

:::info
When dealing with big maps, use the dedicated [getValueFromBigMap](jslibrary#getvaluefrombigmap) function.
:::


### `forEach`

The `forEach` method is used to iterate over an asset collection.

In the `car` asset example:

```javascript
let storage = await mycontract.getStorage()
storage.car.forEach((value, key) => {
  console.log(`The value of the key ${key} is:\n${JSON.stringify(value, null, 2)}.\n`)
});
```

An example output:
```
The value of the key 1G1AF1F57A7192174 is:
{
  "color": "0",
  "year": "2018",
  "model": "Zoe",
  "manufacturer": "Renault"
}
The value of the key 47121G1AF1F57A719 is:
{
  "color": "1",
  "year": "2020",
  "model": "e-208",
  "manufacturer": "Peugeot"
}
```