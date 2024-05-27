// import premium from "../../assets/Pricing/premium.png";
import standard from "../../assets/Pricing/standard.png";
import vip from "../../assets/Pricing/vip.png";
import Container from "../container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";
import { ImCross } from "react-icons/im";


const PricingCards = ({ ticketPriceHandle, ticketPriceHandle2 }) => {
    return (
        <section id="price">
            <Container>
                <div className="mt-3.5">
                    <SectionTitle heading={"Get Your slot"} subHeading={'Ticket Plan'}></SectionTitle>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div onClick={ticketPriceHandle2} className='border-2 hover:shadow-2xl px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
                        <img className='w-20' src={standard} alt="" />
                        <p className='text-secondary italic'>Standard ticket</p>
                        <h1 className='text-5xl font-bold pt-3 text-rose-600'>Ksh 9,000</h1>
                        <div className='text-secondary pt-3 pb-6'>
                            <p className='border-y-2 py-3 px-6'>Full access to presentations and workshops</p>
                            <p className='py-3 px-6 flex items-center gap-2'><ImCross className="text-red-600"/>Video presentations</p>
                            <p className='border-y-2 py-3 px-6 flex items-center gap-2'><ImCross className="text-red-600"/>Meet the event speakers</p>
                        </div>
                        <button className='py-3 hover:border-rose-600 px-6 border-2 border-b-4 border-r-4 border-black'>
                            Select
                        </button>
                    </div>

                    <div onClick={ticketPriceHandle} className='border-2 hover:shadow-2xl px-8 my-6 py-8 flex flex-col justify-center items-center space-y-2'>
                        <img className='w-20' src={vip} alt="" />
                        <p className='text-secondary italic'>VIP ticket</p>
                        <h1 className='text-5xl font-bold pt-3 text-rose-600'>Kshs 16,000</h1>
                        <div className='text-secondary pt-3 pb-6'>
                            <p className='border-y-2 py-3 px-6'>Full access to presentations and workshops</p>
                            <p className='py-3 px-6'>Video presentations</p>
                            <p className='border-y-2 py-3 px-6'>Meet the event speakers</p>
                        </div>
                        <button className='py-3 px-6 hover:border-rose-600 border-2 border-b-4 border-r-4 border-black'>
                            Select
                        </button>
                    </div>
                </div>

            </Container>
        </section>
    );
};

export default PricingCards;
