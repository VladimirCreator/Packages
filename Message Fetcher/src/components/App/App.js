import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { fetchLetters } from "../../redux/slices/applicationSlice";

import LetterList from "../LetterList/LetterList";

import "./App.css";

export default function App() {
    const { letters, trailingLetterId } = useSelector(state => state.application);
    const dispatch = useDispatch();

    const [order, setOrder] = useState("date_ascending");

    const fetchOnMount = () => {
        const payload = {
            actionName: "MessagesLoad",
            messageId: trailingLetterId,
        };

        dispatch(fetchLetters(payload));
        // TODO: Handle the unmount.
        // return () => {
        //     ;
        // };
    };
    const fetchOnInterval = () => {
        const intervalID = setInterval(fetchOnMount, 5000);

        return () => {
            clearInterval(intervalID);
        };
    };

    useEffect(fetchOnMount, []);
    useEffect(fetchOnInterval, [trailingLetterId]);
    return (
        <>
            <select className="block sm:container w-full md:w-auto md:fixed bottom-0 left-0 p-3.5 mx-auto md:m-4 text-neutral-600 md:shadow-md md:rounded-lg" onChange={handleChange}>
                <option value={"date_ascending"}>От старых к новым</option>
                <option value={"date_descending"}>От новых к старым</option>
            </select>

            <LetterList letters={letters} order={order} />
        </>
    );

    function handleChange(event) {
        setOrder(event.target.value);
    };
}