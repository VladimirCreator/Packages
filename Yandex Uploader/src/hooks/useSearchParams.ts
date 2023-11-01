export default function useSearchParams(param: string): string | null {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
