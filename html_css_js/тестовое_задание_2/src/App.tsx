import React, {
    useState
} from "react";

import Wrapper from "./components/Wrapper";
import Authorization from "./components/Authorization";
import Table from "./components/Table";

import useAccessToken from "./hooks/useAccessToken";
import useSearchParams from "./hooks/useSearchParams";

export default function App() {
    const [files, setFiles] = useState<File[]>([]);
    const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
    const accessToken = useAccessToken(useSearchParams("code"));
    return (
        <Wrapper>
            {
                accessToken ? (
                    <>
                        <header>
                            <h1 className="leading-7
                                font-semibold text-base
                                text-gray-900
                                "
                            >
                                Выбрано {selectedIndices.length} файлов.
                            </h1>
                        </header>
                        <section className="flex flex-col">
                            <button className="font-semibold
                                text-sm
                                px-3 py-2
                                text-white
                                bg-indigo-600 rounded-md
                                shadow-sm
                                "
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Опубликовать {selectedIndices.length} файлов
                            </button>
                        </section>
                        <main className="space-y-4">
                            <Table
                                files={files}
                                length={selectedIndices.length}
                                didSelectFiles={handleSelectFiles}
                                didSelectIndex={handleSelectIndex}
                            />
                        </main>
                    </>
                ) : (
                    <Authorization client_id="940cc0d16be84a6581e4e5c7e0a812d4" />
                )
            }
        </Wrapper>
    );
    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        selectedIndices.forEach(
            (selectedIndex) => {
                fetch(
                    "https://cloud-api.yandex.net/v1/disk/resources/upload?path=disk:/".concat(files![selectedIndex!].name),
                    {
                        headers: new Headers(
                            {
                                Authorization: "OAuth ".concat(accessToken!)
                            }
                        )
                    }
                )
                .then(
                    (response) => {
                        return response.json();
                    }
                )
                .then(
                    async (response) => {
                        fetch(
                            response.href,
                            {
                                method: "PUT",
                                body: await files![selectedIndex!].arrayBuffer()
                            }
                        )
                    }
                )
            }
        );
    }
    function handleSelectFiles(files: File[]) {
        setFiles(files);
    }
    function handleSelectIndex(index: number | number[]) {
        if (Array.isArray(index)) {
            setSelectedIndices(index);
            return;
        }
        const hasIndex: boolean = selectedIndices.includes(index);
        if (hasIndex) {
            setSelectedIndices(
                selectedIndices.filter(selectedIndex => selectedIndex !== index)
            );
        }
        else {
            setSelectedIndices(
                [...selectedIndices, index]
            );
        }
    }
}
