import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faContactCard} from "@fortawesome/free-regular-svg-icons";
import LayoutFront from "../../Layout/Layout.Front";
import {faLink} from "@fortawesome/free-solid-svg-icons";
import Card from "../../Components/Card";


const ProfilePage = (props) => {
    return(
        <LayoutFront>
            <div className="h-screen w-full bg-cover flex justify-center items-center">
                <div className="w-1/2 h-full justify-start ml-16 flex items-start mt-72">
                    <div className="container flex justify-around items-center shadow-2xl w-5/6 h-1/2 bg-white rounded-2xl flex-col">
                        <div className="h-3/4 w-full flex">
                            <div className="justify-items-start flex w-1/3 h-full">
                                <img src="https://i.pinimg.com/564x/c9/00/2b/c9002bb2b9f51f189a584f3d6c5b304d.jpg" className="h-80 rounded-full border-amber-300 border-2 -ml-12 -mt-12"/>
                            </div>
                            <div className="justify-start items-start flex flex-col w-2/3 h-full pt-20 pr-10">
                                <h1 className="text-gray-700 text-4xl font-thin relative drop-shadow-xl w-full">Random User</h1>
                                <div className="bg-pink-200 w-full p-3 rounded-2xl drop-shadow-xl mt-5 flex flex-col">
                                    <div className="w-5/6 p-3 rounded-2xl drop-shadow-xl mt-5 flex">
                                        <FontAwesomeIcon icon={faContactCard} className="text-4xl"/>
                                        <h1 className="ml-2 text-2xl">@Choumuske</h1>
                                    </div>
                                    <div className="w-full p-3 rounded-2xl drop-shadow-xl mt-5 flex">
                                        <FontAwesomeIcon icon={faLink} className="text-4xl"/>
                                        <h1 className="ml-2 text-2xl">@Choumuske</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-1/4 w-full flex p-3">
                            <p className="font-thin font">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center h-full pt-8 pb-16 flex-wrap overflow-y-auto no-scrollbar">
                    <Card image="https://i.pinimg.com/564x/af/ab/4b/afab4b7d6c20051d7e0d63ef326bb2a8.jpg"/>
                    <Card image="https://i.pinimg.com/564x/55/2e/f2/552ef2c60a8a9d51a119690237aeda99.jpg"/>
                    <Card image="https://i.pinimg.com/564x/fd/da/8d/fdda8d19127b5c865a4fc4395752322b.jpg"/>
                    <Card image="https://i.pinimg.com/564x/71/53/c8/7153c8b5f8eea767c1e03dc3bdf4b2c2.jpg"/>
                    <Card image="https://i.pinimg.com/564x/5b/2a/b5/5b2ab542cb5a2978b7f699c0af36b5f1.jpg"/>
                    <Card image="https://i.pinimg.com/564x/fd/da/8d/fdda8d19127b5c865a4fc4395752322b.jpg"/>
                    <Card image="https://i.pinimg.com/564x/71/53/c8/7153c8b5f8eea767c1e03dc3bdf4b2c2.jpg"/>
                    <Card image="https://i.pinimg.com/564x/5b/2a/b5/5b2ab542cb5a2978b7f699c0af36b5f1.jpg"/>
                </div>
            </div>
        </LayoutFront>
    )
}

export default ProfilePage;