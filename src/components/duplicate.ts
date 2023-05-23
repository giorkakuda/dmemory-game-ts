import { cardProps } from "./card";
import { data } from "./data";

const keyGen = (): string => {
    return (
        Math.random().toString(36).substring(2, 15) + 
        Math.random().toString(36).substring(2, 15)
    )
}
export const duplicateArray = <T>(array: T[]): T[] => {
    return array.concat(array);
}; 

export  const sortArray= <T>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
};

export const regenerateCard = (data: cardProps[]): cardProps[] => {
    return data.map((datas) => ({ ...datas,id: keyGen()}));
}

export const duplicateRegenerateSortArray = (cards: cardProps[]): cardProps[] => {
    return sortArray(regenerateCard(duplicateArray(cards)));
};

console.log(duplicateRegenerateSortArray(data));
