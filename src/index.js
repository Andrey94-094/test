/*
 * External dependencies
 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "animate.css"

/*
 * Internal dependencies
 */
import "./styles/style.scss"
import form from "./components/form"
import componentName from "./components/componentName"
import rotation from "./components/rotation"
import timer from "./components/timer"
import calculator from "./components/calculator"

document.addEventListener('DOMContentLoaded', () => {
    form()
    componentName()
    rotation()
    timer()
    calculator()
})