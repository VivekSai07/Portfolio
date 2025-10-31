const review = [
    {
        id: 0,
        clientName: "Leveraging CNN Features and Vision Transformers for Enhanced Focal Liver Lesion Classification",
        clientLocation: 'Springer',
        clientSource: '02 August 2025',
        // clientReview: "Proud recipient of the 3rd Rank Certificate in the 6th semester at CAMPUS DAY'24, recognizing academic excellence. Grateful for the opportunity to showcase dedication and passion for learning.",
        PaperURL: "https://link.springer.com/chapter/10.1007/978-3-031-93709-5_32",
        conferenceName: "CVIP 2024"
    },
    {
        id: 1,
        clientName: "HybridViT: An Approach for Alzheimer’s Disease Classification with ADNI Neuroimaging Data",
        clientLocation: 'Springer',
        clientSource: '06 April 2025',
        // clientReview: "Proud recipient of the 3rd Rank Certificate in the 6th semester at CAMPUS DAY'24, recognizing academic excellence. Grateful for the opportunity to showcase dedication and passion for learning.",
        PaperURL: "https://link.springer.com/article/10.1007/s42979-025-03862-0",
        conferenceName: "SN Computer Science"
    },
    {
        id: 2,
        clientName: "Enhanced Alzheimer's Disease Classification: A Stacked Model Fusion with Brain MRI Imaging",
        clientLocation: 'IEEE',
        clientSource: '03 September 2024',
        // clientReview: "Proud recipient of the 3rd Rank Certificate in the 6th semester at CAMPUS DAY'24, recognizing academic excellence. Grateful for the opportunity to showcase dedication and passion for learning.",
        PaperURL: "https://ieeexplore.ieee.org/document/10649320",
        conferenceName: "2024 InC4"
    },
    {
        id: 3,
        clientName: 'MedDQN: A Deep Reinforcement learning approach for Biomedical Image classification',
        clientLocation: 'IEEE',
        clientSource: '18 April 2024',
        // clientReview: "Proud recipient of the 3rd Rank Certificate in the 6th semester at CAMPUS DAY'24, recognizing academic excellence. Grateful for the opportunity to showcase dedication and passion for learning.",
        PaperURL: "https://ieeexplore.ieee.org/document/10426453",
        conferenceName: "2023 GCITC"
    },
    {
        id: 4,
        clientName: 'Extractive Document Summarization with Advanced Deep Reinforcement Learning',
        clientLocation: 'IEEE',
        clientSource: '26 January 2024',
        // clientReview: "Delighted to receive the 3rd Rank Certificate for outstanding performance in the 7th semester at CAMPUS DAY'24. Grateful for the recognition and eager to translate this achievement into further success.",
        PaperURL: "https://ieeexplore.ieee.org/document/10397924",
        conferenceName: "2023 6th IC3I"
    },
    {
        id: 5,
        clientName: 'Sarcasm Detection in Telugu and Tamil: An Exploration of Machine Learning and Deep Neural Networks',
        clientLocation: 'IEEE',
        clientSource: '23 November 2023',
        // clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again",
        PaperURL: "https://ieeexplore.ieee.org/document/10306775",
        conferenceName: "2023 14th ICCCNT"
    },
    {
        id: 6,
        clientName: 'Numerical Solution of First and Second Order Differential Equations with Deep Neural Networks',
        clientLocation: 'IEEE',
        clientSource: '02 October 2023',
        // clientReview: "Osama is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again",
        PaperURL: "https://ieeexplore.ieee.org/document/10263878",
        conferenceName: " 2023 IEEE AIC"
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
