export default function SidebarLogo({setSideBar}) {
    return (
      <div className="flex w-full justify-between items-center border-b p-4">
                  <p>Logo</p>
                  <div
                      className="flex border rounded-full justify-center items-center w-8 h-8 text-lg cursor-pointer"
                      onClick={() => setSideBar(false)}
                  >
                      X
                  </div>
              </div>
    )
  }