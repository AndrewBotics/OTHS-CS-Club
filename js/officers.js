// Data array - change this every year!
const officersData = [
    {
        name: "Guhan Gargya",
        title: "President",
        grade: "Senior",
        image: "assets/ProfilePics/Guhan.png",
        bio: "Hey y’all! I’m a taekwondo instructor & artist, and I love basketball and movies! I’m really interested in how math and computer science can be used together, and I love to talk!",
        favText: "Computational Mathematics",
        achievements: ["3rd Place Team @ UIL State", "USACO Gold", "IIMOC Gold Award"]
    },
    {
        name: "Nathan Yan",
        title: "Vice President",
        grade: "Senior",
        image: "assets/ProfilePics/Nathan.jpg",
        bio: "I am Nathan Yan and I love petting cats. I also like math and competitive programming.",
        favText: "DSA (particularly Graph Theory and other discrete math) and C++",
        achievements: ["3rd Place Team @ UIL State", "USACO Camper", "MIT Battlecode 1st Place HS Team", "Candidate Master on CodeForces"]
    },
    {
        name: "Andrew Yoon",
        title: "Senior Director",
        grade: "Junior",
        image: "assets/ProfilePics/Andrew.jpg",
        bio: "Embedded systems nerd who loves electronics and web dev. I also spend a \"healthy\" amount of time in the Neuro-sama community. Feel free to use <a href=\"https://uil-legends-api.onrender.com\" target=\"_blank\">UIL Legends</a> for some UIl CS prep!",
        favText: "Graph Theory, Java, C#",
        achievements: ["3rd Place Team @ UIL State", "USACO Silver", "LM CodeQuest Adv. 2nd Place Team", "HPE CodeWars Adv. 4th Place Team"]
    },
    {
        name: "Fengqi Yang",
        title: "Competition Director",
        grade: "Senior",
        image: "assets/ProfilePics/Fengqi.png",
        bio: "I love problem solving, especially through programming. I'm also a pianist and I enjoy helping others.",
        favText: "Discrete Maths, C++, Python",
        achievements: ["USACO Silver", "UIL CS Adv. Top 10 Placement", "Pupil on CodeForces"]
    },
    {
        name: "Siddhi Jain",
        title: "Software Dev Director",
        grade: "Junior",
        image: "assets/ProfilePics/Siddhi.jpeg",
        bio: "Hi, I am Siddhi! I love coding, creating impactful projects, and making Dubai Chocolates.",
        favText: "Java, HTML",
        achievements: ["5th Place MCQ @ Clements HS", "Hosted 2 Hackathons with $60,000 prize pools"]
    },
    {
        name: "Nicolas Kaschny",
        title: "General Director",
        grade: "Junior",
        image: "assets/ProfilePics/Nicolas.png",
        bio: "Howdy y’all! I’m super passionate about using code to make our communities more efficient and more welcoming. I also love gardening, hiking, and parrots!",
        favText: "Data Structures & Swift",
        achievements: ["2nd Place Java MCQ Award"]
    },
    {
        name: "Ian Ko",
        title: "Instructional Director",
        grade: "Junior",
        image: "assets/ProfilePics/Ian.jpg",
        bio: "I'm passionate about learning and teaching niche fields such as quantum computing and theoretical computer science. I also love music, sports, weightlifting, and video games.",
        favText: "Theoretical & Competitive Programming",
        achievements: ["LM CodeQuest Adv. 8th Place Team", "TMEA Honor Orchestra"]
    },
    {
        name: "Shruti Srinivasan",
        title: "General Director",
        grade: "Junior",
        image: "assets/ProfilePics/Shruti.jpg",
        bio: "I am passionate about computer science because it is exciting to create things from the ground up and learn through trial and error. I also enjoy teaching others and hope to expand STEM education so more people have the opportunity to explore it. I like drawing and playing card games.",
        favText: "Java",
        achievements: []
    },
    {
        name: "Calvin K.",
        title: "Junior Manager",
        grade: "Sophomore",
        image: "assets/ProfilePics/Calvin.webp",
        bio: "Hi! I enjoy using computer science to solve small, everyday problems; I also like competitive programing. Outside of CS, I enjoy listening to music, biking, reading, and playing tennis. (Check out <a href=\"https://lunaedu.net\" target=\"_blank\">Łuna</a>!)",
        favText: "Web Development, Python",
        achievements: ["USACO Silver", "LM CodeQuest Nov. 2nd Place"]
    },
    {
        name: "Jobanpreet Pannu",
        title: "Software Dev Director",
        grade: "Sophomore",
        image: "assets/ProfilePics/Jobanpreet.png",
        bio: "Hi, I'm Joban and I like to code, draw, and create my own software. Some of my hobbies include competitive programming and listening to music.",
        favText: "Data Structures & Web Dev",
        achievements: ["USACO Silver", "LM CodeQuest Nov. 2nd Place"]
    }
];

const gridContainer = document.getElementById('officers-grid');

officersData.forEach(officer => {
    const achievementsHTML = officer.achievements.map(achievement => {
        return `<span class="achievement-tag">${achievement}</span>`;
    }).join('');

    const titleHTML = officer.title ? `<p class="officer-title">${officer.title}</p>` : '';

    const cardHTML = `
        <div class="officer-card">
            <div class="officer-header">
                <div class="officer-photo">
                    <img src="${officer.image}" alt="${officer.name}" class="officer-image">
                </div>
                <div class="officer-info">
                    <h3 class="officer-name">${officer.name}</h3>
                    ${titleHTML}
                    <p class="officer-tenure">${officer.grade}</p>
                </div>
            </div>
            <p class="officer-bio">${officer.bio}</p>

            <div class="officer-fav-lang">
                <span class="achievements-title">Favorite CS Things: </span>
                <span class="achievements-text">${officer.favText}</span>
            </div>
            
            <div class="officer-achievements">
                <h4 class="achievements-title">Achievements</h4>
                <div class="achievements-list">
                    ${achievementsHTML}
                </div>
            </div>
        </div>
    `;

    gridContainer.insertAdjacentHTML('beforeend', cardHTML);
});
