import bg from "../../assets/about/ab1.jpeg";
import img1 from "../../assets/about/events.jpg";
import img2 from "../../assets/about/food.jpg";
import img3 from "../../assets/about/hobby.jpg";
import img4 from "../../assets/about/nature.jpg";
import img5 from "../../assets/about/technology.jpeg";
import Add from "./Add";
// import OurStory from "./OurStory";
import Reviews from "../Review/Reviews";

const About = () => {
  return (
    <div className=" ">
      <div className="">
        <div >
          <img className="" src={bg} alt="" />
        </div>
        <div className="-mt-[75px] md:-mt-40">
          <h2 className="text-xl md:text-4xl text-center ">About Us</h2>
          <h3 className="text-xl md:text-3xl font-semibold text-center text-primary font-serif">
            Konza Events
          </h3>
          {/* <p className="uppercase text-center md:text-2xl">
            Make your dreams come to life
          </p> */}
        </div>
        
      </div><br />
      <div className=" p-3 space-y-7 mt-5 md:mt-20  md:max-w-6xl mx-auto">
        <h2 className="text-center text-3xl uppercase">
          Why choose us
        </h2>
        {/* 1 */}
        {/* <div className="md:flex gap-5 ">
          <div className="h-full w-full ">
            <img className="h-[250px] w-[350px]" src={img5} alt="" />
          </div>

          <div className="">
            <h4 className="text-2xl mb-2 mt-2 ">Original</h4>
            <p className="text-sm">
              We have the sense fresh, new and original ideas that will ensure
              the event we organize is successful, unique and memorable. And We
              are “Konza Events” With our young and creative minds, we
              always ensure that we bring out outstanding events that are easily
              distinguished from other events of the same field.
            </p>
          </div>
        </div> */}
        {/* 2 */}
        {/* <div className="md:flex flex-row-reverse gap-5 ">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px]" src={img4} alt="" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2 ">Creative</h4>
            <p>
              We are creative in every aspect of the event; planning,
              promotional and publicity as well as execution. By being creative,
              our events are more outstanding and will leave a great impact not
              just to us, but to our clients as well.
            </p>
          </div>
        </div> */}
        {/* 3 */}
        {/* <div className="md:flex gap-5 ">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px]" src={img1} alt="" />
          </div>
          <div className="lg:-ml-32">
            <h4 className="text-2xl mb-2 mt-2">Maticulous</h4>
            <p>
              We are very particular in every aspect of the event management to
              guarantee the event we organise runs perfectly and efficiently.guarantee the event we organise runs perfectly and efficiently.
            </p>
          </div>
        </div> */}
        {/* 4 */}
        <div className="md:flex gap-5 flex-row-reverse justify-center">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px]" src={img5} alt="" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Events Competency</h4>
            <p>
            With extensive experience in event organization, we recognize the numerous 
            factors pivotal to a meticulously planned and successful event. 
            These elements encompass event sponsorship, strategic event marketing 
            and promotions, and the creation of event merchandise. 
            Each aspect is meticulously managed, as they form the core components 
            of any successful event.
            </p>
          </div>
        </div>
        {/* 5 */}
        {/* <div className="md:flex gap-5 ">
          <div className="h-full w-full">
            <img className="h-[250px] w-[350px]" src={img3} alt="" />
          </div>
          <div>
            <h4 className="text-2xl mb-2 mt-2">Satisfaction</h4>
            <p>
              Of course, achieving our clients’ satisfaction is what motivates
              us to bring out the best events. We believe in the strengths of
              each of our team members and we have proved to exceed our clients’
              expectations and presenting them with successful events that raved
              fantastic reviews around the world!
            </p>
          </div>
        </div> */}
      </div>
      {/* <Add></Add> */}
      {/* <OurStory></OurStory> */}
      <Reviews></Reviews>
    </div>
  );
};

export default About;
