
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Home from "../../pages/Home/Home";
import './MainLayout.scss';

const MainLayout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className="layout_main">
                <Home />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
