import { useEffect, useRef } from "react";

export default function LetterContent({ content, disclose, onClick }) {
    const [detailRef, pRef] = [useRef(null), useRef(null)];

    const resizeEffect = () => {
        const [detail, p] = [detailRef.current, pRef.current];

        if (detail.clientHeight === detail.scrollHeight) {
            p.setAttribute("hidden", "");
        }
        return () => {
            p.removeAttribute("hidden");
        }
    }

    useEffect(resizeEffect, [detailRef, pRef]);
    return (
        <section>
            <details className="mb-2.5 break-all line-clamp-3 open:line-clamp-none pointer-events-none" open={disclose} ref={detailRef}>
                <summary className="leading-snug text-slate-700 list-none">
                    {content}
                </summary>
            </details>

            <p className="my-2.5 text-xs leading-none text-gray-500 hover:text-blue-500 cursor-pointer" onClick={onClick} ref={pRef}>{ disclose ? "Скрыть" : "Далее" }</p>
        </section>
    );
}