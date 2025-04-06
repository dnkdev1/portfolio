import './TextField.css';
import React from "react";

export const TextField: React.FC<{id: string, labelText: string, type: "name" | "email" | "textarea" }> =
    ({labelText, type, id}) => {
    return (
        <div className="text-field">
            <input type={type} id={id} placeholder="Some placeholder"/>
            <label htmlFor={id}>{labelText}</label>
        </div>
    );
};

