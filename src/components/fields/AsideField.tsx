import React, { useState } from 'react'

 const  AsideField= ()=> {
    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      };
    
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(event)

      };
  return (
    <form onSubmit={handleSubmit} >
    <label>
      Label:
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </label>
    <button type="submit">Save</button>
  </form>
  )
}
export default AsideField