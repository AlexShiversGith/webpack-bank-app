export class Layout {


    constructor({router, children}){
        this.router = router
        this.children = children
    }
    
    render() {
        const headerHtml = '<header>Header</header>'
        
        return `
            ${headerHtml}
            <a href='/'>Home</a>
            <a href='/about-us'>About us</a>
            <a href='/auth'>Auth</a>
            <main>${this.children}</main>
        `
    }
}