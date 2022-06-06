import React, { useState } from "react";

export const TaskCardTitles = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardRTitle, setInputCardRTitle] = useState("today");
  const handleClick = () => {
    setIsClick(true);
  };
  const onChange = (e) => {
    setInputCardRTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); //Enterによるページの更新を防ぐ
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
          className="taskCardTitleInput"
          autoFocus
            type="text"
            onChange={onChange}
            onBlur={handleBlur}
            value={inputCardRTitle}
            maxLength='15'
          ></input>
        </form>
      ) : (
        <h3>{inputCardRTitle}</h3>
      )}
    </div>
  );
};
