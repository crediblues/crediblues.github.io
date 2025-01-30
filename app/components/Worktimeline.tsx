import { motion } from "framer-motion"
import Image from "next/image"

interface WorkExperience {
  id: string
  title: string
  timeframe: string
  description: string
  techStack: string[]
  images: string[]
  role: string[]
  hidetechnologies: boolean
}

interface WorkTimelineProps {
  experiences: WorkExperience[]
}

export default function WorkTimeline({ experiences }: WorkTimelineProps) {
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-start mb-4">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <Image
                  src={experience.images[0]}
                  alt={experience.title}
                  width={200}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              <div className="md:w-2/3 md:pl-6">
                <h3 className="text-xl font-semibold text-[#132043] mb-2">{experience.title}</h3>
                <h4 className="text-m font-semibold text-[#132043] mb-2"><em>{experience.timeframe}</em></h4>
                <p className="text-gray-600 mb-4">{experience.description}</p>
                <h4 className="font-semibold text-[#132043] mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside mb-4">
                  {experience.role.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + idx * 0.1 }}
                      className="text-gray-600 mb-1"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                {!experience.hidetechnologies && (
                <>
                <h4 className="font-semibold text-[#132043] mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                {experience.techStack.map((tech, idx) => (
                    <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm"
                    >
                    {tech}
                    </motion.span>
                ))}
                </div>
                </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
