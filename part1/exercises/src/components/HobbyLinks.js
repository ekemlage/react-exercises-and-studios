export default function HobbyLinks() {
    let pageTitle = "Links for Hobbies";
    let hobbyLinks = ["https://climbsoill.com/","https://www.youtube.com/c/tastinghistory", "https://www.michaels.com/"];
     
    return (
       <div>
          <h3>{pageTitle}</h3>

          <ul>
            <li><a href = {hobbyLinks[0]}>Rock Climbing</a></li>
            <li><a href = {hobbyLinks[1]}>Cooking</a></li>
            <li><a href = {hobbyLinks[2]}>Painting</a></li>
         </ul>     
       </div>      
    );
 }