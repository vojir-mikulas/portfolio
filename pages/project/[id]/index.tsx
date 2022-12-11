import React from 'react';
import {useRouter} from "next/router";
import cat from "../../../public/404cat.svg";
import {motion} from 'framer-motion';
import {useCollection, useDocumentData} from "react-firebase-hooks/firestore";
import {collection, doc} from "firebase/firestore";
import {db, storage} from "../../../lib/firebase";
import {useDownloadURL} from "react-firebase-hooks/storage";
import { ref } from 'firebase/storage';


const ProjectDetail = () => {
    const router = useRouter()
    const {id} = router.query
    const [project, projectLoading, projectError] = useDocumentData<any>(doc(db,'projects', `${id}`));

    if (projectLoading) return <div></div>;
    return (
        <motion.main className={'flex flex-col dark:bg-neutral-900 dark:text-white bg-white pt-32'}>
            <section className={' md:container mx-auto '}>
                <h1 className={'text-8xl font-bold font-oswald text-center mb-20'}>{project.name}</h1>
                <div className={'grid grid-cols-3  text-center  gap-10'}>
                    <ProjectInfoCard className={' h-52 '} title={'TECHSTACK'}>
                        <div className={'text-xl flex justify-between w-72'}>{project.stack.map((path : any) => <Logo key={path} path={path}/>)}</div>
                    </ProjectInfoCard>
                    <YearCard className={' h-52 '} title={'ROK'}>
                        <div className={'text-5xl font-bold'}>{project.year}</div>
                    </YearCard>
                    <ProjectInfoCard className={'row-span-3 h-auto '} title={'ODKAZY'}>
                        <div className={'text-2xl flex flex-col items-center justify-center text-left'}>
                            {project.links.map((link : any)=>(
                                <a className={'interactable cursor-pointer'} key={link.name}>{link}</a>
                            ))}
                        </div>
                    </ProjectInfoCard>
                    <ProjectInfoCard className={'col-span-2 row-span-2 h-auto text-left'} title={'POPIS'}>
                        <div>
                            {project.description}
                        </div>
                    </ProjectInfoCard>
                </div>

            </section>
            <section className={'grid grid-cols-1 gap-10 place-items-center py-20'}>
                <h2 className={'text-5xl font-light tracking-[0.25em]'}>SCREENSHOTS</h2>
                {project.screenshots.map((screenshot:string)=>(
                    <Screenshot key={screenshot} path={screenshot}/>
                    ))}
            </section>
        </motion.main>
    );
};


const ProjectInfoCard: React.FC<any> = ({children, title, className}) => {

    return (
        <div
            className={'bg-neutral-100 dark:bg-neutral-700 relative flex items-center justify-center rounded-md  py-10 px-5 ' + className}>
            <div> {children}</div>
            <h3 className={'absolute text-neutral-500 text-3xl font-bold -bottom-4 right-5'}>{title}</h3>
        </div>
    );
};

const Screenshot : React.FC<{path:string}> = ({path}) => {
    const [screenshot, loading, error] = useDownloadURL(
        ref(storage, `projects/${path}`)
    );

    return (
        <div className={'w-full  bg-red-400  md:container mx-auto '}>
            {loading && <div>loading</div>}
            {(!loading && error) && <div>error</div>}
            {(!loading && screenshot) && <img className={'w-full'} src={screenshot} alt="screenshot"/>}
        </div>
    );
};
const Logo : React.FC<{path:string}> = ({path}) =>{
    const [screenshot, loading, error] = useDownloadURL(
        ref(storage, `${path}`)
    );
    return (
      <div className={'h-20 w-20 '}>
          {(!loading && screenshot) && <img src={screenshot} alt=""/>}
      </div>  
    );
}

const YearCard: React.FC<any> = ({children, title, className}) => {
    return (
        <div
            className={'bg-neutral-100 dark:bg-neutral-700 relative flex items-center justify-center rounded-md  py-10 px-5 overflow-hidden' + className}>
            <div className={'relative z-10'}> {children}</div>
            <h3 className={'absolute text-neutral-500 text-[290px] font-bold opacity-10 '}>{title}</h3>
        </div>
    );
};

export default ProjectDetail;