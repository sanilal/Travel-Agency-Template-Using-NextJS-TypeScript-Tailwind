import Slide from "./Slide";
import slide1 from '@/public/slider1.webp'

export default function HeroSlider(){
    return (
        <div className="flex w-full content-center justify-center">
            <Slide slideImg={slide1} />
        </div>
        
    )
}