const honor = [
    {
        id: 0,
        title: "Rank Certificate",
        issuedBy: 'Amrita Vishwa Vidyapeetham',
        issuedDate: 'Sep 2024',
        description: "Recognized for academic excellence, securing the 8th rank in a competitive cohort of students during my Bachelor of Technology in Computer Science and Engineering (Artificial Intelligence).",
        thumbnail: "images/RankCertificate.jpg",
        certificateLink: "https://drive.google.com/file/d/1PXre6jjerT_xJxalsjWrlStomSRGaL22/view?usp=drive_link"
    },
    {
        id: 1,
        title: "CAMPUS DAY' 24 ",
        issuedBy: 'Amrita Vishwa Vidyapeetham',
        issuedDate: 'Jan 2024',
        description: "Delighted to receive the 3rd Rank Certificate for outstanding performance in the 7th semester at CAMPUS DAY'24. Grateful for the recognition and eager to translate this achievement into further success.",
        thumbnail: "images/7thSemRankCertificate.jpeg",
        certificateLink: "https://drive.google.com/file/d/1jHC4rB5ptJIBWdC7gQuvjdFcEYEnXOv7/view?usp=drive_link"
    },
    {
        id: 2,
        title: "CAMPUS DAY' 24",
        issuedBy: 'Amrita Vishwa Vidyapeetham',
        issuedDate: 'Jan 2024',
        description: "Proud recipient of the 3rd Rank Certificate in the 6th semester at CAMPUS DAY'24, recognizing academic excellence. Grateful for the opportunity to showcase dedication and passion for learning.",
        thumbnail: "images/6thSemRankCertificate.jpeg",
        certificateLink: "https://drive.google.com/file/d/1VRbta28GKEACXe70Lr_5ZsrImavWw4Gc/view?usp=drive_link"
    },
    
    
]
export default function handler(req, res) {
    res.status(200).json(honor)
}
