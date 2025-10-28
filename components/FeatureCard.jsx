import { twMerge } from 'tailwind-merge'

const FeatureCard = ({ title, description, image, className }) => {
    return (
        <div className={twMerge("px-4 py-6 rounded-3xl group", className)}
             style={{
                 backgroundColor: 'var(--bg-secondary)',
                 boxShadow: "0 0 10px var(--accent-color), 0 0 20px var(--accent-color)",
                 border: '1px solid var(--border-color)'
             }}
        >
            <div className="aspect-video flex justify-center items-center">
                <div className="border rounded-3xl p-18" style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
                    {image}
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-medium mt-6 transition-colors duration-300 group-hover:text-[#00f5f5] text-[var(--text-primary)]">{title}</h3>
                <p className="mt-2" style={{ color: 'var(--text-secondary)' }}>{description}</p>
            </div>
        </div>
    )
}

export default FeatureCard