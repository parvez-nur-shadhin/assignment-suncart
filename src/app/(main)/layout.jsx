import Navbar from "@/Components/shared/Navbar";


const MainLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default MainLayout;