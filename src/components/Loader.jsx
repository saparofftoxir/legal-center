import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loader() {
    return (
        <div className='flex items-center justify-center pt-4'>
            <Oval
            visible={true}
            height="32"
            width="32"
            color="#4fa94d"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
        </div>
    )
}

export default Loader
