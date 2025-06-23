import styles from './Button.module.css'
function Button(){
    // let count = 0;
    // const handleClick = (name) => {
    //     let newCount = ++count;
    //     alert(`${name} Clicked Button ${newCount} times!`);
    // };
    // return(
    //     <button className={styles.button} onClick={() => handleClick("Satyam")}>Click me</button>
    // );
     // Now Double click event handler
     const handle = (e) => e.target.textContent = "Click me Carefully🤕";
     return(<button className={styles.button} onDoubleClick={handle}>Click me</button>);
}
export default Button