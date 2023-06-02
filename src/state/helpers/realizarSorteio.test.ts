import { realizarSorteio } from "./realizarSorteio";

describe('Dado um sorteio de amigo secreto', () => {

    test('cada participante não sorteie o próprio nome', () => {

        const participantes =
            [
                'Ana',
                'Catarina',
                'Orlando',
                'Jorel',
                'Vinicios',
                'Gregorio'
            ]

        const sorteio = realizarSorteio(participantes)

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})