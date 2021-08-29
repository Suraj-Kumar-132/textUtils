import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>

{
    console.log('Upper Case button clicked'+ text );
    // setText me jo v value dalenge wo text area me change kar begin jb button click karenge to usse "handleClick" function ko fire kare denge or ussi function me hm abhi ye comment v likh rhe hai isse ye hoga ki ye fir just niche wala me setText me jo v string linkenge usko text area me change kar dega 
    let newText = text.toUpperCase();
    setText(newText);
}
    const handleLoClick = () =>

{
    console.log('Upper Case button clicked'+ text );
    // setText me jo v value dalenge wo text area me change kar begin jb button click karenge to usse "handleClick" function ko fire kare denge or ussi function me hm abhi ye comment v likh rhe hai isse ye hoga ki ye fir just niche wala me setText me jo v string linkenge usko text area me change kar dega 
    let newText = text.toLowerCase();
    setText(newText);
}
const handleClearClick = () => 
{
    let newText = 'Enter Text here';
    setText(newText);
}

const handleOnChange = (event) =>
{
    console.log('Onchange button clicked')
    setText(event.target.value);
}
const handleCopyClick = () =>
{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    console.log("handlecopyclick execute");
}
const handleExtraSpace = () =>
{
    console.log("Inside extra space" );
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}
    
    const [text , setText] = useState('');

    return (
        <>
        <div className="container "style={{color : props.mode ==='dark'?'white':'#042743'}}>
      
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"> <h2>{props.heading}</h2> </label>
                {/* //ek curly brace lagaie style me kyuki javascript use karna tha or dusra wala lagaie kyuki object bnana tha */}
                <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor : props.mode ==='dark'?'white':'grey',color : props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
  

        </div>
        <div className="container my-3" style={{color : props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} minutes reads</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ?text:"Enter the text to preview"}</p>
        </div>

        </>
    )
}
