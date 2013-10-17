# GAevents

This package makes Google Analytics event tracking more like using Meteor's Collection API.

## How to install:
1. make sure you have [meteorite](https://github.com/oortcloud/meteorite) installed  
    `$ npm install -g meteorite`
2. inside your project, run:  
    `$ mrt add GAevents`

## In your Meteor project: 

  Note: This is not server code. You should only be working with GAevents within your client files.

```javascript
GAevents.insert({
  category: "User",
  action: "Purchased",
  label: "SKU:1177291828",
  value: 100 // numeric
}, true) // second argument defaults to false

```

### API

GAevents has only one method, `insert`. Mirroring the Collection API provides for a very familiar interface to a not-so-familiar process of custom event tracking with Google Analytics. 


### GAevents.insert(object, bounce);
Pass an object that has the following params:
  - category (required): the highest level of type "User", "Account", "Order"
  - action (required): describes the event of the category "Purchased", "Created", "Confirmed"
  - label: enables you to add more depth to the event. Similar to a tag.
  - value: numeric. adds to the count of this category. 

Optionally include a boolean (true/false) as second argument. 
  - bounce: A boolean that when set to true, indicates that the event hit will not be used in bounce-rate calculation. Defaults to false.



### Pull requests / issues
Please feel free to make pull requests and submit issues here. Thanks!