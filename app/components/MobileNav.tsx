import SidebarLogo from "./SidebarLogo";
interface SidebarRightProps {
    shownav: boolean;
    setShowNav: (state: boolean) => void;
}

export default function MobileNav({ shownav, setShowNav }: SidebarRightProps) {
    return (
      <div className={`absolute top-0 left-0 bg-white min-w-[70%] transition-transform transform ${
        shownav ? "flex translate-x-0" : "hidden translate-x-full"
    }`}>
        <div className="flex flex-col w-full">
        <div className="flex w-full justify-between items-center border-b p-4">
                  <p>Logo</p>
                  <div
                      className="flex border rounded-full justify-center items-center w-8 h-8 text-lg cursor-pointer"
                      onClick={() => setShowNav(false)}
                  >
                      X
                  </div>
              </div>
          <nav className="flex flex-col">
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services +</a>
              <a href="#">Destinations +</a>
              <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    )
  }
  