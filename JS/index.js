
const catButton = document.getElementById ('catNav');
const dogButton = document.getElementById ('dogNav');

// -- Fetch API function 
async function getData (x) {
    // -- Random Number generator (between 1 and 4) --
    let randomPage = (Math.floor(Math.random() * 4) + 1);
    let searchUrl = `https://api.artic.edu/api/v1/artworks/search?q=${x}&page=${randomPage}&limit=15&fields=id,title,image_id`
     
    try {  
      const response = await fetch(searchUrl);
      if (!response.ok) {
        throw new Error ("Failed to pull Artwork Data. Please try again later.");
      }
      // code waiting on lists
      const lists = await response.json();
    //   console.log("Lists: ", lists);
      const iiiFurl = lists.config.iiif_url;
      // sorts the images and titles into respective arrays with a larger sampling to account for nulls in the imageIds
    //   console.log ("iiif_URL: ", iiiFurl);
      let sampleIds = [];
      let sampleAltImageIds = [];
      for (i=0;i<15;i++) {
        if (lists.data[i].image_id === undefined) {
            continue;

        } else {
            
        sampleIds.push(lists.data[i].image_id);
        sampleAltImageIds.push(lists.data[i].title);
        }
            

      }
      //return artIds, altImageIds;
      const artIds = sampleIds.slice(0,10);
      const altImageIds = sampleAltImageIds.slice(0,10);

    //   console.log ("Artwork Ids: ", artIds);
    //   console.log ("Title Ids: ", altImageIds);

      // Image Urls:
      // `${iiiFurl}/${artIds[i]}/full/600,/0/default.jpg`
      const searchSection = document.getElementById (`artWorks`);
      const searchList = searchSection.querySelector ("ul");
      // -- Removing the previous get's items
      searchList.innerHTML = '';
      
      

      for (i=0;i<10;i++) {

        const title = document.createElement ("li");
        title.innerHTML = `${altImageIds[i]}`;
        searchList.appendChild (title);
        const artWork = document.createElement ("li");
        artWork.innerHTML = `<img src=${iiiFurl}/${artIds[i]}/full/600,/0/default.jpg alt=${altImageIds[i]}>`
        searchList.appendChild (artWork);
      }           

    } catch (error) {
        console.error ("Error: ", error);
    }
}


catButton.addEventListener ('click', () => getData("cats"));

dogButton.addEventListener ('click', () => getData("dogs"));
