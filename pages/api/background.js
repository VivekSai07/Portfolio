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
                id: 0,
                title: 'Porsche Engineering Services GmbH',
                role: 'Working Student -- Humanoid Robotics, Development & Validation',
                url: 'https://www.porsche-engineering.com/',
                desc: [
                    "Developed and integrated robotics software for autonomous mobile platforms using ROS 2, NVIDIA Isaac ROS, and Jetson, enabling perception, localization, and navigation capabilities.",
                    "Built and maintained Docker-based deployment workflows for embedded robotics applications, debugging complex middleware, networking, dependency, and containerization challenges across development and production environments.",
                    "Integrated and evaluated hardware components including cameras, audio systems, and onboard compute, while contributing to simulation, visualization, and real-world robot validation.",
                    "Collaborated with cross-functional engineering teams through code reviews, technical documentation, and feature validation, delivering production-ready robotics software and deployment improvements."
                ],
                year: '04/2026 - Present',
                location: 'Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 1,
                title: 'Socially Intelligent Robotics (SIR) Lab, University of Stuttgart',
                role: 'Student Assistant',
                url: 'https://www.iss.uni-stuttgart.de/en/research/sir/',
                desc: [
                    "Performed complete hardware bring-up and configuration of 2 FER robotic platforms, enabling stable, reproducible operation across research experiments.",
                    "Debugged hardware-software integration issues across sensor and control interfaces, cutting experiment setup failures by ~40% and improving overall system uptime during trials.",
                    "Prototyped and evaluated learning-based robotic behaviors in NVIDIA Isaac Sim, focusing on sim-to-real transfer."
                ],
                year: '11/2025 - 06/2026',
                location: 'Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 2,
                title: 'Construction Robotics, University of Stuttgart',
                role: 'Student Assistant',
                url: 'https://www.iwb.uni-stuttgart.de/en/research/construction-robotics/',
                desc: [
                    "Developed ROS 2-based robotic software for manipulation tasks, including perception integration, task execution, and motion coordination.",
                    "Implemented and validated pose estimation and control loops, analyzing failure cases across simulation and real robot deployments.",
                    "Conducted sim-to-real validation across manipulation tasks, identifying a ~15% perception accuracy gap between simulation and physical deployment and reducing it to under 5% through calibration and pipeline tuning."
                ],
                year: '12/2024 - 03/2026',
                location: 'Vaihingen, Stuttgart, Baden-Württemberg, Germany'
            },
            {
                id: 3,
                title: 'IIITDM Kancheepuram',
                role: 'Research Intern',
                url: 'https://old.iiitdm.ac.in/docs/2%20Vritika%20Brochure_revised.pdf',
                desc: "Implemented and benchmarked deep learning models (CNNs, Vision Transformers) using PyTorch and TensorFlow, and designed data preprocessing, augmentation, and evaluation pipelines to analyze robustness and generalization of models -- work that later contributed to a published HybridViT model for Liver Tumor and Alzheimer's Disease classification.",
                year: '06/2023 - 08/2023',
                location: 'Kancheepuram, Chennai, Tamil Nadu, India'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
