export const getProducts= async() => {
    const res = await fetch('http://localhost:3000/data.json', {cache: "no-store"});
    const data = await res.json();
    return data;
}

export const getSummerCareTips = async() => {
    const res = await fetch('http://localhost:3000/summerCareTips.json', {cache: "no-store"});
    const data = await res.json();
    return data;
}