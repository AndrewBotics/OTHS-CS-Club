// Data array - change this every year!
const officersData = [
    {
        name: "Guhan Gargya",
        title: "President",
        grade: "Junior",
        image: "assets/ProfilePics/Guhan.png",
        bio: "Hey y’all! I’m a taekwondo instructor & artist, and I love basketball and cleaning! I’m really interested in how math and computer science can be used together, and I love to talk!",
        favText: "Computational Mathematics",
        achievements: ["USACO Gold", "2x UIL CS Advanced Top 10 Placement", "MIT Battlecode"]
    },
    {
        name: "Nathan Yan",
        title: "Vice President",
        grade: "Junior",
        image: "assets/ProfilePics/Nathan.jpg",
        bio: "I am Nathan Yan and I love petting cats. I also like math and competitive programming.",
        favText: "DSA (particularly Graph Theory and other discrete math) and C++",
        achievements: ["USACO Platinum", "MIT Battlecode 1st Place HS Team", "Candidate Master on CodeForces"]
    },
    {
        name: "Andrew Yoon",
        title: "Vice President",
        grade: "Sophomore",
        image: "assets/ProfilePics/Andrew.jpg",
        bio: "I’m learning computer science because I want to make robots that combine the best of both AI and heuristic algorithms! One hobby I have is designing and 3D-printing cool things from popular culture! Feel free to use <a href=\"https://uil-legends-api.onrender.com\" target=\"_blank\">UIL Legends</a> for some UIl CS prep!",
        favText: "Graph Theory, Java, C++",
        achievements: ["USACO Silver", "LM CodeQuest Adv. 2nd Place Team", "HPE CodeWars Adv. 4th Place Team"]
    },
    {
        name: "Zoe Xue",
        title: "Senior Advisor",
        grade: "Senior",
        image: "assets/ProfilePics/Zoe.jpg",
        bio: "I’m passionate about using computer science to create impactful projects that promote social good and address real-world problems. I'm also passionate about teaching CS, volunteering, and doing things that make a positive impact. Outside of tech, I enjoy singing, listening to music, collecting cute plushies, and trampolining. I'm also really into mystery, adventure, and spy related books, shows, and movies.",
        favText: "AI and web development",
        achievements: ["LM Code Quest Adv. 2nd Place Team", "UIL CS Districts 8th Place Written", "6x UIL CS Virtual Meet Top Placement"]
    },
    {
        name: "Gaoyu Chen",
        title: "Senior Advisor",
        grade: "Senior",
        image: "assets/ProfilePics/Gaoyu.jpeg",
        bio: "I’m just a guy who does computer science and some writing on the side. I’m happy to help if you have any inquiries about either. I like video games, critical writing, and competitive coding.",
        favText: "Java",
        achievements: ["USACO Gold"]
    },
    {
        name: "Vaishnav Krishnan",
        title: "Senior Advisor",
        grade: "Senior",
        image: "assets/ProfilePics/Vaishnav.jpg",
        bio: "I teach computer science (Advanced Java and ParagonX), do competitive programming, and volunteer. I also like music and going to the gym.",
        favText: "C++",
        achievements: ["USACO Gold", "Expert on CodeForces", "5x UIL CS Adv. Top 10"]
    },
    {
        name: "Fengqi Yang",
        //title: "Officer",
        grade: "Junior",
        image: "assets/ProfilePics/Fengqi.png",
        bio: "I love problem solving, especially through programming. I'm also a pianist and I enjoy helping others.",
        favText: "Discrete Maths, C++, Python",
        achievements: ["USACO Silver", "UIL CS Adv. Top 10 Placement", "Pupil on CodeForces"]
    },
    {
        name: "Siddhi Jain",
        //title: "Officer",
        grade: "Sophomore",
        image: "assets/ProfilePics/Siddhi.jpeg",
        bio: "Hi, I am Siddhi! I love coding, creating impactful projects, and making Dubai Chocolates.",
        favText: "Java, HTML",
        achievements: ["5th Place MCQ @ Clements HS", "Hosted 2 Hackathons with $60,000 prize pools"]
    },
    {
        name: "Ian Ko",
        //title: "Officer",
        grade: "Sophomore",
        image: "assets/ProfilePics/Ian.jpg",
        bio: "I'm passionate about learning and teaching niche fields such as quantum computing and theoretical computer science. I also love music, sports, weightlifting, and video games.",
        favText: "Theoretical & Competitive Programming",
        achievements: ["LM CodeQuest Adv. 8th Place Team", "TMEA Honor Orchestra"]
    },
    {
        name: "Shruti Srinivasan",
        //title: "Officer",
        grade: "Sophomore",
        image: "assets/ProfilePics/Shruti.jpg",
        bio: "I am passionate about computer science because it is exciting to create things from the ground up and learn through trial and error. I also enjoy teaching others and hope to expand STEM education so more people have the opportunity to explore it. I like drawing and playing card games.",
        favText: "Java",
        achievements: []
    },
    {
        name: "Calvin K.",
        //title: "Officer",
        grade: "Freshman",
        image: "assets/ProfilePics/Calvin.webp",
        bio: "Hi! I enjoy using computer science to solve small, everyday problems; I also like competitive programing. Outside of CS, I enjoy listening to music, biking, reading, and playing tennis. (Check out <a href=\"https://lunaedu.net\" target=\"_blank\">Łuna</a>!)",
        favText: "Web Development, Python",
        achievements: ["USACO Silver", "LM CodeQuest Nov. 2nd Place"]
    },
    {
        name: "Jobanpreet Pannu",
        //title: "Officer",
        grade: "Freshman",
        image: "assets/ProfilePics/Jobanpreet.png",
        bio: "Hi, I'm Joban and I like to code, draw, and create my own software. Some of my hobbies include competitive programming and listening to music.",
        favText: "Data Structures & Web Dev",
        achievements: ["USACO Silver", "LM CodeQuest Nov. 2nd Place"]
    },
    {
        name: "MORE COMING SOON!!!",
        title: "MORE COMING SOON!!!",
        grade: "MORE COMING SOON!!!",
        image: "assets/logo.png",
        bio: "AS SOON AS THE REST OF THE OFFICERS STOP BUMMING AROUND!!!",
        favText: "Being on time",
        achievements: []
    },
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