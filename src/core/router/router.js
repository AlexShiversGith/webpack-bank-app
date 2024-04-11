import { ROUTES } from "./routes.data";
import { NotFound } from "../../components/screens/not-found/not-found.component"
import { Layout } from "../../components/layuot/layout.component";

export class Router {
    #routes
    #currentRoute
    #layout = null

    constructor(){
        this.#routes = ROUTES,
        this.#currentRoute = null
        this.#handleRouteChange()
        this.#handleLinks()
        window.addEventListener('popstate', () => {
            this.#handleRouteChange()
        })
    }

    getCurrentPath(){
        console.log(window.location)
        return window.location.pathname
    }

    #handleLinks() {
        document.addEventListener('click', e => {
            const target = e.target.closest('a')
            console.log(target)
            if(target){
                e.preventDefault()
                this.navigate(target.href)
            }
        })
    }

    navigate(path){
        if(path !== this.getCurrentPath()){
            window.history.pushState({}, '', path)
            this.#handleRouteChange()
        }
    }

    #handleRouteChange(){
        const path = this.getCurrentPath() || '/'
        let route = this.#routes.find(route => route.path === path)
        if(!route) {
            route = {
                component: NotFound
            }
        }

        this.#currentRoute = route
        this.#render()
    }



    #render(){
        const component = new this.#currentRoute.component()
        
        if(!this.#layout){
            this.#layout = new Layout({
                router: this,
                children: component.render()
            })
            document.getElementById('app').innerHTML = this.#layout.render()
        } else {
            document.querySelector('main').innerHTML = component.render()
        }
        
    }
}