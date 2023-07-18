/* eslint-disable react/prop-types */


function Buttons({reload , delet}) {
  return (
    <>
      <div className="second_button_container">
        <button className="reload" onClick={() => reload()} >reload</button>
        <button className="delete_all" onClick={() => delet() }>delete all</button>
      </div>
    </>
  );
}

export default Buttons;
