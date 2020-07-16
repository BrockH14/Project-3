import React from "react";
import { makeStyles } from "@material-ui/core/styles";



function Profile(props) {
  return (
    <>
    <div className="container">
      <div className="Content text-center">
        <h1>Profile Page</h1>
      </div>
      <br></br>
      <br></br>
      <div class="content">
        <div class="card">
          <div class="card-content">
            <h2 class="subtitle">Your Info</h2>
            <div class="columns">
              <div class="column">
                <form>
                  <div class="field is-horizontal">
                    <div class="field-body">
                      <div class="field">
                        <div class="control" id="nameControl">
                          {" "}
                          Name: John Doe
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <div class="field is-horizontal">
                    <div class="field-body">
                      <div class="field">
                        <div class="control" id="nameControl">
                          Email: DoeJohn@hotmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    

    
    </>




  );
}

export default Profile;
