class Site {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }

    setSite() {
        console.log(`Site: ${this.name} URL: ${this.url}`);
    }
}

let site = new Site('Google', 'https://www.google.com/');
site.setSite();
