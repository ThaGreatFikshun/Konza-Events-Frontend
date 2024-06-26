// import banner from '../../assets/booking/banner.jpg';
import organizer from "../../assets/Organizer/organizer.jpeg";



const Banner = () => {
    return (
        <section className="bg-cover bg-center bg-no-repeat bg-fixed h-[100vh]" style={{ backgroundImage: `url('${organizer}')` }}>
            <div className='bg-black bg-opacity-25 h-[100vh] flex items-center justify-center'>
                <div>
                    <h2 className='text-3xl md:text-7xl text-center max-w-4xl mx-auto font-bold text-white'>Innovate Konza - Make it Green</h2>
                    <p className='text-2xl text-center text-black font-medium mt-5'><span className=' bg-primary hover:bg-gradient-to-br p-1 px-2 rounded-full font-bold'>Konza Technopolis</span></p>
                </div>
            </div>
        </section>
    );
};

export default Banner;