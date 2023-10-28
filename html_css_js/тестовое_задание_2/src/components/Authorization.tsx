import React from "react";

export default function Authorization(
    { client_id }: {
        client_id: string
    }
): React.ReactNode {
    const href: string = `https://oauth.yandex.ru/authorize?
        response_type=code&
        client_id=${client_id}
    `.replace(/\s/g, "");
    return (
        <aside className="flex flex-col
            "
        >
            <button className="font-semibold
                text-sm
                px-3 py-2
                text-white
                bg-indigo-600 rounded-md
                shadow-sm
                "
            >
                <a href={href}>
                    Авторизоваться
                </a>
            </button>
        </aside>
    );
}
