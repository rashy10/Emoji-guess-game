import { useState } from "react";
import React from 'react'; 
import emoji from "./emoji";
import "../App.css"
import { buildTimeValue } from "@testing-library/user-event/dist/utils";
import Btn from "./buttn";
import "./list.css"



function List(){
    var emojii;
    let eset=["💪","🙏","🤣","🤔","😋","😉","😄","💀","🔥","👀","🎈","🎂","🎁","🙌","😴","🤮","🤧","🤯","⚽","🥭","✈️"]
    const [count,setcount] = useState(0)
    const [a,seta] = useState([]);
    const [b,setb] = useState([]);
    const [c,setc] = useState([]);
    let title=["","Choose the row in which your emoji is present.","Can you pick the row once again having your emoji?😄","Promise this the last time you need to pick 😉😉"]
    const [isGame,setGame]=useState(false)
    const [isResult,setResult]=useState(false)
    const [ind,setInd]=useState();


    function search(){
        for (let i=0;i<emoji.length;i+=1){

            if (emoji[i].emoji===emojii){
                setInd(i);
                
            }

        }

        console.log(ind);

    }
    
    function show(key){
        setGame(true)
        seta([])
        setb([])
        setc([])
        setcount(preV=>(preV+1))

        if (count==3){
            setGame(false)
            
            if (key==1){
                emojii=a[3];
                console.log(emojii);
                emoji.findIndex(search)
                setResult(true)
            } else if (key==2){
                emojii=b[3]
                emoji.findIndex(search)
                setResult(true)

            } else if (key==3){
                
                emojii=c[3]
                emoji.findIndex(search)

                setResult(true)

            }


            setcount(0)

        }else{
            for(let i=0;i<eset.length;i+=3){

                seta(preV=>[...preV,eset[i]])

                setb(preV=>[...preV,eset[i+1]])

                setc(preV=>[...preV,eset[i+2]])

                
            }

        }

    }

    function handleClick(event){
        
        let k= event.target.id;
        if (k==1){
            eset=[]
            eset=eset.concat(b,a,c);
            console.log(eset);
            show(k)

        }else if (k==2){
            eset=[]
            eset=eset.concat(c,b,a);
            show(k)
        }else if(k==3){
            eset=[]
            eset=eset.concat(a,c,b);
            show(k)
        }
            
    }

    return(<>
        <br/>

        {!isResult ? <div className="play-area">

        
        {!isGame && 
        <div className="play-false">
        <h1>Have you selected your emoji. ?</h1>
        <button className="play-button" onClick={show}>Yes! - let's Start</button> 
        </div>}


        {isGame && <div>
        <h1>{title[count]}</h1>
        <Btn id={1} emoji={a} fn={handleClick}/>
        <Btn id={2} emoji={b} fn={handleClick}/>
        <Btn id={3} emoji={c} fn={handleClick}/>
        </div>}

    </div>: <div className="play-area">
            <h1><b>The emoji is : "{emoji[ind].emoji}"</b></h1>
            <h2><b>{emoji[ind].name}</b></h2>
            <p>{emoji[ind].meaning}</p>
            <button onClick={()=>{setResult(false)}} className="play-button">Continue playing</button>

    </div>
    }
        </>
    )




}

export default React.memo(List);
