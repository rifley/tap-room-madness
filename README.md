# Tap-house madness
By _Nathaniel Meyer and Riley Watts_

## Description

A web-app to display information about kegs and their stuff.

## Planning

1. Configuration/dependencies
  *

2. Specs
  * Patron can see available kegs (keg-list)
  * Employee can tap a new keg and add it to the list (new-keg)
  * Employee can edit a keg (edit-keg)
  * Patron or employee can see pints remaining (keg-list to display)
  * Employee can decrement pints (edit-keg)
  * Employee can see warning list of kegs with less than 10 pints (keg-list, capacityWarning.pipe.ts)
  * Patron can see pints color coded by price (property binding inserted into template in keg-list)
  * Patron can see stronger beers displayed differently (another property binding inserted into template in keg-list)
    * Show smaller pour for strong beers

  Further exploration
  * Growler / grumbler button to decrement kegs appropriately (new button, edit-keg)
  * Filter by style of beer (another pipe)
  * Put a keg on sale (lower cost and highlight keg in display)
  * Happy hour (put all kegs on sale)
  * Automatic happy hour based on time of day

3. Integration
  * (Default angular structure... tsconfig.json, systemjs.config.js, package.json, gulpfile.js, bower.json, etc.)
  * main.ts
  * app.component.ts
  * app.module.ts
  * some pipes to filter kegs by properties
  * edit-keg.component.ts
  * new-keg.component.ts
  * keg-list.component.ts
  * keg.model.ts
  * index.html

4. UX/UI
  *

5. Polish
  *
