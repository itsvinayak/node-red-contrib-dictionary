# node-red-dictionary-node [![Node.js CI](https://github.com/itsvinayak/dictionary-node/actions/workflows/npm-ci.yml/badge.svg?branch=main)](https://github.com/itsvinayak/dictionary-node/actions/workflows/npm-ci.yml)
###  dictionary node for node-red


A dictionary is a general-purpose data structure for storing a group of objects.It is a set of keys and each key has a single associated value.
### Example of dictionary

```
{
  "living": {
    "men": "20",
    "women": "10",
    "children": "3"
  },
  "nonliving": {
    "table": "6"
  },
  "food items": "10"
}
```


## What this node do :

this node takes a dictionary/json and allows user to create a other dictionary, based on user keys and value ( path of objects )

**Input:**

```
{
  "living": {
    "men": "20",
    "women": "10",
    "children": "3"
  },
  "nonliving": {
    "table": "6"
  },
  "food items": "10"
}
```

**Output:**

```
{
  "living men": "20",
  "nonliving table": "6"
}
```

<img width="639" alt="Screenshot 2022-10-21 at 10 36 59 AM" src="https://user-images.githubusercontent.com/33996594/197116742-675f03cc-be66-4d77-a368-2c6f0b1ef544.png">


### Node config :

<img width="623" alt="Screenshot 2022-10-21 at 10 39 11 AM" src="https://user-images.githubusercontent.com/33996594/197116967-068e65b5-cf11-406e-88ba-292d4bf50230.png">


### Output :

<img width="310" alt="Screenshot 2022-10-21 at 10 41 09 AM" src="https://user-images.githubusercontent.com/33996594/197117139-e90eb66f-1af8-4cd0-8e2e-5e2617b50108.png">




