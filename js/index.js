import { Router } from "./router.js";
import { route } from "./bg.js";
import * as el from "./elements.js"

const router = new Router()
router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

el.homeBg.addEventListener('click', () => route('/'))
el.uniBg.addEventListener('click', () => route('/universe'))
el.expBg.addEventListener('click', () => route('/exploration'))