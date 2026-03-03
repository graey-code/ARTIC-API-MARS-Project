// -- Random Number generator (between 1 and 4) --
let randomPage = (Math.floor(Math.random() * 4) + 1);

// -- cat section --
fetch (`https://api.artic.edu/api/v1/artworks/search?q=cats&page=${randomPage}&limit=15&fields=id,artist_id,title,image_id`)
    .then ((response) => {
        return response.json();
    })
    .then ((lists) => {
        console.log ("Lists: ", lists);
        const iiiFurl = lists.config.iiif_url;
        
        console.log ("iiif_URL: ", iiiFurl);
        let catSampleIds = [];
        let catSampleAltImageIds = [];
        for (i=0;i<15;i++) {
            if (lists.data[i].image_id === undefined) {
                continue;

            } else {
            
            catSampleIds.push(lists.data[i].image_id);
            catSampleAltImageIds.push(lists.data[i].title);
            }
            

        }
        //return catIds;
        const catIds = catSampleIds.slice(0,10);
        const catAltImageIds = catSampleAltImageIds.slice(0,10);

        console.log ("Cat Artwork Ids: ", catIds);
        console.log ("Cat Title Ids: ", catAltImageIds);

        // Image Urls:
        // `${iiiFurl}/${catIds[i]}/full/600,/0/default.jpg`
        const catSection = document.getElementById ("catWorks");
        const catList = catSection.querySelector ("ul");

        for (i=0;i<10;i++) {
            const catArt = document.createElement ("li");
            catArt.innerHTML = `<img src=${iiiFurl}/${catIds[i]}/full/600,/0/default.jpg alt=${catAltImageIds[i]}>`
            catList.appendChild (catArt);
        }
        


        
    })
    .catch ((error) => {
        console.error("Error", error);
    });

    //console.log (artIds);

    // -- dog section --
    fetch (`https://api.artic.edu/api/v1/artworks/search?q=dogs&page=${randomPage}&limit=15&fields=id,artist_id,title,image_id`)
    .then ((response) => {
        return response.json();
    })
    .then ((lists) => {
        console.log ("Lists: ", lists);
        const iiiFurl = lists.config.iiif_url;
        
        console.log ("iiif_URL: ", iiiFurl);
        let dogSampleIds = [];
        let dogSampleAltImageIds = [];
        for (i=0;i<15;i++) {
            if (lists.data[i].image_id === undefined) {
                continue;

            } else {
            
            dogSampleIds.push(lists.data[i].image_id);
            dogSampleAltImageIds.push(lists.data[i].title);
            }
            

        }
        //return artIds;
        const dogIds = dogSampleIds.slice(0,10);
        const dogAltImageIds = dogSampleAltImageIds.slice(0,10);

        console.log ("Dog Artwork Ids: ", dogIds);
        console.log ("Dog Alt Image Ids: ", dogAltImageIds);

        // Image Urls:
        // `${iiiFurl}/${dogIds[i]}/full/600,/0/default.jpg`
        const dogSection = document.getElementById ("dogWorks");
        const dogList = dogSection.querySelector ("ul");

        for (i=0;i<10;i++) {
            const dogArt = document.createElement ("li");
            dogArt.innerHTML = `<img src=${iiiFurl}/${dogIds[i]}/full/600,/0/default.jpg alt=${dogAltImageIds[i]}>`
            dogList.appendChild (dogArt);
        }
        


        
    })
    .catch ((error) => {
        console.error("Error", error);
    });