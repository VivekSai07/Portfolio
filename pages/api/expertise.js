const expertise = [
    {
        id: 0,
        title: 'Machine Learning',
        desc: "As a machine learning practitioner, I leverage Python and libraries like Scikit-learn and TensorFlow to develop predictive models and extract meaningful insights. With expertise in supervised, unsupervised, and reinforcement learning, I optimize models for performance and value-driven outcomes.",
    },
    {
        id: 1,
        title: 'Deep Learning',
        desc: "As a deep learning enthusiast, proficient in frameworks like TensorFlow and PyTorch, I design and train deep neural architectures, including CNNs, RNNs, and transformer models. Skilled in data augmentation and model optimization, I explore innovative architectures to advance AI capabilities.",
    },
    {
        id: 2,
        title: 'Natural Language Processing (NLP) and Text Analytics',
        desc: 'With a focus on natural language processing (NLP), I specialize in extracting valuable insights from unstructured text data. Proficient in Python and NLP libraries like NLTK, SpaCy, and Transformers, I develop algorithms for text classification, sentiment analysis, and named entity recognition.',
    },
    {
        id: 3,
        title: 'Computer Vision and Image Processing',
        desc: "I leverage cutting-edge techniques to analyze and interpret visual data. Skilled in Python and libraries like OpenCV, TensorFlow, and PyTorch, I develop algorithms for object detection, image segmentation, and facial recognition. With expertise in deep learning architectures such as CNNs and GANs, I push the boundaries of computer vision applications, from autonomous vehicles to medical imaging.",
    },
    {
        id: 4,
        title: 'Robotics and Autonomous Systems',
        desc: "Combining my passion for robotics with expertise in AI and machine learning, I specialize in developing intelligent systems for autonomous robots. Proficient in Python and robotics frameworks like ROS (Robot Operating System), I design and implement algorithms for perception, localization, and motion planning. ",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
