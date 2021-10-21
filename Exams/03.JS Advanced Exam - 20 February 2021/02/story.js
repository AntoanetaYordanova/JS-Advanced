class Story{
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if(this._likes.length == 0) {
            return `${this.title} has 0 likes`
        } else if(this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like(username) {
        if(this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (this.creator === username) {
            throw new Error(`You can't like your own story!`);
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`
        }
    }

    dislike(username) {
        if(!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`);
        } else {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        const match = this._comments.find(e => e.Id === id);
        if(match === undefined) {
            const newId = this._comments.length + 1;
            this._comments.push({
                Id : newId, 
                Username : username, 
                Content : content, 
                Replies : [],
            });

            return `${username} commented on ${this.title}`
        } else {
            const newId = `${match.Id}.${match.Replies.length + 1}`;
            match.Replies.push({
                Id : newId, 
                Username : username, 
                Content : content,
             }
            );

            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        let sorted = [];
        if(sortingType === 'asc') {
            sorted = this._comments.sort((a, b) => a.Id - b.Id);
        } else if(sortingType === 'desc') {
            sorted = this._comments.sort((a, b) => b.Id - a.Id);
        } else if(sortingType === 'username') {
            sorted = this._comments.sort((a, b) => a.Username.localeCompare(b.Username));
        }
        
        let infoArr = [];
        infoArr.push(`Title: ${this.title}`);
        infoArr.push(`Creator: ${this.creator}`);
        infoArr.push(`Likes: ${this._likes.length}`);
        infoArr.push('Comments:');

        sorted.forEach(e => {
            infoArr.push(`-- ${e.Id}. ${e.Username}: ${e.Content}`);
            if(e.Replies.length != 0) {
                let sortedReplies = [];
                if(sortingType === 'asc') {
                    sortedReplies = e.Replies.sort((a, b) => Number(a.Id) - Number(b.Id));
                } else if(sortingType === 'desc') {
                    sortedReplies = e.Replies.sort((a, b) => Number(b.Id) - Number(a.Id));
                } else if(sortingType === 'username') {
                    sortedReplies = e.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                }

                sortedReplies.forEach(e => infoArr.push(`--- ${e.Id}. ${e.Username}: ${e.Content}`));
            }   
        });

       
       return infoArr.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));