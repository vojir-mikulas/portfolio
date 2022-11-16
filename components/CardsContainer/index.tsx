import React from 'react';
import AboutCard from "../AboutCard";
import GradientCard from "../GradientCard";

const CardsContainer = () => {
    return (
        <div className={'md:container mx-auto flex gap-10 h-[86hv]'}>
            <div className={'flex flex-col gap-10'}>
                <AboutCard/>

            </div>
            <GradientCard title={'Not really into IT stuff?'} subtitle={'checkout my page for normal people'}/>
        </div>
    );
};


export default CardsContainer;