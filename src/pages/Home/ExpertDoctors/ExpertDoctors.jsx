import { useEffect, useState } from "react";
import ExpertDoctorCard from "./ExpertDoctorCard";


const ExpertDoctors = () => {

    const [doctors,setDoctors] = useState([])

    useEffect(()=>{
        fetch('/doctors.json')
        .then(res=>res.json())
        .then(data =>setDoctors(data))
    },[])
   
    return (
        <div className="my-container mt-20">
            <div className="text-center">
                <h3 className="text-4xl font-bold">Our Expert Doctors</h3>
                <p className="mt-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <br /> quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-3">
            {
                doctors?.map(doctor =><ExpertDoctorCard 
                    key={doctor._id}
                doctor={doctor}
                
                ></ExpertDoctorCard>)
                    
            }
            </div>
        </div>
    );
};

export default ExpertDoctors;