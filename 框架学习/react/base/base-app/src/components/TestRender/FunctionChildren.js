import React from 'react';


function FunctionChildren({data, children}){
    
    console.log("function children render")
    console.log(React.Children.count(children))
    console.log(children)

    return (
        <div>
            function children
            <hr />

            {children}
        </div>
    )
}

// export default FunctionChildren;
export default React.memo(FunctionChildren);