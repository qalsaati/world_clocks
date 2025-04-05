import { useState, useEffect } from "react";

export default function Clock({ timeZone }) {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timeId = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(timeId);
    }, []);

    const localizedDate = date.toLocaleString('en-US', { timeZone });
    return <p>{localizedDate}</p>;
}