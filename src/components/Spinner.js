import React, { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
const Spinner = () => {
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true);
        setTimeout(() => {
            setloading(false);
        }, 2000)
    }, [])
    return (
        <>
            <BeatLoader color="#f2e59b" loading={loading} size={20} id="spinner" />
        </>
    );
}
export default Spinner;