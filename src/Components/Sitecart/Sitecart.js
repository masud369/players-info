import React from 'react';
import './sitecart.css';


const Sitecart = (props) => {
    const listedplayers = props.listedplayer;
    const totalOctionPrice = listedplayers.reduce((total, price) => total + price.oction_price, 0);
    return (
        <div>
            <h3 className='text-secondary'>Total players:{" " + listedplayers.length} </h3>
            <h3 className='text-secondary'>Total oction price:{" " + totalOctionPrice} </h3>
            <div className="rest-info row">
                <div className="info-container row" >
                    {
                        listedplayers.map((listedplayer) => {
                            return (<div className='flex col-md-3'>
                                {/* <img src= alt="" /> */}
                               <div className="width" >
                                <img src={listedplayer.img} alt="" />
                                {/* {console.log(key = listedplayer.id)} */}
                                <h2 className='text-primary'>{listedplayer.first_name+" "}{listedplayer.last_name}</h2>
                                <p><small>{listedplayer.oction_price}</small></p>
                               </div>
                            </div>)
                        })
                    }

                  
                </div>

            </div>

        </div>
    );
};

export default Sitecart;