import { atom, useAtom } from 'jotai';
import { useEffect } from "react";

type JWT = string | 'convidado'
const navegador = typeof window !== 'undefined'
const jwtLogin = (navegador ? localStorage.getItem('jwt') : 'convidado') as JWT;
const atomJWT = atom<JWT>(jwtLogin)

export default function useJWT() {
    const [jwt, setJWT] = useAtom(atomJWT);

    useEffect(() => {
        if (!navegador) return;
        localStorage.setItem('jwt', jwt);       
    }, [jwt]);

    return [jwt, setJWT] as const;
}