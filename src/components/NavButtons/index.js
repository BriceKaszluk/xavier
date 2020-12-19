import React from 'react';

export default ({supportsNames, supportSelected}) => {

    return( 
        <ul>
           {
           supportsNames.map(support => {
               return (
               <li key={support} className="nav-button">
                   <button key={support} 
                    onClick={supportSelected} 
                    name={support}>
                   {support}
                    </button>
                </li>
               )
           })
           }
        </ul>
    )
}

//TODO unique key prop qque part