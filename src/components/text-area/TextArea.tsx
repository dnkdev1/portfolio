import './TextArea.css';
import React from "react";

export const TextArea: React.FC<{id: string, labelText: string}> =
    ({id, labelText}) => {
        return (
            <div className="text-area">
                <textarea id={id} placeholder="Text Area"/>
                <label htmlFor={id}>{labelText}</label>
            </div>
        );
    };