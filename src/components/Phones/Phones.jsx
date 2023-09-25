/* eslint-disable react/prop-types */

import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
    
    return (
        <div className="py-7">
            <h2 className="text-2xl font-bold text-center">All Categories Phone</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    phones?.map(phone =><PhonesCard key={phone.id} phone={phone}></PhonesCard>)
                }
            </div>
          
        </div>
    );
};

export default Phones;