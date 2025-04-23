import { twMerge } from 'tailwind-merge'

const FeatureCard = ({ title, description, image, className }) => {
    return (
        <div className={twMerge("bg-[#10103c] border border-blue-400/50 p-6 rounded-3xl", className)}>
            <div className="aspect-video flex justify-center items-center">
                <div className="border border-blue-400 rounded-3xl p-14 bg-[#1a1a4d]">
                    {image}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/70 mt-2">{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard