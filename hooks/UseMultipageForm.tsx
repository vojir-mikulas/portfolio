import { ReactElement, useState } from "react"

export function useMultipageForm(pages: ReactElement[]) : any {
    const [currentPageIndex, setCurrentPageIndex] = useState<number>(0)

    const next = () => {
        setCurrentPageIndex(i => {
            if (i >= pages.length - 1) return i
            return i + 1
        })
    }

    const back = () => {
        setCurrentPageIndex(i => {
            if (i <= 0) return i
            return i - 1
        })
    }

    const goTo = (index: number) => setCurrentPageIndex(index);

    return {
        currentPageIndex,
        page: pages[currentPageIndex],
        pages,
        isFirstPage: currentPageIndex === 0,
        isLastPage: currentPageIndex === pages.length - 1,
        goTo,
        next,
        back,
    }
}