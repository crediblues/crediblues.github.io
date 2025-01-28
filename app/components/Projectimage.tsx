import Image from 'next/image'

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
}

export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      className={className} // Pass the className prop to the Image component
      layout="responsive" 
      width={100} 
      height={100} 
    />
  );
}


