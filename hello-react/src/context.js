import React from 'react'

const ThemeContext = React.createContext('light')

class App extends React.Component {
    render() {
        // <Toolbar theme="dark"/>
        return (
            <ThemeContext.Provider value="dark">
                <Toolbar />
            </ThemeContext.Provider>
        )
    }
}

function Toolbar(props) {
    return (
        <div>
            {/* <ThemedButton theme={props.theme} /> */}
            {/* // 中间组件不需要指明往下传递theme */}
            <ThemedButton />
        </div>
    )
}

class ThemedButton extends React.Component {
    // 
    static contextType = ThemeContext
    render() {
        return <button theme={this.context}/>
    }
    // render() {
    //     return <Button theme={this.props.theme}/>
    // }
}

export default App