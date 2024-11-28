
import React from 'react';


const Map = () => {
    return (
        <div className='text-center pt-[20px] md:block hidden' >
            {/* <h1>Location: Eiffel Tower, Paris, France</h1> */}
            <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" 
                width="100%" 
                height="940" 
               
                style={{border: 0}}
                allowFullScreen
                title="Eiffel Tower Map"
            />
        </div>
    );
}

export default Map;
