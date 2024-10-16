import devices from '../images/image-devices.png'; 

function SecondSection () {
    return (
        <>
            <div className='font-BaiJamjuree flex items-center justify-center flex-col mb-14'>
                <h1 className='text-3xl text-black font-semibold mb-6'>Acess Clipboard anywhere</h1>
                <p className='text-lg text-gray-400 text-center '>Whether you're on the go, or at your computer, you can access all your CLipboard <br/> snippets in a few simple clicks.</p>
            </div>
            <div className='flex items-center justify-center '>
                <img className='block max-w-full' src={devices} />
            </div>
        </>
    )
}

export default SecondSection;