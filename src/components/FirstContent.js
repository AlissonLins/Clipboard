import computer from '../images/image-computer.png'
function FirstContent () {
    return(
        <>
            <section className='font-BaiJamjuree flex flex-col items-center justify-center text-center p-11 max-w-screen-lg m-auto'>
                <h1 className='text-3xl text-black font-semibold p-4'>Keep track of your snippets</h1>
                <span className='text-lg text-gray-400 mb-12'>Clipboard instantly stores any item you copy in the cloud, meaning you can acess <br/>
                    your snippets immediately on all your devices. Our Mac and iOS apps will help you <br/>
                    organize everything.
                </span>
            </section>

            <div className='flex justify-between items-start gap-8 p-12 max-w-screen-lg m-auto'>
                <img className='max-w-full h-auto w-1/2 object-left' src={computer} />         
            
                <div className='flex flex-col items-center w-1/3 text-center'>
                    <h2 className='text-2xl text-black font-semibold mb-2'>Quick Search</h2>
                    <p className='text-lg text-gray-400'>Easily search your snippets by content, <br/> category, web address, application, and more.</p>
                </div>

                <div className='flex flex-col items-center w-1/3 text-center'>
                    <h2 className='text-2xl text-black font-semibold mb-2'>iCloud Sync</h2>
                    <p className='text-lg text-gray-400'>Instantly saves and syncs snippets across all <br/> your devices.</p>
                </div>
                <div className='flex flex-col items-center w-1/3 text-center'>
                    <h2 className='text-2xl text-black font-semibold mb-2'>Complete history</h2>
                    <p className='text-lg text-gray-400'>Retrieve any snippets from the first moment <br/> you started using the app.</p>
                </div> 
            </div>
           
        </>
    )
}

export default FirstContent;