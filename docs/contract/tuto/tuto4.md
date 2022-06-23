---
id: tuto4
title: Dates and durations
sidebar_label: 4. Dates & Durations
slug: /contract/tuto/archetype-datedur
hide_title: true
---
import Link from '@docusaurus/Link';

## Dates & durations

The `date` and `duration` types are convenient to establish time related business logic.


The call to the entry point succeeds if the contract was created more than 5 minutes and 10 seconds ago; the contract balance must be transferred to caller:

```archetype {7} title="4-time_window.arl"
archetype time_window(const creation_date : date)

variable creation : date = creation_date

entry payback_after_period () {
  require {
      r1: now > creation + 5m10s
  }
  effect {
      transfer balance to caller
  }
}
```

We note that durations may be added or subtracted to dates, and can be compared.

There are several ways to initialize dates and durations:

```archetype
var d : duration = 3w8d4h34m18s; (* 3 weeks 8 days 4 hours 34 minutes 18 seconds *)
var date0 : date = 2019-01-01;                /* iso 8601 */
var date1 : date = 2019-01-01T01:02:03;       /* iso 8601 */
var date2 : date = 2019-01-01T01:02:03Z;      /* iso 8601 */
var date3 : date = 2019-01-01T00:00:00+01:00; /* iso 8601 */
var date4 : date = 2019-01-01T00:00:00-05:30; /* iso 8601 */
```


### Deploy

The following <Link to='/docs/cli'>Completium CLI</Link> command deploys the contract on the Tezos network:

```bash
completium-cli deploy 4-time_window.arl --amount 5tz --parameters "{ \"creation_date\" : \"``date +%s`\" }"
```

Note here that the contract's balance is intialized to 5tz.

### Call entry point

The following command calls the unique entry point:

```
completium-cli call 4-time_window --entry payback_after_period
```

If you try this command before valid timelapse of 5 minutes and 10 seconds, it returns an error displayed below:

```bash
$ completium-cli call 4-time_window --entry payback_after_period
Error from contract KT1HEH4Hff6Dq53PsoaX18wnkx1bVaPKnZGH (4-time_window):
failed at 41 with (Pair "INVALID_CONDITION" "r1")
```
### Next

Open '5-weekday.arl' and click on "Next: Dates arithmetic" below.

