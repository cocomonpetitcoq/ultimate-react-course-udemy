import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
    return (
        <div className="card">
            <Avatar />
            <div className="data">
                <Intro />
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img src="https://picsum.photos/400" alt="profile" className="avatar" />;
}

function Intro() {
    return (
        <div>
            <h1>Angie Martel</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}

function SkillList() {
	return <div className="skill-list">
		<Skill title="Javascript" color="lightblue" emoji="happy" />
		<Skill title="CSS" color="green" emoji="angry" />
		<Skill title="Vue" color="salmon" emoji="sad" />
	</div>
}

function Skill(props) {
	return <span className="skill" style={{backgroundColor: props.color}}>{props.title} {props.emoji}</span>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
