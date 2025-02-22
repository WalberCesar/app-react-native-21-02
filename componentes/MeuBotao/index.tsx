import React from 'react'
import { Button } from 'react-native'

type MeuBotaoProps = {
    titulo: string
    handlePress: () => void
}

export function MeuBotao({titulo, handlePress}: MeuBotaoProps) {

    return (
        <Button onPress={handlePress} title={titulo}></Button>
    )

}