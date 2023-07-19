import classes from './ChoresList.module.css';
export default function ChoresList () {
   const chores = ["Dishes", "Laundry", "Vaccuming", "Mopping"];
   return <div>
   <h1 className = {classes.choresHeading}>Chores I Did This Week</h1>
         <ol>
            <li className={classes.choresText}>{chores[0]}</li>
            <li className={classes.choresText}>{chores[1]}</li>
            <li className={classes.choresText}>{chores[2]}</li>
            <li className={classes.choresText}>{chores[3]}</li>
         </ol>
   </div>





}