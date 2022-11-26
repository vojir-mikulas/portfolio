import React from 'react';
import AboutCard from "../AboutCard";
import GradientCard from "../GradientCard";

const CardsContainer = () => {
    return (
        <div className={'md:container mx-auto gap-10 h-[86hv] flex'}>
                <AboutCard/>
            <GradientCard title={'Not really into IT stuff?'} subtitle={'checkout my page for normal people'}/>
        </div>
    );
};


export default CardsContainer;