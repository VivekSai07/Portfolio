import BannerLayout from "../components/Common/BannerLayout";
import Seo from "../components/Common/Seo";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import { portfolio } from "../constants/data/portfolio";

export async function getStaticProps() {
    return { props: { portfolio } };
}

const Portfolio = ({ portfolio }) => {
    return (
        <BannerLayout>
            <Seo
                title="Projects — T Vivek Sai Surya Chaitanya"
                description="Robotics and machine learning projects by T Vivek Sai Surya Chaitanya, including robotic grasping, quadruped manipulation, and vision-language-control simulations."
                path="/portfolio"
            />
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 grid-rows-auto gap-4 px-8 my-6">
                {portfolio?.map((data, key) => (
                    <PortfolioCard key={key} data={data} />
                ))}
            </div >
            <Footer />
        </BannerLayout >
    );
};

export default Portfolio;
