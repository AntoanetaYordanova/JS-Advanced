function getArticleGenerator(articles) {
    let printArr = articles;
    let index = 0;
    
    function showArticle() {
        if(index < printArr.length) {
            document.getElementById('content').appendChild(createEl(printArr[index]));
            index++
        }
      
    
        function createEl(content) {
            const article = document.createElement('article');
            article.textContent = content;
            return article;
        }
    }

    return showArticle
}
