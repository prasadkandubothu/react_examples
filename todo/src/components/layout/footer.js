import React from 'react';


class Footer extends React.Component{
render() {
    const footerStyle={
        bottom:0,
        position:'fixed',
        textAlign:'center',
        width:'100%',
        backgroundColor: '#343a40',
        color: 'white'

    };

        return (<div style={footerStyle}><b>This is Footer</b></div>);
    }
}


export default Footer;