# Endpoints

#### `ping`

Returns JSON with `message`.

**Example Endpoint**

```
http://localhost:8080/ping
```

**Output**

```json
{
  "success": true,
  "message": "pong"
}
```

#### `smite-ql`

Requires `path` query params to look into redis DB.

**Example Endpoint**

```
http://localhost:8080/smite-ql?path=players.dhko.matches.1235652463
```

**Output**

```json
{
  "success": true,
  "message": "success",
  "response": {
    "date": "20220409025010",
    "isVictory": false,
    "isRanked": false,
    "isWatchable": false,
    "kills": 6,
    "deaths": 7,
    "assists": 3,
    "healing": 0,
    "gold": 13239,
    "god": "Thor",
    "role": "Unknown",
    "godLevel": 20,
    "wards": 2,
    "damageDone": 18352,
    "damageTaken": 19544,
    "damageMitigated": 8759,
    "damageStructures": 0,
    "actives": ["Jotunn's Vigor", "The Crusher", "Brawler's Beat Stick", "Bloodforge", "Soul Eater", ""],
    "items": ["Purification Beads", "Blink Rune"],
    "accountLevel": 160,
    "masteryLevel": 116,
    "map": "Slash",
    "matchId": 1235652463,
    "durationInSeconds": 1068,
    "durationInMinutes": 17,
    "patchVersion": "9.3",
    "party": {
      "dhko": "4553282",
      "SaltyUrban": "710155777",
      "soannoyed": "714682417",
      "TripleCCC1": "7027112"
    }
  }
}
```
