class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { 'picture':200, 'photo':50, 'item':250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        const articleModelLowerCase = articleModel.toLowerCase();
        if(!this.possibleArticles.hasOwnProperty(articleModelLowerCase)) {
            throw new Error('This article model is not included in this gallery!');
        }   

        const match = this.listOfArticles.find(e => articleModelLowerCase === e.articleModel);

        if(match == undefined) {
            this.listOfArticles.push({
                articleModel : articleModelLowerCase,
                articleName,
                quantity
            });

            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        } 
        
        if(match.articleName === articleName){
            match.quantity += quantity;

            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }

    }

    inviteGuest (guestName, personality) {
        const match = this.guests.find(e => e.guestName === guestName);

        if(match != undefined) {
            throw new Error(`${guestName} has already been invited.`);
        }

        if(personality === 'Vip') {
            this.guests.push({
                guestName, 
                points : 500, 
                purchaseArticle: 0
            });
        } else if(personality === 'Middle'){
            this.guests.push({
                guestName, 
                points : 250, 
                purchaseArticle: 0
            });
        } else {
            this.guests.push({
                guestName, 
                points : 50, 
                purchaseArticle: 0
            });
        }

        return `You have successfully invited ${guestName}!`
    }

    buyArticle(articleModel, articleName, guestName){
        const articleMatch = this.listOfArticles.find(e => e.articleName === articleName);

        if(articleMatch == undefined || articleMatch.articleModel !== articleModel) {
            throw new Error('This article is not found.');
        }

        if(articleMatch.quantity == 0) {
            return `The ${articleName} is not available.`
        }

        const guestMatch = this.guests.find(e => e.guestName === guestName);

        if(guestMatch == undefined) {
            return 'This guest is not invited.';
        }

        if(guestMatch.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        } else{
            guestMatch.points -= this.possibleArticles[articleModel];
            guestMatch.purchaseArticle++;
            articleMatch.quantity--;

            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
        }
    }

    showGalleryInfo(criteria) {
        let resultArr = [];

        if(criteria === 'article') {
            resultArr.push('Articles information:');
            this.listOfArticles.forEach(e => {
                resultArr.push(`${e.articleModel} - ${e.articleName} - ${e.quantity}`);
            });
        } else if(criteria === 'guest') {
            resultArr.push('Guests information:');
            this.guests.forEach(e => {
                resultArr.push(`${e.guestName} - ${e.purchaseArticle}`);
            });
        }

        return resultArr.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));