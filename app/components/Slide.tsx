import Image from "next/image";

export default function Slide({slideImg}) {
  return (
    <div className="max-w-[90%]">
      <Image src={slideImg} alt="slide 1" className="rounded-3xl" />
    </div>
  )
}
