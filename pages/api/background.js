const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Stuttgart',
                degree: 'Masters, Computer Science',
                detail: "Masters in Computer Science with major in Autonomous Systems.",
                year: '2024-Present'
            },
            {
                id: 1,
                title: 'Amrita Vishwa Vidyapeetham',
                degree: 'B.Tech, Computer Science & Engineering (Artificial Intelligence)',
                detail: "Bachelor's Degree in Computer Science & Engineering with specialization in Artificial Intelligence from Amrita Vishwa Vidyapeetham, Chennai.",
                year: '2020-2024'
            },
            {
                id: 2,
                title: 'Narayana Junior College',
                degree: 'Intermediate (11th & 12th)',
                detail: "Completed Intermediate studies (+1, & +2, which are prerequisites for engineering) in Andhra Pradesh.",
                year: '2018-2020'
            },
            {
                id: 3,
                title: 'Narayana Olympiad School',
                degree: 'SSC, Science Subjects',
                detail: "Completed Secondary School Education at Narayana School.",
                year: '2016-2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'University of Stuttgart',
                role: 'Student Assistant',
                url: 'https://www.iwb.uni-stuttgart.de/en/research/construction-robotics/',
                desc: [
                    "Implemented a vision-guided pick-and-place pipeline for the Franka Research 3 (FR3) collaborative robot using AprilTag-based 6D pose estimation to autonomously assemble wooden hexagon cassettes.",
                    "Developed and optimized AI-driven perception and control algorithms for automated Lashing Joint assembly, improving precision and cycle time in robotic manufacturing workflows.",
                    "Integrated camera-based marker detection with ROS2 for real-time feedback control and enhanced robotic positioning accuracy.",
                    "Contributed to the synchronization of dual robotic systems for coordinated manipulation tasks, including lashing and prestressing of timber elements, leveraging multi-robot communication and control frameworks."
                ],
                year: '12/2024 - 09/2025',
                location: 'Vaihingen, Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 1,
                title: 'IIITDM Kancheepuram',
                role: 'Research Intern',
                url: 'https://old.iiitdm.ac.in/docs/2%20Vritika%20Brochure_revised.pdf',
                desc: "The primary objective of the research was to achieve precise Liver Tumor Classification. So, I've developed and implemented an innovative model that combines keras pre-trained models with vision transformers (HybridViT). By employing deep learning algorithms and image processing techniques, I made valuable contributions to the progress of medical imaging technology",
                year: '06/2023 - 08/2023',
                location: 'Kancheepuram, Chennai, Tamil Nadu, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
