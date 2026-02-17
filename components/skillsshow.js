import skilldata from "../data/skillsdata.json";
import Skills from "../components/skills";

export default function SkillsShow() {
    return (
        <div className="flex flex-col items-center justify-center py-20 px-4 bg-white dark:bg-gray-800 gap-1">
            <h1 className="text-4xl font-bold mb-4">Technical Skills</h1>
            {skilldata.map((category, index) => (
                <Skills item={category} key={index} />
            ))}
        </div>
    )
}