import Footer from '../components/Footer';
import Banner from '../components/HomeComponents/Banner';
import MyExpertise from '../components/HomeComponents/Expertise/MyExpertise';
import Recommendations from '../components/HomeComponents/Recommendations/Recommendations';
import ClientReviews from '../components/HomeComponents/ClientReviews/ClientReviews';
import Honors from "../components/HomeComponents/HonorsAwards/Honors";
import Seo from '../components/Common/Seo';
import { expertise } from '../constants/data/expertise';
import { recommendationCard } from '../constants/data/recommendations';
import { honor } from '../constants/data/honors';
import { review } from '../constants/data/review';

export async function getStaticProps() {
    return { props: { expertise, recommendationCard, honor, review } };
}

const Home = ({ expertise, recommendationCard, honor, review }) => {
    return (
        <div className="Home-Page -z-10">
            <Seo
                title="T Vivek Sai Surya Chaitanya — Robotics Software Engineer"
                description="Portfolio of T Vivek Sai Surya Chaitanya — robotics software engineer specializing in ROS 2, autonomous systems, perception, and sim-to-real transfer."
                path="/"
            />
            <Banner />
            <MyExpertise data={expertise} />
            <Recommendations data={recommendationCard} />
            <Honors data={honor} />
            <ClientReviews data={review} />
            <Footer />
        </div>
    )
}

export default Home
