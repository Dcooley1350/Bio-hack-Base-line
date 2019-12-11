import React from 'react';
import Grid from '@material-ui/core/Grid'
const CreateNewTestGroup = (props) => {
    return (  
        <div>
            <form onSubmit={handleNewTestGroupSubmission}>
                <h3>Start a new testline</h3>
                <Grid container spacing='{1}'>
                    <Grid item xs={6}>
                        <h5>Define Control Variables Here:</h5>
                    </Grid>
                    <Grid item xs={6}>
                        <h5>Define  Variables Here:</h5>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
 
export default CreateNewTestGroup;
