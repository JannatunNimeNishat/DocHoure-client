import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FaMapMarkerAlt, FaCalendar, FaDollarSign } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ExpertDoctorCard = ({ doctor }) => {
    console.log(doctor);
    const { _id, img, doctor_name, position, rating, location, availability_date, price } = doctor;
    return (
        <div className="card bg-base-100 shadow-xl mx-10 lg:mx-0 mt-3 lg:mt-0">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{doctor_name}</h2>
                <p>{position}</p>
                <p className='mt-3'><Rating style={{ maxWidth: 100 }} value={rating} readOnly /></p>
                <div className="divider"></div>
                <p className='flex items-center gap-3'>
                    <FaMapMarkerAlt className='h-5 w-5' />
                    {location}
                </p>
                <p className='flex items-center gap-3'>
                    <FaCalendar className='h-5 w-5' />
                    {availability_date}
                </p>
                <p className='flex items-center gap-3'>
                    <FaDollarSign className='h-5 w-5' />
                    {price}
                </p>
                <div className="card-actions w-full mt-3">
                    <Link to={`/doctorProfile/${_id}`} className="btn btn-primary w-full my-primary-color border-0 ">View Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default ExpertDoctorCard;