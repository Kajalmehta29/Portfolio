interface Props {

items:string[];

}

const QuickInfo=({items}:Props)=>{

return(

<div className="quick-info">

{

items.map((item)=>(

<span

key={item}

className="quick-chip"

>

{item}

</span>

))

}

</div>

)

}

export default QuickInfo;