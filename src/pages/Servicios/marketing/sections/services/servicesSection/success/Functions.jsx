
const CardSuccess = ({ titulo, imgSrc }) =>{
    return(
        <div className="mx-auto text-center relative">
            <img src={imgSrc} className="mx-auto w-64 h-60"/>
            <h2 className="absolute bottom-4 left-10 right-10 text-center text-white ">{titulo}</h2>
        </div>
    )
}
 export default CardSuccess;