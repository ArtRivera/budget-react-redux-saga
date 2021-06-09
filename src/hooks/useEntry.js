import React, { useState } from 'react';

const formInitialState = {
    description: "",
    value: "",
}
export const useEntry = () => {

    const [form, setForm] = useState(formInitialState);
    const [isExpense, setIsExpense] = useState(true);

    const resetEntry = () => {
        setForm(formInitialState);
        setIsExpense(true);
    }

    const { description, value } = form;

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleToggle = () => {
        setIsExpense((old) => !old);
    };

    return {
        description,
        value,
        isExpense,
        resetEntry,
        handleChange,
        handleToggle,
        setForm,
        setIsExpense
    }
}