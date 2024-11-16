export default function TabButton({children}) {
  function clickHandler() {
    console.log("Button got clicked");
  }
  
  return (
    <li>
      <button onClick={clickHandler}>{children}</button>
    </li>
  );
}