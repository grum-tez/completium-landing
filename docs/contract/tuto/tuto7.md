---
id: tuto7
title: Assets
sidebar_label: 7. Assets
slug: /contract/tuto/archetype-assets
hide_title: true
---
import Link from '@docusaurus/Link';

## Assets

A collection of assets is a convenient way to store indexed records of data; it comes with a rich API to read and write data to:
* add, remove, update, addupdate
* head, tail, sort, select
* sum
* ...

A detailed presentation of the asset API is available <a href='https://archetype-lang.org/docs/asset' target='_blank'>here</a>.

In this exercise, a vehicle dealer manages his stock of rental cars on-chain for maximal transparency with customers and mechanical service suppliers:
* a car has a unique identifier, the *vin*, and is described with a color, the number of repairs and the last repair date.
* each time a car is repaired, the `repair` entry point is called to update the vehicle's repair data; it increments the number of repairs and updates the last date of repair.
* a mechanical service supplier is specialised in repainting cars which have been repaired at least once. A dedicated entry point `repaint_repaired` is designed.

```archetype {30,34,38-38} title="7-assets.arl"
archetype assets

enum Color =
| White
| Yellow
| Red
| Blue

asset vehicle {
   vin        : string;
   color      : Color = Yellow;
   nbrepairs  : nat   = 0;
   lastrepair : date  = now;
} initialized by {
  {"vin00"; White;  0; 2020-01-01};
  {"vin01"; Yellow; 0; 2020-01-01};
  {"vin02"; White;  0; 2020-01-01};
  {"vin03"; Red;    0; 2020-01-01};
  {"vin04"; Red;    0; 2020-01-01};
  {"vin05"; Yellow; 0; 2020-01-01};
  {"vin06"; White;  0; 2020-01-01};
  {"vin07"; Yellow; 0; 2020-01-01};
  {"vin08"; Yellow; 1; 2019-01-01};
  {"vin09"; Red;    3; 2019-04-01};
  {"vin10"; White;  2; 2019-03-01};
  {"vin11"; Yellow; 2; 2019-02-01}
}

entry add_vehicle (pvin : string) {
  vehicle.add({ vin = pvin })
}

entry repair (k : string) {
  vehicle.update(k, { nbrepairs += 1; lastrepair = now})
}

entry repaint_repaired (newc : Color) {
  vehicle.select(the.nbrepairs >= 1).update_all({ color := newc })
}
```

In the `add_vehicle` entry point, the only necessary data to create the new asset is the vin because all other data have a default value. If no default value was set, the following would be necessary to create a new asset:

```archetype
 vehicle.add({ pvin; pcolor; 0; now })
```

In the `repaint_repaired` entry point, all vehicles with a number of repairs above or equal to 1 are turned to `newc` color.

### Deploy

The following <Link to='/docs/cli'>Completium CLI</Link> command deploys the contract on the Tezos network:

```
completium-cli deploy 7-assets.arl
```

### Call entry point

The following command adds a vehicle:

```
completium-cli call 7-assets --entry add_vehicle --arg '{ "pvin" : "vin12" }'
```

The following command repairs vehicle with vin `vin05`:

```
completium-cli call 7-assets --entry repair --arg '{ "k" : "vin05" }'
```

Finally, repaint repaired vehicles in blue:

```
completium-cli call 7-assets --entry repaint_repaired --arg '{ "newc" : 3 }'
```

Enums are implemented with integer values starting from 0.

### Next

Open '8-1-contract_called.arl' and click on "Next: Call a Contract" below.
