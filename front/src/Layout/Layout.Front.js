import React from 'react';
import Header from './Header';

const LayoutFront = ({children}) =>{
    return(
        <div className="overflow-hidden">
            <Header/>
                <div className="container min-w-full h-full flex justify-center items-center flex-wrap">
                    {children}
                </div>

        </div>
    )
}

export default LayoutFront;