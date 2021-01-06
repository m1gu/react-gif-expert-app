import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid">
                {
                    images.map( image => {
                        return <GifGridItem key={image.id} {...image} />
                    })
                }
            </div>
        </>
    );
}

export default GifGrid;