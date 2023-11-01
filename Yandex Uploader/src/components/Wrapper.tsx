import React from "react";

export default function Wrapper(
    { children }: {
        children: React.ReactNode
    }
) {
    return (
        <form className="max-w-lg
            mx-auto p-4
            space-y-12
            "
        >
            {children}
        </form>
    );
}
