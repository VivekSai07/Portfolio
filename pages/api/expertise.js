const expertise = [
    {
        id: 0,
        title: 'Machine Learning',
        desc: "As a machine learning practitioner, I specialize in supervised, unsupervised, and reinforcement learning, focusing on optimizing models for high performance and valuable outcomes.",
    },
    {
        id: 1,
        title: 'Deep Learning',
        desc: "Proficient in TensorFlow and PyTorch, I design and train deep neural networks like CNNs, RNNs, and transformers. Skilled in data augmentation and model optimization, I innovate to advance AI capabilities.",
    },
    {
        id: 2,
        title: 'Natural Language Processing (NLP) and Text Analytics',
        desc: 'With a focus on natural language processing (NLP), my expertise lies in crafting algorithms for text classification, sentiment analysis, and named entity recognition.',
    },
    {
        id: 3,
        title: 'Computer Vision and Image Processing',
        desc: "I specialize in tasks like object detection, image segmentation, and facial recognition, by utilizing deep learning architectures like CNNs and GANs, applying them to various computer vision applications.",
    },
    {
        id: 4,
        title: 'Robotics and Autonomous Systems',
        desc: "Proficient in Python and robotics frameworks like ROS (Robot Operating System), I design algorithms for perception, localization, and motion planning.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
