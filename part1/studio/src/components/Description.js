import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.youtube.com/c/tastinghistory";
    let authorPhoto = "https://d28hgpri8am2if.cloudfront.net/author_images/11046764/max-miller-184395526.jpg";
    let authorName = "Max Miller";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = {authorName} className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Tasting History</a> 
           </div>
        </div>
     );
 }

 class RecipeDescription extends React.Component {
    render() {
    return (
        <div> 
        <div>
           <h1>Pumpion Pie</h1>
           <p>A pie which contains both pumpkin and apples in its filling.</p>
        </div>
        <RecipeAuthor />
     </div>
       );
    }
 }
 
 export default RecipeDescription;