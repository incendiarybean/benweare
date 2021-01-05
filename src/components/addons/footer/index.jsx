import React from 'react';

function Component(){

    return (
        <div className="w-full absolute bottom-0 flex justify-around">
            <div className="self-center p-2 fixed invisible sm:invisible md:invisible lg:visible xl:visible bottom-0 m-2">
                <div className="inline-flex items-center bg-primary leading-none text-black rounded-full p-2 shadow text-sm">
                    <span className="inline-flex bg-accent text-white rounded-full h-6 px-2 justify-center items-center text-"><i className="fas fa-exclamation-circle"></i></span>
                    <span alt="Ben Weare, Benjamin Weare disclaimer" className="text-default inline-flex px-2">Created by Ben Weare - 2020.</span>
                </div>
            </div>
        </div>
    );

}

export default Component;