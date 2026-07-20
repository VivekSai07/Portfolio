import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/Common/BannerLayout";
import Seo from "../components/Common/Seo";
import Footer from "../components/Footer";
import { background } from "../constants/data/background";

export async function getStaticProps() {
    return { props: { background } };
}

function Background({ background }) {
    const [eduData, expData] = background;

    return (
        <BannerLayout>
            <Seo
                title="Background — T Vivek Sai Surya Chaitanya"
                description="Education and work experience of T Vivek Sai Surya Chaitanya, including Porsche Engineering, University of Stuttgart robotics labs, and IIITDM Kancheepuram."
                path="/background"
            />
            <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>
                    {eduData?.eduCards?.map((data, key) => (
                        <Edu_Card key={key} data={data} />
                    ))}
                </div>
                <div className="order-1 md:order-2">
                    <div className="flex flex-col gap-y-4 md:ml-12">
                        <div className=" md:pt-0 pt-4 text-xl text-Snow font-semibold">Experience</div>
                        {expData?.expCards?.map((data, key) => (
                            <Exp_Card key={key} data={data} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
