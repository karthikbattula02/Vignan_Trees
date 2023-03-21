const Card = ({
    sno,
    CommonName,
    ScientificName,
    uses,
    habitat,
    url
})=>{
    return (
        <>
            <img src = {url} alt = {CommonName}/>
            <h4>{CommonName}</h4>
            <h4>{ScientificName}</h4>
        </>
    )
}

export default Card;