const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Stuttgart',
                degree: 'Masters, Computer Science',
                detail: "Masters in Computer Science with major in Autonomous Systems.",
                year: '2024-2026'
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
                title: 'IIITDM Kancheepuram',
                role: 'Research Intern',
                url: 'https://old.iiitdm.ac.in/docs/2%20Vritika%20Brochure_revised.pdf',
                desc: "The primary objective of the research was to achieve precise Liver Tumor Classification. So, I've developed and implemented an innovative model that combines keras pre-trained models with vision transformers (HybridViT). By employing deep learning algorithms and image processing techniques, I made valuable contributions to the progress of medical imaging technolog",
                year: '06/2023 - 08/2023',
                location: 'Kancheepuram, Chennai, Tamil Nadu'
            },
            // {
            //     id: 2,
            //     title: 'HauzaTech',
            //     role: 'Internee',
            //     url: 'no website',
            //     desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
