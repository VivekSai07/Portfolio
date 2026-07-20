import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Footer from '../components/Footer';
import Seo from '../components/Common/Seo';
import { CONTACTS, SOCIAL_LINKS, DETAILS } from '../constants/constants';

const Contact = () => {
    return (
        <BannerLayout>
            <Seo
                title="Contact — T Vivek Sai Surya Chaitanya"
                description="Get in touch with T Vivek Sai Surya Chaitanya via email or LinkedIn."
                path="/contact"
            />
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.Residence}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>{DETAILS.City}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>University:</span>
                                <span className='text-LightGray md:text-sm'>University of Stuttgart</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.EMAIL}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>LinkedIn:</span>
                                <a className='text-LightGray text-sm underline' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer">vivek-sai</a>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>{CONTACTS.PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href={`mailto:${CONTACTS.EMAIL}`} target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.GITHUB} target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer"><FaLinkedin /></a>
                </div>
                <div className="my-12 w-full h-auto text-Snow text-center text-sm text-LightGray">
                    Best way to reach me is a direct message on <a className="underline text-Green" href={SOCIAL_LINKS.LINKEDIN} target='_blank' rel="noreferrer">LinkedIn</a>, or an email at <a className="underline text-Green" href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</a>.
                </div>
            </div>
            <Footer />
        </BannerLayout>
    )
}

export default Contact