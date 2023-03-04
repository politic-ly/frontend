import React from 'react';

const CreateInitiative = () => {
    return (
      <div className="createIntiative">
        <form>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title"/>
            <label for="location">Location:</label>
            <input type="text" id="location" name="location"/>
            <label for="short-description">Short Description:</label>
            <input type="text" id="short-description" name="short-description"/>
            <label for="long-description">Long Description:</label>
            <input type="text" id="long-description" name="long-description"/>
        </form>
      </div>
    );
  }
  
  export default CreateInitiative;
  