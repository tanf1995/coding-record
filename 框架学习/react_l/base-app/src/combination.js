import React from 'react';


function LeftNode(props){
    return <div>i am left node.</div>
}

function RightNode(props){
    return <div>i am right node.</div>
}

class Tree extends React.Component{
    render(){
        return (
            <div>
                <h2>this.is a tree</h2>

                <div>left node: 
                    {this.props.left}
                </div>

                <div>right node: 
                    {this.props.right}
                </div>
                this props children is {this.props.children}
            </div>
        )
    }
}

function FullTree(props){
    return (
        // <Tree left={LeftNode()} right={RightNode()} />
        <Tree left={<LeftNode />} right={<RightNode />} > i am tree children </Tree>
    )
}

export default FullTree;