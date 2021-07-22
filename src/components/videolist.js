import React from 'react';
import Videoitem from './videoitem';


const Videolist=props=>{
    const videos=props.videos.map(video=>{
        return <Videoitem key={video.etag} video={video} onVideoSelection={props.onVideoSelection} />;
    });


    return(
        <ul className="col-md-4 list-group">
            {videos}
        </ul>
    );
}


export default Videolist;