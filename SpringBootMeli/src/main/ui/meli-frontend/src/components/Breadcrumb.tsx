export default function Breadcrumb(props: any) {
    return <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {props.categorias.map((categoria: any, i: number) => (
                <li key={i.toString()} className="breadcrumb-item text-secondary">{categoria}</li>
            ))
            }
        </ol>
    </nav>

}