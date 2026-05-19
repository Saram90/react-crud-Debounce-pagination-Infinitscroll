import React from 'react'

function Layout({ children }) {
    return (
        <section className="main-section w-full min-h-screen flex flex-col items-center bg-[#202a] text-[62.5%] font-[urbanist] px-4 py-8">

            {children}

        </section>
    )
}

export default Layout
