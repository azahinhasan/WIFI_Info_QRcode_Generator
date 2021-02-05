
import React,{Component,Fragment} from 'react';
import classes from './input.css';




class Input extends Component{ //class based compornent....


    render(){
        return(
    
        <div> 
            
            <table className={classes.table}>
                <tr>
                    <td>
                    SSID:
                    </td>
                    <td>
                    <input type="text" 
                    onChange={this.props.onSSIDchange}
                    className={classes.input}
                    disabled={this.props.state.textEditable}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    PASSWORD:
                    </td>
                    <td>
                    <input type="text" 
                    onChange={this.props.onPASSWORDchange}
                    className={classes.input}
                    disabled={this.props.state.textEditable}/>
                    </td>
                </tr>
                <tr>
                    <td>
                    ENCRYPTION:
                    </td>
                    <td>
                    <select name="" id=""
                    onChange={this.props.onENCRYPTIONchange}
                    disabled={this.props.state.textEditable}>
                        <option value="WPA">WPA/WPA2</option>
                        <option value="WEP">WEP</option>
                        <option value="nopass">None</option>
                    </select>
                    </td>
                </tr>
                <tr>
                    <td>

                    </td>
                    <td>
                    <input type="checkbox" onClick={this.props.onHIDDENchange}
                    className={classes.inputCheckBox}
                    />Hidden
                    </td>
                </tr>
            </table>
            
       
            
        </div>

        );      
    }
}






//export default Radium(person);
//export default person; //for Function base
export default Input; //for class based coz name of class is Person

//export default withClass(Person,classes.Person); 