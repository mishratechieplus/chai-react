function customRender(reactElement, container) {

    //     const domElement = document.createElement
    //     (ReactElement.type)
    //     domElement.innerHTML = ReactElement.children
    //     domElement.setAttribute('href', ReactElement.props.herf)
    //     domElement.setAttribute('target', ReactElement.props.target)

    //     container.appendChild(domElement)
    // }

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(ReactElement, mainContainer)
