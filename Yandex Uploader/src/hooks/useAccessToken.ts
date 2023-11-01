import {
    useState,
    useEffect
} from "react";

const url: string = "https://oauth.yandex.ru/token";
const headers = new Headers();
headers.append("Content-Type", "application/x-www-form-urlencoded")
const body: string = "\
    client_id=940cc0d16be84a6581e4e5c7e0a812d4&\
    client_secret=d4e27bd3167d459c93f679dec1b67e5e&\
    grant_type=authorization_code&\
    code=\
".replace(/\s/g, "");
export default function useAccessToken(code: string | null = null): string | null {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("access_token"));
    useEffect(
        () => {
            if (typeof code === "object") {
                return;
            }
            const controller = new AbortController();
            const init: RequestInit = {
                method: "POST",
                headers,
                body: body.concat(code!),
                signal: controller.signal
            };
            fetch(url, init)
                .catch()
                .then(
                    (response) => {
                        return response.json();
                    }
                )
                .then(
                    (response) => {
                        if (!("access_token" in response)) {
                            return;
                        }
                        localStorage.setItem("access_token", response.access_token);
                        setAccessToken(response.access_token);
                    }
                );
            return () => {
                controller.abort();
            }
        },
        [code]
    );
    return accessToken;
}
