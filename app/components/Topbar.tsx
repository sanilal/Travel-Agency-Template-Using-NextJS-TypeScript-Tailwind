import { FaInstagram, FaSquareFacebook  } from "react-icons/fa6";


export default function Topbar() {
  return (
    <div className='w-full bg-th-blue sm:flex hidden justify-center py-2'>
        <div className="flex max-w-7xl container justify-between px-[2vw]">
        <div className='flex items-center gap-2 pr-16 mr-16 border-r border-r-white border-opacity-30'>
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill='#ec3894'>
            <g>
            <path d="M9.84497 19.8136V25.0313C9.84583 25.2087 9.90247 25.3812 10.0069 25.5246C10.1112 25.6679 10.2581 25.7748 10.4266 25.8301C10.5951 25.8853 10.7767 25.8861 10.9457 25.8324C11.1147 25.7787 11.2625 25.6732 11.3682 25.5308L14.4203 21.3773L9.84497 19.8136ZM26.6468 0.156459C26.5201 0.0661815 26.3708 0.0127263 26.2155 0.00200482C26.0603 -0.00871662 25.9051 0.0237135 25.7671 0.0957086L0.454599 13.3145C0.308959 13.3914 0.188959 13.5092 0.109326 13.6535C0.0296936 13.7977 -0.00610776 13.962 0.00631628 14.1262C0.0187403 14.2905 0.0788492 14.4475 0.179266 14.5781C0.279683 14.7087 0.416039 14.8071 0.571599 14.8613L7.60847 17.2666L22.5946 4.45283L10.9981 18.4242L22.7915 22.4551C22.9085 22.4944 23.0327 22.5077 23.1554 22.4939C23.2781 22.4802 23.3963 22.4399 23.5017 22.3757C23.6072 22.3115 23.6973 22.225 23.7659 22.1223C23.8344 22.0196 23.8797 21.9032 23.8985 21.7812L26.9922 0.968709C27.0151 0.81464 26.995 0.657239 26.934 0.513898C26.8731 0.370556 26.7737 0.246854 26.6468 0.156459Z"></path>
            </g>
            </svg>
            <div className='text-white flex flex-col'>
                <span className='text text-xs'>Email:</span>
            <a href="#" className='text-md text-th-pink'>email@example.com</a>
            </div>
            
        </div>
        <div className="flex items-center">
                <p className='text-white text-sm'>Great Offers | Hurry Up For Your New Tour! | Book Your Flight</p>
            </div>
            <div className="flex gap-2 pl-16 ml-16 border-l border-l-white border-opacity-30 items-center text-xl">
                <a href="#"><FaInstagram className="text-white hover:text-th-pink" /></a>
                <a href="#"><FaSquareFacebook className="text-white hover:text-th-pink" /></a>
            </div>

        </div>
    </div>
  )
}
