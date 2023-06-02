import { useListaDeParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"

export const useSorteador = () => {

    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)

    return () => {       

        setResultado(resultado)
    }
}