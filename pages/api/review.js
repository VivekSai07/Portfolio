const review = [
    {
        id: 0,
        clientName: 'MedDQN: A Deep Reinforcement learning approach for Biomedical Image classification',
        clientLocation: 'IEEE',
        clientSource: '18 April 2024',
        // clientReview: "Proud recipient of the 3rd Rank Certificate in the 6th semester at CAMPUS DAY'24, recognizing academic excellence. Grateful for the opportunity to showcase dedication and passion for learning.",
        PaperURL: "https://ieeexplore.ieee.org/document/10426453",
        conferenceName: "2023 GCITC"
    },
    {
        id: 2,
        clientName: 'Extractive Document Summarization with Advanced Deep Reinforcement Learning',
        clientLocation: 'IEEE',
        clientSource: '26 January 2024',
        // clientReview: "Delighted to receive the 3rd Rank Certificate for outstanding performance in the 7th semester at CAMPUS DAY'24. Grateful for the recognition and eager to translate this achievement into further success.",
        PaperURL: "https://ieeexplore.ieee.org/document/10397924",
        conferenceName: "2023 6th IC3I"
    },
    {
        id: 3,
        clientName: 'Sarcasm Detection in Telugu and Tamil: An Exploration of Machine Learning and Deep Neural Networks',
        clientLocation: 'IEEE',
        clientSource: '23 November 2023',
        // clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again",
        PaperURL: "https://ieeexplore.ieee.org/document/10306775",
        conferenceName: "2023 14th ICCCNT"
    },
    {
        id: 4,
        clientName: 'Numerical Solution of First and Second Order Differential Equations with Deep Neural Networks',
        clientLocation: 'IEEE',
        clientSource: '02 October 2023',
        // clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again",
        PaperURL: "https://ieeexplore.ieee.org/document/10263878",
        conferenceName: " 2023 IEEE AIC"
    },
    // {
    //     id: 4,
    //     clientName: 'Blaise Labriola',
    //     clientLocation: 'France',
    //     clientSource: 'Fiverr',
    //     clientReview: 'I have worked with Osama and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment.'
    // },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
