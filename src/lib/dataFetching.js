export const getProducts= async() => {
    const res = await fetch('http://assignment-suncart.vercel.app/data.json', {cache: "no-store"});
    const data = await res.json();
    return data;
}

export const getSummerCareTips = async() => {
    const res = await fetch('http://assignment-suncart.vercel.app/summerCareTips.json', {cache: "no-store"});
    const data = await res.json();
    return data;
}