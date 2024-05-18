import SidebarLogo from "./SidebarLogo";

interface SidebarRightProps {
    sidebar: boolean;
    setSideBar: (state: boolean) => void;
}

export default function SidebarRight({ sidebar, setSideBar }: SidebarRightProps) {
    return (
        <div
            className={`absolute flex-col top-0 right-0 bg-white sm:min-w-[25vw] min-w-[90%] transition-transform transform ${
                sidebar ? "flex translate-x-0" : "hidden translate-x-full"
            }`}
        >
            <div className="flex w-full justify-between items-center border-b p-4">
                  <p>Logo</p>
                  <div
                      className="flex border rounded-full justify-center items-center w-8 h-8 text-lg cursor-pointer"
                      onClick={() => setSideBar(false)}
                  >
                      X
                  </div>
              </div>
            <div className="p-4">
                <h2>Services</h2>
            </div>
        </div>
    );
}