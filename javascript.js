Array.prototype.groupBy = function(keyword) {
    console.log("Keyword: ", keyword);
    const grouppedArr = {};
    for (let i = 0; i < this.length; i++) {
        const key = this[i][keyword];
        if (grouppedArr[key]) grouppedArr[key].push(this[i]);
        else grouppedArr[key] = [this[i]];
    }
    return grouppedArr;
}
const URL = "https://jsonplaceholder.typicode.com/posts";
class Singleton {
    static instance = null;
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
    static getInstance() {
        if (Singleton.instance) return Singleton.instance;
        return new Singleton();
    }
    async #getfetchData(url) {
        try {
            const response = await fetch(url);
            if (response.statusText !== "resolve") {
                throw new Error("Bad date!");
            }
            const data = await response.json();
            return data;
        } catch(err) {
            console.error(err.message);
        }
    }
    async getData(url) {
        const data = await this.#getfetchData(url);
        console.log("Data: ", data);
        return data;
    }
    UserId(data) {
        return data.groupBy("userId");
    }
    getGropDate(data, keyword) {
        return data.groupBy(keyword);
    }
    async checkMethod(url) {
        const data = await this.#fetchData(url);
        console.log("Data:")
        console.log(data);
        const byUserId = this.UserId(data);
        console.log("By user id:")
        console.log(byUserId);
        const byKeyword = this.getGropDate(data, "userId");
        console.log("By keyword:")
        console.log(byKeyword);
    }
}
const instance = new Singleton();
instance.checkMethod(URL);