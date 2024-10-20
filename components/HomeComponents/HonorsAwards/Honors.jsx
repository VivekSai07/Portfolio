import ReviewCard from "./HonorCard"
import axios from "axios";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";
import HonorCard from "./HonorCard";



const ClientReviews = () => {

    const { isLoading, error, data } = useQuery('honors', () =>
        axios.get('api/honors')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)))


    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Honors & Awards</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">

                {
                    isLoading ?
                        [1, 2, 3, 4, 5].map(() => (
                            <ParagraphSkeleton className="w-80 md:w-96 h-full p-4 md:p-8" />
                        ))
                        :
                        data?.map((data, key) => (
                            <HonorCard key={key} data={data} />
                        ))
                }

            </div>

        </>
    )
}

export default ClientReviews