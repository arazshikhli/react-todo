   import './Modal.scss'
   import React from "react";

   export default class Modal extends React.Component{
    state={isOpen:false}
       render(){
        return(
            <React.Fragment>
                <button onClick={()=>this.setState({isOpen:true})}>Open modal</button>
                {
                    this.state.isOpen&&(
                        <div className='modal'>
                            <div className='modal-body'>
                                <h1>
                                    Modal Title
                                </h1>
                                <p>I am awesome modal</p>
                                <button onClick={()=>this.setState({isOpen: false})}>close modal</button>
                            </div>
                        </div>
                    )
                }

            </React.Fragment>

                )
    }
   }

