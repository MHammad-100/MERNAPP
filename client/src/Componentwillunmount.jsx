import react,{useState,Component} from "react";
export default class Componentwillunmount extends Component
{

  componentWillUnmount()
  {
    console.log("Component will unmount called");
  }
  render()
  {
    return(
      <h1>
        Component is Here
      </h1>
    );
  }
}