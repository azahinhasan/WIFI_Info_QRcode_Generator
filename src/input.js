
import React,{Component,Fragment} from 'react';





class Input extends Component{ //class based compornent....


    render(){
        return(
    
        <div> 
               
            <input type="text" onChange={this.props.onSSIDchange}/>
            <br></br>
            <input type="text" onChange={this.props.onPASSWORDchange}/>
            <br></br>
            <select name="" id="" onChange={this.props.onENCRYPTIONchange}>
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="nopass">None</option>
            </select>
            
            <br></br>
            <input type="checkbox" onClick={this.props.onHIDDENchange}/>Hidden
       
            
        </div>

        );      
    }
}






//export default Radium(person);
//export default person; //for Function base
export default Input; //for class based coz name of class is Person

//export default withClass(Person,classes.Person); 