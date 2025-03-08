import React from "react"

// components
import Header from "./components/header"
import Showcase from "./components/showcase"
import GridCards from "./components/grid-cards"
import Banner from "./components/banner"
import News from "./components/news"
import Footer from "./components/footer"

const App = () => {
    return (
        <>
            <Header />
            <Showcase />
            <GridCards />
            <Banner />
            <News />
            {/* <Footer /> */}
        </>
    )
}

export default App
