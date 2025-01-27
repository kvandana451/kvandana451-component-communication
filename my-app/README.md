# MyApp

The Angular CLI installed on my system is version 19, but the project was developed using Angular version 16.<br>
Parent To Child communication:<br>
Input Decorator:<br> The @Input decorator is used to pass data from a parent component to a child component. It allows the parent component to bind a property to the child component.<br>
Child To Parent Communication:<br>
Output Decorator:<br>The @Output decorator is used to pass data from a child component to a parent component. It allows the child component to emit events that the parent component can listen to.<br>
@Output Decorator:<br>
Marks a property in the child component as an event that can be bound to in the parent component.
EventEmitter:<br>
Provides a method (emit) to send custom events along with data from the child to the parent.<br>
Event Binding:<br>
The parent component listens to the child component's @Output event using event binding syntax (()).

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
