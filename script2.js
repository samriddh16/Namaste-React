import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1",{id:"head"},"Hello World!")

// A React element is an object.
// Package.json is a configuration for npm. Npm does not officially stand for node
// package manager.

// For passing multiple child elements we can pass array in third arguments.
// CORS is a browser security mechanism that controls how resources are accessed across
// different origins. The crossorigin attribute specifies the cross-origin request
// mode for resources such as scripts.

// Using create element in react for creating tags, and it becomes complex and messy-
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "child1" }, [
        React.createElement("h1", { key: "h1" }, "I'm an h1 tag"),
        React.createElement("h2", { key: "h2" }, "I'm an h2 tag"),
    ]),
    React.createElement("div", { id: "child2", key: "child2" }, [
        React.createElement("h1", { key: "h1" }, "I'm an h1 tag"),
        React.createElement("h2", { key: "h2" }, "I'm an h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);