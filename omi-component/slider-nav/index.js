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

    installed() {
        // this.shrink.onclick = () => {
        //     let state = true
        //         this.icon.className = 'el-icon-arrow-up'
        // }
        let state = true
        const that = this
        this.shrink.addEventListener('click',()=> {
            if(state) {
                that.icon.className = 'el-icon-arrow-up'
                state = false
            }
            else {
                that.icon.className = 'el-icon-arrow-down'
                state = true
            }
        })
    }

    getRenderedNav(props) {
        let sliderNav = []
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
                    <p ref = { e => {this.shrink = e}}>
                        {nav.label}
                        <i class="el-icon-arrow-down"
                           ref = { e => {this.icon = e}}>
                        </i>
                    </p>
                )
                for (let list of nav.children) {
                    sliderNav.push(
                        <li class={list.selected ? 'selected' : 'list'}>
                            <a href={'#' + list.path}><li>{list.label}</li></a>
                        </li>
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