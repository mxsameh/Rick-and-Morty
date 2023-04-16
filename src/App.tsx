import Characters from "./components/Characters";
import Animation from "./components/Animation";
import { useState } from "react";

function App() {
    const [animationStatus, setAnimationStatus] = useState<boolean>(true);

    const viewContent = () => {
        setAnimationStatus(false);
    };

    return (
        <>
            {animationStatus && <Animation viewContent={viewContent} />}
            {!animationStatus && <Characters />}
        </>
    );
}

export default App;
