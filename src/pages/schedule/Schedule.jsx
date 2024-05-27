// import Breadcrumb from "../../components/shared/breadcrumb/Breadcrumb";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Container from "../../components/container/Container";

const Schedule = () => {
    return (
        <Container>
            {/* <Breadcrumb /> */}
            <div className="py-5">
                <h3 className="text-center uppercase text-secondary font-extrabold text-3xl">
                    Recent Event Schedule
                </h3>
                <h3 style={{WebkitTextStrokeWidth:'1px', WebkitTextStrokeColor: '#E2251D'}} className="text-5xl text-white font-bold text-center py-2">
                    {new Date().toLocaleDateString()}
                </h3>
            </div>
        </Container>
    );
};

export default Schedule;
