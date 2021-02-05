
import React,{Component,Fragment} from 'react';
import classes from './input.css';




class Input extends Component{ //class based compornent....


    state={
        passHidden:true
    }

    passHidden=() =>{
        this.setState({ passHidden: !this.state.passHidden});
    }


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
                    <input type={this.state.passHidden ? 'password' : 'text'}
                    onChange={this.props.onPASSWORDchange}
                    className={classes.input}
                    disabled={this.props.state.textEditable}/>
                    <button onClick={this.passHidden} className={classes.hideIcon}
                    ><img src="https://img.icons8.com/fluent-systems-regular/24/000000/visible.png"/>
                    </button>
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