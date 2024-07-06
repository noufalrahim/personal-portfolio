import React from "react";

export default function H4({ title }: {title: string}) {
    return (
        <h4 className="dark:text-white text-black text-2xl mb-5 text-center">
            <code>
                {title}
            </code>
        </h4>
    )
}