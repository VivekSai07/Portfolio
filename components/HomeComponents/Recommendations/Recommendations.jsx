import RecommendationCard from "./RecommendationCard"

const Recommendations = ({ data }) => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
            <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
                {data?.map((item, key) => (
                    <RecommendationCard key={key} data={item} />
                ))}
            </div>
        </>
    )
}

export default Recommendations
