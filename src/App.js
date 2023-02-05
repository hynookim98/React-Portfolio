import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
    const [pages] = useState([
        {name: "home"},
        {name: "about me"},
        {name: "service"},
        {name: "portfolio"},
        {name: "contact"},
        {name: "resume"}
    ]);

    const [currentPage, setCurrentPage] = useState(pages[0]);

    return (
        <div>
            <Header>
                <Nav
                  pages={pages}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                ></Nav>
            </Header>
            <main>
                <Page currentPage={currentPage}></Page>
            </main>
            <Footer />
        </div>
    );
}

export default App;