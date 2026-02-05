import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
    return (
        <div className="">
            <Header />
            
            <main className="flex-1 w-full">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Outlet />
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default Layout