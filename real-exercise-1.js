/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary give bill to subdivision residents|| created: 11/13/19
 *  @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedrooms, bathrooms, cars, total;
 const BASE = 50000;
 const BED_PRICE = 17000;
 const BATH_PRICE = 12500;
 const CAR_PRICE = 6000;

 function main() {
     setLotNumber();
     setBedrooms();
     setBathrooms();
     setCars();
     setTotal();
 }

 main();

 function setLotNumber() {
     lotNumber = PROMPT.question(`\nWhat is your lot number?:`);
 }

 function setBedrooms() {
     bedrooms = PROMPT.question(`\nHow many bedrooms are in your house?:`);
 }

 function setBathrooms() {
     bathrooms = PROMPT.question(`\nHow many bathrooms are in your house?:`);
 }

 function setCars() {
     cars = PROMPT.question(`\nHow many cars can your garage hold?:`);
 }

 function setTotal(bedrooms, bathrooms, cars) {
     total = BASE + (BED_PRICE * bedrooms) + (BATH_PRICE * bathrooms) + (CAR_PRICE * cars);
     console.log("your total bill is ${total}")
 }
