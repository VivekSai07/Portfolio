import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div className="card_stylings transition px-8 py-10 ">
                {/* Title as clickable link */}
                <div className="flex-initial text-[17px] font-medium">
                    {data.url ? (
                        <a
                            href={data.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-Snow hover:text-blue-400 hover:underline transition"
                        >
                            {data.role}
                        </a>
                    ) : (
                        <span className="text-Snow">{data.title}</span>
                    )}
                </div>

                <div className="text-sm text-LightGray font-normal italic mt-1 ">
                    {data.title}
                </div>

                <div className="text-LightGray text-sm font-normal mt-4 text-justify">
                    {Array.isArray(data.desc) ? (
                        <ul className="list-disc list-inside space-y-2">
                            {data.desc.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{data.desc}</p>
                    )}
                </div>

                <div className="flex justify-between text-LightGray bg-DeepNightBlack w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50">
                    <div>{data.year}</div> <div>{data.location}</div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card
