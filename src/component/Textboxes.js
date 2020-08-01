import React from "react";

const Textboxes = () => {
    return (
        <div>
            <h1 class="ui center aligned icon header" style={{ marginTop: "100px" }}>FESTIVAL DATA</h1>
           
                <div className="ui equal width form">
                <form style={{ marginLeft: "25%", marginRight: "25%", marginTop: "100px" }} method="POST" action ="http://localhost:4063/festival">
                    <div className="fields">
                        <div className="field">
                            <label>Country</label>
                            <input name="_country" type="text" placeholder="Country" />
                        </div>
                        <div className="field">
                            <label>Title</label>
                            <input name="_title" type="text" placeholder="Title"/>
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label>Description</label>
                            <input name="_description" type="text" placeholder="Description" />
                        </div>
                    </div>
                    <div className="fields">
                        <div className="field">
                            <label>Date</label>
                            <input name="_date" type="number" placeholder="Date" />
                        </div>
                        <div className="field">
                            <label>Month</label>
                            <input name="_month" type="text" placeholder="Month" />
                        </div>
                    </div>
                    <div className="fields">
                        <button className="ui submit button" type="submit">Submit</button>
                    </div></form>
                </div>
            
        </div>);
}
export default Textboxes;