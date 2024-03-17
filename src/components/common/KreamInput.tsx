import React from "react";


interface KreamInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fullWidth?: boolean;
}

export const KreamInput: React.FC<KreamInputProps> = (props, { fullWidth }) => {

    return (
        <div className={`border-b-[3px] border-b-black pb-2 ${fullWidth && 'w-full'}`}>
            <input
                {...props}
                type="text"
                className={`focus:outline-none text-black text-lg w-full font-bold ${props.className}`} />
        </div>
    )
}