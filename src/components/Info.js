import React, {Component} from 'react'
import './Info.css'
class Info extends Component {
    render() {
        return(
            <div id="Info">
                <div>
                    <h2>KittyHash</h2>
                    <h2>Listen to music - help nature</h2>
                </div>
                <div style={{width:450}}>
                    <p>
                        This is an awesome Info about KittyHash
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium mattis finibus. Sed neque metus, scelerisque non sapien ut, lacinia tempor neque. Nulla vel libero pellentesque, consectetur sapien vel, posuere leo. Donec volutpat nibh eu felis consectetur accumsan. Donec vitae massa lacus. Sed congue risus sit amet nibh ullamcorper, nec ultricies nisl eleifend. Pellentesque vel lectus viverra felis accumsan suscipit nec et augue. Phasellus nec sollicitudin nulla. Vivamus sagittis sodales ornare. Vestibulum finibus, velit eget tempor vulputate, metus tellus commodo dui, sed tincidunt sapien dui non mi.
                    </p>
                </div>
            </div>
        )
    }
}

export default Info;