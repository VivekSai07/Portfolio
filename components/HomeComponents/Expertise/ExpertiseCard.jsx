import { motion } from 'framer-motion';
import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <CardLayout>
                <div className="h-full space-y-2 p-8 card_stylings">
                    <div className=" text-Snow">{data.title}</div>
                    <div className="text-sm text-LightGray font-normal">
                        {data.desc}
                    </div>
                </div>
            </CardLayout>
        </motion.div>
    )
}

export default ExpertiseCard