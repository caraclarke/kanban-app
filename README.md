# Kanban App #

Kanban allows you to track the status of tasks. A Kanban project uses columns (or lanes) and notes. Notes move through columns that represent stages of the project. They move as they change work status from reviewing, to implementing, to completed. Notes include information about the task, what it relates to and potentially priority and due date.

[Trello](https://trello.com/) is a great online example of Kanban.

Tracking tasks as individuals and as a whole is crucial when planning a project. This Kanban app can be used to track tasks that someone would want to complete by a specific dealdine, whether they use it to plan their day or their week.

## Implementation ##

This project will be built using React.js, Flux and Webpack.

Debugging will be done by testing locally in the browser, using browser developer tools and eslint.

- Set up webpack configuration
- Create 'Todo' application with 'Notes' as base
    - Add new 'Notes'
    - Edit existing 'Notes'
    - Remove 'Notes'
    - Potential spot to add some basic styling
- Add in Flux architecture
    - Actions, stores
    - Localstorage to avoid losing changes on refresh
- Add in lanes
    - 'Lanes' container to render each 'Lane' separately
    - 'Lane' then renders 'Notes'
- Potential spot to add in more styling
- Add in Drag and Drop
- Style & Clean

## Installation ##

Install the project by:

```
$ git clone git@github.com:caraclarke/kanban-app.git
$ cd kanban-app/

```

## To view page locally ##

```
$ npm install
$ npm start
```

## Planned next steps ##

1. Drag and drop for lanes
2. Title and body for notes

## Who do I talk to? ##

* Please contact the repo owner Cara Clarke at cara.clarke8@gmail.com with any questions or comments
* This project based on [SurviveJS - React](https://github.com/survivejs/react) by [Juho Vepsäläinen](https://github.com/survivejs)
