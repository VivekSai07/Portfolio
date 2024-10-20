import { MdLocationOn } from 'react-icons/md'
import { SiIeee } from "react-icons/si";
import { SlCalender } from "react-icons/sl";
import { FcConferenceCall } from "react-icons/fc";
import { FaStar } from 'react-icons/fa'
import CardLayout from '../../Common/CardLayout'
import { FaUniversity } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";

const HonorCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                {/* <div className="flex justify-between items-center"> */}
                    {/* <div className="flex flex-col gap-2"> */}
                        {/* Title */}
                        <div className="text-Snow font-bold text-lg">
                            {data?.title}
                        </div>
                        {/* Issued by */}
                        <div className="text-sm text-LightGray flex items-center gap-3 font-light">
                            <FaUniversity className="w-4 h-4" />
                            <span>{data?.issuedBy}</span>
                        </div>
                        {/* Associated with */}
                        <div className="text-sm text-LightGray font-light flex items-center gap-3">
                            <SlCalender className='w-4 h-4' />
                            <span>{data?.issuedDate}</span>
                        </div>
                        {/* Description */}
                        <div className="text-sm text-LightGray font-light mt-2">
                            {data?.description}
                        </div>
                        {/* Thumbnail */}
                        {data?.thumbnail && (
                            <div className="mt-4">
                                <a href={data?.certificateLink} target="_blank" rel="noreferrer">
                                    <img 
                                        src={data?.thumbnail} 
                                        alt="Rank Certificate Thumbnail" 
                                        className="w-auto h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-300" // Adjust transparency and add hover effect
                                    />
                                </a>
                                {/* <img src={data?.thumbnail} alt="Rank Certificate Thumbnail" className="w-auto h-full object-cover opacity-20 border-Green border-[3px]" /> */}
                            </div>
                        )}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </CardLayout>
    )
}

export default HonorCard;