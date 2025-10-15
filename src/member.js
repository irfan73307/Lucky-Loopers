export function Member({name="Irfan",city="Nandavaram",id}){//Props with default value{

    // const {name,city}=value;//Destructuring
    return (

    <div id={id}>
        
    <h2>{name || "ALI"}</h2>
    <p>{city || "Nandavaram" }</p>
    </div>);
}