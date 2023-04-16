import { useEffect, useRef, useState } from "react";

const Cursor = () => {
    const [isVisible, setIsVisible] = useState(true);

    const ringRef = useRef(null);
    const dotRef = useRef(null);

    const mouseMoveHandler = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        if (ringRef.current && dotRef.current) {
            // Ring
            (ringRef.current as HTMLDivElement).animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { duration: 500, easing: "ease-in", fill: "forwards" }
            );
            // Dot
            (dotRef.current as HTMLDivElement).animate(
                {
                    left: `${clientX}px`,
                    top: `${clientY}px`,
                },
                { fill: "forwards" }
            );
        }
    };

    const mouseEnterHandler = () => {
        setIsVisible(true);
    };
    const mouseLeaveHandler = () => {
        setIsVisible(false);
    };
    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseleave", mouseLeaveHandler);
        document.addEventListener("mouseenter", mouseEnterHandler);

        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
            document.removeEventListener("mouseleave", mouseLeaveHandler);
            document.addEventListener("mouseEnter", mouseEnterHandler);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <>
                    <div ref={ringRef} className="cursor_ring" />
                    <div ref={dotRef} className="cursor_dot" />
                </>
            )}
        </>
    );
};
export default Cursor;
