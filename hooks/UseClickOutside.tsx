import {useEffect, useRef} from "react";

const useClickOutside = (handler :any) => {
    let domNode = useRef()

    useEffect(() => {
        let maybeHandler = (event : any) => {
            let node : any = domNode.current;
            if (!node.contains(event.target)) {
                handler();
            }
        }
        document.addEventListener("mousedown", maybeHandler)
        return () => {
            document.removeEventListener("mousedown", maybeHandler)
        }
    })

    return domNode
}

export default useClickOutside