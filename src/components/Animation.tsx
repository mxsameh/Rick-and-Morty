import { useEffect } from "react";
import SplitType from "split-type";
import { gsap } from "gsap";

interface Iprops {
    viewContent: () => void;
}

const Animation = ({ viewContent }: Iprops) => {
    const startAnim = () => {
        const tl = gsap.timeline({ onComplete: () => viewContent() });
        tl.to(".animation_box", {
            y: 0,
            duration: 1,
            delay: 0.5,
            ease: "power4.out",
        })
            .to("#splitTarget .char", {
                y: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "power3.out",
            })
            .to(".animation_box", {
                opacity: 0,
                duration: 2,
            });
    };

    useEffect(() => {
        const chars = new SplitType("#splitTarget", { types: "chars" });
        startAnim();
    }, []);

    return (
        <div className="animation_box">
            <h1 id="splitTarget" className="animation_text">
                Rich & Morty
            </h1>
        </div>
    );
};

export default Animation;
