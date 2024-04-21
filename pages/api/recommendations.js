// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Dr. Annamalai R',
    image: "images/annamalai.jpg",
    designation: 'Assistant Professor - SG',
    view: "As his project supervisor during his fourth year, I've witnessed his exceptional dedication, analytical prowess, and innovative approach to problem-solving. Vivek's commitment to his work, coupled with his inquisitive nature, consistently yielded outstanding results. His capacity for critical thinking in the field of AI is truly commendable. His contributions were invaluable to the project, reflecting his strong work ethic and passion for the subject. Without reservation, I endorse Vivek for any endeavor; he's a remarkable individual destined for great success.",
    linkednURL: "https://www.linkedin.com/in/annamalai-ramanathan-36474b18b/"
  },
  {
    id: 1,
    name: 'Dr. Prasanna Kumar R',
    image: "images/prasanna.png",
    designation: 'Associate Professor',
    view: "I have had the pleasure of working with Tekumudi Vivek Sai Surya Chaitanya in the field of Artificial Intelligence, and I am consistently impressed by his skills and abilities. Vivek has proven himself to be a valuable asset to our team, and I have no doubt that he will continue to excel in this field. His dedication to his work and his commitment to producing high-quality results are unparalleled, and I highly recommend Vivek for his expertise and professionalism.",
    linkednURL: "https://www.linkedin.com/in/dr-prasanna-kumar-rangarajan-b6bb0172/"
  },
  {
    id: 2,
    name: 'Dr. Kondeti Lakshmi Vasudev',
    image: "images/vasudev.jpg",
    designation: 'Assistant Professor',
    view: "Vivek is a highly skilled and reliable expert in the field of Robotics, as I have had the chance to witness firsthand. His unwavering dedication to achieving stellar outcomes positions him as an exceptional candidate for both advanced studies at the Master's level and for thriving in professional roles. I wholeheartedly endorse Vivek for his continued success in academia and his future endeavors in the workforce.",
    linkednURL: "https://www.linkedin.com/in/kondeti-vasudev-8b001b51/"
  },
  // {
  //   id: 3,
  //   name: 'Muhammad Ullah',
  //   image: "images/muhammad.jpeg",
  //   designation: 'MERN Stack Developer at Productbox',
  //   view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  //   linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  // },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
