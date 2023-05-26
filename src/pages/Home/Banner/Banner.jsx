
import bannerBg from '../../../assets/img/Banner/banner.png'
import d1 from '../../../assets/img/Banner/d1.png'
import d2 from '../../../assets/img/Banner/d2.png'
import d3 from '../../../assets/img/Banner/d3.png'
const Banner = () => {
    return (
        <div className=" lg:hero min-h-screen" style={{ backgroundImage: `url("${bannerBg}")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="lg:hero-content text-center text-neutral-content">
                <div className="max-w-md text-left">
                    <h1 className="mb-5 text-5xl font-bold">Your Best Medical Help Center</h1>
                    <p className="mb-5">Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                    <button className="btn btn-primary my-primary-color border-0">All Servicesh</button>
                </div>
                <div className="max-w-md ">
                    <div className='lg:flex lg:w-[633px] lg:h-[454px] overflow-hidden lg:relative'>
                        <img className='lg:absolute top-10' src={d1} alt="" />
                        <img className='lg:absolute top-40 left-32' src={d2} alt="" />
                        <img className='lg:absolute left-80 ' src={d3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;