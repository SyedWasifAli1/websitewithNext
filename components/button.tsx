
interface Iprops{
    text:string;
}

const ButtonCustom = (props:Iprops)=>{
return(
    <button className="bg-green-500 font-bold  text-white py-2 px-5 rounded-lg">
        {props.text}
    </button>
);

};


export default ButtonCustom;
