import React from 'react';

const Testemonials = () => {
    return (
        <div className={'md:container mx-auto h-[50vh]'}>
            <h2 className={'text-center text-5xl font-bold my-16'}>Co o mně říkají klienti</h2>
            <div className={'flex gap-10 '}>
                <Card author={'Libor Fiala'}> Jó, už od prváku jsem si říkal, že Mikuláš bude chábr.</Card>
                <Card author={'Martin Vodička'} avatar={'https://www.focuson.cz/wp-content/uploads/2022/11/Martin_Vodicka_reditel_SSSVT_mensi-e1669274608310.jpg'}> Pane Vojíři, Vy kouříte?</Card>
                <Card> Jó, už od prváku jsem si říkal, že Mikuláš bude chábr.</Card>
            </div>
        </div>
    );
};


const Card : React.FC<any> = ({children,author,avatar}) => {
    return (
        <div className={'bg-neutral-100 w-[30vw] h-[250px] relative flex flex-col items-center justify-center rounded-xl'}>
            <div className={'bg-white w-32 h-32 rounded-full absolute -top-10 overflow-hidden'}>
                <img src={avatar} alt="" className={'w-full h-full object-cover'}/></div>
           <blockquote className={'text-center relative'}><span className={'text-8xl absolute -left-10 -bottom-5'}>„</span><p>{children}</p><span className={'text-8xl absolute -right-10 -top-5'}>“</span></blockquote>
            <h3 className={'absolute -bottom-5 right-10 origin-center text-4xl'}>{author}</h3>
        </div>
    );
};

export default Testemonials;