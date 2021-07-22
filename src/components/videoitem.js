import React from 'react';


const Videoitem=props=>{
    const imageurl=props.video.snippet.thumbnails.default.url;


    return(
        <li onClick={()=>props.onVideoSelection(props.video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageurl} />

                </div>

                <div className="media-body" >
                    <div className="media-heading">
                        {props.video.snippet.title}
                    </div>

                </div>

            </div>
        </li>
    );
}

export default Videoitem;