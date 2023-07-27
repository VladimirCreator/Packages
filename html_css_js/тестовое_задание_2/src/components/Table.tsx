import React from "react";

export default function Table(
    { files, length, didSelectFiles, didSelectIndex }: {
        files: File[],
        length: number,
        didSelectFiles: (files: File[]) => void,
        didSelectIndex: (index: number[] | number) => void
    }
) {
    return (
        <>
            <header>
                <ol className="flex flex-col text-center
                    space-y-2
                    "
                >
                    <label className="font-semibold
                        text-sm
                        px-3 py-2
                        text-white
                        bg-indigo-600 rounded-md
                        shadow-sm
                        "
                    >
                        Выбрать файлы
                        <input className="hidden"
                            onChange={handleSelect}
                            type="file"
                            multiple={true}
                            required
                        />
                    </label>
                    {
                        files.length !== 0 &&
                        <button className="font-semibold
                            text-sm
                            px-3 py-2
                            text-white
                            bg-indigo-600 rounded-md
                            shadow-sm
                            "
                            onClick={handleSelectAll}
                            type="button"
                        >
                            Выбрать все
                        </button>
                    }
                </ol>
            </header>
            <table className="w-full">
                <thead>
                    <tr>
                        <th>Название файла</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {
                        files?.map(
                            (file, index) => (
                                <Row
                                    key={file.name}
                                    text={file.name}
                                    onClick={() => didSelectIndex(index)}
                                />
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    );
    function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files === null) {
            return;
        }
        didSelectFiles([...event.target.files]);
    }
    function handleSelectAll() {
        if (length === files.length) {
            didSelectIndex([]);
        }
        else didSelectIndex(
            Array.from(Array(files.length), (_, index) => index)
        );
    }
}
function Row(
    { text, onClick }: {
        text: string,
        onClick: () => void
    }
): React.ReactNode {
    return (
        <tr className="flex
                justify-between
                py-5
                gap-x-6
            "
            onClick={onClick}
        >
            <td className="leading-6
                font-semibold text-sm
                text-gray-900
            ">
                {text}
            </td>
        </tr>
    );
}
