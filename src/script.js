import ReactDOM from "react-dom/client";

// React.createElement => ReactElement-JS Object => HTMLElement(render)

// const heading = React.createElement(
//     "h1",
//     { id: "heading" },
//     "Namaste React 🚀"
// );
//
// console.log(heading);

// JSX (transpiled before it reaches the JS) - PARCEL - Babel

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
// const jsxHeading = (<h1 id="heading" className="rad" tabIndex="5">
//     Namaste React using JSX 🚀
// </h1>);
//
// const JsxComponent = ()=>(<h1 id="heading" className="rad" tabIndex="5">
//     Namaste React using JSX Component 🚀
// </h1>);

// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste React using JSX 🚀
//     </h1>
// );
//
// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//         <h1 className="heading">Namaste React Fucntional Component</h1>
//     </div>
// );


const elem = <span>React Element</span>;

const title = (
    <h1 className="head" tabIndex="5">
        {elem}
        Namaste React using JSX 🚀
    </h1>
);

const HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste React Fucntional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);