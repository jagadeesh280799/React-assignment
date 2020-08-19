var apidata
fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
.then(response => response.json())
.then(json => apidata = json)
.then( () =>{
    const container = document.getElementById('blog-container');   
    apidata.forEach((blog, blogId) => {
        let random_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
        // Construct card content
        const content = `
          <div id="blog-${blogId}" class="col-xl-3 col-lg-4 col-md-6 col-12 p-2">    
              <div class="shadow border rounded-lg">
                 <img class="blog-image" src="${blog.thumbnailUrl}">
                 <div class="blog-body p-3">
                    <h5 class="font-weight-normal blog-title text-truncate">${blog.title}</h5>
                    <div class="d-flex justify-content-end">
                        <a href="#" class="btn btn-primary btn-sm">view post</a>
                    </div>
                 </div>
                 
              </div>
           </div>
        `;
        container.innerHTML += content;
      })

})


//search
function searchFunction()
{
   input = document.getElementById('search-bar').value.toUpperCase()
   var count = 0;
   for(i=0; i<apidata.length; i++) {
      if(apidata[`${i}`].title.toUpperCase().indexOf(input) > -1)
      {
         document.getElementById(`blog-${i}`).style.display= "";
         count = count + 1;
      }
      else
      {
         document.getElementById(`blog-${i}`).style.display= "none";
      }
   }
}
