import React from "react";

export default function useCurrentTime() {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString());
    const [date, setDate] = React.useState(new Date().toLocaleDateString());

    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
        setDate(new Date().toLocaleDateString());
    }, 1000);
    return {time, date};
}