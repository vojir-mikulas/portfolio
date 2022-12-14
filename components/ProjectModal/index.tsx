import {AnimatePresence, motion} from 'framer-motion';
import React, {useContext, useState} from 'react';
import {useMultipageForm} from "../../hooks/UseMultipageForm";
import useClickOutside from "../../hooks/UseClickOutside";

const formContext = React.createContext<any>({})

interface props{
    isOpen : boolean;
    setIsOpen: any;
}
const ProjectStart : React.FC<props> = ({isOpen,setIsOpen}) => {
    const [projectType,setProjectType] = useState<string>('');
    const [projectDescription,setProjectDescription] = useState<string>('');
    const [projectBudget,setProjectBudget] = useState<string>('');
    const [projectDeadline,setProjectDeadline] = useState<string>('');

    const [name,setName] = useState<string>('');
    const [company,setCompany] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [phone,setPhone] = useState<string>('');
    const [message,setMessage] = useState<string>('');

    const modal : any = useClickOutside(()=> (setIsOpen(false)))
    const { pages, currentPageIndex, page, isFirstPage, isLastPage, back, next } =
        useMultipageForm([
            <ProjectType key={'ProjectType'}/>,
            <ProjectDescription key={'ProjectDescription'}/>,
            <ProjectBudget key={'ProjectBudget'}/>,
            <ProjectDeadline key={'ProjectDeadline'} />,
            <MessageForm key={'MessageForm'}/>
        ])

    return (
        <div
            className={'fixed flex items-center bg-[rgba(0,0,0,0.5)] justify-center top-0 bottom-0 left-0 right-0 z-50'}>
            <motion.div
                ref={modal}
                initial={{scale:0,opacity:0}}
                animate={{scale:1,opacity:1}}
                exit={{scale:0,opacity:0}}
                transition={{duration:0.4,type:'spring'}}
                className={'sm:container w-full min-h-[80vh] py-16 bg-white rounded-md  relative origin-bottom'}>
                <div className={'w-1/2 mobile:w-[90%] h-full flex flex-col items-center mt-5  mx-auto  text-xl'}>
                    <formContext.Provider value={{
                        pages, currentPageIndex, page, isFirstPage, isLastPage, back, next,setProjectType,setProjectDescription
                    }}>
                        <span className={'text-2xl italic my-4'}> {`${currentPageIndex + 1}/${pages.length}`}</span>
                            {page}
                    </formContext.Provider>
                </div>
                <button onClick={()=> setIsOpen(false)} className={'absolute top-0 right-0 text-5xl mr-8 mt-8'}>X</button>
                {!isFirstPage && <button onClick={()=> back()} className={'absolute left-0 bottom-0 text-2xl ml-8 mb-8'}> Back </button>}
            </motion.div>
        </div>
    );
};

const ProjectType : React.FC<any> = ()=>{
    const {setProjectType,next} = useContext(formContext)
    const handleOnClick = (type : string) =>{
        setProjectType(type);
        next();
    }
    return <motion.div
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-50}}
    className={'flex flex-col justify-center items-center'}
    >
        <h1 className={'text-4xl font-bold text-center w-max mobile:text-2xl'}>Co potřebujete?</h1>
        <div className={'flex flex-wrap items-center justify-center gap-5 my-10 w-full '}>
            <Button onClick={()=> handleOnClick('website')}> Webovou stránku</Button>
            <Button onClick={()=> handleOnClick('webdesign')}> Návrh webové stránky</Button>
            <Button onClick={()=> handleOnClick('website+webdesign')}> Webovou stránku + Návrh</Button>
        </div>
    </motion.div>
}

const ProjectDescription = () => {
    const {setProjectDescription,next} = useContext(formContext)
    return (
        <motion.div
            initial={{opacity:0,y:-50}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0,y:-50}}
            className={'flex flex-col justify-center items-center'}>
            <h1 className={'text-3xl font-bold text-center  w-max mobile:text-2xl'}>Čeho se snažíte dosáhnout? <br/>
                Co je vaším cílem?</h1>
            <div className={'flex flex-col flex-wrap items-center justify-center gap-5 my-10 w-full '}>
                <textarea className={'w-full max-h-40 h-40 overflow-y-scroll min-h-[10rem]  bg-gray-200 rounded-md p-2 '}></textarea>
                <Button onClick={()=> next()}> Další </Button>
            </div>
        </motion.div>
    );
};

const ProjectBudget = () =>{
    const {setProjectType,next} = useContext(formContext)
    const handleOnClick = (type : string) =>{

        next();
    }
    return <motion.div
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-50}}
        className={'flex flex-col justify-center items-center'}>
        <h1 className={'text-4xl font-bold text-center   mobile:text-3xl'}>Jaký je váš rozpočet k dosažení tohoto cíle?</h1>
        <div className={'flex flex-wrap items-center justify-center gap-5 my-10 w-full '}>
            <Button onClick={()=> handleOnClick('60€-500€')}> 1000Kč - 8000Kč </Button>
            <Button onClick={()=> handleOnClick('500€-100€')}> 8000Kč - 15 000Kč</Button>
            <Button onClick={()=> handleOnClick('+1000€')}> 15000Kč +</Button>
        </div>
    </motion.div>
}

const ProjectDeadline = () =>{
    const {setProjectType,next} = useContext(formContext)
    const handleOnClick = (type : string) =>{

        next();
    }
    return <motion.div
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-50}}
                        className={'flex flex-col justify-center items-center'}>
        <h1 className={'text-4xl font-bold text-center w-max'}>Dokdy potřebujete mít projekt hotový?</h1>
        <div className={'flex flex-wrap items-center justify-center gap-5 my-10 w-full '}>
            <Button onClick={()=> handleOnClick('ASAP')}> Co nejdříve</Button>
            <Button onClick={()=> handleOnClick('2months')}> V příštích 2 měsících</Button>
            <Button onClick={()=> handleOnClick('6months')}> Do 4 měsíců</Button>
            <Button onClick={()=> handleOnClick('anytime')}> Není třeba spěchat</Button>
        </div>
    </motion.div>
}

const MessageForm = () =>{
    return <motion.div
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-50}}
        className={'flex flex-col justify-center items-center h-full  '}>
        <h1 className={'text-4xl font-bold text-center mobile:text-2xl'}>Nakonec, prosím vyplňte kontaktní údaje abych se Vám mohl co nejdříve ozvat.</h1>
        <div className={' grid-cols-2 grid gap-3 my-6  mobile:grid-cols-1   h-full'}>
            <input type="text" placeholder={'Jméno a přijmení'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <input type="text" placeholder={'Firma'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <input type="text" placeholder={'Email'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <input type="text" placeholder={'Telefoní číslo'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <textarea  className={'bg-gray-200 col-span-2 mobile:col-span-1 w-full max-h-40 h-40 overflow-y-scroll min-h-[10rem] p-2 rounded-md'} placeholder={'Zpráva'}></textarea>
            <div className={'col-span-2 mobile:col-span-1 flex items-center justify-center'}><Button onClick={()=> alert('send')} className={'mt-5'}> Odeslat</Button></div>
        </div>
    </motion.div>
}

const Button : React.FC<any> = ({children,onClick, className = ''}) => {
    return (

            <motion.button
                initial={{
                    y:0
                }}
                whileHover={{
                    y:-5
                }}
                onClick={(e)=> onClick(e)}
                className={'bg-gray-900 text-xl text-white rounded-md py-4 px-5 w-72 interactable ' + className}>  {children}  </motion.button>

    );
};


export default ProjectStart;