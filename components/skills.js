import { motion } from "framer-motion";

const demoitems = {
    "name": "Programming Languages",
    "items": [
        { "name": "C", "imgpath": "/skills/c.png" },
        { "name": "C++", "imgpath": "/skills/c++.png" },
        { "name": "C#", "imgpath": "/skills/csharp.png" },
        { "name": "Python", "imgpath": "/skills/python.png" },
        { "name": "JavaScript", "imgpath": "/skills/javascript.png" },
        { "name": "TypeScript", "imgpath": "/skills/typescript.png" },
        { "name": "Java", "imgpath": "/skills/java.png" },
        { "name": "Kotlin", "imgpath": "/skills/kotlin.png" },
        { "name": "Flutter", "imgpath": "/skills/flutter.png" }
    ]
}

export default function Skills({item = demoitems}) {

    return (
        <div className="flex flex-col justify-center overflow-hidden w-full mb-10">
            <h2 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">{item.name}</h2>
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl">
                <motion.div
                    style={{ display: "flex", width: "100%" }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                    >
                    {item.items.concat(item.items).map((src, index) => (
                        <img key={index} src={src.imgpath || src} alt={`Skill ${index}`} className="rounded-2xl object-cover w-16 h-16 m-4" />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}