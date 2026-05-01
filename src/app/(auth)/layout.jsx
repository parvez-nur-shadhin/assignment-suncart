import Navbar from "@/Components/shared/Navbar";


const AuthenticationLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
        </div>
    );
};

export default AuthenticationLayout;