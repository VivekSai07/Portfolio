import ExpertiseCard from "./ExpertiseCard"

const MyExpertise = ({ data }) => {
    return (
        <>
            <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
            <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8 " >
                {data?.map((item, key) => (
                    <ExpertiseCard key={key} data={item} />
                ))}
            </div>
        </>
    )
}

export default MyExpertise
