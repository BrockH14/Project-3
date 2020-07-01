import React from "react";
import Form from "../components/Form";

function Home() {
    state = {
        saved: [],
        q: "",
    }

    return (
        <div>
            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
            />
        </div>
    )
}

export default Home;