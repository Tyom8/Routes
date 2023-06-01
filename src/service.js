const zapros = "http://localhost:3006/results";

export const fn = async () => {
    const res = await fetch(zapros);
    return await res.json();
}
