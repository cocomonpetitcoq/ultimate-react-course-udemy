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

const skills = [
    {
        skill: "Javascript",
        level: "advanced",
        color: "lightblue",
    },
    {
        skill: "CSS",
        level: "beginner",
        color: "green",
    },
    {
        skill: "Vue",
        level: "intermediate",
        color: "salmon",
    },
];

function SkillList() {
    const skillsArray = skills;
    return (
        <div className="skill-list">
            {skillsArray.map((skill) => (
                <Skill title={skill.skill} color={skill.color} emoji={skill.level} />
            ))}
        </div>
    );
}

function Skill({ title, color, emoji }) {
    return (
        <span className="skill" style={{ backgroundColor: color }}>
            {title} {emoji}
        </span>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
