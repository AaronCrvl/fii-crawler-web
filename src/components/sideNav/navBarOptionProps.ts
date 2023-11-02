export type navbarOptionProps = {
    optionIcon : string,
    optionText : string,
    urlPath : string,    
    convidado : boolean,
    subOptins? : navbarOptionProps[]
}