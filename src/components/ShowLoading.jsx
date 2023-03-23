import React from 'react'
import ReactLoading from 'react-loading'

const ShowLoading = () => {
    return (
        <div className='w-full h-full'>
            <div className='flex justify-center justify-items-center'>
                <ReactLoading type={'bars'} color={'rgb(113 113 122 )'} height={'50 px'} width={'50px'} />
            </div>
        </div>
    )
}

export default ShowLoading
