import "../styles/repositories.scss"

interface RepositoryItemProps {
    repository:{
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepositoryItem({ repository }: RepositoryItemProps){
    const {name, description, html_url} = repository
    return(
        <li>
            <strong>{name ?? "Not Name"}</strong>
            <p>{description ?? "-"}</p>

            <a href={html_url ?? "#"}>
                Acessar repositório
            </a>
        </li>
    )
}