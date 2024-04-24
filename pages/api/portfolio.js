const portfolio = [
    {
        id: 0,
        projectName: "Efficient Real Time Object Detection in Videos using MobileNetSSD",
        url: "https://github.com/VivekSai07/Efficient-Real-Time-Object-Detection-in-Videos-using-MobileNetSSD",
        image: "projects/ObjectDetection.png",
        projectDetail: "This project implements a real-time object detection system in videos using the MobileNetSSD (MobileNet Single Shot Multibox Detector) model. The goal is to efficiently identify and locate objects in streaming video, making it suitable for applications such as video surveillance, smart cameras, and real-time analytics.",
        technologiesUsed: [
            {
                tech: "Object Detection"
            },
            {
                tech: "Real-Time Processing"
            },
            {
                tech: "MobileNetSSD"
            },
            {
                tech: "OpenCV"
            },
        ]
    },
    {
        id: 1,
        projectName: "Ensemble Classification for Chest Cancer Diagnosis from Diverse CT Scan Images",
        url: "https://github.com/VivekSai07/Ensemble-Classification-for-Chest-Cancer-Diagnosis-from-Diverse-CT-Scan-Images",
        image: "projects/chestcancer.png",
        projectDetail: "This project focuses on the detection of chest cancer using an ensemble model, combining EfficientNetB3, ResNet50, and InceptionV3 architectures. The model achieves a remarkable test accuracy and loss, providing accurate diagnoses and insights into cancer types. Explore the dataset, understand the classification strategies, and visualize the model.",
        technologiesUsed: [
            {
                tech: "CNNs"
            },
            {
                tech: "Ensembling"
            },
            {
                tech: "Model Building"
            },
            // {
            //     tech: "Data Handling"
            // },
            {
                tech: "Performance Evaluation"
            }
        ]
    },
    {
        id: 2,
        projectName: "CineSphere: Personalized Movie Explorer with K-Means Recommendations",
        url: "https://github.com/VivekSai07/CineSphere-Personalized-Movie-Explorer-with-K-Means-Recommendations",
        image: "projects/movieRecommender.jpg",
        projectDetail: "This project implements a robust Content-Based Recommendation Engine for movies using the K-Means clustering algorithm. The system analyzes user preferences based on their previously liked movies and suggests the top 15 movies that align with their taste. Deployed on Heroku, this recommendation system provides users with personalized movie suggestions, enhancing their viewing experience.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Heroku"
            },
            {
                tech: "K-Means clustering"
            }
        ]
    },
    {
        id: 3,
        projectName: "SentimentBlend: Unified Facial and Text Emotion Analysis",
        url: "https://github.com/VivekSai07/Unified-Facial-and-Text-Emotion-Analysis",
        image: "projects/SentimentBlend.jpeg",
        projectDetail: "This project harnesses the capabilities of machine learning, employing the Support Vector Machine (SVM) algorithm, to accurately predict facial emotions. In addition to facial sentiment analysis, the project incorporates text sentiment analysis. The text sentiment analysis component utilizes natural language processing techniques to determine sentiment in textual data.",
        technologiesUsed: [
            {
                tech: "Support Vector Machine"
            },
            {
                tech: "Computer Vision"
            },
            {
                tech: "Streamlit"
            }
        ]
    },
    {
        id: 4,
        projectName: "Text2Image Search System",
        url: "https://github.com/VivekSai07/Text2Image-Search-System",
        image: "projects/Text2Image.png",
        projectDetail: "This Text2Image Search system using Haystack, facilitating the retrieval of relevant images based on textual queries. Employing multimodal retrieval and embedding models, it handles diverse datasets of animals, flowers, and fashion. Challenges include version compatibility and dataset diversity, with avenues for improvement outlined.",
        technologiesUsed: [
            {
                tech: "Machine Learning"
            },
            {
                tech: "Object Detection"
            },
            {
                tech: "Artificial Intelligence (AI)"
            },
            {
                tech: "Streamlit"
            }
        ]
    },
    {
        id: 5,
        projectName: "Zinga Interview Companion",
        url: "https://github.com/VivekSai07/Zinga-Interview-Companion",
        image: "projects/Zinga.png",
        projectDetail: "Zinga is a friendly chatbot designed to assist users in preparing for technical interviews. Whether you're exploring algorithms, data structures, database management system, machine learning, or system design, Zinga is here to provide personalized guidance and answer your questions.",
        technologiesUsed: [
            {
                tech: "HTML5"
            },
            {
                tech: "Chatbot Development"
            },
            {
                tech: "Gemini Pro"
            }
        ]
    },
    {
        id: 6,
        projectName: "MATLAB based Biped Walking Robot",
        url: "https://github.com/VivekSai07/Biped-Walking-Robot-Simulation-in-MATLAB",
        image: "projects/biped.jpg",
        projectDetail: "The project focuses on deriving dynamic equations for the Single Stance and foot-strike leg, providing a comprehensive understanding of the robot's motion.",
        technologiesUsed: [
            {
                tech: "Robot dynamics"
            },
            {
                tech: "MATLAB"
            }
        ]
    },
    {
        id: 7,
        projectName: "RoboViz: MATLAB Robotics Visualization Tool",
        url: "https://github.com/VivekSai07/RoboViz-MATLAB",
        image: "projects/RoboViz.png",
        projectDetail: "RoboViz is a MATLAB-based robotics visualization tool that empowers users to effortlessly visualize and analyze robotic arms with varying degrees of freedom (DOF). Whether you want to input your Denavit-Hartenberg (DH) parameters manually or choose from a selection of predefined robots, RoboViz provides an intuitive interface for 3D visualization and analysis.",
        technologiesUsed: [
            {
                tech: "Robotics"
            },
            {
                tech: "Denavit-Hartenberg (DH) parameters"
            },
            {
                tech: "MATLAB"
            }
        ]
    },
    {
        id: 8,
        projectName: "Robotic Arm Kinematics Simulation",
        url: "https://github.com/VivekSai07/Robotic-Arm-Kinematics-Simulation",
        image: "projects/kinematics.jpg",
        projectDetail: "The Robotic Arm Kinematics Simulation project is a MATLAB-based exploration of the kinematics of 2-DOF and 3-DOF robotic arms in a 2-dimensional space. With a focus on user-friendly interactivity, this project provides a valuable tool for both students and professionals interested in robotics, offering a hands-on experience in understanding and manipulating the kinematic behavior of robotic arms.",
        technologiesUsed: [
            {
                tech: "Robotic Arm Kinematics"
            },
            {
                tech: "MATLAB"
            }
        ]
    },
    {
        id: 9,
        projectName: "GestureCraft: Personalized Hand Gesture Recognition",
        url: "https://github.com/VivekSai07/Hand-Gesture-Detector",
        image: "projects/handGesture.jpg",
        projectDetail: "This project implements real-time hand gesture recognition using OpenCV and MediaPipe. It detects and classifies gestures such as Right, Left, Rotate, Straight, and Back. The system captures video input from a webcam, processes it to isolate the hand, and then applies classification to determine the gesture being performed.",
        technologiesUsed: [
            {
                tech: "OpenCV"
            },
            {
                tech: "MediaPipe"
            },
            {
                tech: "TeachableMachine"
            }
        ]
    },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
