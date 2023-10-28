import { atom, useAtom } from 'jotai';
import { useEffect } from "react";

type Tema = 'light' | 'dark'
const navegador = typeof window !== 'undefined'
const temaSistema: Tema = navegador && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const temaAplicacao = (navegador ? localStorage.getItem('tema') : 'light') as Tema;
const atomTema = atom<Tema>(temaAplicacao || temaSistema)

export default function useTema() {
    const [tema, setTema] = useAtom(atomTema);

    useEffect(() => {
        if (!navegador) return;
        localStorage.setItem('tema', tema);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(tema);
    }, [tema]);

    return [tema, setTema] as const;
}