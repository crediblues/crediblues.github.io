import Image from 'next/image'

interface ProjectImageProps {
  src: string
  alt: string
}

export default function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <div className="relative w-full h-64 mb-4">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  )
}

