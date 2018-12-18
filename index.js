import {define, WeElement} from 'omi'

import normalizeStyle from '../../../assets/_normalize.css'
import sliderStyle from './_index.scss'

define('slider-nav', class extends WeElement {
    static get data() {

    }

    static observe = true

    data = {}

    css() {
        return normalizeStyle + sliderStyle
    }

    install() {}

    getRenderedNav(props) {
        let sliderNav = []
        console.log(props.nav)
        for (let nav of props.nav) {
            if (!!!nav.children.length) {
                sliderNav.push(
                    <ul class={nav.selected ? 'selected' : 'list'}>
                        <a href={'#' + nav.path}>
                            <li>{nav.label}</li>
                        </a>
                    </ul>)
            }
            else {
                sliderNav.push(
                    <p>{nav.label}</p>
                )
                for (let list of nav.children) {
                    sliderNav.push(
                        <ul class={list.selected ? 'selected' : 'list'}>
                            <a href={'#' + list.path}><li>{list.label}</li></a>
                        </ul>
                    )
                }
            }
        }
        return sliderNav
    }

    render(props, data) {
        let sliderNav = this.getRenderedNav(props, data)
        return (
            <div class="silder__nav">
                {sliderNav}
            </div>
        )
    }
})