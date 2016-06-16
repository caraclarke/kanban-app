Notes
--

These are my notes on topics in [SurviveJS - React](https://github.com/survivejs/react) by [Juho Vepsäläinen](https://github.com/survivejs)

Flux
---

Action -> dispatcher -> store -> view

1. Actions - concrete operatons we can perform over out data --> NoteActions.create({task: 'Learn React'}). At simplest level actions just pass message to dispatcher as is
2. Dispatcher - as actions are trigger a dispatcher will get notified. The dispatcher deals with possible dependencies between stores. If a certain action needs to happen before another, dispatcher helps us achieve that
3. Stores - Once dispatcher deals with action, the stores listening to it get triggered. To continue above example, NoteStore gets notified and updates its internal state. Then the store notifies listeners of the new state
4. View - State changes, view gets updated

Flux dataflow is unidirectional with a cyclical flow.
<img src="images/flux-data-flow.png" alt="Flux Data Flow Diagram" />

Advantages of Flux
-----
Application flexibility. With flux we can communicate with APIs outside of our views, then views can stay clean of logic and make app easier to understand.

This App uses Alt
-----
[Alt](alt.js.org) is a flexible, full-featured implementation designed with universal rendering in mind.

Alt deals with actions and stores. The dispatcher is hidden but you can still access it. Alt hides a lot of boilerplate and has special features that allow you to save and restore application state.

**Setting up an Alt Instance**
- Keeps track of actions and stores and persists communication
- In app/libs/alt.js we import and initiate alt in its own module so we can refer to it from everywhere else in our app
- Webpack caches modules so next time Alt is imported, it returns the same instance

AltContainer
---
