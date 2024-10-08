// import React, { Children } from 'react'
// import Header from './Header'
// import Footer from './Footer'

// const Layout = ({children}) => {
//   return (
//     <>
//       <Header/>
//         {children}
//       <Footer/>
//     </>
//   )
// }

// export default Layout

import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Loader from '../utils/Loader/Loader'

const Layout = ({ children }) => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)
        }, 2500);
    }, [])

    return (
        <>
            {loader ? (<Loader />) : (
                <>
                    <Header />

                    {children}

                    <Footer />
                </>
            )}

        </>
    )
}

export default Layout
