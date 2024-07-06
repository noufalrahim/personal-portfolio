import React from "react";

export default function H6({ title }: {title: string}) {
    return (
            <h4 className="dark:text-white text-black text-lg mb-5 text-center">
                <code>
                    {title}
                </code>
            </h4>
    )
}