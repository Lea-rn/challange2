import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "javaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "intermediate",
    color: "#E84F33",
  },

  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img height={200} src="img.jpg" alt="img" />;
}

function Intro() {
  return (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius illo
      distinctio pariatur natus veritatis! Architecto exercitationem dolores
      commodi magni iste.Lorem ipsum dolor sit, amet consectetur adipisicing
      elit. Eius illo distinctio pariatur natus veritatis! Architecto
      exercitationem dolores commodi magni iste.
    </p>
  );
}

function SkillList() {
  return (
    <span>
      {skills.map((ele) => (
        <Skill skill={ele.skill} color={ele.color} level={ele.level} />
      ))}
    </span>
  );
}

function Skill({ skill, color, level }) {
  return (
    <span style={{ marginLeft: "15px", backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "🤙"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </span>
  );
}
