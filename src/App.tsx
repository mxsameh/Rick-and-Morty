import Characters from "./components/Characters";
import Animation from "./components/Animation";
import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";

function App() {
    const [animationStatus, setAnimationStatus] = useState<boolean>(true);

    const viewContent = () => {
        setAnimationStatus(false);
    };

    return (
        <>
            <Cursor />
            {animationStatus && <Animation viewContent={viewContent} />}
            {!animationStatus && <Characters />}
        </>
    );
}

export default App;
