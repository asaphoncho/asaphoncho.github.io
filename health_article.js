var xhr = new XMLHttpRequest()
var url = './health_article.json'
xhr.open('GET', url, true)
xhr.responseType = 'json';

xhr.onload = (function(){
    var articlesDiv = document.getElementById("articles")
    var articles = xhr.response.articles
    articles.forEach(function (article){
        var articleDiv = document.createElement("div")
        articleDiv.classList.add("article")

        var title = document.createElement("h1")
        title.textContent = article.title
        
        var description = document.createElement("p")
        description.textContent = article.description

        var waysHeader = document.createElement("h3")
        waysHeader.textContent = "Ways To Achieve"
        var waysList = document.createElement("ul")
        article.ways_to_achieve.forEach(function(way){
            var waysItem = document.createElement("li")
            waysItem.textContent = way
            waysList.appendChild(waysItem)
        })

        var benefitsHeader = document.createElement("h3")
        benefitsHeader.textContent = "Benefits"
        var benefitsList = document.createElement("ul")
        benefitsList.classList.add("list")
        article.benefits.forEach(function(benefit){
            var listItem = document.createElement("li")
            listItem.textContent = benefit
            benefitsList.appendChild(listItem)
        })
      articleDiv.appendChild(title)
      articleDiv.appendChild(description)
      articleDiv.appendChild(waysHeader)
      articleDiv.appendChild(waysList)
      articleDiv.appendChild(benefitsHeader)
      articleDiv.appendChild(benefitsList)  
      articlesDiv.appendChild(articleDiv)
    })
    
})
xhr.send()
var articles=xhr.response.articles
console.log(articles)