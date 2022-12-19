
import React from "react";

function Menu() {





  return (
    <>
        <div>
            <h1>Note Taking Application</h1>
                <div className="row">
                    <div className="column left">
                        <div className="newNote-Container">
                            <div className="newNote-Content">
                            <div className="Header">
                        <h2> Add New Note</h2>
                    </div>
                    <div>
                        <div className="newNote-title">
                            <label>Title</label>
                            <input type="text"/>
                        </div>
                        <div className="newNote-text">
                            <label>Description</label>
                            <textarea></textarea>
                        </div>
                        <div className="newNote-footer">
                            
                            <br></br>
                            <button type="button">Add Note</button>
                        </div>
                        
                    </div>
                </div>
            </div>            
        </div>
        <div className="column right">
            <div className="displayNote-Container">   
                
            </div>
        </div>
     </div>
</div>
    </>
    
  );
}

export default Menu;