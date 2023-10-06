import React from "react";
// import {Navbar} from "./Navbar";

export default function About(props) {
    // const navbar = Navbar();
    // const [toggleStyle(),settoggleStyle()] =useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    // const [btnText,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = ()=>
    {
      return {
        color: props.mode === 'dark'?'white':"black",
        backgroundColor : props.mode === 'dark'?"black":'white'

    }
  }
        // if(props.mode === 'dark'){
        //    settoggleStyle()({
        //     color:'white',
        //     backgroundColor:'black'
        //    }) 
          //  setBtnText("Enable Light Mode")
        // }

        // else{
        //     settoggleStyle()({
        //         color:'black',
        //         backgroundColor:'white' 
        //     })
            // setBtnText("Enable Dark Mode")
        
    
  return (
    <div className = "container " style = {toggleStyle()}>
      <h1 className="my-3"> About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style = {toggleStyle()}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <strong>Analyze the text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style = {toggleStyle()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis totam a praesentium vel, rem excepturi soluta magnam hic ut illum, qui nihil, nemo placeat cupiditate deleniti obcaecati! At nihil hic quaerat velit amet accusamus nam beatae ipsam eius ipsum ullam, minima aliquam consequatur, quidem fugiat et in aliquid expedita! Soluta?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"style = {toggleStyle()}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
             <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style = {toggleStyle()}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem! Molestias nisi, atque ad deserunt sit, eligendi saepe consectetur perspiciatis vero error et veritatis facilis fugiat asperiores iure magni nesciunt assumenda sed modi, possimus animi? Dolore ex molestias ut esse minus similique eligendi suscipit beatae eius iusto? At, deserunt nobis?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"style = {toggleStyle()}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"style = {toggleStyle()}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt corrupti eum sequi aperiam veniam explicabo neque tempora facilis quas iusto doloremque, aliquid quo accusantium, ipsa saepe quibusdam incidunt. Perferendis, omnis quidem. Reprehenderit necessitatibus maxime repellat perspiciatis libero odio deleniti quaerat repellendus. Id deleniti dolore facilis dolores architecto dolorem molestias aut.
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick = {toggleStyle()} className="btn btn-primary my-3" type="submit">{btnText}</button> */}

    </div>
  );
}
