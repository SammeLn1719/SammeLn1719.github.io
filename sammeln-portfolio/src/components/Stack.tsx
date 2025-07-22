import React from "react";

const stack = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", badge: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" },
      { name: "CSS3", badge: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" },
      { name: "TailwindCSS", badge: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" },
      { name: "SASS", badge: "https://img.shields.io/badge/SASS-%23CC6699.svg?style=for-the-badge&logo=sass&logoColor=white" },
      { name: "JavaScript", badge: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" },
      { name: "TypeScript", badge: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" },
      { name: "React", badge: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" },
      { name: "Next.js", badge: "https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" },
      { name: "GraphQL", badge: "https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
      { name: "Vue.js", badge: "https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" },
      { name: "Angular", badge: "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" },
      { name: "Redux", badge: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white" },
      { name: "Jest", badge: "https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", badge: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" },
      { name: "C", badge: "https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white" },
      { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" },
      { name: "Go", badge: "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" },
      { name: "Kotlin", badge: "https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" },
      { name: "SQL", badge: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=sql&logoColor=white" },
      { name: "PostgreSQL", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" },
      { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
      { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
      { name: "Express.js", badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" },
      { name: "Django", badge: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white" },
      { name: "Flask", badge: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white" },
      { name: "Redis", badge: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white" },
      { name: "MySQL", badge: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" }
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", badge: "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" },
      { name: "Figma", badge: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" },
      { name: "Docker", badge: "https://img.shields.io/badge/DOCKER-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white" },
      { name: "Linux", badge: "https://img.shields.io/badge/LINUX-%23000000.svg?style=for-the-badge&logo=linux&logoColor=white" },
      { name: "Webpack", badge: "https://img.shields.io/badge/WEBPACK-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black" },
      { name: "Gulp", badge: "https://img.shields.io/badge/GULP-%23CF4647.svg?style=for-the-badge&logo=gulp&logoColor=white" },
      { name: "Kubernetes", badge: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white" },
      { name: "AWS", badge: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white" },
      { name: "Jenkins", badge: "https://img.shields.io/badge/jenkins-%232C5263.svg?style=for-the-badge&logo=jenkins&logoColor=white" },
      { name: "Terraform", badge: "https://img.shields.io/badge/terraform-%235835CC.svg?style=for-the-badge&logo=terraform&logoColor=white" },
      { name: "Nginx", badge: "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" }
    ],
  },
];

const Stack: React.FC = () => (
  <section className="w-full max-w-4xl mx-auto py-8 animate-fade-in-up">
    <h3 className="text-2xl font-bold mb-6 text-center">Tech Stack</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stack.map((group) => (
        <div key={group.category} className="flex flex-col items-center gap-4">
          <h4 className="font-semibold text-lg mb-2">{group.category}</h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {group.items.map((item) => (
              <div key={item.name} className="flex flex-col items-center group">
                <img src={item.badge} alt={item.name} className="mb-1" loading="lazy" />
                {/* <span className="text-xs text-muted-foreground">{item.name}</span> */}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Stack; 