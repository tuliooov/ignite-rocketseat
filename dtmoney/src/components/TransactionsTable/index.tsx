import { Container } from "./styles";

export function TransactionsTable(){

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento Web</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>18/10/2021</td>
                    </tr>
                    <tr>
                        <td> Desenvolvimento Web</td>
                        <td className="withdrown">R$ 12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>18/10/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}
