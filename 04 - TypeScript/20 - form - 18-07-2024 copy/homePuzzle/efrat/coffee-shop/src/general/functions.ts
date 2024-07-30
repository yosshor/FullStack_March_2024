export function getMainTag(element:string):HTMLDivElement{
    const mainTag = document.querySelector(element) as HTMLDivElement;
    return mainTag;
}