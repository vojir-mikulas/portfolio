import {AnimatePresence, motion} from 'framer-motion';
import React, {useContext, useState} from 'react';
import {useMultipageForm} from "../../hooks/UseMultipageForm";

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


    const { pages, currentPageIndex, page, isFirstPage, isLastPage, back, next } =
        useMultipageForm([
            <ProjectType key={'ProjectType'}/>,
            <ProjectDescription key={'ProjectDescription'}/>,
            <ProjectBudget key={'ProjectBudget'}/>,
            <ProjectDeadline key={'ProjectDeadline'} />,
            <MessageForm key={'MessageForm'}/>
        ])

    return (
        <motion.div

            className={'fixed flex items-center bg-[rgba(0,0,0,0.5)] justify-center top-0 bottom-0 left-0 right-0 z-50'}>
            <motion.div
                initial={{scaleY:0,opacity:0}}
                animate={{scaleY:1,opacity:1}}
                exit={{scaleY:0,opacity:0}}
                className={'sm:container w-full min-h-[80vh] bg-white rounded-md  relative origin-top'}>
                <div className={'w-1/2 h-full flex flex-col items-center mt-24  mx-auto  text-xl'}>
                    <formContext.Provider value={{
                        pages, currentPageIndex, page, isFirstPage, isLastPage, back, next,setProjectType,setProjectDescription
                    }}>
                        <span className={'text-2xl italic my-4'}> {`${currentPageIndex + 1}/${pages.length}`}</span>
                        <AnimatePresence>
                            {page}
                        </AnimatePresence>
                    </formContext.Provider>
                </div>
                <button onClick={()=> setIsOpen(false)} className={'absolute top-0 right-0 text-5xl mr-8 mt-8'}>X</button>
                {!isFirstPage && <button onClick={()=> back()} className={'absolute left-0 bottom-0 text-2xl ml-8 mb-8'}> Back </button>}
            </motion.div>
        </motion.div>
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
        <h1 className={'text-4xl font-bold text-center w-max'}>What do you need?</h1>
        <div className={'flex flex-wrap items-center justify-center gap-5 my-10 w-full '}>
            <Button onClick={()=> handleOnClick('website')}> Website</Button>
            <Button onClick={()=> handleOnClick('webdesign')}> Webdesign</Button>
            <Button onClick={()=> handleOnClick('website+webdesign')}> Website + Webdesign</Button>
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
            <h1 className={'text-4xl font-bold text-center w-max'}>What kind of problem are you facing? <br/>
            What are your goals you want to achieve?</h1>
            <div className={'flex flex-col flex-wrap items-center justify-center gap-5 my-10 w-full '}>
                <textarea className={'w-full max-h-40 h-40 overflow-scroll bg-gray-200 rounded-md p-2 '}></textarea>
                <Button onClick={()=> next()}> Next </Button>
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
        <h1 className={'text-4xl font-bold text-center w-max'}>What is your budget to achieve these objectives?</h1>
        <div className={'flex flex-wrap items-center justify-center gap-5 my-10 w-full '}>
            <Button onClick={()=> handleOnClick('60€-500€')}> 60 € - 500 €</Button>
            <Button onClick={()=> handleOnClick('500€-100€')}> 500 € - 1000 €</Button>
            <Button onClick={()=> handleOnClick('+1000€')}> + 1000 €</Button>
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
        <h1 className={'text-4xl font-bold text-center w-max'}>When do you need it?</h1>
        <div className={'flex flex-wrap items-center justify-center gap-5 my-10 w-full '}>
            <Button onClick={()=> handleOnClick('ASAP')}> As soon as possible</Button>
            <Button onClick={()=> handleOnClick('2months')}> In the next 2 months</Button>
            <Button onClick={()=> handleOnClick('6months')}> Within 4 months</Button>
            <Button onClick={()=> handleOnClick('anytime')}> There is no rush</Button>
        </div>
    </motion.div>
}

const MessageForm = () =>{
    return <motion.div
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-50}}
        className={'flex flex-col justify-center items-center'}>
        <h1 className={'text-4xl font-bold text-center '}>Finally, please fill in your details so that I can get back to you as soon as possible.</h1>
        <div className={'grid-cols-2 grid gap-3 my-6  place'}>
            <input type="text" placeholder={'Name'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <input type="text" placeholder={'Company'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <input type="text" placeholder={'Email'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <input type="text" placeholder={'Phone number'} className={'bg-gray-200 py-2 px-4 rounded-md'}/>
            <textarea  className={'bg-gray-200 col-span-2 w-full max-h-40 h-40 overflow-scroll p-2 rounded-md'} placeholder={'Message'}></textarea>
            <div className={'col-span-2 flex items-center justify-center'}><Button onClick={()=> alert('send')} className={'mt-5'}> Send</Button></div>
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
                className={'bg-gray-900 text-xl text-white rounded-md py-4 px-5 w-72 ' + className}>  {children}  </motion.button>

    );
};


export default ProjectStart;