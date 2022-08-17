import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faHeart, faList, faStar} from "@fortawesome/free-solid-svg-icons";

const Card = (props) =>{

    return(
        <div className="flex font-sans mx-auto mb-5 drop-shadow-lg">
            <div className="flex-none w-56 relative">
                {/*<img src="https://i.pinimg.com/564x/95/c2/78/95c278725e13b989942ef8ebc809488a.jpg" alt="Card image" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy"/>*/}
                <img src={props.image} alt="Card image" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy"/>
            </div>

            <div className="flex-auto p-6 w-80 bg-neutral-200 my-5 rounded-r-lg">
                <div className="flex flex-wrap">
                    <h1 className="flex flex-wrap w-3/4 font-medium text-slate-900">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </h1>
                    <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                        Konosuba
                    </div>
                    <div className="text-sm font-medium text-slate-400 right-0">
                        Airing
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                    <div className="space-x-2 flex text-sm font-thin">
                        <p className="break-all">
                            this is demo paragraph goes here this is demo paragrpha goes here this is a demo paragrapha goes here
                        </p>
                    </div>
                </div>
                <div className="flex space-x-4 mb-5 text-sm font-medium">
                    <div className="flex-auto flex space-x-4">
                        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white" type="submit">
                            <FontAwesomeIcon icon={faList}/>
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white border-slate-200" type="submit">
                            <FontAwesomeIcon icon={faEye}/>
                        </button>
                        <button className="h-10 px-6 font-semibold rounded-full bg-violet-600 text-slate-900 border-slate-200" type="submit">
                            <FontAwesomeIcon icon={faHeart}/>
                        </button>
                    </div>
                </div>
                <p className="text-sm text-slate-500">
                    Free shipping on al continental US orders.
                </p>
            </div>
        </div>
    )

}

export default Card;