export default function BookList() {
   let pageTitle = "Books I Read This Quarter";
   let book1 = "https://pictures.abebooks.com/isbn/9780593355275-us.jpg";
   let book2 = "https://pictures.abebooks.com/isbn/9780735241336-us.jpg";
   let book3 = "https://pictures.abebooks.com/isbn/9781838933555-us.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Project Hail Mary" height={200}/>
         <img src={book2} alt="The Maid" height={200}/>
         <img src={book3} alt="The Wolf Den" height={200}/>
      </div>      
   );
}