import "./buttn.css"


function Btn(props){
    return <div>
        <button id={props.id} onClick={props.fn} className="row"> {props.emoji}  </button>
    </div>
}
export default Btn;
