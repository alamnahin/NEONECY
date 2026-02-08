import {
    Navbar,
    Hero,
    TrustedBy,
    WhatWeBuild,
    Process,
    Projects,
    WhyChooseUs,
    Team,
    CTA,
    Footer,
} from './components';

function App() {
    return (
        <div className="bg-deep-blue min-h-screen font-sans">
            <Navbar />
            <Hero />
            <TrustedBy />
            <WhatWeBuild />
            <Process />
            <Projects />
            <WhyChooseUs />
            <Team />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
