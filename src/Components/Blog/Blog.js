import React from 'react';

const Blog = () => {
    return (
        <div className='container my-3'>
            <div>
                <h3>What are the different ways to manage a state in a React application?</h3>
                <p>
                    Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                    <br />

                    The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of:
                    <br />
                    Hooks
                    React Context API
                    Apollo Link State</p>
            </div>

            <div>
                <h3>How does prototypical inheritance work?</h3>
                <p>Every object with its methods and properties contains an internal and hidden property known as "Prototype". The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the `"Prototype"`of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using</p>
            </div>

            <div>
                <h3>What is a unit test? Why should we write unit tests?</h3>
                <p>
                    Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.
                </p>
                <p>
                    How to execute Unit Testing
                    In order to execute Unit Tests, developers write a section of code to test a specific function in software application. Developers can also isolate this function to test more rigorously which reveals unnecessary dependencies between function being tested and other units so the dependencies can be eliminated. Developers generally use UnitTest framework to develop automated test cases for unit testing.

                    Unit Testing is of two types

                    Manual
                    Automated
                    Unit testing is commonly automated but may still be performed manually. Software Engineering does not favor one over the other but automation is preferred. A manual approach to unit testing may employ a step-by-step instructional document.
                </p>
            </div>

            <div>
                <h3>React vs. Angular vs. Vue?</h3>
                <p>
                    Angular vs React
                    <br />
                    If the choice you’re making is based on Angular vs React alone, then you’ll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                    React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript
                </p>
                <p>
                    React vs Vue
                    <br />
                    The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there’s no sign that React is on the decline either.

                    Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                    Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts.
                </p>
                <p>
                    Angular vs Vue
                    <br />
                    In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                    A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                    It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.
                </p>
            </div>
        </div>
    );
};

export default Blog;